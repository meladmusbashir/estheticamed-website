import { createFileRoute } from "@tanstack/react-router";
import { ContactBand, PageIntro } from "../components/site/page";
import { SITE } from "../lib/site";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt & Anfahrt | EstheticaMed Amirzada Hamburg" },
      {
        name: "description",
        content:
          "Kontaktieren Sie EstheticaMed Amirzada am Tibarg 11 in Hamburg Niendorf: Telefon 040 23810835, Termine nach Vereinbarung, Parkplätze vorhanden.",
      },
    ],
  }),
  component: Page,
});

const LD = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "EstheticaMed Amirzada",
  description: "Privatpraxis für Ästhetische und Alternative Medizin in Hamburg Niendorf.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tibarg 11",
    postalCode: "22459",
    addressLocality: "Hamburg",
    addressCountry: "DE",
  },
  telephone: "+49 40 23810835",
  email: "info@estheticamed-niendorf.de",
  founder: { "@type": "Physician", name: "Dr. med. Chatera Amirzada" },
};

function Page() {
  return (
    <main>
      <PageIntro kicker="Für Sie da" title="Kontakt & Anfahrt">
        Wir freuen uns, Sie in unserer Praxis in Hamburg Niendorf willkommen zu heißen.
      </PageIntro>
      <section className="em-container pb-20 md:pb-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="em-prose">
              <p>
                Für individuelle Beratung, Terminvereinbarungen und Fragen zu unseren Leistungen
                stehen wir Ihnen persönlich zur Verfügung. Rufen Sie uns an oder schreiben Sie uns,
                wir melden uns schnellstmöglich bei Ihnen.
              </p>
            </div>
            <div className="mt-8 flex flex-col items-start gap-4">
              <a
                href={SITE.phone1.href}
                className="em-serif text-3xl transition-colors hover:text-[var(--em-bronze)] md:text-4xl"
              >
                {SITE.phone1.label}
              </a>
              <a
                href={SITE.phone2.href}
                className="em-serif text-3xl transition-colors hover:text-[var(--em-bronze)] md:text-4xl"
              >
                {SITE.phone2.label}
              </a>
              <a
                href={"mailto:" + SITE.email}
                className="em-serif break-all text-2xl transition-colors hover:text-[var(--em-bronze)]"
              >
                {SITE.email}
              </a>
            </div>
            <div className="em-hairline mt-10 pt-6">
              <p className="font-semibold">{SITE.name}</p>
              <p className="text-[var(--em-grey)]">
                {SITE.street}, {SITE.zipCity}
              </p>
              <p className="mt-2 text-[var(--em-grey)]">{SITE.hours}</p>
            </div>
          </div>
          <div>
            <h2 className="em-serif text-3xl">Anfahrt und Parken</h2>
            <div className="em-prose mt-5">
              <p>
                Sie erreichen uns bequem mit den öffentlichen Verkehrsmitteln. Die Praxis liegt
                zentral am Tibarg in Hamburg Niendorf.
              </p>
              <p>Bei Anreise mit dem PKW sind ausreichend Parkplätze vorhanden.</p>
            </div>
            <div className="em-hairline mt-8 pt-6">
              <h3 className="em-serif text-2xl">Hinweis zur Zweigstelle</h3>
              <div className="em-prose mt-4">
                <p>
                  Unsere Praxis am Tibarg 11 wird ausschließlich als Privatpraxis für ästhetische
                  und alternative Medizin geführt.
                </p>
                <p>
                  Für hausärztliche Leistungen steht Ihnen unsere Hauptpraxis am
                  Ernst-Mittelbach-Ring 80 in 22455 Hamburg weiterhin allen Patientinnen und
                  Patienten uneingeschränkt zur Verfügung.
                </p>
              </div>
              <a href={SITE.hausarztUrl} rel="noopener" className="em-cta-line mt-6">
                <span>Zur Hausarztpraxis</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <ContactBand />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }} />
    </main>
  );
}
