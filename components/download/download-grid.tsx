"use client";

import { useState } from "react";
import { DOWNLOADS, type DownloadRelease } from "@/lib/downloads";

export function DownloadGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {DOWNLOADS.map((release) => (
        <DownloadCard key={release.id} release={release} />
      ))}
    </div>
  );
}

function DownloadCard({ release }: { release: DownloadRelease }) {
  const canDownload = release.available && Boolean(release.url);

  return (
    <article
      id={release.id}
      className="glass-panel flex h-full flex-col rounded-3xl p-7"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white">
            {release.name}
          </h2>
          <p className="mt-1 text-sm text-white/50">{release.subtitle}</p>
        </div>
        <p className="font-mono text-[12px] text-emerald">
          {release.available ? `v${release.version}` : "Soon"}
        </p>
      </div>

      <dl className="mt-6 grid grid-cols-2 gap-4 font-mono text-[12px]">
        <div>
          <dt className="text-white/35">Build</dt>
          <dd className="mt-1 break-all text-white/80">{release.fileName}</dd>
        </div>
        <div>
          <dt className="text-white/35">Size</dt>
          <dd className="mt-1 text-white/80">{release.size}</dd>
        </div>
      </dl>

      <p className="mt-4 text-sm text-white/45">{release.requirements}</p>

      <div className="mt-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/35">
          Release notes
        </p>
        <ul className="mt-3 space-y-2">
          {release.notes.map((note) => (
            <li key={note} className="text-sm leading-6 text-white/65">
              {note}
            </li>
          ))}
        </ul>
      </div>

      {release.available && release.sha256 !== "—" ? (
        <ChecksumBlock sha256={release.sha256} />
      ) : null}

      {canDownload ? (
        <a
          href={release.url}
          className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full bg-emerald text-sm font-medium text-obsidian transition hover:bg-white"
          download={release.fileName}
        >
          Download APK
        </a>
      ) : (
        <p
          className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full border border-white/12 bg-white/8 text-sm font-medium text-white/70"
          aria-label={`${release.name} download available soon`}
        >
          Available soon
        </p>
      )}
    </article>
  );
}

function ChecksumBlock({ sha256 }: { sha256: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(sha256);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="mt-6 rounded-2xl border border-white/8 bg-black/30 p-4">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/40">
          SHA-256
        </p>
        <button
          type="button"
          onClick={copy}
          className="font-mono text-[11px] text-emerald hover:text-white"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <p className="mt-2 break-all font-mono text-[11px] leading-5 text-white/70">
        {sha256}
      </p>
    </div>
  );
}
