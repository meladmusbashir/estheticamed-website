import { createFileRoute } from "@tanstack/react-router";
import { ContactBand, PageIntro } from "../components/site/page";
import { PRICE_GROUPS, PRICE_INTRO, PRICE_VAT_NOTE } from "../lib/prices";

export const Route = createFileRoute("/preisliste")({
  head: () => ({
    meta: [
      { title: "Preisliste | EstheticaMed Amirzada Hamburg" },
      {
        name: "description",
        content:
          "Transparente Preise für ästhetische Behandlungen, Laser, Infusionen und ganzheitliche Konzepte bei EstheticaMed Amirzada in Hamburg Niendorf.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main>
      <PageIntro kicker="Transparent und fair" title="Preisliste">
        {PRICE_INTRO}
      </PageIntro>
      <section className="em-container pb-20 md:pb-28">
        <div className="gap-16 md:columns-2">
          {PRICE_GROUPS.map((g) => (
            <div key={g.title} className="mb-12 break-inside-avoid">
              <h2 className="em-serif text-2xl">{g.title}</h2>
              {g.note ? <p className="em-note mt-2 max-w-md">{g.note}</p> : null}
              <table className="em-ledger mt-4">
                <tbody>
                  {g.items.map((it) => (
                    <tr key={it.name}>
                      <td>
                        <span className="block">{it.name}</span>
                        {it.note ? <span className="em-note mt-1 block">{it.note}</span> : null}
                      </td>
                      <td>{it.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
        <p className="em-note mt-2">{PRICE_VAT_NOTE}</p>
      </section>
      <ContactBand />
    </main>
  );
}
