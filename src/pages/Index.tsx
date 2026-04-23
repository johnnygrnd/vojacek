import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/sections/AnimatedSection";
import heroImg from "@/assets/hero-portrait.jpg";
import aboutImg from "@/assets/about-portrait.jpg";
import { ArrowRight, Award, Brain, Target } from "lucide-react";

/* ─── DATA ─── */

const results = [
  { label: "Prodej podniku", main: "+120 %", context: "Navýšení ceny oproti první nabídce" },
  { label: "Nákup nemovitosti", main: "−40,5 mil. Kč", context: "Úspora při akvizici" },
  { label: "Regulace v energetice", main: "14 mld. Kč", context: "Úspory dosažené pro českou elektroenergetiku" },
  { label: "Pronájem průmyslových objektů", main: "−19,5 %", context: "Úprava 10letých pronájmů průmyslových objektů" },
];

const testimonials = [
  {
    quote: "Neuvěřil bych, jak se mi za pouhé 2 dny může změnit představa o tom, co a jak příště při jednání dělat.",
    author: "[Jméno Příjmení]",
    role: "[pozice], [název firmy]",
  },
  {
    quote: "Profesionální zastoupení při prodeji firmy. Výsledná cena překonala naše očekávání o desítky procent.",
    author: "[Jméno Příjmení]",
    role: "[pozice], [název firmy]",
  },
  {
    quote: "Trénink změnil přístup celého obchodního týmu. Simulace, rozbory, okamžitá použitelnost.",
    author: "[Jméno Příjmení]",
    role: "[pozice], [název firmy]",
  },
  {
    quote: "Systematický a diskrétní přístup. Přesně to, co naše situace vyžadovala.",
    author: "[Jméno Příjmení]",
    role: "[pozice], [název firmy]",
  },
];

/* ─── PAGE ─── */

