import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = "WordbitX — Software, Web, Mobile App & AI Development Company";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * The social sharing image is generated from code at build time, so the project
 * carries no binary image assets. Every page without its own OG image inherits
 * this card automatically.
 */
export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #061229 0%, #050d21 55%, #030814 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: "rgba(28,168,48,0.30)",
            filter: "blur(120px)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -180,
            left: -100,
            width: 460,
            height: 460,
            borderRadius: 9999,
            background: "rgba(42,111,214,0.25)",
            filter: "blur(120px)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 68,
              height: 68,
              borderRadius: 20,
              background: "#0a1c3f",
              border: "2px solid #1ca830",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: 30,
              fontWeight: 700,
            }}
          >
            W
          </div>
          <div style={{ display: "flex", fontSize: 38, fontWeight: 700, color: "#ffffff", letterSpacing: -1 }}>
            Wordbit<span style={{ color: "#1ca830" }}>X</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div
            style={{
              display: "flex",
              fontSize: 62,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.1,
              letterSpacing: -2,
              maxWidth: 900,
            }}
          >
            Building Digital Products That Move Businesses Forward
          </div>
          <div style={{ display: "flex", fontSize: 27, color: "#93a8c6", maxWidth: 880, lineHeight: 1.4 }}>
            Websites · Mobile Apps · Custom Software · AI Solutions · eCommerce · SEO
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 12 }}>
            {["Next.js", "Flutter", "Node.js", "AWS", "Shopify"].map((tech) => (
              <div
                key={tech}
                style={{
                  display: "flex",
                  padding: "10px 20px",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.14)",
                  background: "rgba(255,255,255,0.05)",
                  color: "#cbd6e6",
                  fontSize: 21,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", fontSize: 24, color: "#2ec243", fontWeight: 600 }}>{siteConfig.domain}</div>
        </div>
      </div>
    ),
    size,
  );
}
