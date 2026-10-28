import { createFileRoute } from "@tanstack/react-router";
import { ContactBand, PageIntro } from "../components/site/page";

export const Route = createFileRoute("/individuelle-infusionstherapien")({
  head: () => ({
    meta: [
      { title: "Individuelle Infusionstherapien in Hamburg | EstheticaMed Amirzada" },
      {
        name: "description",
        content:
          "Vitamin-, Eisen- und Aufbauinfusionen in Hamburg Niendorf: wichtige Mikronährstoffe direkt in den Blutkreislauf, individuell zusammengestellt und ärztlich betreut.",
      },
    ],
  }),
  component: Page,
});

const INFUSIONEN = [
  "Aufbau- und Vitalinfusionen",
  "Eiseninfusionen bei nachgewiesenem Mangel",
  "Vitamin-C-Hochdosisinfusionen (PP-Protokoll)",
  "Infusionen beim Fatigue-Syndrom zur Verbesserung von Energie und Leistungsfähigkeit",
  "Anti-Stress-Infusionen zur Stabilisierung in Belastungssituationen",
  "Aminosäuren-Infusionen für Stoffwechsel, Immunsystem und Muskulatur",
  "Alpha-Liponsäure-Infusionen zur antioxidativen Unterstützung",
] as const;

function Page() {
  return (
    <main>
      <PageIntro kicker="Behandlungswelt" title="Individuelle Infusionstherapien">
        Wichtige Mikronährstoffe direkt in den Blutkreislauf, deutlich effektiver als Tabletten.
      </PageIntro>
      <section className="em-container pb-20 md:pb-28">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div>
            <div className="em-prose">
              <p>
                Unsere Infusionstherapien werden nach umfassender Beratung und moderner Diagnostik
                individuell zusammengestellt.
              </p>
              <p>
                Sie liefern wichtige Mikronährstoffe direkt in den Blutkreislauf und unterstützen
                Regeneration, Energie, Immunsystem und Stoffwechsel.
              </p>
            </div>
            <h2 className="em-serif mt-10 text-2xl md:text-3xl">Wir bieten unter anderem</h2>
            <ul className="em-prose mt-5">
              {INFUSIONEN.map((li) => (
                <li key={li}>{li}</li>
              ))}
            </ul>
            <p className="em-note mt-6 max-w-xl">
              Darüber hinaus stellen wir auf Wunsch weitere individuelle Infusionskombinationen
              nach Ihren Bedürfnissen zusammen.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <div className="em-frame aspect-[3/2]">
              <img
                src="/assets/img-infusion.jpg"
                alt="Infusionslounge der Praxis"
                className="em-img"
                loading="lazy"
              />
            </div>
            <div className="em-frame aspect-[3/2]">
              <img
                src="/assets/praxis-3.jpg"
                alt="Individuelle Infusionstherapie bei EstheticaMed"
                className="em-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
      <ContactBand />
    </main>
  );
}
