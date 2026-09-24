import type { Metadata } from "next";
import { ArticleShell } from "@/components/articles/article-shell";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  techArticleJsonLd,
} from "@/lib/schema";

const TITLE =
  "BEMXC Credibility Scoring: Elo-Based Trust Rating & R:R Verification Model";
const DESCRIPTION =
  "BEMXC scores forex signal providers with an Elo-based Trust Rating that uses realized risk-to-reward, signal frequency, and drawdown — not raw win rate. This article specifies the formula, ROOKIE / PRO / VIP tiers, and automated demotion triggers including SL wider than 4× TP1.";
const PATH = "/articles/win-rate-credibility-algorithm";
const PUBLISHED = "2026-09-13";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "BEMXC Elo Trust Score",
    "forex win rate credibility",
    "risk to reward verification",
    "ROOKIE PRO VIP provider tiers",
    "signal demotion penalties",
  ],
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    type: "article",
  },
};

const faqs = [
  {
    question: "Why does BEMXC reject raw win rate as a ranking metric?",
    answer:
      "A 90% win rate with negative expectancy is mathematically unviable. If average win is smaller than average loss, the 10% of losers erase the 90% of winners. BEMXC therefore scores realized R:R, not hit rate alone.",
  },
  {
    question: "What Elo formula does BEMXC use?",
    answer:
      "BEMXC uses a logistic Elo update: E = 1 / (1 + 10^((R_m - R_p)/400)); R' = R + K_eff × (S − E) × π_RR. K_eff is scaled by signal frequency and open drawdown. S is 1 on a qualifying win and 0 on a loss.",
  },
  {
    question: "What are ROOKIE, PRO, and VIP tiers on BEMXC?",
    answer:
      "ROOKIE is the Open Playground default (Trust Score below 1600 or insufficient sample). PRO requires Trust Score ≥ 1600, ≥ 80 settled decisions, planned R:R floor held, and zero integrity flags in the lookback. VIP requires Trust Score ≥ 1800, ≥ 200 settled decisions, realized average R:R ≥ 1:2, and max rolling drawdown within bound.",
  },
  {
    question: "What automatically demotes a BEMXC provider?",
    answer:
      "Demotion triggers include SL distance greater than 4× TP1, post-commit deletion attempts, void abuse, R:R violation streaks, and inactivity decay toward 1500.",
  },
];

