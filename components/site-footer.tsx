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
    <footer className="border-t border-ink/10 bg-footer">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-5">
        <div className="md:col-span-2">
          <Link href="/" className="inline-flex items-center text-ink" aria-label={`${SITE_NAME} home`}>
            <LogoMark className="h-8 w-8" />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-ink/55">
            The Zero-Fake Signal Protocol. Skill is scored. Fake win rates are
            demoted. Capital never sits in BEMXC.
          </p>
          <ul className="mt-6 flex flex-wrap gap-4">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink/50 transition-colors hover:text-ink"
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
            <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink/45">
              {group}
            </p>
            <ul className="mt-4 space-y-2.5">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink/70 transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-ink/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-8 sm:px-8 lg:flex-row lg:items-start lg:justify-between">
          <p className="max-w-3xl text-[11px] leading-5 text-ink/45">
            {RISK_DISCLAIMER}
          </p>
          <p className="shrink-0 font-mono text-[11px] text-ink/40">
            © {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
