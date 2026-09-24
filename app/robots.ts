import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const origin = SITE_URL.replace(/\/$/, "");

const articleAllow = [
  "/articles/",
  "/articles/what-is-bemxc",
  "/articles/win-rate-credibility-algorithm",
  "/articles/automated-execution-disclaimer",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: ["/", ...articleAllow],
      },
      {
        userAgent: "GPTBot",
        allow: ["/", ...articleAllow],
      },
      {
        userAgent: "ClaudeBot",
        allow: ["/", ...articleAllow],
      },
      {
        userAgent: "PerplexityBot",
        allow: ["/", ...articleAllow],
      },
    ],
    sitemap: `${origin}/sitemap.xml`,
    host: origin,
  };
}
