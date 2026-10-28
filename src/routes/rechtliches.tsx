import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "../lib/site";
import { PageIntro } from "../components/site/page";

export const Route = createFileRoute("/rechtliches")({
  head: () => ({
    meta: [
      { title: "AGB, Widerruf & Ärztehinweis | EstheticaMed Amirzada Hamburg" },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageIntro kicker="Rechtliches" title="AGB, Widerruf & Ärztehinweis" />
      <section className="em-container max-w-3xl pb-24 md:pb-32">
        <div className="em-prose">
          <p>
            Die rechtlichen Hinweise und Geschäftsbedingungen werden aktuell überarbeitet und in
            Kürze ergänzt.
          </p>
          <p>
            Bei Fragen zu Terminen, Stornierungen oder Behandlungen sprechen Sie uns bitte direkt
            an: telefonisch unter {SITE.phone1.label} oder per E-Mail an {SITE.email}.
          </p>
        </div>
      </section>
    </main>
  );
}
