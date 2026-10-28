import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "../components/site/page";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutz | EstheticaMed Amirzada Hamburg" },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageIntro kicker="Rechtliches" title="Datenschutzerklärung" />
      <section className="em-container max-w-3xl pb-24 md:pb-32">
        <div className="em-prose">
          <h2 className="em-serif text-2xl">Verantwortliche Stelle</h2>
          <p>
            EstheticaMed Amirzada, Dr. med. Chatera Amirzada, Tibarg 11, 22459 Hamburg,
            Telefon 040 23810835, E-Mail info@estheticamed-niendorf.de
          </p>
          <h2 className="em-serif mt-10 text-2xl">Hosting und Server-Logfiles</h2>
          <p>
            Beim Aufruf dieser Website verarbeitet unser Hosting-Dienstleister automatisch
            technisch notwendige Zugriffsdaten (zum Beispiel IP-Adresse, Datum und Uhrzeit des
            Abrufs, aufgerufene Seite, Browsertyp). Diese Daten sind für den sicheren Betrieb der
            Website erforderlich und werden nicht mit anderen Datenquellen zusammengeführt.
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem
            sicheren und stabilen Betrieb).
          </p>
          <h2 className="em-serif mt-10 text-2xl">Keine Cookies, kein Tracking</h2>
          <p>
            Diese Website setzt keine Analyse- oder Marketing-Cookies ein und verwendet keine
            Tracking-Dienste.
          </p>
          <h2 className="em-serif mt-10 text-2xl">Kontaktaufnahme</h2>
          <p>
            Wenn Sie uns per Telefon oder E-Mail kontaktieren, verarbeiten wir die von Ihnen
            mitgeteilten Daten (zum Beispiel Name, Kontaktdaten, Anliegen) zur Bearbeitung Ihrer
            Anfrage und für mögliche Anschlussfragen. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
            DSGVO, soweit Ihre Anfrage auf einen Behandlungsvertrag zielt, im Übrigen Art. 6 Abs. 1
            lit. f DSGVO.
          </p>
          <h2 className="em-serif mt-10 text-2xl">Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf Auskunft über die von uns verarbeiteten personenbezogenen
            Daten sowie auf Berichtigung, Löschung, Einschränkung der Verarbeitung,
            Datenübertragbarkeit und Widerspruch gegen die Verarbeitung. Wenden Sie sich dazu an
            die oben genannten Kontaktdaten.
          </p>
          <h2 className="em-serif mt-10 text-2xl">Beschwerderecht</h2>
          <p>
            Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.
            Zuständig ist der Hamburgische Beauftragte für Datenschutz und Informationsfreiheit,
            Ludwig-Erhard-Str. 22, 20459 Hamburg.
          </p>
          <h2 className="em-serif mt-10 text-2xl">Aktualität</h2>
          <p>
            Diese Datenschutzerklärung wird bei Änderungen der Website oder der rechtlichen
            Vorgaben angepasst.
          </p>
        </div>
      </section>
    </main>
  );
}
