import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { LIVE_SIGNALS } from "@/lib/signals";

export function SignalsTable() {
  return (
    <section
      id="signals"
      aria-labelledby="signals-heading"
      className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8"
    >
      <FadeIn>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-emerald">
              Verified tape
            </p>
            <h2
              id="signals-heading"
              className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl"
            >
              Live signals
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/55">
              FX tape. Win rate is settlement-backed. Unverified desks remain
              visible and marked. This teaser is delayed; the Terminal streams
              the full desk tape.
            </p>
          </div>
          <Link
            href="/articles/win-rate-credibility-algorithm"
            className="text-sm text-white/70 underline-offset-4 hover:text-white hover:underline"
          >
            How Trust Score is computed
          </Link>
        </div>
      </FadeIn>

      <FadeIn delay={0.1} className="mt-10">
        <div className="glass-panel overflow-hidden rounded-3xl">
          <div className="overflow-x-auto">
            <table className="min-w-[720px] w-full border-collapse text-left">
              <caption className="sr-only">
                Interactive live signals teaser table
              </caption>
              <thead>
                <tr className="border-b border-white/8 text-[11px] uppercase tracking-[0.16em] text-white/40">
                  <th scope="col" className="px-5 py-4 font-medium">
                    Pair
                  </th>
                  <th scope="col" className="px-5 py-4 font-medium">
                    Provider
                  </th>
                  <th scope="col" className="px-5 py-4 font-medium">
                    Win Rate
                  </th>
                  <th scope="col" className="px-5 py-4 font-medium">
                    Signal
                  </th>
                  <th scope="col" className="px-5 py-4 font-medium text-right">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {LIVE_SIGNALS.map((row) => {
                  const buy = row.side === "BUY";
                  return (
                    <tr
                      key={`${row.pair}-${row.provider}`}
                      className="border-b border-white/6 last:border-0 transition-colors hover:bg-white/[0.03]"
                    >
                      <td className="px-5 py-4">
                        <p className="font-mono text-sm text-white">
                          {row.pair}
                        </p>
                        <p className="mt-0.5 font-mono text-[11px] text-white/35">
                          {row.broker}
                        </p>
                      </td>
                      <td className="px-5 py-4">
                        <p className="flex items-center gap-2 text-sm text-white">
                          {row.provider}
                          {row.verified ? (
                            <span className="rounded-full bg-emerald/12 px-2 py-0.5 font-mono text-[10px] text-emerald">
                              VERIFIED
                            </span>
                          ) : (
                            <span className="rounded-full bg-white/8 px-2 py-0.5 font-mono text-[10px] text-white/45">
                              OPEN
                            </span>
                          )}
                        </p>
                        <p className="mt-0.5 font-mono text-[11px] text-white/35">
                          Elo {row.trustScore}
                        </p>
                      </td>
                      <td className="px-5 py-4">
                        <p
                          className={`font-mono text-sm tabular-nums ${
                            row.winRate >= 55 ? "text-emerald" : "text-white/80"
                          }`}
                        >
                          {row.winRate.toFixed(1)}%
                        </p>
                        <div className="mt-1 h-1 w-24 overflow-hidden rounded-full bg-white/8">
                          <div
                            className={`h-full ${
                              row.winRate >= 55 ? "bg-emerald" : "bg-white/30"
                            }`}
                            style={{ width: `${Math.min(row.winRate, 100)}%` }}
                          />
                        </div>
                      </td>
                      <td className="px-5 py-4">
                        <p
                          className={`font-mono text-sm font-medium ${
                            buy ? "text-emerald" : "text-crimson"
                          }`}
                        >
                          {row.side}
                        </p>
                        <p className="mt-0.5 font-mono text-[11px] text-white/40">
                          {row.rr} · SL {row.stop}
                        </p>
                      </td>
                      <td className="px-5 py-4 text-right">
                        <Link
                          href="/download"
                          className={`inline-flex rounded-full px-3 py-1.5 font-mono text-[11px] font-medium ${
                            buy
                              ? "bg-emerald/15 text-emerald"
                              : "bg-crimson/15 text-crimson"
                          }`}
                        >
                          {buy ? "BUY" : "SELL"}
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
