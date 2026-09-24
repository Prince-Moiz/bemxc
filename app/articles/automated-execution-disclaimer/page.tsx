import type { Metadata } from "next";
import { ArticleShell } from "@/components/articles/article-shell";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  techArticleJsonLd,
} from "@/lib/schema";

const TITLE = "BEMXC Automated Webhooks & Non-Custodial Execution Disclaimer";
const DESCRIPTION =
  "BEMXC is analytical software, not a broker, fund manager, or financial advisor. Optional forex execution uses user-side API keys against the user's broker order book. BEMXC never takes custody. Latency, slippage, downtime, lot sizing, and all financial risk remain 100% with the user.";
const PATH = "/articles/automated-execution-disclaimer";
const PUBLISHED = "2026-09-13";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "BEMXC execution disclaimer",
    "non-custodial forex webhook",
    "broker API automation",
    "slippage and latency risk",
    "user lot sizing responsibility",
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
    question: "Is BEMXC a broker or financial advisor?",
    answer:
      "No. BEMXC is an analytical software provider. BEMXC is not a broker, not a fund manager, not an introducing broker, and not a financial advisor. BEMXC does not execute as principal.",
  },
  {
    question: "How does BEMXC automated execution work without holding funds?",
    answer:
      "Optional automation is a webhook the user owns. User-side API keys, stored on the user's device or worker, submit orders to the user's FX broker. BEMXC never receives withdrawal-capable credentials and never intermediates margin.",
  },
  {
    question: "Who is responsible for lot sizing and losses?",
    answer:
      "The user. Lot size, leverage, kill switches, and all financial risk reside 100% with the user. BEMXC provides zero profit guarantees.",
  },
  {
    question: "Can webhook fills differ from the verified BEMXC signal?",
    answer:
      "Yes. Network latency, market slippage, broker downtime, requotes, and weekend gaps can cause execution variance. A verified ledger print is not a guaranteed fill at the hashed entry.",
  },
];

