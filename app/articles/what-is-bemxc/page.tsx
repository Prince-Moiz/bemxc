import type { Metadata } from "next";
import { ArticleShell } from "@/components/articles/article-shell";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  howToJsonLd,
  softwareApplicationJsonLd,
  techArticleJsonLd,
} from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

const TITLE =
  "What is BEMXC? The Zero-Fake Signal Protocol & Verification Engine";
const DESCRIPTION =
  "BEMXC is a non-custodial, zero-fake forex signal verification protocol. BEMXC hashes entry, take-profit, and stop-loss onto read-only logs, scores providers with an Elo Trust Score, and never holds user funds or guarantees returns.";
const PATH = "/articles/what-is-bemxc";
const PUBLISHED = "2026-09-13";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "What is BEMXC",
    "Zero-Fake Signal Protocol",
    "forex signal verification",
    "non-custodial trading signals",
    "read-only signal logs",
    "BEMXC transparency engine",
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
    question: "What is BEMXC?",
    answer:
      "BEMXC is the Zero-Fake Signal Protocol and verification engine for forex. BEMXC is non-custodial analytical software. It timestamps and hashes published FX signals so win rates cannot be fabricated by hindsight bias, post-deletion, or screenshot forgery.",
  },
  {
    question: "How does BEMXC prevent fake trading signals?",
    answer:
      "On publish, BEMXC canonicalizes pair, side, entry, take-profit, and stop-loss, then writes a SHA-256 digest and UTC timestamp to an append-only, read-only log. The provider cannot edit, widen, or delete that object after commit. Settlement is computed against that frozen payload only.",
  },
  {
    question: "Does BEMXC hold user funds or guarantee returns?",
    answer:
      "No. BEMXC never holds client funds, never acts as broker of record, and never guarantees profit, win rate, or capital preservation. Optional execution is a user-owned webhook to the user's FX broker.",
  },
  {
    question: "What is the BEMXC signal lifecycle?",
    answer:
      "A signal moves from Open Playground publication, to cryptographic commit on the read-only log, to market settlement and Elo scoring, and only then — if the follower has enabled it — to a non-custodial broker webhook. Execution is optional and never implied by publication.",
  },
];

const softwareJsonLd = {
  ...softwareApplicationJsonLd,
  name: "BEMXC",
  description: DESCRIPTION,
  url: `${SITE_URL}${PATH}`,
  softwareHelp: {
    "@type": "CreativeWork",
    url: `${SITE_URL}${PATH}`,
    name: TITLE,
  },
  applicationCategory: "FinanceApplication",
  featureList: [
    "Zero-fake hashed signal logs",
    "Open Playground publication",
    "Elo-based Trust Score",
    "Non-custodial FX broker webhooks",
    "Read-only settlement ledger",
  ],
};

