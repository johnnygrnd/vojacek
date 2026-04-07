import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/sections/AnimatedSection";
import heroImg from "@/assets/hero-portrait.jpg";
import aboutImg from "@/assets/about-portrait.jpg";
import { ArrowRight } from "lucide-react";

/* ─── DATA ─── */

const results = [
  { label: "Prodej podniku", main: "+120 %", context: "Navýšení prodejní ceny oproti původní nabídce" },
  { label: "Nákup nemovitosti", main: "−40,5 mil. Kč", context: "Úspora při vyjednávání kupní ceny" },
  { label: "Česká energetika", main: "14 mld. Kč", context: "Celková dosažená úspora v regulačním procesu" },
  { label: "Mzdové vyjednávání", main: "−8,5 p.b.", context: "Snížení mzdových nákladů oproti požadavku odborů" },
];

const testimonials = [
  { quote: "Ondřej nám pomohl vyjednat podmínky, které jsme považovali za nedosažitelné. Klid, příprava a přesnost.", author: "CEO, výrobní společnost" },
  { quote: "Profesionální zastoupení při prodeji firmy. Výsledek překonal naše očekávání o desítky procent.", author: "Majitel, strojírenský podnik" },
  { quote: "Kurz vyjednávání změnil přístup celého obchodního týmu. Praktické, tvrdé, použitelné hned.", author: "Obchodní ředitel, IT firma" },
  { quote: "Ondřej přistupuje k věci systematicky a diskrétně. Přesně to, co jsme potřebovali.", author: "CFO, energetická společnost" },
];

/* ─── PAGE ─── */

