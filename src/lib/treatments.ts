export type Block = {
  h?: string;
  p?: string[];
  list?: string[];
  steps?: string[];
};

export type CategoryId = "aesthetik" | "alternativ";

export type Treatment = {
  slug: string;
  title: string;
  category: CategoryId;
  teaser: string;
  lead: string;
  blocks: Block[];
};

export const CATEGORY_LABEL: Record<CategoryId, string> = {
  aesthetik: "Ästhetische Medizin",
  alternativ: "Alternative Medizin",
};

export const CATEGORY_PATH: Record<CategoryId, "/aesthetische-medizin" | "/alternative-medizin"> = {
  aesthetik: "/aesthetische-medizin",
  alternativ: "/alternative-medizin",
};

export const TREATMENTS: Treatment[] = [
  {
    slug: "faltenbehandlung-und-konturierung",
    title: "Faltenbehandlung & Konturierung",
    category: "aesthetik",
    teaser: "Botox, Hyaluron und Biostimulatoren für harmonische, natürliche Ergebnisse.",
    lead: "Wir verbinden modernste, minimalinvasive Verfahren der ästhetischen Medizin mit individueller Beratung, um Ihr Erscheinungsbild harmonisch zu unterstützen. Mit Botox, Hyaluron sowie den Biostimulatoren Radiesse® und Sculptra® gestalten wir Behandlungen, die natürlich wirken und die Hautstruktur sanft fördern.",
    blocks: [
      {
        h: "Botox: gezielte Entspannung der Mimik",
        p: ["Botox glättet sanft Mimikbereiche wie Stirn, Zornesfalte oder Krähenfüße."],
        list: [
          "Harmonisierung von Gesichtsausdruck und Linienbildung",
          "Präventive Unterstützung bei dynamischen Gesichtszügen",
          "Schnelle, minimalinvasive Behandlung ohne Ausfallzeit",
        ],
      },
      {
        h: "Hyaluron: natürliche Volumenunterstützung",
        p: ["Hyaluronsäure wirkt als natürlicher Feuchtigkeitsspeicher und eignet sich zur Unterstützung von Gesichtskonturen und zur Volumenauffüllung."],
        list: [
          "Sanfte Auffüllung von Wangen, Lippen und weiteren Konturbereichen",
          "Unterstützung der Hautstruktur für ein vitales Erscheinungsbild",
          "Sofort wahrnehmbare, natürliche Optik",
        ],
      },
      {
        h: "Radiesse® & Sculptra®: Biostimulatoren für natürliche Hautstruktur",
        p: ["Radiesse® (Calcium-Hydroxylapatit-Mikrosphären) und Sculptra® (Poly-L-Milchsäure) regen die körpereigene Kollagenbildung an. Anders als klassische Filler unterstützen sie Hautstruktur, Festigkeit und Kontur auf natürliche Weise."],
        list: [
          "Gesicht: Wangen, Jawline und Schläfen",
          "Hals und Dekolleté",
          "Hände",
          "Körperregionen zur Unterstützung der Hautqualität",
        ],
      },
      {
        h: "So läuft die Behandlung ab",
        steps: [
          "Analyse und Beratung: individuelle Haut- und Ausgangsbefunde",
          "Behandlung: präzise, minimalinvasive Injektionen",
          "Nachsorge: leichte Pflegehinweise, bei Bedarf Kombination mit weiteren Anwendungen",
          "Ergebnisentwicklung: harmonische, schrittweise Wirkung ohne künstliche Optik",
        ],
      },
      {
        h: "Gut zu wissen",
        p: [
          "Alle Anwendungen sind minimalinvasiv, gut verträglich und werden individuell auf Ihre Bedürfnisse abgestimmt. Vor jeder Behandlung wählen wir gemeinsam die optimale Methode für Ihre Hautstruktur und Kontur.",
          "Jede Behandlung ist präzise, ästhetisch und elegant. Die Ergebnisse wirken harmonisch, subtil und nachhaltig, ohne überkorrigiert zu erscheinen.",
        ],
      },
    ],
  },
  {
    slug: "aesthetische-mesotherapie",
    title: "Ästhetische Mesotherapie",
    category: "aesthetik",
    teaser: "Hochkonzentrierte Wirkstoffe für Struktur, Feuchtigkeit und Frische der Haut.",
    lead: "Die ästhetische Mesotherapie versorgt die Haut gezielt mit hochkonzentrierten Wirkstoffen wie Vitaminen, Hyaluronsäure und Mineralstoffen.",
    blocks: [
      {
        h: "Mögliche Effekte",
        list: [
          "Unterstützung von Hautstruktur und Elastizität",
          "Intensive Feuchtigkeitsversorgung",
          "Aktivierung der natürlichen Regeneration",
        ],
      },
      { p: ["Die Behandlung lässt sich individuell anpassen und sorgt für ein gepflegtes, vital wirkendes Hautgefühl."] },
    ],
  },
  {
    slug: "prp",
    title: "PRP (Platelet Rich Plasma)",
    category: "aesthetik",
    teaser: "Microneedling mit PRP, Exosomen oder Polynukleotiden für intensive Regeneration.",
    lead: "Microneedling arbeitet mit feinen, sterilen Mikronadeln, die die Haut sanft stimulieren und die Aufnahme wertvoller Wirkstoffe deutlich erhöhen.",
    blocks: [
      {
        h: "Kombinationsmöglichkeiten",
        list: [
          "PRP (Platelet Rich Plasma): Eigenblutplasma mit Wachstumsfaktoren zur Unterstützung der Hautregeneration",
          "Exosomen: Zellkommunikationspartikel, die Hautstruktur und Elastizität fördern",
          "Polynukleotide: natürliche Nukleinsäuren zur Unterstützung von Hautheilung und Feuchtigkeitsversorgung",
        ],
      },
      {
        h: "Mögliche Effekte",
        list: ["Förderung eines glatteren Hautgefühls", "Verbesserung von Hautstruktur und Ausstrahlung"],
      },
      {
        h: "Kombination für optimale Ergebnisse",
        p: ["Die Verbindung von Mesotherapie, Microneedling und PRP, Exosomen oder Polynukleotiden ermöglicht eine intensive Hautpflege: Wirkstoffe werden tief in die Haut eingebracht, während die Haut sanft stimuliert wird."],
      },
      {
        h: "Gut zu wissen",
        p: ["Vor jeder Anwendung erfolgt eine professionelle Hautanalyse und Beratung, um die Behandlung individuell abzustimmen."],
      },
    ],
  },
  {
    slug: "microneedling",
    title: "Microneedling",
    category: "aesthetik",
    teaser: "Feine Mikrokanäle für ein glatteres, ebenmäßigeres Hautbild.",
    lead: "Microneedling stimuliert die Haut über feine Mikrokanäle. Die Hautoberfläche kann sich dadurch glatter anfühlen und gleichmäßiger erscheinen.",
    blocks: [
      { p: ["Die Methode eignet sich besonders zur Verbesserung des Hautbildes, bei Narben und feinen Linien. Für einen sichtbar frischeren Teint."] },
    ],
  },
  {
    slug: "mesohair",
    title: "Mesohair",
    category: "aesthetik",
    teaser: "Gezielte Wirkstoffversorgung für Haarwurzeln und Kopfhaut.",
    lead: "Mesohair ist eine innovative, minimalinvasive Methode zur Unterstützung der Haargesundheit und Kopfhautpflege. Hochkonzentrierte Wirkstoffe wie Vitamine, Mineralstoffe, Aminosäuren und bioaktive Substanzen werden direkt in die Kopfhaut eingebracht.",
    blocks: [
      {
        h: "Mögliche Effekte",
        list: ["Unterstützung der Haarwurzeln", "Förderung eines gesunden Haargefühls", "Vitalisierung der Kopfhaut"],
      },
      {
        h: "So läuft die Behandlung ab",
        steps: [
          "Analyse und Beratung: Haarsituation, Kopfhautzustand und individuelle Bedürfnisse",
          "Therapieplanung: Auswahl der passenden Wirkstoffkombination",
          "Injektion: mikrodosierte Applikation in die gewünschten Bereiche",
          "Nachsorge: Empfehlung von Pflegeprodukten oder ergänzenden Anwendungen",
        ],
      },
      { h: "Gut zu wissen", p: ["Mesohair ist sanft, gut verträglich und wird individuell auf Ihre Kopfhautbedürfnisse abgestimmt."] },
    ],
  },
  {
    slug: "profilho",
    title: "Profhilo",
    category: "aesthetik",
    teaser: "Hochreine Hyaluronsäure für intensive Feuchtigkeit und sanfte Hautauffrischung.",
    lead: "Profhilo ist eine innovative Form der Hyaluronbehandlung, bei der hochreine Hyaluronsäure großflächig in die Haut eingebracht wird.",
    blocks: [
      { p: ["Die Haut kann so intensiv mit Feuchtigkeit versorgt werden und erhält ein glattes, ebenmäßiges Aussehen. Ideal zur sanften Hautauffrischung."] },
    ],
  },
  {
    slug: "darmgesundheit-und-mikrobiom",
    title: "Darmgesundheit & Mikrobiom",
    category: "alternativ",
    teaser: "Laborbasierte Stuhldiagnostik und individuelle Konzepte für einen starken Darm.",
    lead: "Ein gesunder Darm ist weit mehr als Verdauung. Er beeinflusst Immunsystem, Stoffwechsel, Haut, Energielevel und sogar die Psyche. In unserer Praxis bieten wir eine fundierte, laborbasierte Stuhldiagnostik, um funktionelle Störungen des Darms zu erkennen und gezielt zu begleiten.",
    blocks: [
      {
        h: "Diagnostik mit dem Enterosan® Labor",
        p: ["In Zusammenarbeit mit dem Enterosan® Labor analysieren wir die Zusammensetzung der Darmflora (Mikrobiom), das Vorkommen von Pilzen und Hefen, Entzündungs- und Schutzmarker der Darmschleimhaut sowie Hinweise auf eine gestörte Darmbarriere im Sinne eines sogenannten Leaky Gut. Eine erhöhte Darmdurchlässigkeit kann dazu führen, dass unerwünschte Stoffe in den Körper gelangen und vielfältige Beschwerden begünstigt werden."],
      },
      {
        h: "Ihr individuelles Konzept",
        p: ["Auf Grundlage der Ergebnisse entwickeln wir ein individuelles Konzept zum gezielten Wiederaufbau der Darmflora und zur Stabilisierung der Darmschleimhaut. Ergänzend besprechen wir eine individuell abgestimmte Ernährung, die sich konkret an Ihren Darmergebnissen orientiert und im Alltag gut umsetzbar ist. Ziel ist es, den Darm nachhaltig zu entlasten und zu stärken."],
      },
      {
        h: "IgE-Testung auf Nahrungsmittelallergien",
        p: [
          "Zusätzlich bieten wir eine IgE-basierte Testung auf Nahrungsmittelallergien an, um echte allergische Auslöser sicher zu identifizieren und die Darmtherapie sinnvoll zu ergänzen. Der moderne Bluttest weist spezifische IgE-Antikörper gegen zahlreiche Nahrungsmittel nach.",
          "Der Test zeigt, welche Lebensmittel allergische Sofortreaktionen auslösen können, etwa Hautausschläge, Atembeschwerden oder Magen-Darm-Beschwerden. Ideal für alle, die wiederkehrende Beschwerden haben und ihre Ernährung gezielt anpassen möchten.",
        ],
      },
    ],
  },
  {
    slug: "intravasale-lasertherapie-nach-weber",
    title: "Intravasale Lasertherapie nach Weber",
    category: "alternativ",
    teaser: "Sanfte Lichttherapie direkt im Blut für Regeneration und Immunsystem.",
    lead: "Bei der intravasalen Lasertherapie nach Weber wird Licht über eine kleine Venenkanüle direkt ins Blut geleitet.",
    blocks: [
      {
        p: [
          "Das Laserlicht unterstützt die Zellen bei ihrer Arbeit, verbessert die Sauerstoffnutzung, reduziert Entzündungen und fördert die Regeneration.",
          "Die Methode kann besonders bei chronischen Entzündungen, Erschöpfung, Durchblutungsstörungen und Schmerzen sowie zur Stärkung des Immunsystems hilfreich sein.",
        ],
      },
    ],
  },
  {
    slug: "kurative-mesotherapie",
    title: "Kurative Mesotherapie",
    category: "alternativ",
    teaser: "Punktgenaue Wirkstoffinjektionen bei akuten und chronischen Beschwerden.",
    lead: "Die kurative Mesotherapie ist eine moderne, medizinische Behandlungsmethode, die akute und chronische Beschwerden gezielt behandelt. In unserer Praxis in Hamburg setzen wir sie erfolgreich ein, um Schmerzen zu lindern, die Heilung zu fördern und die Mobilität zu verbessern.",
    blocks: [
      {
        h: "Gezielte Behandlung direkt an der Problemstelle",
        p: ["Hochkonzentrierte Wirkstoffe wie Vitamine, Mineralstoffe, Aminosäuren oder Medikamente werden direkt in die betroffene Haut-, Muskel- oder Gelenkregion injiziert. So wirken die Substanzen punktgenau dort, wo sie benötigt werden, ohne den gesamten Körper zu belasten."],
      },
      {
        h: "Typische Einsatzgebiete",
        list: [
          "Rückenschmerzen, Nacken- und Schulterschmerzen",
          "Gelenk- und Muskelschmerzen, zum Beispiel an Knie, Hüfte oder Ellbogen",
          "Sehnen- und Bänderverletzungen",
          "Lokale Entzündungen und Durchblutungsstörungen",
          "Unterstützung der Regeneration nach Verletzungen oder Operationen",
        ],
      },
      {
        h: "Ihre Vorteile",
        list: [
          "Schnelle Wirkung: Verbesserungen oft schon nach wenigen Sitzungen spürbar",
          "Schonend: minimalinvasiv, ohne systemische Belastung",
          "Individuell: Wirkstoffkombination und Dosierung exakt auf Ihre Beschwerden abgestimmt",
          "Gezielt: wirkt direkt an der schmerzenden oder verletzten Stelle",
        ],
      },
      {
        h: "So läuft die Behandlung ab",
        steps: [
          "Anamnese und Diagnose: genaue Untersuchung Ihrer Beschwerden",
          "Therapieplanung: individuelle Wirkstoffauswahl",
          "Injektion der Wirkstoffe in die betroffene Region",
          "Nachsorge: wenige Sitzungen in wöchentlichen Abständen für optimale Ergebnisse",
        ],
      },
      {
        h: "Für wen geeignet?",
        p: ["Die kurative Mesotherapie ist ideal für Erwachsene, die unter lokalen Schmerzen, Muskel- oder Gelenkbeschwerden leiden und eine sanfte, effektive Therapie suchen."],
      },
    ],
  },
];

export function treatmentsByCategory(c: CategoryId): Treatment[] {
  return TREATMENTS.filter((t) => t.category === c);
}

export function findTreatment(slug: string): Treatment | undefined {
  return TREATMENTS.find((t) => t.slug === slug);
}
