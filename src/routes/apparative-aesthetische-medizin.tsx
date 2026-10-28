import { createFileRoute } from "@tanstack/react-router";
import { CtaLine } from "../components/site/cta";
import { ContactBand, PageIntro } from "../components/site/page";

export const Route = createFileRoute("/apparative-aesthetische-medizin")({
  head: () => ({
    meta: [
      { title: "Apparative ästhetische Medizin in Hamburg | EstheticaMed Amirzada" },
      {
        name: "description",
        content:
          "HIFU (Ultraformer MPT), CO2-Laser sowie IPL- und YAG-Systeme von Candela Nordlys: exklusive Technologien für Hautstraffung und Hauterneuerung in Hamburg Niendorf.",
      },
    ],
  }),
  component: Page,
});

const DEVICES = [
  {
    t: "HIFU, Ultraformer MPT",
    list: [
      "Straffung und Lifting von Gesicht, Hals und Dekolleté sowie Körperbereichen wie Bauch, Armen, Oberschenkeln oder Gesäß",
      "Gezielte Konturierung, Verbesserung der Hautelastizität und leichte Modellierung",
      "Minimalinvasiv, ohne Nadeln oder Schnitte",
    ],
  },
  {
    t: "CO2-Laser",
    list: [
      "Hauterneuerung, Unterstützung von Hautstruktur und Hautbild",
      "Geeignet für Gesicht, Hals und Dekolleté, bei kleineren Arealen auch am Körper",
      "Präzise Behandlung für ein verfeinertes Hautgefühl",
    ],
  },
  {
    t: "Candela Nordlys, IPL- & YAG-Laser",
    list: [
      "Unterstützung bei Pigmentflecken, Rötungen, Besenreisern und Gefäßveränderungen",
      "Hautstraffung und Verbesserung der Hauttextur",
      "Für Gesicht, Hals, Dekolleté und Körperbereiche geeignet",
      "Sanfte, effektive Behandlung durch kombinierte Licht- und Laserimpulse",
    ],
  },
] as const;

function Page() {
  return (
    <main>
      <PageIntro kicker="Behandlungswelt" title="Apparative ästhetische Medizin">
        Exklusive Technologien für zeitlose Schönheit und sichtbare Hautverjüngung.
      </PageIntro>
      <section className="em-container pb-20 md:pb-28">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div className="em-prose">
            <p>
              Erleben Sie modernste High-Tech-Lösungen für ein straffes, gesundes und vital
              wirkendes Hautbild. Unsere sorgfältig ausgewählten Systeme, von HIFU über den
              CO2-Laser bis zu den IPL- und YAG-Lasern von Candela Nordlys, ermöglichen individuell
              abgestimmte Behandlungen für natürliche Konturierung, Hauterneuerung und Glättung.
            </p>
            <p>
              Jede Therapie wird präzise auf Ihre Bedürfnisse abgestimmt: für ein exklusives
              Ergebnis, das Ihre Ausstrahlung unterstreicht, ganz ohne invasive Eingriffe.
            </p>
          </div>
          <div className="em-frame aspect-[3/2]">
            <img
              src="/assets/img-apparativ.jpg"
              alt="Apparative Behandlung in der Praxis"
              className="em-img"
              loading="lazy"
            />
          </div>
        </div>
        <div className="mt-16 md:mt-24">
          <h2 className="em-serif text-3xl md:text-4xl">
            Unsere High-Tech-Behandlungen für Gesicht und Körper
          </h2>
          <div className="mt-8">
            {DEVICES.map((d) => (
              <div
                key={d.t}
                className="grid gap-4 border-t border-[var(--em-line)] py-8 last:border-b md:grid-cols-[1fr_1.6fr] md:gap-10"
              >
                <h3 className="em-serif text-2xl">{d.t}</h3>
                <ul className="em-prose">
                  {d.list.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <div className="em-frame aspect-[16/9] w-full max-w-md">
              <img
                src="/assets/praxis-4.jpg"
                alt="Moderne Gerätemedizin bei EstheticaMed"
                className="em-img"
                loading="lazy"
              />
            </div>
            <CtaLine to="/preisliste">Zur Preisliste</CtaLine>
          </div>
        </div>
      </section>
      <ContactBand />
    </main>
  );
}