export default function Index() {
  return (
    <Layout>
      {/* ═══════ HERO ═══════ */}
      <section className="relative bg-foreground min-h-[78vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 md:right-[46%]">
          <img src={heroImg} alt="Ondřej Vojáček" className="w-full h-full object-cover object-[35%_15%]" width={1920} height={1080} />
        </div>
        <div className="absolute inset-0 hidden md:block pointer-events-none" style={{ background: `linear-gradient(to right, hsl(var(--foreground) / 0) 0%, hsl(var(--foreground) / 0.15) 36%, hsl(var(--foreground) / 0.65) 50%, hsl(var(--foreground) / 0.95) 60%, hsl(var(--foreground)) 70%)` }} />
        <div className="absolute inset-0 md:hidden pointer-events-none" style={{ background: `linear-gradient(to bottom, hsl(var(--foreground) / 0) 25%, hsl(var(--foreground) / 0.5) 55%, hsl(var(--foreground)) 80%)` }} />

        <div className="relative w-full container-wide pb-14 md:pb-20 lg:pb-24">
          <div className="md:ml-auto md:max-w-[540px] md:pl-4 mt-[50vh] md:mt-0">
            <AnimatedSection>
              <div className="w-10 h-px bg-brass mb-7" />
              <h1 className="text-3xl md:text-[2.5rem] lg:text-[2.75rem] font-semibold leading-[1.18] tracking-tight text-primary-foreground mb-6" style={{ fontFamily: "var(--font-serif)" }}>
                Vyjednávání, ve kterém jde o&nbsp;výsledek, nenechávejte náhodě.
              </h1>
              <p className="body-md text-primary-foreground/55 mb-8 max-w-[28rem] leading-[1.75]">
                Zastupuji firmy i jednotlivce v důležitých jednáních, připravuji strategii a učím vyjednávat tak, aby se lepší výsledek nestal výjimkou, ale standardem.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="premium" size="lg" asChild>
                  <Link to="/kontakt">Popsat situaci</Link>
                </Button>
                <Button variant="premium-outline" size="lg" asChild className="border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
                  <Link to="/kurzy">Prohlédnout tréninky</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════ PROČ PRÁVĚ JÁ ═══════ */}
      <section className="py-14 md:py-18 border-b border-border/40 bg-secondary/30">
        <div className="container-wide">
          <AnimatedSection className="mb-10 text-center">
            <p className="micro-text text-brass mb-3">Proč právě já</p>
            <h2 className="heading-md text-balance">Tři důvody, proč klienti volí mě</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
            {[
              {
                icon: Award,
                title: "15 let praxe od roku 2009",
                desc: "Reálná jednání s výsledky v řádech miliard i milionů korun. Žádná teorie z učebnice.",
              },
              {
                icon: Brain,
                title: "Metody Harvardu, FBI a Yale",
                desc: "Strategie ověřené v nejnáročnějším prostředí — propojené s psychologií ovlivňování.",
              },
              {
                icon: Target,
                title: "Diskrétní a chladná hlava",
                desc: "Oddělím emoce od procesu. Vy zůstáváte v roli partnera, tvrdé požadavky vznáším já.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <AnimatedSection key={i} delay={i * 0.08}>
                  <div className="flex flex-col items-start">
                    <div className="w-11 h-11 rounded-sm bg-brass/15 flex items-center justify-center mb-4">
                      <Icon size={20} className="text-brass" strokeWidth={1.75} />
                    </div>
                    <h3 className="font-serif text-lg font-medium text-foreground mb-2 leading-snug">{item.title}</h3>
                    <p className="body-sm text-muted-foreground leading-[1.65]">{item.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════ SIGNPOST — 3 BRANCHES ═══════ */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-10 md:mb-12">
            <p className="micro-text text-brass mb-3">Spolupráce</p>
            <h2 className="heading-lg text-balance">S čím vám mohu pomoci</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                num: "01",
                title: "Vyjednám vám to",
                desc: "Když je ve hře hodně, vstupuji do jednání přímo za vás. Připravuji strategii, vedu jednání a hlídám, aby výsledek odpovídal tomu, co je skutečně možné vyjednat.",
                cta: "Více o zastoupení",
                href: "/vyjednavani",
              },
              {
                num: "02",
                title: "Zastoupím vás u jednání",
                desc: "Pomohu vám připravit argumentaci, scénáře, ústupky i reakce na tlak protistrany. Po vašem boku převezmu iniciativu v klíčových momentech jednání.",
                cta: "Více o přípravě",
                href: "/vyjednavani",
              },
              {
                num: "03",
                title: "Trénink ve vyjednávání",
                desc: "Praktické tréninky pro firmy i jednotlivce. Minimum teorie, maximum simulací, rozborů a technik, které využijete při nejbližším jednání.",
                cta: "Prohlédnout tréninky",
                href: "/kurzy",
              },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <Link to={item.href} className="group block h-full">
                  <div className="premium-card flex flex-col h-full border-t-2 border-transparent group-hover:border-brass/40 group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                    <p className="text-xs font-semibold text-brass tracking-[0.2em] uppercase mb-3">{item.num}</p>
                    <h3 className="heading-sm mb-2">{item.title}</h3>
                    <p className="body-md text-muted-foreground mb-6 flex-1">{item.desc}</p>
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
      <section className="py-16 md:py-20 lg:py-24 bg-foreground text-primary-foreground">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-10 md:mb-12">
            <p className="micro-text text-brass mb-3">Výsledky</p>
            <h2 className="heading-md text-primary-foreground text-balance">Dobrý výsledek není náhoda.</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/8 rounded-sm overflow-hidden">
            {results.map((r, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-foreground p-6 md:p-8 text-center h-full flex flex-col justify-center min-h-[160px]">
                  <p className="text-[11px] uppercase tracking-[0.15em] text-brass mb-2">{r.label}</p>
                  <p className="font-serif text-2xl md:text-3xl font-semibold text-primary-foreground mb-1.5">{r.main}</p>
                  <p className="text-xs text-primary-foreground/35 leading-relaxed">{r.context}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-6">
            <p className="text-xs text-primary-foreground/25 mb-3">Konkrétní detaily sdílím osobně, podle kontextu zakázky.</p>
            <Button variant="premium-outline" size="default" asChild className="border-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground hover:text-foreground">
              <Link to="/reference">Reference a výsledky</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════ POSITIONING / ABOUT ═══════ */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <AnimatedSection>
              <div className="overflow-hidden rounded-sm">
                <img src={aboutImg} alt="Ondřej Vojáček" className="w-full max-w-md mx-auto object-cover" loading="lazy" width={800} height={1000} />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="w-10 h-px bg-brass mb-5" />
              <p className="micro-text text-brass mb-3">O mně</p>
              <h2 className="heading-md mb-4">Proč klienti svěřují klíčová jednání mně</h2>
              <p className="body-md text-muted-foreground mb-5 leading-relaxed">
                Spojuji 15 let tvrdé praxe s metodami Harvardu a FBI. Jako profesionální vyjednavač zastupuji klienty od složitých obchodních kontraktů po řešení krizových sporů, kde rozhoduje know-how, strategie a chladná hlava. Pokud nevyjednávám přímo za vás, připravím vás nebo váš tým tak, abyste už nikdy nenechali peníze na stole zbytečně.
              </p>
              <p className="font-serif text-lg font-medium text-foreground mb-6 leading-snug italic">
                „Většina lidí nepřichází o peníze kvůli slabé pozici, ale proto, že podcenili přípravu a neznají hru, kterou protistrana hraje."
              </p>
              <Button variant="premium-outline" size="default" asChild>
                <Link to="/o-mne">Více o mně</Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <section className="py-16 md:py-20 lg:py-24 bg-secondary/30">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-10 md:mb-12">
            <p className="micro-text text-brass mb-3">Reference</p>
            <h2 className="heading-md">Zpětná vazba z praxe</h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div
                  className="h-full rounded-sm border border-primary-foreground/[0.04] p-7 md:p-8 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 flex flex-col"
                  style={{ background: `linear-gradient(145deg, hsl(var(--foreground) / 0.94), hsl(var(--foreground) / 0.87))` }}
                >
                  <span className="block font-serif text-3xl text-brass/25 leading-none mb-2 select-none">„</span>
                  <p className="font-serif text-[17px] text-primary-foreground/80 leading-[1.6] mb-5 flex-1">{t.quote}</p>
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-px bg-brass/30" />
                    <div>
                      <p className="text-sm text-primary-foreground/45 font-medium">{t.author}</p>
                      <p className="text-xs text-primary-foreground/25">{t.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ FINAL CTA ═══════ */}
      <section className="py-14 md:py-18 lg:py-20" style={{ background: `linear-gradient(135deg, hsl(var(--brass) / 0.92), hsl(var(--brass)))` }}>
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="text-[11px] uppercase tracking-[0.2em] text-foreground/40 mb-4">Další krok</p>
            <h2 className="heading-md text-foreground mb-3">Řešíte důležité jednání, nebo chcete posunout svůj tým?</h2>
            <p className="body-md text-foreground/60 mb-6 max-w-lg mx-auto">
              Ozvěte se. Navrhnu, zda je pro vás vhodnější zastoupení, strategická příprava, nebo trénink na míru.
            </p>
            <Button variant="premium" size="lg" asChild className="bg-foreground text-primary-foreground hover:bg-foreground/90">
              <Link to="/kontakt">Napsat zprávu</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
