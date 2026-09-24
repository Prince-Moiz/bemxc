import { FadeIn } from "@/components/fade-in";

const ROOMS = [
  {
    kicker: "1v1",
    title: "Desk chats",
    body: "Private, encrypted desks between two operators. Share a marked-up chart, challenge a Trust Score, or negotiate a mirrored webhook. No broadcast. No audience farming.",
    points: ["End-to-end desk sessions", "Call-level audit trail", "Optional webhook handshake"],
  },
  {
    kicker: "Rooms",
    title: "Group rooms",
    body: "Cohorts with a visible Elo floor. Rooms inherit the protocol: unpublished claims are unlabeled, settled calls are labeled, and demotions are public. Social proof is replaced by the ledger.",
    points: ["Elo-gated admission", "Shared settlement clock", "Moderation without custody"],
  },
];

export function CommunityHighlights() {
  return (
    <section
      id="community"
      aria-labelledby="community-heading"
      className="mx-auto w-full max-w-7xl px-5 py-24 sm:px-8"
    >
      <FadeIn>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-emerald">
          Social layer
        </p>
        <h2
          id="community-heading"
          className="mt-4 max-w-2xl text-3xl font-semibold tracking-[-0.03em] text-white sm:text-5xl"
        >
          Community without fake consensus.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-white/55">
          BEMXC is not a follower graph. Conversation sits on top of verified
          skill. If the score is not earned, the room does not pretend.
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        {ROOMS.map((room, i) => (
          <FadeIn key={room.title} delay={i * 0.08}>
            <article className="glass-panel h-full rounded-3xl p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald">
                {room.kicker}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.02em] text-white">
                {room.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-white/55">{room.body}</p>
              <ul className="mt-6 space-y-2">
                {room.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-2 font-mono text-[12px] text-white/70"
                  >
                    <span className="h-1 w-1 rounded-full bg-emerald" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