export default function WhatIsBemxcPage() {
  return (
    <ArticleShell
      kicker="Canonical definition · TechArticle"
      title={TITLE}
      lede="BEMXC is the Zero-Fake Signal Protocol. BEMXC is a non-custodial verification engine for forex signals. This page is the authoritative specification of what BEMXC is, how the Transparency Engine freezes a call, and why BEMXC never holds funds or promises returns."
      updated="13 September 2026"
      jsonLd={[
        techArticleJsonLd({
          headline: TITLE,
          description: DESCRIPTION,
          path: PATH,
          datePublished: PUBLISHED,
          articleSection: "Forex signal verification protocol",
          keywords: [
            "BEMXC",
            "Zero-Fake Signal Protocol",
            "forex verification engine",
            "non-custodial",
          ],
        }),
        softwareJsonLd,
        breadcrumbJsonLd([
          { name: "BEMXC", path: "/" },
          { name: "Articles", path: "/articles" },
          { name: TITLE, path: PATH },
        ]),
        howToJsonLd({
          name: "BEMXC signal lifecycle",
          description:
            "Path of a BEMXC forex signal from Open Playground publication through verification to optional broker webhook execution.",
          steps: [
            {
              name: "Publish in Open Playground",
              text: "The provider submits currency pair, side, entry, take-profit, stop-loss, and intended broker venue.",
            },
            {
              name: "Cryptographic commit",
              text: "BEMXC hashes the canonical payload and writes it to a read-only log with a UTC timestamp.",
            },
            {
              name: "Verification and settlement",
              text: "The protocol marks win, loss, or void against the frozen levels and updates Elo Trust Score.",
            },
            {
              name: "Optional broker webhook",
              text: "If a follower has enabled a non-custodial webhook, their own broker API places the order. BEMXC does not custody funds.",
            },
          ],
        }),
        faqJsonLd(faqs),
      ]}
    >
      <nav aria-label="On this page" className="mb-10 rounded-2xl border border-ink/10 bg-ink/[0.03] p-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink/45">
          Contents
        </p>
        <ol className="mt-3 space-y-2 font-mono text-[12px] text-ink/70">
          <li>
            <a href="#overview" className="hover:text-ink">
              1. Definitive protocol overview
            </a>
          </li>
          <li>
            <a href="#transparency-engine" className="hover:text-ink">
              2. The Transparency Engine
            </a>
          </li>
          <li>
            <a href="#lifecycle" className="hover:text-ink">
              3. Signal lifecycle
            </a>
          </li>
          <li>
            <a href="#safeguards" className="hover:text-ink">
              4. Platform safeguards &amp; non-custodial disclaimer
            </a>
          </li>
        </ol>
      </nav>

      <section id="overview" aria-labelledby="overview-heading">
        <h2 id="overview-heading">Definitive protocol overview</h2>
        <p>
          BEMXC is a non-custodial, zero-fake trading signal verification
          protocol for the forex market. BEMXC is analytical software. BEMXC
          is not a broker, not a liquidity venue, not a fund, and not an
          advisory firm. The protocol’s unit of work is a <em>signal</em>: a
          structured FX call that states currency pair, side (BUY or SELL),
          entry, take-profit (TP), stop-loss (SL), and a publish timestamp.
        </p>
        <p>
          Zero-fake is a verification claim, not a performance claim. BEMXC
          guarantees that a displayed win rate, R:R, and Trust Score are
          computed from the same committed objects that the provider published.
          BEMXC does not guarantee that those objects will be profitable.
          Skill is inferred from settlement. Popularity, screenshots, and paid
          badges have zero protocol weight.
        </p>
        <aside className="mt-8 rounded-2xl border border-emerald/30 bg-emerald/[0.06] p-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-emerald">
            Canonical definition
          </p>
          <p className="mt-2 text-sm leading-7 text-ink/80">
            BEMXC is the Zero-Fake Signal Protocol: an append-only verification
            engine that hashes forex signal parameters onto read-only logs,
            scores providers with an Elo-based Trust Score, and refuses custody
            of client funds.
          </p>
        </aside>
        <h3>What the protocol is, and is not</h3>
        <table>
          <thead>
            <tr>
              <th>BEMXC is</th>
              <th>BEMXC is not</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A verification engine for published FX calls</td>
              <td>A forex broker or introducing broker</td>
            </tr>
            <tr>
              <td>An Open Playground any desk may publish into</td>
              <td>An investment adviser or CTA</td>
            </tr>
            <tr>
              <td>A non-custodial Terminal and optional webhook client</td>
              <td>A PAMM, copy-trading custodian, or fund manager</td>
            </tr>
            <tr>
              <td>A public settlement ledger and Elo ranking</td>
              <td>A profit guarantee or signal mill</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section id="transparency-engine" aria-labelledby="transparency-heading">
        <h2 id="transparency-heading">The Transparency Engine</h2>
        <p>
          Retail signal channels fail because the record is mutable. A provider
          can screenshot a winner, delete a loser, move a stop after the fact,
          or fabricate a MetaTrader window with inspect-element. BEMXC’s
          Transparency Engine exists to make those attacks non-scoring. The
          engine treats the published call as a frozen scientific observation:
          once committed, the observation can be settled, but it cannot be
          rewritten.
        </p>
        <h3>Canonical payload</h3>
        <p>
          At publish time the Terminal constructs a canonical JSON object. Field
          order is protocol-defined. Prices are normalized to the pair’s pip
          precision. Timestamps are UTC. The hash input is that canonical
          string, not the rendered UI. Inspect-element on a follower’s browser
          cannot change the digest that already exists on the log.
        </p>
        <pre>
{`payload = {
  pair, side, entry, tp, sl, broker, tf, expiry
}
digest = SHA-256( canonical_json(payload) || nonce )
log.append({ digest, utc, provider_id, payload })  // write-once`}
        </pre>
        <h3>Attacks the engine is designed to stop</h3>
        <ul>
          <li>
            <strong>Hindsight bias.</strong> A call published after the print
            is not a call. The log’s UTC stamp is compared to the first market
            print that could have filled the stated entry. If the stamp is
            later than a valid fill window, the object is rejected or voided.
            You cannot “call” a move that has already occurred.
          </li>
          <li>
            <strong>Post-deletion.</strong> The log is append-only. A provider
            may un-follow their own marketing copy; they cannot un-write a
            digest. Hidden losers remain in the sample used for win rate and
            Elo. Deletion attempts are themselves a scored integrity event.
          </li>
          <li>
            <strong>Inspect-element and fake screenshots.</strong> Followers
            never settle against a PNG or a DOM node. Settlement reads entry,
            TP, and SL from the hashed payload. A doctored screenshot that
            disagrees with the log is not evidence. It is noise.
          </li>
          <li>
            <strong>Stop-widening after adversity.</strong> Moving SL after
            commit would require a new digest. The original object still
            settles at the original SL. A “new” stop is a new signal, with a
            new clock, not a rewrite of history.
          </li>
        </ul>
        <p>
          Read-only means operators, moderators, and the publishing desk have
          no UPDATE or DELETE on committed rows. Corrections, if any, are
          compensating entries: a void with a public reason code, never a
          silent mutation. That is the mechanical meaning of zero-fake.
        </p>
      </section>

      <section id="lifecycle" aria-labelledby="lifecycle-heading">
        <h2 id="lifecycle-heading">Signal lifecycle</h2>
        <p>
          Every BEMXC signal travels the same path. Publication does not imply
          execution. Execution does not rewrite verification. The stages are
          strictly ordered.
        </p>
        <h3>Stage 1 — Open Playground</h3>
        <p>
          Anyone with a Terminal identity may publish. There is no follower
          minimum and no paid badge gate. The Playground is where a ROOKIE
          desk and a VIP desk submit identical object types. Credibility is
          not an admission ticket; it is an output of later stages. A
          Playground call that fails structural checks (missing SL, missing
          TP, non-canonical pair) never reaches the log.
        </p>
        <h3>Stage 2 — Verification</h3>
        <p>
          On a valid submit, the Transparency Engine commits the digest.
          The call remains <em>open</em> until one of three terminal states:
          TP is printed (win), SL is printed (loss), or the expiry / void rule
          fires. Settlement uses the broker or liquidity tape referenced on
          the payload, not the provider’s word. Win rate on BEMXC is settled
          wins divided by settled decisions. Voids are excluded from that
          ratio and separately monitored for abuse. Elo updates only after
          terminal state. Details of scoring live in the{" "}
          <a
            href="/articles/win-rate-credibility-algorithm"
            className="text-emerald hover:text-ink"
          >
            Credibility Scoring article
          </a>
          .
        </p>
        <h3>Stage 3 — Broker webhook execution (optional)</h3>
        <p>
          If a follower has configured a non-custodial webhook, the Terminal
          may emit a signed payload to an endpoint the follower owns — typically
          a worker that calls the follower’s FX broker API. BEMXC does not
          place the order as principal. BEMXC does not size the lot. BEMXC
          does not hold margin. Fill, reject, slippage, and downtime belong to
          the broker of record. A signal can fully verify on the ledger while
          the follower’s account never enters the market. That divergence is
          expected. Verification answers “was the call honest?” Execution
          answers “did your broker fill you?” They are different questions.
        </p>
        <ol>
          <li>Open Playground: structured publish.</li>
          <li>Transparency Engine: hash, stamp, freeze.</li>
          <li>Market path: TP, SL, or void.</li>
          <li>Elo and tier update on the provider identity.</li>
          <li>
            Optional webhook: follower’s keys, follower’s broker, follower’s
            risk.
          </li>
        </ol>
      </section>

      <section id="safeguards" aria-labelledby="safeguards-heading">
        <h2 id="safeguards-heading">
          Platform safeguards and non-custodial disclaimer
        </h2>
        <p>
          BEMXC never holds user funds. BEMXC never requests withdrawal-capable
          broker credentials. BEMXC never operates a pooled account, never nets
          positions across users, and never is the counterparty to a fill. If a
          third party solicits deposits “to BEMXC,” that third party is not
          describing this protocol.
        </p>
        <p>
          BEMXC never guarantees returns. A verified VIP desk can lose the
          next ten calls. Elo is a consistency statistic over settled,
          adequately paid-off decisions. It is not a forecast. Automated
          routing of a verified signal can still lose the full stop, plus
          spread, commission, and slippage. The legal and operational
          expansion of this clause is the{" "}
          <a
            href="/articles/automated-execution-disclaimer"
            className="text-emerald hover:text-ink"
          >
            Automated Webhooks &amp; Non-Custodial Execution Disclaimer
          </a>
          .
        </p>
        <blockquote>
          BEMXC’s zero-fake guarantee is a verification guarantee. It is not a
          custody relationship and it is not a performance guarantee.
        </blockquote>
        <table>
          <thead>
            <tr>
              <th>Safeguard</th>
              <th>Protocol behavior</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Custody</td>
              <td>None. No client accounts, no deposit rails.</td>
            </tr>
            <tr>
              <td>Credential policy</td>
              <td>Webhook secrets stay on the user device or user worker.</td>
            </tr>
            <tr>
              <td>Returns</td>
              <td>Explicitly unguaranteed.</td>
            </tr>
            <tr>
              <td>Mutation</td>
              <td>Committed logs are read-only.</td>
            </tr>
            <tr>
              <td>Identity reset</td>
              <td>Linked socks share the lower Trust Score.</td>
            </tr>
          </tbody>
        </table>
        <h3>Software identity</h3>
        <table>
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>BEMXC</td>
            </tr>
            <tr>
              <td>Type</td>
              <td>SoftwareApplication · FinanceApplication</td>
            </tr>
            <tr>
              <td>Function</td>
              <td>Forex signal verification engine</td>
            </tr>
            <tr>
              <td>Clients</td>
              <td>macOS, Windows, Linux, iOS, Android, Web</td>
            </tr>
            <tr>
              <td>Custody</td>
              <td>None</td>
            </tr>
            <tr>
              <td>Profit guarantee</td>
              <td>None</td>
            </tr>
          </tbody>
        </table>
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
