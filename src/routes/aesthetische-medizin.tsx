import { createFileRoute } from "@tanstack/react-router";
import { ContactBand, PageIntro, TreatmentIndex } from "../components/site/page";

export const Route = createFileRoute("/aesthetische-medizin")({
  head: () => ({
    meta: [
      { title: "Ästhetische Medizin in Hamburg | EstheticaMed Amirzada" },
      {
        name: "description",
        content:
          "Faltenbehandlung, PRP, Mesotherapie, Microneedling, Profhilo und Mesohair in Hamburg Niendorf: präzise, zurückhaltend und individuell.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageIntro kicker="Behandlungswelt" title="Ästhetische Medizin">
        Präzision, Zurückhaltung und Individualität: Behandlungen, die Ihre natürliche
        Ausstrahlung bewahren.
      </PageIntro>
      <section className="em-container pb-20 md:pb-28">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div className="em-prose">
            <p>
              Ästhetische Medizin bedeutet für uns Präzision, Zurückhaltung und Individualität.
              Unser Anspruch ist es, Ihre natürliche Ausstrahlung zu bewahren und sanft zu
              begleiten: mit Behandlungen, die auf Harmonie, Proportion und ein gepflegtes
              Erscheinungsbild ausgerichtet sind.
            </p>
            <p>
              Wir bieten ein breites Spektrum moderner ästhetischer Anwendungen, darunter
              Faltenbehandlung und Konturierung, PRP (Platelet Rich Plasma), Mesohair,
              Microneedling, Profhilo und die ästhetische Mesotherapie. Alle Verfahren werden nach
              aktuellen medizinischen Standards und mit zugelassenen Produkten durchgeführt.
            </p>
            <p>
              Im persönlichen ärztlichen Beratungsgespräch entwickeln wir gemeinsam ein individuell
              abgestimmtes Behandlungskonzept, das Ihre Wünsche berücksichtigt und auf ein
              natürliches, ausgewogenes Gesamtbild ausgerichtet ist.
            </p>
            <p>
              Unser Fokus liegt auf diskreter, professioneller Betreuung in einem exklusiven
              Umfeld. Jede Behandlung erfolgt mit Sorgfalt, Erfahrung und einem hohen Anspruch an
              Qualität, stets unter Wahrung Ihrer natürlichen Mimik und Ausstrahlung.
            </p>
          </div>
          <div className="em-frame aspect-[3/4]">
            <img
              src="/assets/img-aesthetik.jpg"
              alt="Natürliche Schönheit: ästhetische Medizin bei EstheticaMed"
              className="em-img"
              loading="lazy"
            />
          </div>
        </div>
        <div className="mt-16 md:mt-24">
          <h2 className="em-serif text-3xl md:text-4xl">Unsere Leistungen im Überblick</h2>
          <div className="mt-8">
            <TreatmentIndex category="aesthetik" />
          </div>
        </div>
      </section>
      <ContactBand />
    </main>
  );
}
