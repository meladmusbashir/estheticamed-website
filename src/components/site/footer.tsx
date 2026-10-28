import { Link } from "@tanstack/react-router";
import { SITE } from "../../lib/site";

const col = "flex flex-col gap-2 text-sm";
const head = "em-serif mb-3 text-lg italic text-[#D8CDBB]";

export function SiteFooter() {
  return (
    <footer style={{ background: "var(--em-ink)" }}>
      <div className="em-container py-16 text-[#EFE9DD] md:py-20">
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <p className="em-serif text-2xl tracking-[0.16em]">ESTHETICAMED</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed opacity-70">
              {SITE.claim} in {SITE.district}. Natürliche Ergebnisse, persönliche Betreuung,
              ärztliche Expertise.
            </p>
          </div>
          <nav aria-label="Behandlungen im Footer" className={col}>
            <p className={head}>Behandlungen</p>
            <Link to="/aesthetische-medizin" className="opacity-80 hover:opacity-100">Ästhetische Medizin</Link>
            <Link to="/apparative-aesthetische-medizin" className="opacity-80 hover:opacity-100">Apparative ästhetische Medizin</Link>
            <Link to="/alternative-medizin" className="opacity-80 hover:opacity-100">Alternative Medizin</Link>
            <Link to="/individuelle-infusionstherapien" className="opacity-80 hover:opacity-100">Individuelle Infusionstherapien</Link>
            <Link to="/preisliste" className="opacity-80 hover:opacity-100">Preisliste</Link>
          </nav>
          <nav aria-label="Praxis im Footer" className={col}>
            <p className={head}>Praxis</p>
            <Link to="/praxis-und-expertise" className="opacity-80 hover:opacity-100">Praxis & Expertise</Link>
            <Link to="/kontakt" className="opacity-80 hover:opacity-100">Kontakt & Anfahrt</Link>
            <a href={SITE.hausarztUrl} rel="noopener" className="opacity-80 hover:opacity-100">
              Zur Hausarztpraxis
            </a>
          </nav>
          <div className={col}>
            <p className={head}>Kontakt</p>
            <p className="opacity-80">{SITE.street}, {SITE.zipCity}</p>
            <a href={SITE.phone1.href} className="opacity-80 hover:opacity-100">{SITE.phone1.label}</a>
            <a href={SITE.phone2.href} className="opacity-80 hover:opacity-100">{SITE.phone2.label}</a>
            <a href={"mailto:" + SITE.email} className="opacity-80 hover:opacity-100">{SITE.email}</a>
            <p className="opacity-60">{SITE.hours}</p>
          </div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-[rgba(239,233,221,0.18)] pt-6 text-xs opacity-60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}, {SITE.street}, {SITE.zipCity}</p>
          <div className="flex flex-wrap gap-5">
            <Link to="/impressum">Impressum</Link>
            <Link to="/datenschutz">Datenschutz</Link>
            <Link to="/rechtliches">AGB, Widerruf & Ärztehinweis</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
