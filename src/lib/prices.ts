export type PriceItem = { name: string; price: string; note?: string };
export type PriceGroup = { title: string; note?: string; items: PriceItem[] };

export const PRICE_INTRO =
  "Alle Preise verstehen sich inklusive Beratung und hochwertiger Produkte. Qualität, Präzision und Ihr Wohlbefinden stehen bei uns an erster Stelle.";

export const PRICE_VAT_NOTE =
  "Alle angegebenen Preise verstehen sich netto zuzüglich der gesetzlichen Mehrwertsteuer.";

export const PRICE_GROUPS: PriceGroup[] = [
  {
    title: "Botox",
    items: [
      { name: "1 Zone", price: "ab 150 €", note: "Stirn, Zornesfalte oder Krähenfüße" },
      { name: "2 Zonen", price: "250 €" },
      { name: "3 Zonen", price: "350 €" },
      { name: "Bunny Lines, Brow Lift oder Lip Flip", price: "70 €" },
      { name: "Achsel-Schwitzen (Hyperhidrose)", price: "390 €" },
    ],
  },
  {
    title: "Hyaluronsäure",
    items: [
      { name: "1 ml", price: "250 €" },
      { name: "2 ml", price: "450 €" },
      { name: "Lippen", price: "ab 200 €" },
      { name: "Jawline oder Kinn", price: "ab 290 €" },
      { name: "Augenringe", price: "ab 250 €" },
    ],
  },
  {
    title: "Radiesse",
    items: [
      { name: "1,5 ml", price: "420 €" },
      { name: "3 ml", price: "750 €" },
    ],
  },
  {
    title: "Sculptra",
    items: [
      { name: "1 Fläschchen", price: "520 €" },
      { name: "2 Fläschchen", price: "950 €" },
    ],
  },
  {
    title: "Exosomen",
    items: [
      { name: "Gesicht", price: "390 €" },
      { name: "Gesicht und Hals", price: "550 €" },
    ],
  },
  {
    title: "Polynukleotide",
    items: [
      { name: "Gesicht", price: "280 €" },
      { name: "Augen", price: "220 €" },
      { name: "Hals / Dekolleté", price: "320 €" },
    ],
  },
  {
    title: "Microneedling (medizinisch)",
    note: "Bei Bedarf kombinierbar mit Polynukleotiden, Exosomen, Vitaminen und Hyaluron.",
    items: [
      { name: "Gesicht", price: "150 €" },
      { name: "Gesicht und Hals", price: "200 €" },
      { name: "Gesicht, Hals und Dekolleté", price: "250 €" },
    ],
  },
  {
    title: "PRP",
    items: [{ name: "PRP", price: "ab 250 €" }],
  },
  {
    title: "HIFU, Ultraschall-Lifting",
    items: [
      { name: "Unteres Gesicht (Jawline)", price: "ab 250 €" },
      { name: "Gesicht komplett", price: "ab 350 €" },
      { name: "Gesicht und Hals", price: "ab 500 €" },
      { name: "Gesicht, Hals und Dekolleté", price: "ab 700 €" },
    ],
  },
  {
    title: "CO2-Laser",
    items: [
      { name: "Gesicht", price: "590 €" },
      { name: "Augenregion", price: "320 €" },
      { name: "Narben (klein)", price: "180 €" },
    ],
  },
  {
    title: "IPL bei Altersflecken, Pigmentstörungen und Rosazea",
    items: [
      { name: "Gesicht", price: "180 €" },
      { name: "Gesicht und Hals", price: "250 €" },
      { name: "Gesicht, Hals und Dekolleté", price: "350 €" },
    ],
  },
  {
    title: "YAG-Laser",
    items: [
      { name: "Gefäße im Gesicht", price: "120 €" },
      { name: "Besenreiser (je Areal)", price: "150 €" },
    ],
  },
  {
    title: "Ernährung und Darmgesundheit: Kombipakete",
    items: [
      { name: "Energy-Reset-Paket", price: "260 €", note: "Mitobiom-Erstberatung und Therapieplan" },
      { name: "Stoffwechsel-Paket", price: "180 €", note: "Ernährungs-Erstberatung und individueller Ernährungsplan" },
      { name: "Longevity-Paket", price: "320 €", note: "Mitobiom-Beratung, Ernährungsberatung und Therapieplan" },
    ],
  },
  {
    title: "Vitamine und Infusionen",
    items: [
      { name: "Eiseninfusion", price: "ab 80 €" },
      { name: "Vitamin-C-Infusion", price: "ab 50 €" },
      { name: "Energie-Booster-Infusionen", price: "ab 60 €" },
      { name: "NAD-Infusionen", price: "ab 300 €" },
      { name: "ATP-Infusion (ATP Power)", price: "ab 60 €" },
      { name: "Drip Spa (Drip Infusion)", price: "ab 80 €" },
      { name: "PRP für Haare", price: "ab 120 €" },
    ],
  },
  {
    title: "Préime DermaFacial",
    note: "Das Préime DermaFacial kombiniert fünf fortschrittliche Technologien in einem System: tiefenwirksame Reinigung, Hydration, Straffung und sichtbare Hautverjüngung. Die Behandlung dauert ca. 60 bis 90 Minuten.",
    items: [
      { name: "Express Glow (Step 1, 2 und 5)", price: "169 €", note: "Gesicht: Tiefenreinigung und Tiefenhydratisierung" },
      { name: "Signature Hollywood (Step 1 bis 5)", price: "199 €", note: "Gesicht: Tiefenreinigung, Tiefenhydratisierung und Verjüngung" },
      { name: "Luxus (Step 1 bis 5)", price: "249 €", note: "Gesicht, Hals und Dekolleté: Tiefenreinigung, Tiefenhydratisierung und Verjüngung" },
      { name: "Luxus Plus (Step 1 bis 6)", price: "329 €", note: "Gesicht, Hals und Dekolleté: Tiefenreinigung, Tiefenhydratisierung und Verjüngung, Einarbeitung von Exosomen mit dem Nanopen" },
      { name: "Préime DermaFacial", price: "ab 180 €" },
    ],
  },
];
