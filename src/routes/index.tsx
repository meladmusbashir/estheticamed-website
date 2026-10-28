import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { SITE } from "../lib/site";
import { CtaPill, CtaLine, CtaFrame } from "../components/site/cta";
import { Rise } from "../components/site/rise";

export const Route = createFileRoute("/")({
  component: Index,
});

const WELTEN = [
  {
    to: "/aesthetische-medizin",
    title: "Ästhetische Medizin",
    img: "/assets/img-aesthetik.jpg",
    text: "Faltenbehandlung und Konturierung, PRP, Mesotherapie, Microneedling, Profhilo und Mesohair.",
  },
  {
    to: "/apparative-aesthetische-medizin",
    title: "Apparative ästhetische Medizin",
    img: "/assets/img-apparativ.jpg",
    text: "HIFU, CO2-Laser sowie IPL- und YAG-Systeme von Candela Nordlys.",
  },
  {
    to: "/alternative-medizin",
    title: "Alternative Medizin",
    img: "/assets/img-naturheilkunde.jpg",
    text: "Darmgesundheit, kurative Mesotherapie und intravasale Lasertherapie nach Weber.",
  },
  {
    to: "/individuelle-infusionstherapien",
    title: "Individuelle Infusionstherapien",
    img: "/assets/img-infusion.jpg",
    text: "Wichtige Mikronährstoffe direkt in den Blutkreislauf, individuell zusammengestellt.",
  },
] as const;

const PRINZIPIEN = [
  {
    t: "Natürliche Ergebnisse",
    d: "Unser Anspruch ist es, Ihre natürliche Schönheit stilvoll zu unterstreichen.",
  },
  {
    t: "Ausführliche Beratung",
    d: "Eine persönliche, fundierte Beratung bildet die Basis jeder Behandlung. Wir nehmen uns Zeit, Ihre Wünsche ganzheitlich zu verstehen und ein maßgeschneidertes Konzept zu entwickeln.",
  },
  {
    t: "Modernste Verfahren",
    d: "Innovative, schonende Methoden ermöglichen ästhetische Optimierungen auf höchstem Niveau: effektiv, präzise und mit minimaler Ausfallzeit.",
  },
  {
    t: "Longlife Beauty Concept",
    d: "Wahre Schönheit entsteht im Einklang von äußerer Ästhetik und innerem Wohlbefinden. Unser ganzheitliches Konzept vereint moderne Schönheitsmedizin und Gesundheitsbewusstsein unter einem Dach.",
  },
] as const;

const FAQ = [
  {
    q: "Ist die Behandlung schmerzhaft?",
    a: [
      "Unsere Behandlungen sind so konzipiert, dass Ihr Komfort stets im Vordergrund steht. Je nach Verfahren kann ein leichtes Empfinden spürbar sein. Durch modernste Technologie und individuell angepasste Methoden verläuft jede Behandlung so angenehm wie möglich.",
      "Intensität und Ablauf passen wir genau auf Ihre Bedürfnisse an.",
    ],
  },
  {
    q: "Wie viele Sitzungen benötige ich?",
    a: [
      "Die Anzahl der Sitzungen hängt von der individuellen Ausgangssituation und dem gewünschten Ergebnis ab. In der Erstberatung besprechen wir gemeinsam einen maßgeschneiderten Behandlungsplan, abgestimmt auf Ihre Ziele, Ihre Haut und Ihren Gesundheitszustand.",
      "So erreichen Sie optimale Ergebnisse auf effiziente und komfortable Weise.",
    ],
  },
  {
    q: "Gibt es Ausfallzeiten?",
    a: [
      "Die meisten Behandlungen sind minimalinvasiv oder non-invasiv, Ausfallzeiten sind in der Regel sehr gering. Manche Verfahren erfordern kurze Erholungsphasen, über die wir Sie selbstverständlich ausführlich informieren.",
      "Jede Behandlung wird individuell geplant, damit Ihr Alltag so wenig wie möglich beeinträchtigt wird.",
    ],
  },
  {
    q: "Was übernimmt die Krankenkasse?",
    a: [
      "Die Übernahme hängt von der Art der Behandlung ab. Medizinisch notwendige Therapien können teilweise erstattungsfähig sein, ästhetische Leistungen werden in der Regel privat getragen.",
      "Wir beraten Sie transparent über mögliche Kosten und individuelle Optionen, damit Sie jederzeit volle Klarheit haben.",
    ],
  },
  {
    q: "Wie läuft die Erstberatung ab?",
    a: [
      "In einem persönlichen Gespräch lernen wir Sie kennen, analysieren Ihre Wünsche und erläutern die geeigneten Behandlungsmöglichkeiten. Jede Beratung ist individuell, ausführlich und unverbindlich.",
      "Dabei verbinden wir medizinische Expertise mit hohem ästhetischem Anspruch, um gemeinsam den für Sie passenden Behandlungsplan zu entwickeln.",
    ],
  },
] as const;

