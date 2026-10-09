import { getSitemapGroups, sitemapXml, xmlResponse } from "@/lib/sitemap-data";

export const dynamic = "force-static";

export function GET() {
  return xmlResponse(sitemapXml(getSitemapGroups().geo));
}
