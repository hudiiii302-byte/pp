import * as si from "simple-icons";
import fs from "node:fs";

// Every si* key referenced anywhere in src/ — the two consumers are
// mega-service-icon.tsx (brandBySlug) and technologies.ts (icon fields).
const sources = [
  "src/components/mega-service-icon.tsx",
  "src/lib/technologies.ts",
];
const keys = sources.flatMap((file) =>
  [...fs.readFileSync(file, "utf8").matchAll(/"(si[A-Z][A-Za-z0-9]*)"/g)].map((m) => m[1]),
);
const unique = [...new Set(keys)].sort();

const missing = unique.filter((k) => !si[k]);
if (missing.length) throw new Error("not in simple-icons: " + missing.join(", "));

const lines = unique.map((k) => {
  const { title, hex, path } = si[k];
  return `  ${k}: { title: ${JSON.stringify(title)}, hex: ${JSON.stringify(hex)}, path: ${JSON.stringify(path)} },`;
});

const out = `/**
 * Brand glyphs used by <MegaServiceIcon />, inlined from simple-icons.
 *
 * WHY THIS FILE EXISTS
 * --------------------
 * \`import * as simpleIcons from "simple-icons"\` pulled the entire 3,460-icon
 * package into the client bundle — 5,271 KB raw / 2,150 KB gzipped — on every
 * single page, because the header links to it. We use ${unique.length} icons.
 * Next's \`optimizePackageImports\` cannot help: it only rewrites *named*
 * imports, and a namespace import defeats it.
 *
 * So the ${unique.length} we actually use are inlined here. simple-icons stays a
 * devDependency-style source of truth: regenerate with
 *
 *     node gen-brand-icons.mjs
 *
 * after adding a brand to \`brandBySlug\` in mega-service-icon.tsx or an \`icon\`
 * to technologies.ts. The script reads both files, so this one cannot drift.
 *
 * simple-icons is CC0-1.0. Brand marks remain the property of their owners and
 * are shown in their official colours.
 */
export type SimpleIconData = { title: string; hex: string; path: string };

export const brandIconData: Record<string, SimpleIconData> = {
${lines.join("\n")}
};
`;

fs.writeFileSync("src/lib/brand-icon-data.ts", out);
console.log("wrote", unique.length, "icons:", unique.join(" "));
