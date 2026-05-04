## Cíl

Na stránce `/kurzy` upravit sekci **"Veřejný trénink vyjednávání"** tak, aby:
- box zabíral celou šířku obsahu (jeden řádek, ne `max-w-2xl` karta),
- pod popisem byl seznam termínů (styl viz nahraná fotka — datum / lokalita / stav),
- **bez lektorů** (žádné fotky / jména Adam Dolník, Helena Sováková apod.).

## Změny v `src/pages/Courses.tsx`

### 1) Datový model termínů
Nad komponentou přidám konstantu:
```ts
const verejneTerminy = [
  { date: "23. května 2026", location: "Praha", status: "Vyprodáno" },
  { date: "5. června 2026",  location: "Praha", status: "Vyprodáno" },
  { date: "18. června 2026", location: "Praha", status: "Vyprodáno" },
];
```
(Termíny převzaty ze screenshotu klienta. Pokud chceš jiné, řekni.)

### 2) Sekce `#verejny-trenink` (řádky 194–226)

Nahradit současnou kartu `max-w-2xl` za **full-width** layout:

```text
┌─ heading: "Veřejný trénink vyjednávání" ────────────────────────────┐
│                                                                     │
│ ┌─ premium-card (full width) ────────────────────────────────────┐  │
│ │ [Nejoblíbenější]                                               │  │
│ │ Veřejný trénink vyjednávání             39 000 Kč  [Detail →] │  │
│ │ Třídenní intenzivní výcvik. ...                                │  │
│ │ Pro koho: ...      Délka: 3 dny                                │  │
│ │ ─────────────────────────────────────────────────────────────  │  │
│ │ NEJBLIŽŠÍ TERMÍNY                                              │  │
│ │ 🕐 23. května 2026   📍 Praha    ● Vyprodáno                   │  │
│ │ 🕐 5. června 2026    📍 Praha    ● Vyprodáno                   │  │
│ │ 🕐 18. června 2026   📍 Praha    ● Vyprodáno                   │  │
│ └────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────┘
```

Konkrétně:
- odstranit `<div className="max-w-2xl">` wrapper,
- horní část karty (badge "Nejoblíbenější", titul, popis, Pro koho/Délka, cena + CTA) zachovat, ale layoutovat do horizontálního řádku (cena + tlačítko vpravo, text vlevo) na md+,
- pod tím separator + nadpis `Nejbližší termíny` (micro-text, brass),
- seznam termínů jako stack řádků (`divide-y`) — každý řádek: `Clock` ikona + datum (font-medium), `MapPin` + lokalita, vpravo status badge `Vyprodáno` (červený text) nebo `Volná místa` (brass) — pro nyní všechny "Vyprodáno",
- na mobilu: řádek se zalomí (flex-col), datum nahoře, status pod tím,
- **žádné lektory** — fotka/jména se nezobrazují.

Ikony: `Clock`, `MapPin` z `lucide-react` (přidat do importu na ř. 8).

### 3) Drobnosti
- nedělitelné mezery: `23.\u00A0května\u00A02026` apod. (přes `{"\u00A0"}` v JSX) podle pravidla projektu,
- status "Vyprodáno" stylovat červeně, ale tlumeně, aby ladilo s "quiet luxury" tónem (např. `text-destructive/80 uppercase tracking-[0.15em] text-xs font-semibold`),
- karta `border-brass/30 border-t-2` zůstává.

## Co se NEMĚNÍ

- Ostatní sekce (`firemni-treninky`, `individualni-trenink`, FAQ, CTA, hero, signpost) zůstávají beze změny.
- Stránka `/verejny-trenink` (`PublicTraining.tsx`) se nemění — tam termíny už existují.
