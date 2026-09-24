import type { Metadata } from "next";
import { DownloadGrid } from "@/components/download/download-grid";
import { SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Download the BEMXC Terminal",
  description:
    "Download the BEMXC Terminal for macOS, Windows, Linux, iOS, and Android. Each build publishes a version number, release notes, and a SHA-256 checksum. BEMXC is the Zero-Fake Signal Protocol for forex.",
  alternates: { canonical: "/download" },
};

export default function DownloadPage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_-10%,rgba(16,185,129,0.12),transparent_60%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-16 sm:px-8">
        <header className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-emerald">
            {SITE_NAME} Terminal
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-6xl">
            Download the protocol client.
          </h1>
          <p className="mt-5 text-lg leading-8 text-white/55">
            One Terminal across desktop and mobile. Same ledger, same Trust
            Score, same non-custodial webhook model. Verify the SHA-256 hash
            before you run a binary. BEMXC never ships with preloaded broker
            credentials.
          </p>
        </header>

        <section aria-label="Platform downloads" className="mt-14">
          <DownloadGrid />
        </section>

        <aside className="mt-12 rounded-3xl border border-white/8 bg-white/[0.03] p-6 text-sm leading-6 text-white/50">
          Verify checksums with{" "}
          <code className="font-mono text-white/80">shasum -a 256</code> on
          macOS/Linux or{" "}
          <code className="font-mono text-white/80">Get-FileHash -Algorithm SHA256</code>{" "}
          on Windows. If the digest does not match this page, do not launch the
          file.
        </aside>
      </div>
    </main>
  );
}
