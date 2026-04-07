import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/sections/AnimatedSection";
import SectionHeading from "@/components/sections/SectionHeading";
import trainingImg from "@/assets/training-photo.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const courses = [
  {
    title: "Veřejný trénink",
    desc: "Třídenní komplexní trénink vyjednávání. Psychologie, techniky, simulace reálných situací.",
    audience: "Pro jednotlivce i zástupce firem",
    duration: "3 dny",
    price: "39 000 Kč",
    cta: "Detail a registrace",
    href: "/kurzy/verejny-trenink",
    featured: true,
  },
  {
    title: "Firemní trénink",
    desc: "Strategie a psychologie ve vyjednávání. Trénink na míru pro firemní týmy.",
    audience: "Pro obchodní, nákupní a manažerské týmy",
    duration: "2–3 dny",
    price: "od 132 000 Kč",
    cta: "Detail tréninku",
    href: "/kurzy/firemni-trenink",
    featured: false,
  },
  {
    title: "Vyjednávání o cenách",
    desc: "Dvoudenní intenzivní trénink zaměřený na cenová vyjednávání a kontrolu ústupků.",
    audience: "Pro nákupčí, obchodníky a management",
    duration: "2 dny",
    price: "od 126 000 Kč",
    cta: "Detail kurzu",
    href: "/kurzy/vyjednavani-o-cenach",
    featured: false,
  },
  {
    title: "Individuální trénink",
    desc: "Příprava na konkrétní jednání nebo rozvoj vyjednávací dovednosti na míru.",
    audience: "Pro manažery a jednatele",
    duration: "Dle potřeby",
    price: "Cena na dotaz",
    cta: "Detail tréninku",
    href: "/kurzy/individualni-trenink",
    featured: false,
  },
];

const faqs = [
  { q: "Pro koho jsou tréninky vhodné?", a: "Pro každého, kdo vyjednává — obchodníky, nákupčí, manažery, právníky, podnikatele i jednotlivce." },
  { q: "Proč simulace místo teorie?", a: "Vyjednávání je dovednost, ne znalost. Dovednost se buduje praxí. Simulace jsou nejefektivnější cesta." },
  { q: "Lze firemní trénink upravit na míru?", a: "Ano. Každý firemní trénink přizpůsobuji odvětví, rolím a reálným situacím klienta." },
  { q: "Kolik lidí může být na firemním tréninku?", a: "Optimální skupina je 8–16 účastníků. Simulace vyžadují aktivní zapojení každého." },
];

export default function Courses() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative">
        <img src={trainingImg} alt="Tréninky vyjednávání" className="w-full h-64 md:h-96 object-cover" width={1200} height={800} />
        <div className="absolute inset-0 bg-foreground/60 flex items-center">
          <div className="container-wide">
            <AnimatedSection>
              <p className="micro-text text-brass mb-4">Tréninky</p>
              <h1 className="heading-xl text-primary-foreground">Tréninky vyjednávání</h1>
              <p className="body-lg text-primary-foreground/70 mt-4 max-w-xl">
                Praktické výcviky postavené na simulacích. Žádná teorie — dovednost, kterou použijete hned.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Course cards */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid sm:grid-cols-2 gap-6">
            {courses.map((c, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className={`premium-card flex flex-col h-full ${c.featured ? "border-brass/30" : ""}`}>
                  {c.featured && <p className="text-xs font-semibold text-brass tracking-[0.15em] uppercase mb-4">Nejoblíbenější</p>}
                  <h3 className="heading-sm mb-3">{c.title}</h3>
                  <p className="body-md text-muted-foreground mb-4">{c.desc}</p>
                  <div className="space-y-2 mb-6 flex-1">
                    <p className="body-sm text-muted-foreground"><span className="font-medium text-foreground">Pro koho:</span> {c.audience}</p>
                    <p className="body-sm text-muted-foreground"><span className="font-medium text-foreground">Délka:</span> {c.duration}</p>
                  </div>
                  <p className="font-serif text-2xl font-semibold text-primary mb-6">{c.price}</p>
                  <Button variant="premium" size="lg" asChild>
                    <Link to={c.href}>{c.cta}</Link>
                  </Button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why simulations */}
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <p className="micro-text text-brass mb-4">Přístup</p>
            <h2 className="heading-lg text-primary-foreground mb-6">Proč simulace místo teorie</h2>
            <p className="body-lg text-primary-foreground/70 max-w-2xl mx-auto">
              Vyjednávání se nedá naučit z knihy. Je to dovednost, která se buduje opakovanou praxí v bezpečném prostředí. Na kurzech vyjednáváte — ne posloucháte.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeading title="Časté dotazy" />
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border border-border/60 bg-card px-6">
                <AccordionTrigger className="text-left font-serif text-lg font-medium py-5 hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/50">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-lg mb-6">Chcete trénink na míru?</h2>
            <p className="body-lg text-muted-foreground mb-8">Napište mi a připravím návrh tréninku přesně pro vaše potřeby.</p>
            <Button variant="premium" size="xl" asChild>
              <Link to="/kontakt">Poptat firemní trénink</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
