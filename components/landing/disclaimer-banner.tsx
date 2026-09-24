import Link from "next/link";
import { RISK_DISCLAIMER } from "@/lib/site";

export function DisclaimerBanner() {
  return (
    <section
      aria-labelledby="risk-heading"
      className="border-t border-crimson/25 bg-crimson/[0.07]"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8">
        <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-crimson">
          Risk & execution
        </p>
        <h2
          id="risk-heading"
          className="mt-3 text-xl font-semibold tracking-[-0.02em] text-ink"
        >
          BEMXC does not guarantee profit. BEMXC does not execute as principal.
        </h2>
        <p className="mt-4 max-w-4xl text-sm leading-6 text-ink/70">
          {RISK_DISCLAIMER}
        </p>
        <Link
          href="/articles/automated-execution-disclaimer"
          className="mt-5 inline-flex text-sm text-ink underline-offset-4 hover:underline"
        >
          Read the automated execution disclaimer
        </Link>
      </div>
    </section>
  );
}
