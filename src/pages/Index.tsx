import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/sections/AnimatedSection";
import SectionHeading from "@/components/sections/SectionHeading";
import heroImg from "@/assets/hero-portrait.jpg";
import aboutImg from "@/assets/about-portrait.jpg";
import { useState, useEffect, useRef } from "react";

/* ─── DATA ─── */

const results = [
  { label: "Nákup nemovitosti", beforeAfter: "145 mil. Kč → 104,5 mil. Kč", main: "−40,5 mil. Kč", context: "úspora při nákupu" },
  { label: "Prodej podniku", beforeAfter: "12 mil. Kč → 26,4 mil. Kč", main: "+14,4 mil. Kč", context: "navýšení hodnoty při prodeji" },
  { label: "Mzdové vyjednávání", beforeAfter: "16 % → 7,5 %", main: "−8,5 p.b.", context: "snížení mzdových nákladů" },
  { label: "Nákup technologie", beforeAfter: "3,2 mil. Kč → 2,1 mil. Kč", main: "−1,1 mil. Kč", context: "úspora při nákupu" },
  { label: "Česká energetika", beforeAfter: "—", main: "14 mld. Kč", context: "celková dosažená úspora" },
  { label: "Dotace", beforeAfter: "—", main: "10 mld. Kč", context: "udrženo v ČR" },
  
];

const testimonials = [
  { quote: "Ondřej nám pomohl vyjednat podmínky, které jsme považovali za nedosažitelné. Klid, příprava a přesnost.", author: "CEO, výrobní společnost" },
  { quote: "Profesionální zastoupení při prodeji firmy. Výsledek překonal naše očekávání o desítky procent.", author: "Majitel, strojírenský podnik" },
  { quote: "Kurz vyjednávání změnil přístup celého obchodního týmu. Praktické, tvrdé, použitelné hned.", author: "Obchodní ředitel, IT firma" },
  { quote: "Ondřej přistupuje k věci systematicky a diskrétně. Přesně to, co jsme potřebovali.", author: "CFO, energetická společnost" },
];

/* ─── COUNT-UP HOOK ─── */

function useCountUp(target: number, duration = 1500) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { ref, value };
}

function CountUpNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const { ref, value } = useCountUp(target);
  return <span ref={ref}>{value}{suffix}</span>;
}

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
              <p className="micro-text text-brass mb-5">Vyjednavač · Konzultant · Lektor</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.12] tracking-tight text-primary-foreground mb-6" style={{ fontFamily: "var(--font-serif)" }}>
                Lepší podmínky nejsou náhoda. Jsou&nbsp;vyjednané.
              </h1>
              <p className="body-md text-primary-foreground/55 mb-10 max-w-md">
                Pomáhám firmám i jednotlivcům vyjednat zásadní podmínky — v kontraktech, sporech i strategických rozhodnutích.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Button variant="premium" size="xl" asChild>
                  <Link to="/kontakt">Získat návrh postupu</Link>
                </Button>
                <Button variant="premium-outline" size="xl" asChild className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                  <Link to="/kurzy">Zobrazit tréninky</Link>
                </Button>
              </div>
              <p className="text-xs text-primary-foreground/30">Ozvu se do 24 hodin. Diskrétnost je samozřejmost.</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════ SIGNPOST — 3 BRANCHES ═══════ */}
      <section className="py-24 md:py-32 lg:py-36">
        <div className="container-wide">
          <SectionHeading label="Co potřebujete" title="Vyberte si cestu k lepšímu výsledku" />
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                num: "01",
                title: "Potřebuji, aby někdo vyjednával za mě",
                desc: "Převezmu jednání a dotáhnu dohodu k výsledku. Smlouvy, ceny, spory, fúze.",
                cta: "Vyjednávání a zastupování",
                href: "/vyjednavani",
              },
              {
                num: "02",
                title: "Potřebuji přípravu na jednání",
                desc: "Dodám strategii, scénáře a argumentaci. Vy jednáte z pozice síly.",
                cta: "Příprava na jednání",
                href: "/vyjednavani",
              },
              {
                num: "03",
                title: "Chci se vyjednávání naučit",
                desc: "Praktické výcviky postavené na simulacích. Pro jednotlivce i firemní týmy.",
                cta: "Tréninky vyjednávání",
                href: "/kurzy",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="premium-card flex flex-col h-full group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <p className="text-xs font-semibold text-brass tracking-[0.2em] uppercase mb-4">{item.num}</p>
                  <h3 className="heading-sm mb-4">{item.title}</h3>
                  <p className="body-md text-muted-foreground mb-8 flex-1">{item.desc}</p>
                  <Button variant="premium" size="lg" asChild>
                    <Link to={item.href}>{item.cta}</Link>
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ RESULTS ═══════ */}
      <section className="py-24 md:py-32 lg:py-36 bg-secondary/50">
        <div className="container-wide">
          <SectionHeading label="Výsledky" title="Výsledek je měřitelný. A přichází z přípravy." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {results.slice(0, 6).map((r, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="premium-card text-center py-8 px-6 h-full flex flex-col items-center justify-center">
                  <p className="micro-text mb-3">{r.label}</p>
                  <p className="text-sm text-muted-foreground mb-1">{r.beforeAfter}</p>
                  <p className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-1">{r.main}</p>
                  <p className="body-sm text-muted-foreground">{r.context}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          {results[6] && (
            <AnimatedSection delay={0.4} className="mt-5">
              <div className="premium-card flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 py-10 px-10 md:px-16 bg-foreground/[0.03]">
                <p className="micro-text shrink-0">{results[6].label}</p>
                <p className="text-sm text-muted-foreground">{results[6].beforeAfter}</p>
                <p className="font-serif text-3xl md:text-4xl font-semibold text-foreground">{results[6].main}</p>
                <p className="body-sm text-muted-foreground">{results[6].context}</p>
              </div>
            </AnimatedSection>
          )}
          <AnimatedSection className="text-center mt-8">
            <p className="text-xs text-muted-foreground mb-4">Detaily sdílím diskrétně. Ne všechny zakázky lze publikovat.</p>
            <Button variant="premium-outline" size="lg" asChild>
              <Link to="/reference">Všechny reference</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS (top picks) ═══════ */}
      <section className="py-24 md:py-32 lg:py-36">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-16">
            <p className="micro-text text-brass mb-4">Reference</p>
            <h2 className="heading-lg">Co říkají klienti</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.slice(0, 4).map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div
                  className="h-full rounded-2xl border border-foreground/[0.06] p-8 md:p-10 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col"
                  style={{ background: `linear-gradient(135deg, hsl(var(--foreground) / 0.95), hsl(var(--foreground) / 0.88))` }}
                >
                  <span className="block font-serif text-4xl text-brass/30 leading-none mb-3 select-none">„</span>
                  <p className="font-serif text-lg md:text-xl text-primary-foreground/85 leading-[1.55] mb-6 flex-1">{t.quote}</p>
                  <p className="text-sm text-primary-foreground/35">— {t.author}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-10">
            <Button variant="premium-outline" size="lg" asChild>
              <Link to="/reference">Více referencí</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════ ABOUT (brief) ═══════ */}
      <section className="py-24 md:py-32 lg:py-36 bg-secondary/30">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <AnimatedSection>
              <img src={aboutImg} alt="Ondřej Vojáček" className="w-full max-w-md mx-auto" loading="lazy" width={800} height={1000} />
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <p className="micro-text text-brass mb-4">O mně</p>
              <h2 className="heading-lg mb-6">Ondřej Vojáček</h2>
              <p className="body-md text-muted-foreground mb-4">
                doc. Ing. Ondřej Vojáček, Ph.D. — vyjednavač, vysokoškolský pedagog a ekonom. Vyjednávám od roku 2009.
              </p>
              <p className="body-md text-muted-foreground mb-6">
                Zkušenosti z evropských jednání, transakcí v řádech miliard i z běžné byznysové praxe.
              </p>
              <p className="font-serif text-lg md:text-xl font-medium text-foreground mb-8 leading-snug">
                „Nejčastější problém: lidé jdou do jednání bez&nbsp;strategie."
              </p>
              <Button variant="premium-outline" size="lg" asChild>
                <Link to="/o-mne">Více o mně</Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="py-24 md:py-32 lg:py-36 bg-foreground text-primary-foreground">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-lg text-primary-foreground mb-4">Řekněte mi, co řešíte. Navrhnu další&nbsp;krok.</h2>
            <p className="body-lg text-primary-foreground/60 mb-10">Stačí krátký popis situace. Ozvu se do 24 hodin.</p>
            <Button variant="premium" size="xl" asChild className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90">
              <Link to="/kontakt">Získat návrh postupu</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
