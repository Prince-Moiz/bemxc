import Link from "next/link";
import {
  FOOTER_MAP,
  RISK_DISCLAIMER,
  SITE_NAME,
  SOCIAL_LINKS,
} from "@/lib/site";
import { LogoMark } from "@/components/logo-mark";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-[#07090C]">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-5">
        <div className="md:col-span-2">
          <Link href="/" className="inline-flex items-center text-white" aria-label={`${SITE_NAME} home`}>
            <LogoMark className="h-8 w-8" />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/50">
            The Zero-Fake Signal Protocol. Skill is scored. Fake win rates are
            demoted. Capital never sits in BEMXC.
          </p>
          <ul className="mt-6 flex flex-wrap gap-4">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/45 transition-colors hover:text-white"
                  rel="noreferrer"
                  target="_blank"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {Object.entries(FOOTER_MAP).map(([group, links]) => (
          <nav key={group} aria-label={group}>
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/40">
              {group}
            </p>
            <ul className="mt-4 space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-white/8">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-8 sm:px-8 lg:flex-row lg:items-start lg:justify-between">
          <p className="max-w-3xl text-[11px] leading-5 text-white/35">
            {RISK_DISCLAIMER}
          </p>
          <p className="shrink-0 font-mono text-[11px] text-white/30">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