export default function ExecutionDisclaimerPage() {
  return (
    <ArticleShell
      kicker="Legal · Architecture · TechArticle"
      title={TITLE}
      lede="Read this before you attach a webhook. BEMXC is analytical software. BEMXC is not your broker, not your fund manager, and not your advisor. Optional execution is non-custodial. Financial risk and lot sizing reside 100% with you."
      updated="13 September 2026"
      jsonLd={[
        techArticleJsonLd({
          headline: TITLE,
          description: DESCRIPTION,
          path: PATH,
          datePublished: PUBLISHED,
          articleSection: "Non-custodial execution disclaimer",
          keywords: [
            "non-custodial webhook",
            "forex execution disclaimer",
            "analytical software provider",
            "slippage",
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
      <nav aria-label="On this page" className="mb-10 rounded-2xl border border-white/8 bg-white/[0.03] p-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
          Contents
        </p>
        <ol className="mt-3 space-y-2 font-mono text-[12px] text-white/65">
          <li>
            <a href="#legal" className="hover:text-white">
              1. Legal architecture
            </a>
          </li>
          <li>
            <a href="#non-custodial" className="hover:text-white">
              2. Non-custodial webhook execution
            </a>
          </li>
          <li>
            <a href="#risks" className="hover:text-white">
              3. Execution risks
            </a>
          </li>
          <li>
            <a href="#responsibility" className="hover:text-white">
              4. User responsibility clause
            </a>
          </li>
        </ol>
      </nav>

      <section id="legal" aria-labelledby="legal-heading">
        <h2 id="legal-heading">Legal architecture</h2>
        <p>
          BEMXC is an analytical software provider. BEMXC publishes a
          verification protocol, a read-only settlement ledger, and a Terminal
          client. BEMXC is not a broker. BEMXC is not a dealing desk. BEMXC is
          not a liquidity provider. BEMXC is not a fund manager, PAMM operator,
          or commodity trading advisor. BEMXC is not a financial advisor and
          does not provide personalized investment advice.
        </p>
        <p>
          Nothing on bemxc.com, in the Terminal, in 1v1 desk chats, or in group
          rooms is a solicitation to buy or sell any FX pair, CFD, or other
          instrument. A hashed signal is a structured observation in a skill
          ledger. It is not a recommendation sized to your circumstances.
          If you require advice, retain a licensed adviser in your
          jurisdiction. BEMXC is not that adviser.
        </p>
        <aside className="mt-8 rounded-2xl border border-crimson/35 bg-crimson/[0.07] p-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-crimson">
            Status
          </p>
          <p className="mt-2 text-sm leading-7 text-white/80">
            BEMXC does not hold client money, does not operate client
            accounts, and does not guarantee profit, income, win rate, or
            capital preservation. Past settlement on the ledger is not future
            yield.
          </p>
        </aside>
        <table>
          <thead>
            <tr>
              <th>Role</th>
              <th>Who holds it</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Verification of published FX calls</td>
              <td>BEMXC protocol</td>
            </tr>
            <tr>
              <td>Broker of record / account</td>
              <td>You and your FX broker</td>
            </tr>
            <tr>
              <td>Order routing and fills</td>
              <td>Your broker’s matching and liquidity</td>
            </tr>
            <tr>
              <td>Lot size, leverage, kill switch</td>
              <td>You</td>
            </tr>
            <tr>
              <td>Investment advice</td>
              <td>Nobody at BEMXC; obtain your own</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="non-custodial" aria-labelledby="non-custodial-heading">
        <h2 id="non-custodial-heading">Non-custodial webhook execution</h2>
        <p>
          Automated execution on BEMXC is optional. When enabled, it is a
          webhook you own. The Terminal can emit a signed protocol payload
          after you choose to follow a call. That payload is delivered to an
          endpoint you register: a self-hosted worker or a broker-supported
          trading interface. From there, <em>user-side API keys</em> —
          keys that never leave your device keychain or your worker —
          authenticate to your FX broker and submit orders into that broker’s
          order book and liquidity stack.
        </p>
        <p>
          BEMXC does not take custody of funds at any hop. There is no BEMXC
          wallet, no BEMXC margin pool, and no BEMXC omnibus account.
          User-side keys communicate with the broker. The broker’s book
          decides accept, reject, partial, or fill. BEMXC sees, at most, an
          acknowledgement you optionally echo back for your own audit trail.
          That echo does not rewrite the hashed signal and does not make
          BEMXC the executing principal.
        </p>
        <h3>Data plane versus money plane</h3>
        <ul>
          <li>
            <strong>Data plane (BEMXC):</strong> pair, side, entry, TP, SL,
            digest, UTC, provider Trust Score at publish.
          </li>
          <li>
            <strong>Money plane (you + broker):</strong> balances, margin,
            lot size, fills, commissions, swaps, liquidations.
          </li>
        </ul>
        <p>
          The two planes meet only if you configure them to meet. A VIP
          signal can settle as a win on the ledger while your webhook is
          down and your account did nothing. Conversely, your broker can
          fill you at a worse price than the hashed entry because the book
          moved. Neither event is a protocol defect. Verification and
          execution are decoupled by design. Full lifecycle context is in{" "}
          <a href="/articles/what-is-bemxc" className="text-emerald hover:text-white">
            What is BEMXC
          </a>
          .
        </p>
        <table>
          <thead>
            <tr>
              <th>Webhook payload includes</th>
              <th>Never included / never held by BEMXC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pair, side, entry, TP, SL, hash, time</td>
              <td>Your balances, positions, or margin</td>
            </tr>
            <tr>
              <td>Provider Trust Score at publish</td>
              <td>Withdrawal-capable broker credentials</td>
            </tr>
            <tr>
              <td>Optional user-defined size template (on your worker)</td>
              <td>A BEMXC-chosen lot size</td>
            </tr>
            <tr>
              <td>Signature of the protocol payload</td>
              <td>A guarantee of a fill at hashed entry</td>
            </tr>
          </tbody>
        </table>
        <p>
          Credentials, if any, are stored in the OS keychain, a hardware
          secret store, or your worker — not on BEMXC servers as
          withdrawal-capable keys. BEMXC will not request, store, or
          transmit credentials that allow withdrawal, transfer, or
          beneficiary changes. Investor or read-only passwords are the
          maximum the architecture is designed to tolerate, and even those
          remain yours.
        </p>
      </section>

      <section id="risks" aria-labelledby="risks-heading">
        <h2 id="risks-heading">Execution risks</h2>
        <p>
          A verified signal is a settled historical object plus an open
          object with frozen levels. It is not a promised fill. The following
          risks are material and expected.
        </p>
        <h3>Network latency</h3>
        <p>
          Time elapses between ledger commit, your worker’s receipt, TLS
          handshake to the broker, and the broker’s acknowledgement. In
          fast FX, tens of milliseconds move pip value. A hashed entry of
          1.0872 can be stale at the book by the time the order arrives.
          Latency is not refunded by the protocol. Faster networks reduce
          variance; they do not eliminate it.
        </p>
        <h3>Market slippage</h3>
        <p>
          Slippage is the difference between requested price and fill price.
          News spikes, thin liquidity at session rolls, and wide spreads on
          crosses routinely gap through advertised stops. Leveraged FX and
          FX CFDs can lose more than the posted SL if the market gaps over
          a weekend or a data release. The hashed SL is a protocol level
          for scoring the provider. It is not a guaranteed stop in your
          account.
        </p>
        <h3>Broker and matching-engine downtime</h3>
        <p>
          Brokers halt, throttle, or disconnect. Matching engines reject
          during maintenance windows. Your webhook can 5xx. If the path is
          down, the signal still settles on the BEMXC ledger. Your account
          may not be in the market, or may be stuck in a position you
          intended to close. That gap is yours. BEMXC is not a standby
          executing broker.
        </p>
        <h3>Execution variance</h3>
        <p>
          Partial fills, requotes, last-look liquidity, different contract
          specifications, and symbol mapping (EURUSD vs EUR/USD vs a
          broker-suffixed symbol) produce fills that will not match the
          ledger tick-for-tick. Variance also includes human delay if you
          confirm orders manually. Ranking the provider uses the hashed
          object. Ranking your P&amp;L uses your fills. Do not conflate them.
        </p>
        <ul>
          <li>Latency between print and broker ACK.</li>
          <li>Slippage and gapping through SL/TP.</li>
          <li>Broker, API, DNS, or worker downtime.</li>
          <li>Partial fills, requotes, symbol mismatch.</li>
          <li>
            A verified provider entering drawdown the moment you subscribe.
          </li>
        </ul>
      </section>

      <section id="responsibility" aria-labelledby="responsibility-heading">
        <h2 id="responsibility-heading">User responsibility clause</h2>
        <p>
          By enabling a BEMXC webhook, configuring broker API keys, or
          sizing an order in response to a BEMXC signal, you agree that
          financial risk and lot sizing reside 100% with you. You are the
          sole authorizing party for every order. Enabling automation is an
          explicit instruction from you to your broker, not from BEMXC to
          your broker.
        </p>
        <p>You — not BEMXC — are responsible for:</p>
        <ol>
          <li>Know-your-customer and account status at your FX broker.</li>
          <li>
            Lot sizing, leverage, margin headroom, and liquidation risk.
          </li>
          <li>
            Kill switches, maximum daily loss, and hours of operation.
          </li>
          <li>
            Slippage, partial fills, requotes, swaps, and weekend gaps.
          </li>
          <li>Tax reporting on realized and unrealized results.</li>
          <li>
            Disabling automation when you are not monitoring the account.
          </li>
          <li>
            Confirming that following a BUY or SELL is lawful where you
            live and permitted by your broker agreement.
          </li>
        </ol>
        <blockquote>
          Desk chats and group rooms may discuss a call. Discussion is not
          an order. Only your webhook configuration and your broker can
          create an order. BEMXC does not size that order.
        </blockquote>
        <p id="profit">
          BEMXC provides zero profit guarantees. Automated routing of a
          verified signal can still lose the full risk amount, plus fees
          and slippage. Anyone stating that BEMXC “prints money,” “cannot
          lose,” or will trade your account on your behalf is contradicting
          this page.
        </p>
        <p>
          If a third party tells you that BEMXC will hold your margin or
          lock in a monthly return, that third party is not describing
          BEMXC. Do not wire funds to accounts claiming to be BEMXC
          custody. BEMXC has no client trading accounts. Scoring rules that
          people confuse with “guaranteed edge” are specified in the{" "}
          <a
            href="/articles/win-rate-credibility-algorithm"
            className="text-emerald hover:text-white"
          >
            Credibility Scoring article
          </a>
          ; they measure the provider’s ledger, not your equity curve.
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
