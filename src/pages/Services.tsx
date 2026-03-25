import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/sections/AnimatedSection";
import SectionHeading from "@/components/sections/SectionHeading";
import negotiationImg from "@/assets/negotiation-detail.jpg";

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="container-wide">
          <AnimatedSection className="max-w-3xl">
            <p className="micro-text text-primary-foreground/40 mb-6">Služby</p>
            <h1 className="heading-xl text-primary-foreground mb-6">
              Dvě cesty k lepšímu výsledku
            </h1>
            <p className="body-lg text-primary-foreground/70">
              Buď vyjednávám za vás, nebo vás připravím, abyste vyjednávali sami. Obojí vede ke stejnému cíli – k lepším podmínkám.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Two services */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <AnimatedSection>
              <div className="premium-card h-full flex flex-col p-10 md:p-14">
                <p className="micro-text mb-6">01</p>
                <h2 className="heading-md mb-4">Zastoupím vás</h2>
                <p className="body-md text-muted-foreground mb-6">
                  Převezmu vyjednávání a dotáhnu dohodu k výsledku. Připravím argumentaci, scénáře a pracuji s riziky. Vy se můžete soustředit na rozhodování.
                </p>
                <h3 className="font-serif text-lg font-medium mb-3">Typické situace</h3>
                <ul className="space-y-2 mb-8 flex-1">
                  {[
                    "Obchodní smlouvy a kontrakty",
                    "Cenová vyjednávání",
                    "Fúze a akvizice",
                    "Spory s dodavateli či partnery",
                    "Nemovitostní transakce",
                    "Pojistné události",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 body-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="premium" size="xl" asChild>
                  <Link to="/vyjednavani">Chci zastoupení</Link>
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="premium-card h-full flex flex-col p-10 md:p-14">
                <p className="micro-text mb-6">02</p>
                <h2 className="heading-md mb-4">Připravím vás</h2>
                <p className="body-md text-muted-foreground mb-6">
                  Vy jednáte. Já vám dodám strategii, páky, strukturu jednání a trénink tak, abyste šli ke stolu s kontrolou nad výsledkem.
                </p>
                <h3 className="font-serif text-lg font-medium mb-3">Co dostanete</h3>
                <ul className="space-y-2 mb-8 flex-1">
                  {[
                    "Analýza situace a protistrany",
                    "BATNA a vyjednávací prostor",
                    "Scénáře a argumentační linie",
                    "Trénink klíčových momentů",
                    "Podpora v reálném čase",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 body-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="premium" size="xl" asChild>
                  <Link to="/kontakt">Chci strategii</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Image break */}
      <section>
        <img src={negotiationImg} alt="Vyjednávání" className="w-full h-64 md:h-96 object-cover" loading="lazy" width={1200} height={800} />
      </section>

      {/* Process */}
      <section className="section-padding bg-secondary/50">
        <div className="container-wide">
          <SectionHeading label="Proces" title="Jak spolupráce probíhá" />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { s: "01", t: "Úvodní konzultace", d: "Popíšete situaci, definujeme cíle a posoudíme, která cesta je pro vás vhodná." },
              { s: "02", t: "Příprava strategie", d: "Zmapuji protistranu, připravím scénáře, argumentaci a plán jednání." },
              { s: "03", t: "Realizace", d: "Vyjednávám za vás nebo vás vedu. Vždy s cílem dosáhnout nejlepšího možného výsledku." },
            ].map((step, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <p className="font-serif text-5xl font-semibold text-border mb-4">{step.s}</p>
                <h3 className="heading-sm mb-3">{step.t}</h3>
                <p className="body-md text-muted-foreground">{step.d}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-lg mb-6">Potřebujete vyjednat lepší podmínky?</h2>
            <p className="body-lg text-muted-foreground mb-8">Řekněte mi, co řešíte. Navrhnu konkrétní postup.</p>
            <Button variant="premium" size="xl" asChild>
              <Link to="/kontakt">Domluvit úvodní hovor</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
