"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { LIVE_SIGNALS } from "@/lib/signals";
import { SITE_TAGLINE } from "@/lib/site";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(16,185,129,0.16),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28 lg:pt-24">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-emerald">
            Forex · Skill Verification · Non-Custodial
          </p>
          <h1
            id="hero-heading"
            className="mt-5 max-w-xl text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-[4.25rem]"
          >
            {SITE_TAGLINE}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-white/60 sm:text-lg">
            BEMXC is the definitive verified forex signal protocol. Every FX
            call is time-stamped, settlement-checked, and scored. Fabricated
            win rates cannot survive the ledger. Capital never sits with BEMXC.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/download"
              className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-obsidian transition-opacity hover:opacity-90"
            >
              [ Launch Terminal ]
            </Link>
            <Link
              href="/#signals"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/12 bg-white/4 px-6 text-sm font-medium text-white backdrop-blur-md transition-colors hover:border-white/25"
            >
              View live tape
            </Link>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/8 pt-8">
            {[
              ["12,480", "Settled calls"],
              ["1842", "Top Trust Score"],
              ["0", "Funds held"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
                  {label}
                </dt>
                <dd className="mt-1 font-mono text-xl tabular-nums text-white">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <TerminalPreview />
        </motion.div>
      </div>
    </section>
  );
}

function TerminalPreview() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const signal = LIVE_SIGNALS[index % LIVE_SIGNALS.length];

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setIndex((value) => (value + 1) % LIVE_SIGNALS.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, [reduce]);

  const positive = signal.side === "BUY";

  return (
    <aside
      aria-label="Live ticker preview"
      className="glass-panel relative overflow-hidden rounded-3xl p-5 sm:p-6"
    >
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
          </span>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">
            Live tape
          </p>
        </div>
        <p className="font-mono text-[11px] text-white/35">BEMXC · 1.2.0</p>
      </div>

      <div className="grid grid-cols-3 gap-2 border-b border-white/8 pb-4 font-mono text-[10px] uppercase tracking-[0.16em] text-white/35">
        <span>Pair</span>
        <span>Side</span>
        <span className="text-right">Trust</span>
      </div>

      <div className="relative h-[268px] overflow-hidden">
        <AnimatePresence mode="popLayout" initial={false}>
          {LIVE_SIGNALS.map((row, i) => {
            const offset = (i - index + LIVE_SIGNALS.length) % LIVE_SIGNALS.length;
            if (offset > 4) return null;
            const buy = row.side === "BUY";
            return (
              <motion.div
                key={row.pair + row.provider}
                layout
                initial={reduce ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -18 }}
                transition={{ duration: 0.35 }}
                className="flex items-center justify-between border-b border-white/6 py-3"
              >
                <div>
                  <p className="font-mono text-sm text-white">{row.pair}</p>
                  <p className="mt-0.5 text-[11px] text-white/40">
                    {row.provider}
                  </p>
                </div>
                <span
                  className={`rounded-md px-2 py-0.5 font-mono text-[11px] font-medium ${
                    buy
                      ? "bg-emerald/12 text-emerald"
                      : "bg-crimson/12 text-crimson"
                  }`}
                >
                  {row.side}
                </span>
                <span className="w-16 text-right font-mono text-sm tabular-nums text-white/80">
                  {row.trustScore}
                </span>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="mt-5 flex items-center justify-between rounded-2xl border border-white/8 bg-white/3 px-4 py-3">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
            Focus
          </p>
          <p className="mt-1 font-mono text-sm text-white">
            {signal.pair} · {signal.entry}
          </p>
        </div>
        <p
          className={`font-mono text-sm tabular-nums ${
            positive ? "text-emerald" : "text-crimson"
          }`}
        >
          {positive ? "BUY" : "SELL"} {signal.rr}
        </p>
      </div>
    </aside>
  );
}
