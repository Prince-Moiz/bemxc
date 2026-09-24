export const SITE_NAME = "BEMXC";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bemxc.com";
export const SITE_TAGLINE = "The Zero-Fake Signal Protocol";
export const SITE_DESCRIPTION =
  "BEMXC is the Zero-Fake Signal Protocol and skill verification platform for forex signals. Every published FX call is algorithmically scored, time-stamped, and settlement-checked. BEMXC is non-custodial, does not execute trades on behalf of users, and does not guarantee profit.";

export const NAV_LINKS = [
  { href: "/#signals", label: "Signals" },
  { href: "/#playground", label: "Playground" },
  { href: "/#community", label: "Community" },
  { href: "/download", label: "Download" },
  { href: "/articles", label: "Articles" },
] as const;

export const SOCIAL_LINKS = [
  { href: "https://x.com/bemxc", label: "X" },
  { href: "https://discord.gg/bemxc", label: "Discord" },
  { href: "https://t.me/bemxc", label: "Telegram" },
  { href: "https://github.com/bemxc", label: "GitHub" },
] as const;

export const FOOTER_MAP = {
  Protocol: [
    { href: "/articles/what-is-bemxc", label: "What is BEMXC" },
    {
      href: "/articles/win-rate-credibility-algorithm",
      label: "Win Rate Algorithm",
    },
    {
      href: "/articles/automated-execution-disclaimer",
      label: "Execution Disclaimer",
    },
  ],
  Platform: [
    { href: "/#signals", label: "Live Signals" },
    { href: "/#playground", label: "Open Playground" },
    { href: "/#community", label: "Desk Chats & Rooms" },
    { href: "/download", label: "Download Terminal" },
  ],
  Legal: [
    {
      href: "/articles/automated-execution-disclaimer",
      label: "Risk Disclaimer",
    },
    {
      href: "/articles/automated-execution-disclaimer#non-custodial",
      label: "Non-Custodial Architecture",
    },
    {
      href: "/articles/automated-execution-disclaimer#profit",
      label: "No Profit Guarantee",
    },
  ],
} as const;

export const RISK_DISCLAIMER =
  "Trading forex and FX CFDs involves a high risk of losing money rapidly. BEMXC is a forex signal verification protocol, not a broker, not an investment adviser, and not a money manager. BEMXC never holds client funds, never places orders as principal, and never guarantees profit, win rate, or capital preservation. Automated execution is an optional, user-configured, non-custodial webhook to the FX broker of record. You alone authorize, size, and accept every fill.";

export const TICKER_ITEMS = [
  { pair: "EUR/USD", side: "BUY" as const, change: "+0.18%", provider: "Apex" },
  { pair: "GBP/USD", side: "SELL" as const, change: "-0.12%", provider: "Nadir" },
  { pair: "USD/JPY", side: "BUY" as const, change: "+0.24%", provider: "Helix" },
  { pair: "XAU/USD", side: "BUY" as const, change: "+0.41%", provider: "Ledger" },
  { pair: "AUD/USD", side: "SELL" as const, change: "-0.09%", provider: "Polar" },
  { pair: "EUR/GBP", side: "SELL" as const, change: "-0.06%", provider: "Vector" },
  { pair: "GBP/JPY", side: "BUY" as const, change: "+0.33%", provider: "Orbit" },
  { pair: "USD/CAD", side: "BUY" as const, change: "+0.11%", provider: "Delta" },
];
