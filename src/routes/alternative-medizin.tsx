import { createFileRoute } from "@tanstack/react-router";
import { ContactBand, PageIntro, TreatmentIndex } from "../components/site/page";

export const Route = createFileRoute("/alternative-medizin")({
  head: () => ({
    meta: [
      { title: "Alternative Medizin in Hamburg | EstheticaMed Amirzada" },
      {
        name: "description",
        content:
          "Ganzheitliche Gesundheitsbegleitung in Hamburg Niendorf: Darmgesundheit, kurative Mesotherapie und intravasale Lasertherapie nach Weber.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageIntro kicker="Behandlungswelt" title="Alternative Medizin">
        Ganzheitliche Gesundheitsbegleitung für Wohlbefinden, Vitalität und Balance.
      </PageIntro>
      <section className="em-container pb-20 md:pb-28">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div className="em-prose">
            <p>
              Unsere Angebote im Bereich der ganzheitlichen Gesundheitsbegleitung fördern
              Wohlbefinden, Vitalität und Balance, individuell abgestimmt auf Ihre Bedürfnisse und
              Lebenssituation.
            </p>
            <p>
              Ob Testung auf Unverträglichkeiten bei Nahrungsergänzungsmitteln, professionelle
              Ernährungsberatung, Darmsanierung, kurative Mesotherapie oder die intravasale
              Lasertherapie nach Weber: Wir begleiten Sie mit modernen, naturheilkundlichen und
              beratenden Methoden.
            </p>
            <p>
              Gemeinsam entwickeln wir individuelle Strategien, die Ihren Körper unterstützen,
              Stoffwechselprozesse harmonisieren und zu mehr Energie und Widerstandskraft beitragen
              können. Dabei verbinden wir bewährte naturheilkundliche Ansätze mit aktuellen
              Erkenntnissen aus Prävention und Gesundheitsförderung.
            </p>
            <p>
              Alle Anwendungen erfolgen in einer ruhigen, professionellen Atmosphäre, mit Zeit für
              Ihre Fragen, Ziele und Bedürfnisse. So entsteht ein ganzheitliches Konzept, das
              Körperbewusstsein, Regeneration und Lebensqualität in den Mittelpunkt stellt.
            </p>
          </div>
          <div className="em-frame aspect-[3/4]">
            <img
              src="/assets/img-naturheilkunde.jpg"
              alt="Naturheilkundliche Begleitung bei EstheticaMed"
              className="em-img"
              loading="lazy"
            />
          </div>
        </div>
        <div className="mt-16 md:mt-24">
          <h2 className="em-serif text-3xl md:text-4xl">Unsere Leistungen im Überblick</h2>
          <div className="mt-8">
            <TreatmentIndex category="alternativ" />
          </div>
        </div>
      </section>
      <ContactBand />
    </main>
  );
}
