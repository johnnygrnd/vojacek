import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/sections/AnimatedSection";
import trainingImg from "@/assets/training-photo.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const courseGroups = [
  {
    groupLabel: "Otevřené tréninky",
    courses: [
      {
        title: "Veřejný trénink vyjednávání",
        desc: "Třídenní intenzivní výcvik. Psychologie, strategie, simulace reálných situací. Nejkomplexnější otevřený trénink vyjednávání v ČR.",
        audience: "Pro jednotlivce i zástupce firem",
        duration: "3 dny",
        price: "39 000 Kč",
        href: "/kurzy/verejny-trenink",
        featured: true,
      },
    ],
  },
  {
    groupLabel: "Firemní tréninky",
    courses: [
      {
        title: "Firemní trénink vyjednávání",
        desc: "Trénink na míru pro obchodní, nákupní a manažerské týmy. Simulace z vašeho prostředí.",
        audience: "Pro firemní týmy 8–16 osob",
        duration: "2–3 dny",
        price: "od 132 000 Kč",
        href: "/kurzy/firemni-trenink",
        featured: false,
      },
      {
        title: "Vyjednávání o cenách",
        desc: "Specializovaný dvoudenní trénink zaměřený na cenová vyjednávání, kotvení a kontrolu ústupků.",
        audience: "Pro nákupčí, obchodníky a management",
        duration: "2 dny",
        price: "od 126 000 Kč",
        href: "/kurzy/vyjednavani-o-cenach",
        featured: false,
      },
    ],
  },
  {
    groupLabel: "Individuální příprava",
    courses: [
      {
        title: "Individuální trénink",
        desc: "Příprava na konkrétní jednání nebo rozvoj vyjednávací dovednosti. 100 % zaměřeno na vaši situaci.",
        audience: "Pro manažery, jednatele a podnikatele",
        duration: "Dle potřeby",
        price: "Cena na dotaz",
        href: "/kurzy/individualni-trenink",
        featured: false,
      },
    ],
  },
];

const faqs = [
  { q: "Pro koho jsou tréninky vhodné?", a: "Pro každého, kdo vyjednává — obchodníky, nákupčí, manažery, právníky, podnikatele i jednotlivce." },
  { q: "Proč simulace místo teorie?", a: "Vyjednávání je dovednost, ne znalost. Dovednost se buduje praxí pod tlakem. Simulace jsou nejefektivnější cesta." },
  { q: "Lze firemní trénink upravit na míru?", a: "Ano. Každý firemní trénink přizpůsobuji odvětví, rolím a reálným situacím klienta." },
  { q: "Kolik lidí může být na firemním tréninku?", a: "Optimální skupina je 8–16 účastníků. Simulace vyžadují aktivní zapojení každého." },
  { q: "Jaký je rozdíl oproti běžným kurzům soft skills?", a: "Neučím obecnou komunikaci. Učím vyjednávání jako disciplínu — s jasnou strukturou, měřitelnými výsledky a důrazem na simulace reálných situací." },
];

export default function Courses() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative">
        <img src={trainingImg} alt="Tréninky vyjednávání" className="w-full h-72 md:h-[420px] object-cover" width={1200} height={800} />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/70 to-foreground/40 flex items-end">
          <div className="container-wide pb-12 md:pb-16">
            <AnimatedSection>
              <div className="w-10 h-px bg-brass mb-5" />
              <h1 className="heading-xl text-primary-foreground mb-4">Tréninky vyjednávání</h1>
              <p className="body-lg text-primary-foreground/60 max-w-2xl">
                Vyjednávání se nedá naučit z knihy. Je to dovednost, která se buduje opakovanou praxí — pod tlakem, s omezenými informacemi, proti reálným scénářům.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 md:py-20 border-b border-border/40">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              { num: "70 %", label: "praxe a simulací", desc: "Účastníci nevyplňují dotazníky — vyjednávají. Pod tlakem, s omezenými informacemi." },
              { num: "100 %", label: "použitelnost", desc: "Každá technika je ověřená v praxi. Nic, co byste nemohli použít hned po kurzu." },
              { num: "15+", label: "let zkušeností", desc: "Tréninky vedené člověkem, který sám vyjednává — ne lektorem z příručky." },
            ].map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <p className="font-serif text-3xl font-semibold text-foreground mb-1">{s.num}</p>
                <p className="text-xs uppercase tracking-[0.15em] text-brass mb-3">{s.label}</p>
                <p className="body-sm text-muted-foreground">{s.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Course groups */}
      {courseGroups.map((group, gi) => (
        <section key={gi} className={`py-20 md:py-24 ${gi % 2 === 1 ? "bg-secondary/30" : ""}`}>
          <div className="container-wide">
            <AnimatedSection className="mb-10">
              <p className="micro-text text-brass mb-2">{group.groupLabel}</p>
              <div className="w-10 h-px bg-brass" />
            </AnimatedSection>
            <div className={`grid ${group.courses.length > 1 ? "sm:grid-cols-2" : ""} gap-6`}>
              {group.courses.map((c, i) => (
                <AnimatedSection key={i} delay={i * 0.1}>
                  <div className={`premium-card flex flex-col h-full ${c.featured ? "border-brass/30 border-t-2" : ""}`}>
                    {c.featured && <p className="text-xs font-semibold text-brass tracking-[0.15em] uppercase mb-4">Nejoblíbenější</p>}
                    <h3 className="heading-sm mb-3">{c.title}</h3>
                    <p className="body-md text-muted-foreground mb-5">{c.desc}</p>
                    <div className="space-y-2 mb-6 flex-1">
                      <p className="body-sm text-muted-foreground"><span className="font-medium text-foreground">Pro koho:</span> {c.audience}</p>
                      <p className="body-sm text-muted-foreground"><span className="font-medium text-foreground">Délka:</span> {c.duration}</p>
                    </div>
                    <div className="flex items-end justify-between gap-4">
                      <p className="font-serif text-2xl font-semibold text-foreground">{c.price}</p>
                      <Button variant="premium" size="lg" asChild>
                        <Link to={c.href}>
                          Detail <ArrowRight size={14} />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="py-24 md:py-32 lg:py-36 bg-foreground text-primary-foreground">
        <div className="container-narrow">
          <AnimatedSection className="text-center mb-14">
            <p className="micro-text text-brass mb-4">FAQ</p>
            <h2 className="heading-lg text-primary-foreground">Časté dotazy</h2>
          </AnimatedSection>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-primary-foreground/10 bg-foreground px-6">
                <AccordionTrigger className="text-left font-serif text-lg font-medium py-5 hover:no-underline text-primary-foreground">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-primary-foreground/50 pb-5">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 lg:py-36 bg-gradient-to-br from-brass/90 to-brass">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-lg text-foreground mb-4">Potřebujete trénink na míru?</h2>
            <p className="body-lg text-foreground/70 mb-10">Popište mi situaci a připravím návrh tréninku přesně pro vaše potřeby.</p>
            <Button variant="premium" size="xl" asChild className="bg-foreground text-primary-foreground hover:bg-foreground/90">
              <Link to="/kontakt">Poptat firemní trénink</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
