import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLdScript } from "@/components/json-ld";
import type { JsonLd } from "@/lib/schema";

type ArticleShellProps = {
  kicker: string;
  title: string;
  lede: string;
  updated: string;
  children: ReactNode;
  jsonLd: JsonLd[];
};

export function ArticleShell({
  kicker,
  title,
  lede,
  updated,
  children,
  jsonLd,
}: ArticleShellProps) {
  return (
    <article className="mx-auto w-full max-w-4xl px-5 py-16 sm:px-8">
      {jsonLd.map((data, index) => (
        <JsonLdScript key={index} data={data} />
      ))}
      <nav aria-label="Breadcrumb" className="font-mono text-[11px] text-ink/45">
        <ol className="flex flex-wrap gap-2">
          <li>
            <Link href="/" className="hover:text-ink">
              BEMXC
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li>
            <Link href="/articles" className="hover:text-ink">
              Articles
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li className="text-ink/70">{title}</li>
        </ol>
      </nav>
      <header className="mt-8 border-b border-ink/10 pb-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-emerald">
          {kicker}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-ink/65">{lede}</p>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/45">
          Updated {updated}
        </p>
      </header>
      <div className="article-body mt-10">{children}</div>
    </article>
  );
}