function Index() {
  const mediaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mediaRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 800);
        el.style.transform = "translateY(" + y * 0.16 + "px) scale(1.06)";
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <main>
      <section className="relative flex min-h-dvh items-end overflow-hidden">
        <div ref={mediaRef} className="absolute inset-0 will-change-transform" style={{ transform: "scale(1.06)" }}>
          <video
            className="h-full w-full object-cover"
            src="/assets/hero.mp4"
            poster="/assets/hero-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(12,20,35,.68) 0%, rgba(12,20,35,.16) 48%, rgba(12,20,35,.28) 100%)",
          }}
        />
        <div className="em-container relative z-10 w-full pb-20 pt-32 text-[#FAF7F2] md:pb-28">
          <Rise as="p" className="em-eyebrow" >
            <span style={{ color: "#D8CDBB" }}>Privatpraxis für Ästhetische & Alternative Medizin, Hamburg Niendorf</span>
          </Rise>
          <Rise d={1} as="h1" className="em-serif mt-5 max-w-3xl text-5xl leading-[1.05] md:text-7xl">
            Natürliche Schönheit, ganzheitlich gedacht.
          </Rise>
          <Rise d={2} as="p" className="mt-6 max-w-xl text-base leading-relaxed opacity-90">
            Individuelle Naturheilkunde und innovative ästhetische Verfahren, ärztlich betreut und aus einer Hand.
          </Rise>
          <Rise d={3} className="mt-9 flex flex-wrap items-center gap-8">
            <CtaPill to="/kontakt">Termin anfragen</CtaPill>
            <CtaLine to="/" hash="behandlungen">Behandlungen entdecken</CtaLine>
          </Rise>
        </div>
      </section>

      <section className="em-container py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="em-serif text-3xl leading-snug md:text-[2.6rem] md:leading-[1.25]">
            Präzision, Harmonie und natürliche Ergebnisse stehen im Mittelpunkt. In stilvoller
            Atmosphäre verbinden wir moderne Schönheitsmedizin und Gesundheitsbewusstsein unter
            einem Dach.
          </p>
          <div className="mx-auto mt-10 h-px w-16" style={{ background: "var(--em-bronze)" }} />
        </div>
      </section>

      <section style={{ background: "var(--em-cream)" }}>
        <div className="em-container py-20 md:py-28">
          <h2 className="em-serif text-3xl md:text-4xl">Worauf Sie sich verlassen können</h2>
          <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
            {PRINZIPIEN.map((p, i) => (
              <div key={p.t} className={"em-hairline pt-6" + (i % 2 === 1 ? " md:mt-10" : "")}>
                <h3 className="em-serif text-2xl">{p.t}</h3>
                <p className="mt-3 max-w-md leading-relaxed text-[var(--em-grey)]">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="behandlungen" className="em-container py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="em-serif max-w-md text-3xl md:text-4xl">Entdecken Sie unsere Behandlungswelten</h2>
          <CtaLine to="/preisliste">Zur Preisliste</CtaLine>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <a href={WELTEN[0].to} className="em-card group block lg:col-span-5">
            <div className="em-frame aspect-[3/4]">
              <img src={WELTEN[0].img} alt={WELTEN[0].title} className="em-img" loading="lazy" />
            </div>
            <h3 className="em-serif mt-5 text-2xl">{WELTEN[0].title}</h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--em-grey)]">{WELTEN[0].text}</p>
            <span className="em-cta-line mt-4">Mehr erfahren</span>
          </a>
          <div className="flex flex-col gap-10 lg:col-span-7">
            {WELTEN.slice(1).map((w) => (
              <a key={w.to} href={w.to} className="em-card group grid items-center gap-6 md:grid-cols-[1.1fr_1fr]">
                <div className="em-frame aspect-[16/10]">
                  <img src={w.img} alt={w.title} className="em-img" loading="lazy" />
                </div>
                <div>
                  <h3 className="em-serif text-2xl">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--em-grey)]">{w.text}</p>
                  <span className="em-cta-line mt-4">Mehr erfahren</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--em-cream)" }}>
        <div className="em-container grid items-center gap-12 py-20 md:grid-cols-2 md:py-28">
          <div className="em-frame aspect-[4/3]">
            <img src="/assets/img-praxis.jpg" alt="Behandlungsraum der Praxis" className="em-img" loading="lazy" />
          </div>
          <div>
            <h2 className="em-serif text-3xl md:text-4xl">Ein Ort, der Ruhe ausstrahlt</h2>
            <p className="mt-5 leading-relaxed">
              Unsere Praxis am Tibarg 11 vereint moderne Architektur, elegante Einrichtung und
              High-End-Medizintechnik zu einem harmonischen Gesamterlebnis. Jeder Behandlungsraum
              schafft eine Atmosphäre von Ruhe, Diskretion und Luxus.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--em-grey)]">
              Die Zweigstelle am Tibarg wird ausschließlich als Privatpraxis für ästhetische und
              alternative Medizin geführt. Für hausärztliche Leistungen steht Ihnen unsere
              Hauptpraxis am Ernst-Mittelbach-Ring 80 uneingeschränkt zur Verfügung.
            </p>
            <div className="mt-8 flex flex-wrap gap-8">
              <CtaLine to="/praxis-und-expertise">Praxis & Expertise</CtaLine>
              <a href={SITE.hausarztUrl} rel="noopener" className="em-cta-line">
                <span>Zur Hausarztpraxis</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="em-container py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-[1fr_1.6fr]">
          <div>
            <h2 className="em-serif text-3xl md:text-4xl">Ihre Fragen, unsere Antworten</h2>
            <p className="mt-4 leading-relaxed text-[var(--em-grey)]">
              Alles Weitere besprechen wir gern persönlich in Ihrer Erstberatung.
            </p>
          </div>
          <div className="em-faq">
            {FAQ.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <div className="em-faq-body">
                  {f.a.map((p) => (
                    <p key={p} className="mb-3">
                      {p}
                    </p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--em-ink)" }}>
        <div className="em-container flex flex-col items-start gap-10 py-20 text-[#EFE9DD] md:flex-row md:items-center md:justify-between md:py-24">
          <div>
            <h2 className="em-serif text-3xl md:text-4xl">Vereinbaren Sie Ihren persönlichen Termin</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed opacity-75">
              {SITE.hours}. Rufen Sie uns an oder schreiben Sie uns, wir melden uns schnellstmöglich
              bei Ihnen.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm">
              <a href={SITE.phone1.href} className="opacity-85 hover:opacity-100">{SITE.phone1.label}</a>
              <a href={SITE.phone2.href} className="opacity-85 hover:opacity-100">{SITE.phone2.label}</a>
              <a href={"mailto:" + SITE.email} className="opacity-85 hover:opacity-100">{SITE.email}</a>
            </div>
          </div>
          <CtaFrame to="/kontakt">Termin anfragen</CtaFrame>
        </div>
      </section>
    </main>
  );
}