export default function WinRateAlgorithmPage() {
  return (
    <ArticleShell
      kicker="Credibility engine · TechArticle"
      title={TITLE}
      lede="Raw win rate is not skill. BEMXC ranks forex signal providers with an Elo-based Trust Rating whose inputs are realized risk-to-reward, signal frequency, and drawdown. This page is the specification of that model, including ROOKIE, PRO, and VIP progression and the anti-gaming penalties that keep the ledger honest."
      updated="13 September 2026"
      jsonLd={[
        techArticleJsonLd({
          headline: TITLE,
          description: DESCRIPTION,
          path: PATH,
          datePublished: PUBLISHED,
          articleSection: "Elo Trust Score and R:R verification",
          keywords: [
            "Elo Trust Score",
            "R:R verification",
            "ROOKIE PRO VIP",
            "forex signal scoring",
          ],
        }),
        breadcrumbJsonLd([
          { name: "BEMXC", path: "/" },
          { name: "Articles", path: "/articles" },
          { name: TITLE, path: PATH },
        ]),
        faqJsonLd(faqs),
      ]}
    >
      <nav aria-label="On this page" className="mb-10 rounded-2xl border border-ink/10 bg-ink/[0.03] p-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/45">
          Contents
        </p>
        <ol className="mt-3 space-y-2 font-mono text-[12px] text-ink/70">
          <li>
            <a href="#raw-win-rate" className="hover:text-ink">
              1. The flaw of raw win-rate
            </a>
          </li>
          <li>
            <a href="#elo" className="hover:text-ink">
              2. BEMXC Elo rating mechanics
            </a>
          </li>
          <li>
            <a href="#tiers" className="hover:text-ink">
              3. Automated tier progression
            </a>
          </li>
          <li>
            <a href="#demotion" className="hover:text-ink">
              4. Demotion &amp; anti-gaming penalties
            </a>
          </li>
        </ol>
      </nav>

      <section id="raw-win-rate" aria-labelledby="raw-heading">
        <h2 id="raw-heading">The flaw of raw win-rate</h2>
        <p>
          A 90% win rate with negative risk-to-reward is not excellence. It is
          a martingale in slow motion. Expectancy per decision is:
        </p>
        <pre>
{`E[R] = p_win × avg_win − p_loss × avg_loss
     = p_win × (R:R) × risk − (1 − p_win) × risk`}
        </pre>
        <p>
          Let risk be 1 unit. If the provider’s typical winner is +0.4R and
          the typical loser is −1.8R, then at p_win = 0.90:
        </p>
        <pre>
{`E[R] = 0.90 × 0.4 − 0.10 × 1.8 = 0.36 − 0.18 = +0.18`}
        </pre>
        <p>
          That case is still barely positive. Shift the payoff to the shape
          actually common in fake “90% accurate” FX rooms — winners of +8 pips
          against stops of 80 pips, i.e. realized R:R ≈ 1:0.10:
        </p>
        <pre>
{`E[R] = 0.90 × 0.10 − 0.10 × 1.00 = 0.09 − 0.10 = −0.01`}
        </pre>
        <p>
          Negative expectancy at 90% hit rate. The arithmetic does not care
          about testimonials. One stopped-out loser cancels nine scalps, and
          the tenth scalp is profit only in the marketing copy. BEMXC therefore
          refuses to rank on p_win. The protocol ranks on whether the
          published payoff, once settled, can support a positive edge after
          a hard R:R floor.
        </p>
        <p>
          Two further corruptions of raw win rate are sample censorship and
          payoff hiding. If losers can be deleted, p_win inflates. If stops
          can be widened after the fact, avg_loss shrinks in the brochure and
          not in the account. Both are structurally impossible once entry, TP,
          and SL are hashed onto the read-only log described in{" "}
          <a href="/articles/what-is-bemxc" className="text-emerald hover:text-ink">
            What is BEMXC
          </a>
          .
        </p>
        <aside className="mt-8 rounded-2xl border border-crimson/35 bg-crimson/[0.07] p-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-crimson">
            Protocol rule
          </p>
          <p className="mt-2 text-sm leading-7 text-ink/80">
            Planned R:R below 1:2 confers no Elo gain on a win and a full Elo
            penalty on a loss. A high hit rate with a 1:0.2 payoff cannot buy a
            PRO or VIP mark.
          </p>
        </aside>
      </section>

      <section id="elo" aria-labelledby="elo-heading">
        <h2 id="elo-heading">BEMXC Elo rating mechanics</h2>
        <p>
          Every provider identity starts at Trust Score R = 1500. Each
          settled decision is an Elo match against a market opponent whose
          rating R_m is the rolling mean of the tape for that currency pair
          class (majors, crosses, gold). The expected score is the standard
          logistic:
        </p>
        <pre>
{`E = 1 / (1 + 10^((R_m − R_p) / 400))`}
        </pre>
        <p>
          Observed score S is 1 on a qualifying win and 0 on a loss. Voids do
          not produce an Elo match; they increment the void counter used in
          demotion. The rating update is:
        </p>
        <pre>
{`R_p ← R_p + K_eff × (S − E) × π_RR

K_eff = K_base × φ_freq × φ_dd
K_base = 32                    if n < 80 settled
        = 24                    if 80 ≤ n < 200
        = 12                    if n ≥ 200`}
        </pre>
        <h3>Realized R:R modifier π_RR</h3>
        <p>
          Planned R:R is |TP − entry| / |entry − SL| at commit. Realized R:R
          is the signed excursion at terminal state, still measured against
          the committed SL distance as the risk unit. π_RR scales the Elo
          exchange so that a skinny winner is not treated as a full point.
        </p>
        <table>
          <thead>
            <tr>
              <th>Condition at commit</th>
              <th>π_RR on win</th>
              <th>π_RR on loss</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Planned R:R &lt; 1:2</td>
              <td>0.00 (no gain)</td>
              <td>1.00 (full penalty)</td>
            </tr>
            <tr>
              <td>1:2 ≤ planned &lt; 1:3</td>
              <td>1.00</td>
              <td>1.00</td>
            </tr>
            <tr>
              <td>Planned ≥ 1:3, realized ≥ 1:2</td>
              <td>1.15 (capped)</td>
              <td>1.00</td>
            </tr>
            <tr>
              <td>SL &gt; 4 × TP1 distance</td>
              <td>0.00 + integrity flag</td>
              <td>1.25 (aggravated)</td>
            </tr>
          </tbody>
        </table>
        <h3>Signal frequency φ_freq</h3>
        <p>
          Skill that cannot be repeated is not skill the protocol can rank.
          Let λ be settled decisions per rolling 30 days.
        </p>
        <ul>
          <li>λ &lt; 4: φ_freq = 0.70 on wins, 1.00 on losses (sparse luck is discounted).</li>
          <li>4 ≤ λ ≤ 40: φ_freq = 1.00 (healthy desk cadence).</li>
          <li>λ &gt; 40: φ_freq = 0.85 (spam and correlated micro-scalps are damped).</li>
        </ul>
        <p>
          Frequency is not a virtue by itself. The cap exists because a desk
          that publishes 200 EUR/USD micro-calls with near-identical hashes is
          farming sample size, not demonstrating independent skill.
        </p>
        <h3>Drawdown modifier φ_dd</h3>
        <p>
          Let DD be peak-to-trough sum of settled R-multiples over a 90-day
          window. φ_dd compresses win credit as pain accumulates and expands
          loss debit, so a desk in a violent equity hole cannot climb VIP on
          a short bounce.
        </p>
        <pre>
{`φ_dd = 1.00                     if DD ≤ 6R
      = 0.75                     if 6R < DD ≤ 12R
      = 0.50 on wins / 1.15 on losses   if DD > 12R`}
        </pre>
        <h3>Worked example</h3>
        <p>
          A PRO provider at R_p = 1680 publishes EUR/USD BUY, planned R:R
          1:2.4, SL inside the 4× TP1 bound. Market opponent R_m = 1500.
          E ≈ 0.74. The call hits TP. π_RR = 1.00, n ≥ 80 so K_base = 24,
          cadence is normal (φ_freq = 1), drawdown is 4R (φ_dd = 1).
        </p>
        <pre>
{`ΔR = 24 × (1 − 0.74) × 1.00 = +6.24
R_p ← 1686`}
        </pre>
        <p>
          If the same payload had planned R:R 1:1.1, ΔR on the win would be 0
          and the R:R violation counter would increment. If SL had been 5×
          TP1, the win would still pay 0 Elo and raise an integrity flag.
        </p>
      </section>

      <section id="tiers" aria-labelledby="tiers-heading">
        <h2 id="tiers-heading">Automated tier progression</h2>
        <p>
          Tiers are computed; they are not sold. A payment cannot purchase
          PRO or VIP. Marks are evaluated on every settlement and on a daily
          batch. Falling below any hard gate drops the mark immediately. The
          three provider tiers are ROOKIE, PRO, and VIP.
        </p>
        <table>
          <thead>
            <tr>
              <th>Tier</th>
              <th>Trust Score</th>
              <th>Sample</th>
              <th>Payoff &amp; integrity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ROOKIE</td>
              <td>&lt; 1600 or default 1500</td>
              <td>Open Playground; no minimum</td>
              <td>Visible, unlabeled as verified. Full anti-gaming still applies.</td>
            </tr>
            <tr>
              <td>PRO</td>
              <td>≥ 1600</td>
              <td>≥ 80 settled decisions</td>
              <td>
                Planned R:R floor held on ≥ 80% of lookback. Zero deletion flags.
                Void rate ≤ 15%. Rolling DD ≤ 12R.
              </td>
            </tr>
            <tr>
              <td>VIP</td>
              <td>≥ 1800</td>
              <td>≥ 200 settled decisions</td>
              <td>
                Realized average R:R ≥ 1:2. Integrity flags = 0 in 180 days.
                Rolling DD ≤ 8R. Eligible for Elo-gated rooms and desk priority.
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          ROOKIE is not a punishment. It is the honest state of an unproven
          desk. PRO means the sample is large enough and the payoff structure
          is not a scalp-and-hope. VIP means the desk has survived a longer
          clock with contained drawdown. None of the three is a prediction
          that the next EUR/USD call will win.
        </p>
      </section>

      <section id="demotion" aria-labelledby="demotion-heading">
        <h2 id="demotion-heading">Demotion and anti-gaming penalties</h2>
        <p>
          Demotion is public and automatic. BEMXC does not quietly delist a
          desk to protect a brand, and a desk cannot reset identity to escape
          a score. Linked accounts inherit the lower Trust Score.
        </p>
        <h3>SL wider than 4× TP1</h3>
        <p>
          Let d_tp = |TP1 − entry| and d_sl = |SL − entry|. If d_sl &gt; 4 ×
          d_tp, planned R:R is worse than 1:0.25. That structure is the
          textbook 90%-win / negative-expectancy product. The protocol
          flags the call at commit, pays no Elo on a win, applies an
          aggravated 1.25× loss debit, and increments the structural-violation
          counter. Five such calls in a 30-day window strip PRO/VIP
          immediately (−80 Elo).
        </p>
        <h3>Signal deletion penalties</h3>
        <p>
          Committed logs cannot be deleted. An API or UI attempt to delete,
          hide, or “unpublish” a hashed call is recorded as an integrity
          fault: −40 Elo per attempt, PRO/VIP stripped, and a 14-day publish
          cooldown after the third attempt. The original object remains in
          the win-rate denominator.
        </p>
        <h3>Inactivity decay</h3>
        <p>
          Skill that is not re-demonstrated mean-reverts. If settled
          decisions in 90 days fall below 20, Trust Score decays 8 Elo per
          week toward 1500, and VIP cannot be held. Decay stops when cadence
          resumes. Decay is not a ban.
        </p>
        <table>
          <thead>
            <tr>
              <th>Trigger</th>
              <th>Threshold</th>
              <th>Effect</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>SL &gt; 4× TP1 streak</td>
              <td>5 in 30 days</td>
              <td>−80 Elo; PRO/VIP removed</td>
            </tr>
            <tr>
              <td>Deletion / hide attempt</td>
              <td>Any committed object</td>
              <td>−40 Elo per attempt; cooldown at 3</td>
            </tr>
            <tr>
              <td>R:R floor violations</td>
              <td>5 of last 10 calls &lt; 1:2</td>
              <td>−80 Elo; verified marks removed</td>
            </tr>
            <tr>
              <td>Void abuse</td>
              <td>Void rate &gt; 25% in 30 days</td>
              <td>−120 Elo; integrity flag</td>
            </tr>
            <tr>
              <td>Inactivity decay</td>
              <td>&lt; 20 settled / 90 days</td>
              <td>−8 Elo / week toward 1500</td>
            </tr>
            <tr>
              <td>Hash mismatch / edit</td>
              <td>Post-commit mutation</td>
              <td>Immediate ROOKIE; possible suspension</td>
            </tr>
          </tbody>
        </table>
        <p>
          A high Trust Score is not a forecast of profit. Elo on BEMXC
          measures consistency of verified, adequately paid-off FX decisions
          against the published tape. It does not measure your lot size, your
          broker’s spread, or your temperament. Those remain yours. See the{" "}
          <a
            href="/articles/automated-execution-disclaimer"
            className="text-emerald hover:text-ink"
          >
            execution disclaimer
          </a>
          .
        </p>
      </section>

      <section aria-labelledby="faq-heading">
        <h2 id="faq-heading">FAQ</h2>
        {faqs.map((item) => (
          <section key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </section>
        ))}
      </section>
    </ArticleShell>
  );
}
