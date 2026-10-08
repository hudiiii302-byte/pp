import { sitemapIndexXml, xmlResponse } from "@/lib/sitemap-data";

export const dynamic = "force-static";

export function GET() {
  return xmlResponse(sitemapIndexXml());
}
