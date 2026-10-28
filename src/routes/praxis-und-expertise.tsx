import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "../lib/site";
import { ContactBand, PageIntro } from "../components/site/page";

export const Route = createFileRoute("/praxis-und-expertise")({
  head: () => ({
    meta: [
      { title: "Praxis & Expertise | EstheticaMed Amirzada Hamburg" },
      {
        name: "description",
        content:
          "Lernen Sie unsere Privatpraxis am Tibarg 11 in Hamburg Niendorf kennen: ganzheitliche Behandlungskonzepte, moderne Ausstattung und eine Atmosphäre von Ruhe und Diskretion.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageIntro kicker="Individuell und professionell" title="Praxis & Expertise">
        Medizinische Präzision, Wohlbefinden und ästhetischer Anspruch auf höchstem Niveau.
      </PageIntro>
      <section className="em-container pb-20 md:pb-28">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div className="em-frame aspect-[4/5]">
            <img
              src="/assets/img-praxis.jpg"
              alt="Behandlungsraum der Praxis am Tibarg"
              className="em-img"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="em-serif text-3xl md:text-4xl">Über mich</h2>
            <div className="em-prose mt-5">
              <p>
                Mit umfangreicher Erfahrung in biologischer Medizin, orthomolekularer Therapie und
                Infusionsmedizin biete ich individuelle, ganzheitliche Behandlungskonzepte.
              </p>
              <p>
                Fortgebildet in Laser- und ästhetischen Verfahren verbinde ich medizinische
                Expertise mit modernster Technologie, um natürliche, harmonische Ergebnisse zu
                erzielen.
              </p>
            </div>
            <p className="em-serif mt-6 text-xl italic">{SITE.doctor}</p>
            <div className="em-hairline mt-10 pt-8">
              <h2 className="em-serif text-3xl md:text-4xl">Der Praxisraum</h2>
              <div className="em-prose mt-5">
                <p>
                  Unsere Praxis in Hamburg Niendorf vereint moderne Architektur, elegante
                  Einrichtung und High-End-Medizintechnik zu einem harmonischen Gesamterlebnis.
                  Jeder Behandlungsraum ist sorgfältig gestaltet, um eine Atmosphäre von Ruhe,
                  Diskretion und Luxus zu schaffen.
                </p>
                <p>
                  Von der ersten Sekunde an spüren Sie den Anspruch auf höchste Qualität: Stilvolle
                  Materialien, dezente Beleuchtung und komfortable Ausstattung sorgen dafür, dass
                  Sie sich vollkommen entspannt fühlen können. Unsere Räume bieten den perfekten
                  Rahmen für Ihre individuelle Betreuung.
                </p>
                <p>
                  Hier wird jede Behandlung zu einem exklusiven Erlebnis, das medizinische
                  Präzision, Wohlbefinden und ästhetischen Anspruch verbindet. Ihr Besuch bei
                  EstheticaMed Amirzada ist mehr als eine Behandlung: ein Moment, der Sie erholt,
                  gestärkt und strahlend zurücklässt.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="em-frame aspect-[4/3]">
            <img src="/assets/praxis-1.jpg" alt="Einblick in die Praxis" className="em-img" loading="lazy" />
          </div>
          <div className="em-frame aspect-[4/3]">
            <img src="/assets/praxis-2.jpg" alt="Behandlung in der Praxis" className="em-img" loading="lazy" />
          </div>
          <div className="em-frame aspect-[4/3] sm:col-span-2 lg:col-span-1">
            <img src="/assets/praxis-5.jpg" alt="Infusionsbereich der Praxis" className="em-img" loading="lazy" />
          </div>
        </div>
      </section>
      <ContactBand />
    </main>
  );
}
