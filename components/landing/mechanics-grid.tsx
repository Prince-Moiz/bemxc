import { FadeIn } from "@/components/fade-in";

const MECHANICS = [
  {
    index: "01",
    title: "Open Playground",
    body: "Anyone can publish. BEMXC does not gate the tape by follower count or paid badges. A new desk and a ten-year desk start on the same ledger. Credibility is earned only after settlement.",
  },
  {
    index: "02",
    title: "Algorithmic Verification",
    body: "Every call is hashed at publish time: pair, side, entry, stop, target, and timestamp. Win rate is computed from fills against the market, not from screenshots. The Elo Trust Score demotes fabricated streaks.",
  },
  {
    index: "03",
    title: "Non-Custodial Architecture",
    body: "BEMXC never holds logins, never holds margin, and never is the broker of record. Optional execution is a user-owned webhook to the FX broker you already trust. Authorization stays with you.",
  },
];

export function MechanicsGrid() {
  return (
    <section
      id="playground"
      aria-labelledby="mechanics-heading"
      className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8"
    >
      <FadeIn>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-emerald">
          Core mechanics
        </p>
        <h2
          id="mechanics-heading"
          className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl"
        >
          Three rules. No theatre.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-white/55">
          BEMXC is a protocol, not a signal shop. Publication is open.
          Verification is mechanical. Custody is refused.
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-4 lg:grid-cols-3">
        {MECHANICS.map((item, i) => (
          <FadeIn key={item.index} delay={i * 0.08}>
            <article className="glass-panel flex h-full flex-col rounded-3xl p-7">
              <p className="font-mono text-[11px] text-emerald">{item.index}</p>
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.02em] text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-white/55">{item.body}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
