import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { CtaLine } from "../components/site/cta";
import { BlockList, ContactBand } from "../components/site/page";
import { Rise } from "../components/site/rise";
import {
  CATEGORY_LABEL,
  CATEGORY_PATH,
  findTreatment,
  treatmentsByCategory,
} from "../lib/treatments";

export const Route = createFileRoute("/$slug")({
  loader: ({ params }) => {
    const t = findTreatment(params.slug);
    if (!t) throw notFound();
    return { t };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: loaderData.t.title + " in Hamburg | EstheticaMed Amirzada" },
          { name: "description", content: loaderData.t.teaser },
        ]
      : [],
  }),
  component: Page,
});

function Page() {
  const { t } = Route.useLoaderData();
  const related = treatmentsByCategory(t.category).filter((x) => x.slug !== t.slug);
  return (
    <main>
      <header className="em-container pb-12 pt-32 md:pb-16 md:pt-44">
        <Rise as="p" className="em-eyebrow">
          {CATEGORY_LABEL[t.category]}
        </Rise>
        <Rise d={1} as="h1" className="em-serif mt-4 max-w-3xl text-4xl leading-[1.08] md:text-6xl">
          {t.title}
        </Rise>
        <Rise d={2} as="p" className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--em-grey)]">
          {t.lead}
        </Rise>
      </header>
      <section className="em-container pb-20 md:pb-28">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <BlockList blocks={t.blocks} />
          <aside>
            <div className="em-hairline pt-6">
              <p className="em-serif text-xl">Weitere Behandlungen</p>
              <div className="mt-4 flex flex-col gap-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to="/$slug"
                    params={{ slug: r.slug }}
                    className="text-sm text-[var(--em-grey)] transition-colors hover:text-[var(--em-bronze)]"
                  >
                    {r.title}
                  </Link>
                ))}
              </div>
              <div className="mt-8">
                <CtaLine to={CATEGORY_PATH[t.category]}>Zur Übersicht</CtaLine>
              </div>
            </div>
          </aside>
        </div>
      </section>
      <ContactBand />
    </main>
  );
}
