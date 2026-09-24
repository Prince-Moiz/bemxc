import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

type SitemapEntry = {
  path: string;
  priority: number;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;
};

const routes: SitemapEntry[] = [
  { path: "/", priority: 1, changeFrequency: "daily" },
  { path: "/download", priority: 0.8, changeFrequency: "weekly" },
  {
    path: "/articles/what-is-bemxc",
    priority: 0.9,
    changeFrequency: "weekly",
  },
  {
    path: "/articles/win-rate-credibility-algorithm",
    priority: 0.9,
    changeFrequency: "weekly",
  },
  {
    path: "/articles/automated-execution-disclaimer",
    priority: 0.9,
    changeFrequency: "weekly",
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const origin = SITE_URL.replace(/\/$/, "");

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: path === "/" ? origin : `${origin}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
