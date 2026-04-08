import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/sections/AnimatedSection";

const outcomes = [
  { label: "Prodej podniku", main: "+120 %", context: "Navýšení ceny oproti první nabídce" },
  { label: "Nákup nemovitosti", main: "\u221240,5 mil. Kč", context: "Úspora při akvizici" },
  { label: "Regulace v energetice", main: "14 mld. Kč", context: "Dosažená úspora v regulačním procesu" },
  { label: "Dotační prostředky", main: "10 mld. Kč", context: "Udrženo v ČR" },
  { label: "Mzdové vyjednávání", main: "\u22128,5 p.b.", context: "Snížení nákladů oproti požadavku odborů" },
  { label: "Nákup technologie", main: "\u22121,1 mil. Kč", context: "Úspora při nákupu" },
];

const caseTypes = [
  { title: "Obchodní smlouvy a kontrakty", desc: "Vyjednávání podmínek, cen, sankcí a termínů od prvního návrhu po uzavření dohody." },
  { title: "Prodej a nákup firem", desc: "Fúze, akvizice, vstup investora. Jednání s vysokou hodnotou a nízkou tolerancí chyb." },
  { title: "Cenová a nákupní vyjednávání", desc: "Dodavatelé, nájmy, energie. Měřitelné úspory v řádech milionů." },
  { title: "Spory a obtížné situace", desc: "Případy, kde je potřeba řešení mimo soud — nebo se na soud připravit." },
  { title: "Regulace a veřejná sféra", desc: "Evropská komise, ministerstva, regulační orgány. Jednání na úrovni miliard." },
  { title: "Osobní vyjednávání", desc: "Nemovitosti, majetkové spory, dohody s vysokou osobní hodnotou." },
];

const testimonials = [
  { quote: "Pomohl nám dosáhnout podmínek, které jsme považovali za nereálné. Příprava, klid a přesná práce s argumenty.", author: "CEO, výrobní společnost" },
  { quote: "Profesionální zastoupení při prodeji firmy. Výsledná cena překonala naše očekávání o desítky procent.", author: "Majitel, strojírenský podnik" },
  { quote: "Trénink změnil přístup celého obchodního týmu. Simulace, rozbory, okamžitá použitelnost.", author: "Obchodní ředitel, IT firma" },
  { quote: "Systematický a diskrétní přístup. Přesně to, co naše situace vyžadovala.", author: "CFO, energetická společnost" },
  { quote: "Trénink na míru pro nákupní tým. Měřitelný posun v dohodách s dodavateli.", author: "Ředitel nákupu, FMCG" },
  { quote: "Pomohl nám udržet klíčového klienta. Bez emocí, s jasným výsledkem.", author: "Country Manager, technologická firma" },
];

const sectors = [
  "Evropská komise a regulační orgány",
  "Ministerstva a veřejné instituce v ČR",
  "Výrobní a průmyslové společnosti",
  "Technologické a IT firmy",
  "Energetický sektor",
  "Nemovitostní a developerské projekty",
  "Soukromí klienti s vysokou hodnotou sporu",
];

export default function References() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 lg:py-32 bg-foreground text-primary-foreground">
        <div className="container-wide">
          <AnimatedSection className="max-w-3xl">
            <div className="w-10 h-px bg-brass mb-6" />
            <h1 className="heading-xl text-primary-foreground mb-6">
              Výsledky z praxe
            </h1>
            <p className="body-lg text-primary-foreground/60">
              Vybrané dopady z reálných zakázek. Konkrétní detaily sdílím osobně, podle kontextu.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Measurable outcomes */}
      <section className="py-24 md:py-32 lg:py-36">
        <div className="container-wide">
          <AnimatedSection className="mb-14">
            <p className="micro-text text-brass mb-4">Měřitelné výsledky</p>
            <h2 className="heading-lg">Čísla z reálných zakázek</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomes.map((r, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="premium-card text-center h-full flex flex-col items-center justify-center border-t-2 border-brass/30">
                  <p className="micro-text text-brass mb-3">{r.label}</p>
                  <p className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-2">{r.main}</p>
                  <p className="body-sm text-muted-foreground">{r.context}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Types of cases */}
      <section className="py-24 md:py-32 lg:py-36 bg-secondary/30">
        <div className="container-wide">
          <AnimatedSection className="mb-14">
            <p className="micro-text text-brass mb-4">Typy zakázek</p>
            <h2 className="heading-lg">S čím klienti přicházejí</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseTypes.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="premium-card h-full">
                  <h3 className="heading-sm mb-3">{c.title}</h3>
                  <p className="body-sm text-muted-foreground">{c.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 lg:py-36">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-14 md:mb-20">
            <p className="micro-text text-brass mb-4">Reference</p>
            <h2 className="heading-lg">Zpětná vazba z praxe</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div
                  className="h-full rounded-sm border border-foreground/[0.06] p-8 md:p-10 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col"
                  style={{ background: `linear-gradient(135deg, hsl(var(--foreground) / 0.95), hsl(var(--foreground) / 0.88))` }}
                >
                  <span className="block font-serif text-4xl text-brass/30 leading-none mb-3 select-none">{"\u201E"}</span>
                  <p className="font-serif text-lg md:text-xl text-primary-foreground/85 leading-[1.55] mb-6 flex-1">{t.quote}</p>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-px bg-brass/40" />
                    <p className="text-sm text-primary-foreground/35">{t.author}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-24 md:py-32 lg:py-36 bg-foreground text-primary-foreground">
        <div className="container-narrow">
          <AnimatedSection className="text-center mb-14">
            <p className="micro-text text-brass mb-4">Sektory</p>
            <h2 className="heading-lg text-primary-foreground">Kde jsem působil</h2>
          </AnimatedSection>
          <div className="space-y-4">
            {sectors.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.05}>
                <div className="flex items-center gap-4 py-3 border-b border-primary-foreground/10">
                  <span className="w-1 h-1 rounded-full bg-brass shrink-0" />
                  <p className="body-md text-primary-foreground/70">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 lg:py-36 bg-gradient-to-br from-brass/90 to-brass">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-lg text-foreground mb-4">Řešíte podobnou situaci?</h2>
            <p className="body-lg text-foreground/70 mb-10">Popište mi ji. Navrhnu, jak postupovat.</p>
            <Button variant="premium" size="xl" asChild className="bg-foreground text-primary-foreground hover:bg-foreground/90">
              <Link to="/kontakt">Popsat situaci</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