export default function Index() {
  return (
    <Layout>
      {/* ═══════ HERO ═══════ */}
      <section className="relative bg-foreground min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 md:right-[35%]">
          <img src={heroImg} alt="Ondřej Vojáček" className="w-full h-full object-cover object-[35%_15%]" width={1920} height={1080} />
        </div>
        <div className="absolute inset-0 hidden md:block pointer-events-none" style={{ background: `linear-gradient(to right, hsl(var(--foreground) / 0) 0%, hsl(var(--foreground) / 0.15) 30%, hsl(var(--foreground) / 0.6) 50%, hsl(var(--foreground) / 0.92) 65%, hsl(var(--foreground)) 75%)` }} />
        <div className="absolute inset-0 md:hidden pointer-events-none" style={{ background: `linear-gradient(to bottom, hsl(var(--foreground) / 0) 30%, hsl(var(--foreground) / 0.5) 60%, hsl(var(--foreground)) 85%)` }} />

        <div className="relative w-full container-wide">
          <div className="md:ml-auto md:max-w-[520px] mt-[55vh] md:mt-0 px-6 md:px-0 pb-16 md:pb-0">
            <AnimatedSection>
              <div className="w-10 h-px bg-brass mb-6" />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.12] tracking-tight text-primary-foreground mb-6" style={{ fontFamily: "var(--font-serif)" }}>
                V každém jednání je prostor na lepší výsledek. Najdu&nbsp;ho.
              </h1>
              <p className="body-md text-primary-foreground/55 mb-10 max-w-md">
                Zastupuji firmy i jednotlivce v jednáních, kde jde o podstatné peníze, podmínky nebo vztahy. Připravuji strategie a učím vyjednávat.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button variant="premium" size="xl" asChild>
                  <Link to="/kontakt">Popsat situaci</Link>
                </Button>
                <Button variant="premium-outline" size="xl" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                  <Link to="/kurzy">Tréninky vyjednávání</Link>
                </Button>
              </div>
              <p className="text-xs text-primary-foreground/30">Úvodní konzultace zdarma · Diskrétnost je samozřejmost</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════ AUTHORITY BAR ═══════ */}
      <section className="py-12 md:py-16 border-b border-border/40">
        <div className="container-wide">
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-center">
            {[
              { num: "15+", label: "let praxe" },
              { num: "mld. Kč", label: "vyjednaná hodnota" },
              { num: "EU", label: "úroveň jednání" },
              { num: "100+", label: "firemních tréninků" },
            ].map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="min-w-[120px]">
                  <p className="font-serif text-2xl md:text-3xl font-semibold text-foreground">{s.num}</p>
                  <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground mt-1">{s.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SIGNPOST — 3 BRANCHES ═══════ */}
      <section className="py-24 md:py-32 lg:py-36">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-14 md:mb-20">
            <p className="micro-text text-brass mb-4">Jak vám mohu pomoci</p>
            <h2 className="heading-lg text-balance">Co právě řešíte?</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                num: "01",
                title: "Potřebuji, aby za mě jednal profesionál",
                desc: "Zastoupím vás u stolu. Převezmu jednání, připravím strategii a dotáhnu dohodu k nejlepšímu možnému výsledku.",
                cta: "Zastupování ve vyjednávání",
                href: "/vyjednavani",
              },
              {
                num: "02",
                title: "Chci jít do jednání připravený",
                desc: "Připravím vám scénáře, argumentaci a strategii. Vy jednáte sami — ale z pozice síly a s kontrolou nad průběhem.",
                cta: "Příprava na jednání",
                href: "/vyjednavani",
              },
              {
                num: "03",
                title: "Chci naučit svůj tým vyjednávat",
                desc: "Praktické tréninky postavené na simulacích. Žádná teorie — dovednost, kterou váš tým použije hned po kurzu.",
                cta: "Tréninky vyjednávání",
                href: "/kurzy",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Link to={item.href} className="group block h-full">
                  <div className="premium-card flex flex-col h-full border-t-2 border-transparent group-hover:border-brass/40 group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                    <p className="text-xs font-semibold text-brass tracking-[0.2em] uppercase mb-5">{item.num}</p>
                    <h3 className="heading-sm mb-4">{item.title}</h3>
                    <p className="body-md text-muted-foreground mb-8 flex-1">{item.desc}</p>
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground group-hover:text-brass transition-colors">
                      {item.cta} <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ PROOF / RESULTS ═══════ */}
      <section className="py-24 md:py-32 lg:py-36 bg-foreground text-primary-foreground">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-14 md:mb-20">
            <p className="micro-text text-brass mb-4">Měřitelné výsledky</p>
            <h2 className="heading-lg text-primary-foreground text-balance">Výsledek není náhoda. Je to příprava.</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/10 rounded-sm overflow-hidden">
            {results.map((r, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-foreground p-8 md:p-10 text-center h-full flex flex-col justify-center">
                  <p className="text-xs uppercase tracking-[0.15em] text-brass mb-4">{r.label}</p>
                  <p className="font-serif text-3xl md:text-4xl font-semibold text-primary-foreground mb-3">{r.main}</p>
                  <p className="text-sm text-primary-foreground/40 leading-relaxed">{r.context}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-10">
            <p className="text-xs text-primary-foreground/30 mb-5">Detaily sdílím diskrétně, podle kontextu zakázky.</p>
            <Button variant="premium-outline" size="lg" asChild className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
              <Link to="/reference">Další výsledky a reference</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════ POSITIONING / ABOUT ═══════ */}
      <section className="py-24 md:py-32 lg:py-36">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <AnimatedSection>
              <img src={aboutImg} alt="Ondřej Vojáček" className="w-full max-w-md mx-auto" loading="lazy" width={800} height={1000} />
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="w-10 h-px bg-brass mb-6" />
              <h2 className="heading-lg mb-6">Proč klienti svěřují důležitá jednání právě mně</h2>
              <div className="space-y-4 mb-8">
                {[
                  "Zkušenosti z jednání na evropské úrovni — regulace, dotace, strategické dohody v řádech miliard.",
                  "Kombinuji akademické zázemí s tvrdou praxí. Dokázal jsem výsledky v korporátu i v osobních případech.",
                  "Neprodávám motivaci. Dodávám přípravu, scénáře a strategii. Měřitelně.",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="w-1 h-1 rounded-full bg-brass mt-2.5 shrink-0" />
                    <p className="body-md text-muted-foreground">{text}</p>
                  </div>
                ))}
              </div>
              <p className="font-serif text-lg md:text-xl font-medium text-foreground mb-8 leading-snug italic">
                „Většina lidí přichází o peníze ne proto, že by měli slabou pozici — ale proto, že šli do jednání bez strategie."
              </p>
              <Button variant="premium-outline" size="lg" asChild>
                <Link to="/o-mne">Celý profil</Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <section className="py-24 md:py-32 lg:py-36 bg-secondary/30">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-14 md:mb-20">
            <p className="micro-text text-brass mb-4">Klienti</p>
            <h2 className="heading-lg">Co říkají ti, se kterými jsem jednal</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div
                  className="h-full rounded-sm border border-foreground/[0.06] p-8 md:p-10 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col"
                  style={{ background: `linear-gradient(135deg, hsl(var(--foreground) / 0.95), hsl(var(--foreground) / 0.88))` }}
                >
                  <span className="block font-serif text-4xl text-brass/30 leading-none mb-3 select-none">„</span>
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

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="py-24 md:py-32 lg:py-36 bg-gradient-to-br from-brass/90 to-brass">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="text-xs uppercase tracking-[0.2em] text-foreground/50 mb-6">Další krok</p>
            <h2 className="heading-lg text-foreground mb-4">Popište mi situaci. Navrhnu, jak ji vyřešit.</h2>
            <p className="body-lg text-foreground/70 mb-10 max-w-xl mx-auto">
              Stačí krátký popis — co řešíte, s kým jednáte a co je v sázce. Ozvu se do 24 hodin s návrhem postupu.
            </p>
            <Button variant="premium" size="xl" asChild className="bg-foreground text-primary-foreground hover:bg-foreground/90">
              <Link to="/kontakt">Popsat situaci</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
