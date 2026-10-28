import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { SITE } from "../../lib/site";
import { CtaPhone } from "./cta";

const NAV = [
  { to: "/praxis-und-expertise", label: "Praxis" },
  { to: "/aesthetische-medizin", label: "Ästhetische Medizin" },
  { to: "/apparative-aesthetische-medizin", label: "Apparative Medizin" },
  { to: "/alternative-medizin", label: "Alternative Medizin" },
  { to: "/individuelle-infusionstherapien", label: "Infusionen" },
  { to: "/preisliste", label: "Preise" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const overlay = pathname === "/" && !scrolled;

  return (
    <>
      <header className={"em-header " + (overlay ? "is-overlay" : "is-solid")}>
        <div className="em-container flex h-16 items-center justify-between gap-6 md:h-20">
          <Link to="/" aria-label="Zur Startseite" className="flex items-center">
            {overlay ? (
              <span className="em-serif text-xl tracking-[0.18em]">ESTHETICAMED</span>
            ) : (
              <img src="/assets/logo.png" alt={SITE.name} className="h-8 w-auto md:h-9" />
            )}
          </Link>
          <nav className="hidden items-center gap-5 xl:flex" aria-label="Hauptnavigation">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="em-nav-link"
                activeProps={{ style: { color: "var(--em-bronze)", opacity: 1 } }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-5">
            <span className="hidden lg:inline">
              <CtaPhone href={SITE.phone1.href}>{SITE.phone1.label}</CtaPhone>
            </span>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] xl:hidden"
              aria-label="Menü öffnen"
            >
              <span className="block h-px w-6 bg-current" />
              <span className="block h-px w-6 bg-current" />
            </button>
          </div>
        </div>
      </header>
      {open ? (
        <div className="em-menu" role="dialog" aria-modal="true" aria-label="Menü">
          <div className="em-container flex h-16 flex-none items-center justify-between md:h-20">
            <span className="em-serif text-xl tracking-[0.18em]">ESTHETICAMED</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-10 w-10 items-center justify-center"
              aria-label="Menü schließen"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3 3l14 14M17 3L3 17" stroke="currentColor" strokeWidth="1.25" />
              </svg>
            </button>
          </div>
          <nav
            className="em-container flex flex-1 flex-col justify-center gap-1 py-8"
            aria-label="Mobile Navigation"
          >
            <Link to="/" className="em-serif em-rise block py-2 text-3xl">
              Startseite
            </Link>
            {NAV.map((n, i) => (
              <Link
                key={n.to}
                to={n.to}
                className={"em-serif em-rise block py-2 text-3xl em-d" + Math.min(i + 1, 4)}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="em-container flex flex-none flex-col gap-2 pb-10 text-sm opacity-80">
            <a href={SITE.phone1.href}>{SITE.phone1.label}</a>
            <a href={"mailto:" + SITE.email}>{SITE.email}</a>
          </div>
        </div>
      ) : null}
    </>
  );
}
