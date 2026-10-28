import { createFileRoute } from "@tanstack/react-router";
import { PageIntro } from "../components/site/page";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum | EstheticaMed Amirzada Hamburg" },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageIntro kicker="Rechtliches" title="Impressum" />
      <section className="em-container max-w-3xl pb-24 md:pb-32">
        <div className="em-prose">
          <p>
            <strong>EstheticaMed Amirzada</strong>
            <br />
            Privatpraxis für Ästhetische und Alternative Medizin
            <br />
            Dr. med. Chatera Amirzada
            <br />
            Tibarg 11, 22459 Hamburg, Deutschland
          </p>
          <p>
            Telefon: 040 23810835
            <br />
            E-Mail: info@estheticamed-niendorf.de
            <br />
            Website: www.estheticamed-niendorf.de
          </p>
          <h2 className="em-serif mt-10 text-2xl">Berufsrechtliche Angaben</h2>
          <p>
            Berufsbezeichnung: Ärztin (verliehen in Deutschland)
            <br />
            Zuständige Kammer: Ärztekammer Hamburg
            <br />
            Berufsrechtliche Regelungen: Berufsordnung der Ärztekammer Hamburg, Heilberufegesetz
            Hamburg, zugänglich unter www.aerztekammer-hamburg.de
          </p>
          <p>Aufsichtsbehörde: Ärztekammer Hamburg, Hühnerposten 1, 20097 Hamburg</p>
          <p>
            Verantwortlich für Inhalte nach § 55 Abs. 2 RStV: Dr. med. Chatera Amirzada, Tibarg 11,
            22459 Hamburg
          </p>
          <h2 className="em-serif mt-10 text-2xl">Haftungsausschluss</h2>
          <p>
            <strong>Haftung für Inhalte:</strong> Die Inhalte dieser Website wurden mit
            größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
            übernehmen wir jedoch keine Haftung.
          </p>
          <p>
            <strong>Haftung für externe Links:</strong> Für Inhalte externer Links übernehmen wir
            keine Verantwortung. Für Schäden oder Verluste, die durch die Nutzung verlinkter
            Inhalte entstehen, haftet ausschließlich der Betreiber der jeweiligen Seite.
          </p>
          <p>
            <strong>Haftung für Schäden:</strong> Wir haften nicht für Schäden, die durch die
            Nutzung der Website entstehen, soweit diese nicht auf vorsätzlichem oder grob
            fahrlässigem Verhalten beruhen.
          </p>
          <p>
            <strong>Medizinischer Hinweis:</strong> Die auf dieser Website bereitgestellten
            Informationen dienen ausschließlich der allgemeinen Information und ersetzen keine
            individuelle medizinische Beratung oder Untersuchung. Bei gesundheitlichen Beschwerden
            wenden Sie sich bitte an Ihre behandelnde Ärztin.
          </p>
          <p>
            <strong>Urheberrecht:</strong> Alle Texte, Bilder, Grafiken und Inhalte dieser Website
            sind urheberrechtlich geschützt. Jede Vervielfältigung oder Verwendung bedarf der
            schriftlichen Zustimmung der Praxis.
          </p>
        </div>
      </section>
    </main>
  );
}
