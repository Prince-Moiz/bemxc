import { TICKER_ITEMS } from "@/lib/site";

export function LiveTicker() {
  const loop = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <section
      aria-label="Live forex ticker"
      className="border-y border-ink/10 bg-ink/[0.03]"
    >
      <div className="ticker-mask overflow-hidden py-3">
        <div className="ticker-track flex w-max gap-10">
          {loop.map((item, index) => {
            const buy = item.side === "BUY";
            return (
              <div
                key={`${item.pair}-${index}`}
                className="flex items-center gap-3 font-mono text-[12px]"
              >
                <span className="text-ink">{item.pair}</span>
                <span className={buy ? "text-emerald" : "text-crimson"}>
                  {item.side}
                </span>
                <span className={buy ? "text-emerald" : "text-crimson"}>
                  {item.change}
                </span>
                <span className="text-ink/45">{item.provider}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
