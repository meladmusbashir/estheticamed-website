import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SITE } from "../../lib/site";
import { treatmentsByCategory, type Block, type CategoryId } from "../../lib/treatments";
import { CtaFrame } from "./cta";
import { Rise } from "./rise";

export function PageIntro({
  kicker,
  title,
  children,
}: {
  kicker: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="em-container pb-14 pt-32 md:pb-20 md:pt-44">
      <Rise as="p" className="em-eyebrow">
        {kicker}
      </Rise>
      <Rise d={1} as="h1" className="em-serif mt-4 max-w-3xl text-4xl leading-[1.08] md:text-6xl">
        {title}
      </Rise>
      {children ? (
        <Rise d={2} className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--em-grey)]">
          {children}
        </Rise>
      ) : null}
    </header>
  );
}

export function BlockList({ blocks }: { blocks: Block[] }) {
  return (
    <div className="em-prose">
      {blocks.map((b, i) => (
        <section key={i} className={b.h ? "mt-10 first:mt-0" : "mt-6 first:mt-0"}>
          {b.h ? <h2 className="em-serif mb-4 text-2xl md:text-3xl">{b.h}</h2> : null}
          {b.p?.map((t) => <p key={t}>{t}</p>)}
          {b.list ? (
            <ul>
              {b.list.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          ) : null}
          {b.steps ? (
            <ol>
              {b.steps.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ol>
          ) : null}
        </section>
      ))}
    </div>
  );
}

export function TreatmentIndex({ category }: { category: CategoryId }) {
  const items = treatmentsByCategory(category);
  return (
    <div>
      {items.map((t) => (
        <Link
          key={t.slug}
          to="/$slug"
          params={{ slug: t.slug }}
          className="em-card group grid gap-2 border-t border-[var(--em-line)] py-7 last:border-b md:grid-cols-[1.2fr_1.4fr_auto] md:items-baseline md:gap-8"
        >
          <h3 className="em-serif text-2xl">{t.title}</h3>
          <p className="text-sm leading-relaxed text-[var(--em-grey)]">{t.teaser}</p>
          <span className="em-cta-line mt-2 md:mt-0">Mehr erfahren</span>
        </Link>
      ))}
    </div>
  );
}

export function ContactBand({ title }: { title?: string }) {
  return (
    <section style={{ background: "var(--em-ink)" }}>
      <div className="em-container flex flex-col items-start gap-8 py-16 text-[#EFE9DD] md:flex-row md:items-center md:justify-between md:py-20">
        <div>
          <h2 className="em-serif text-3xl">{title ?? "Vereinbaren Sie Ihren persönlichen Termin"}</h2>
          <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-sm">
            <a href={SITE.phone1.href} className="opacity-85 hover:opacity-100">
              {SITE.phone1.label}
            </a>
            <a href={"mailto:" + SITE.email} className="opacity-85 hover:opacity-100">
              {SITE.email}
            </a>
            <span className="opacity-60">{SITE.hours}</span>
          </div>
        </div>
        <CtaFrame to="/kontakt">Termin anfragen</CtaFrame>
      </div>
    </section>
  );
}
