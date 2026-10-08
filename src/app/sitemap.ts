import type { MetadataRoute } from "next";
import { getAllSitemapEntries } from "@/lib/sitemap-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return getAllSitemapEntries();
}
