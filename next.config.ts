import type { NextConfig } from "next";

const CACHE_CONTROL = "public, max-age=3600, s-maxage=86400";

const cacheHeaders = [
  { key: "Cache-Control", value: CACHE_CONTROL },
] as const;

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/articles/what-is-bemxc",
        statusCode: 301,
      },
      {
        source: "/docs",
        destination: "/articles/what-is-bemxc",
        statusCode: 301,
      },
      {
        source: "/docs/:path*",
        destination: "/articles/what-is-bemxc",
        statusCode: 301,
      },
      {
        source: "/blog",
        destination: "/articles",
        statusCode: 301,
      },
      {
        source: "/blog/:path*",
        destination: "/articles",
        statusCode: 301,
      },
      {
        source: "/protocol",
        destination: "/articles/what-is-bemxc",
        statusCode: 301,
      },
      {
        source: "/whitepaper",
        destination: "/articles/what-is-bemxc",
        statusCode: 301,
      },
      {
        source: "/faq",
        destination: "/articles/what-is-bemxc",
        statusCode: 301,
      },
      {
        source: "/help",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/home",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/index.html",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/downloads",
        destination: "/download",
        statusCode: 301,
      },
      {
        source: "/app",
        destination: "/download",
        statusCode: 301,
      },
      {
        source: "/terminal",
        destination: "/download",
        statusCode: 301,
      },
      {
        source: "/algorithm",
        destination: "/articles/win-rate-credibility-algorithm",
        statusCode: 301,
      },
      {
        source: "/win-rate",
        destination: "/articles/win-rate-credibility-algorithm",
        statusCode: 301,
      },
      {
        source: "/disclaimer",
        destination: "/articles/automated-execution-disclaimer",
        statusCode: 301,
      },
      {
        source: "/legal",
        destination: "/articles/automated-execution-disclaimer",
        statusCode: 301,
      },
      {
        source: "/terms",
        destination: "/articles/automated-execution-disclaimer",
        statusCode: 301,
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/sitemap.xml",
        headers: [...cacheHeaders],
      },
      {
        source: "/robots.txt",
        headers: [...cacheHeaders],
      },
      {
        source: "/opengraph-image",
        headers: [...cacheHeaders],
      },
      {
        source: "/icon.svg",
        headers: [...cacheHeaders],
      },
      {
        source: "/favicon.svg",
        headers: [...cacheHeaders],
      },
      {
        source: "/logo.svg",
        headers: [...cacheHeaders],
      },
      {
        source: "/:file(.*)\\.(svg|png|jpg|jpeg|gif|webp|ico|txt|xml)",
        headers: [...cacheHeaders],
      },
    ];
  },
};

export default nextConfig;
