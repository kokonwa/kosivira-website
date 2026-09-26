import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.kosivira.xyz"
  return ["", "/privacy", "/terms"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path ? "yearly" as const : "monthly" as const,
    priority: path ? 0.8 : 1,
  }))
}
