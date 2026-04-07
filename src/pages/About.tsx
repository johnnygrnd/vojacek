import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/sections/AnimatedSection";
import aboutImg from "@/assets/about-portrait.jpg";

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 lg:py-36">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <AnimatedSection>
              <img src={aboutImg} alt="Ondřej Vojáček" className="w-full max-w-lg mx-auto" width={800} height={1000} />
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="w-10 h-px bg-brass mb-6" />
              <p className="micro-text text-brass mb-4">O mně</p>
              <h1 className="heading-xl mb-4">Ondřej Vojáček</h1>
              <p className="body-lg text-muted-foreground mb-2">
                doc. Ing. Ondřej Vojáček, Ph.D.
              </p>
              <p className="body-md text-muted-foreground mb-8">
                Vyjednavač, vysokoškolský pedagog a ekonom.
              </p>
              <p className="body-md text-muted-foreground mb-4">
                Vyjednávám od roku 2009. Začínal jsem na evropské úrovni — v regulačních jednáních, kde šlo o miliardy a kde se rozhodovalo o celých odvětvích. Postupně jsem přenesl tyto principy do byznysové praxe.
              </p>
              <p className="body-md text-muted-foreground">
                Dnes pomáhám firmám i jednotlivcům vyjednat lepší podmínky — v kontraktech, sporech, cenách i strategických dohodách. A učím ostatní, jak vyjednávat sami.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What makes me different */}
      <section className="py-24 md:py-32 lg:py-36 bg-foreground text-primary-foreground">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-14 md:mb-20">
            <p className="micro-text text-brass mb-4">Přístup</p>
            <h2 className="heading-lg text-primary-foreground">Proč ne běžný školitel nebo konzultant</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-px bg-primary-foreground/10 max-w-5xl mx-auto overflow-hidden rounded-sm">
            {[
              { title: "Praxe, ne teorie", desc: "Nejsem motivační řečník. Neučím soft skills. Učím vyjednávání jako disciplínu — s jasnou strukturou a měřitelnými výsledky." },
              { title: "Simulace, ne přednášky", desc: "Každý kurz je postaven na simulacích. Účastníci vyjednávají pod tlakem, s omezenými informacemi, proti reálným scénářům." },
              { title: "Příprava, ne improvizace", desc: "Když zastupuji klienta, jdu ke stolu se scénáři, argumentací a plánem B. Profesionální vyjednávání je o přípravě." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-foreground p-8 md:p-10 h-full">
                  <h3 className="font-serif text-xl font-medium text-primary-foreground mb-3">{item.title}</h3>
                  <p className="body-md text-primary-foreground/50">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-24 md:py-32 lg:py-36">
        <div className="container-wide">
          <AnimatedSection className="mb-14">
            <p className="micro-text text-brass mb-4">Zkušenosti</p>
            <h2 className="heading-lg">Kde jsem vyjednával</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {[
              "Evropská komise a evropské regulační orgány",
              "Ministerstva a veřejné instituce v ČR",
              "Vyjednávání výjimek z evropských regulací",
              "Strategie k udržení dotačních prostředků v ČR",
              "Cenová vyjednávání v řádech miliard i milionů",
              "Firemní i individuální výcviky postavené na simulacích",
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4">
                  <span className="w-1 h-1 rounded-full bg-brass mt-2.5 shrink-0" />
                  <p className="body-md text-muted-foreground">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <span className="block font-serif text-5xl text-brass/30 leading-none mb-4 select-none">„</span>
            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed mb-6 italic">
              Většina lidí přichází o peníze ne proto, že by měli slabou pozici — ale proto, že šli do jednání bez strategie.
            </p>
            <p className="text-sm text-muted-foreground">— Ondřej Vojáček</p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 lg:py-36 bg-gradient-to-br from-brass/90 to-brass">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-lg text-foreground mb-4">Kontaktujte mě</h2>
            <p className="body-lg text-foreground/70 mb-10">
              Ať už hledáte zastoupení, strategii nebo trénink.
            </p>
            <Button variant="premium" size="xl" asChild className="bg-foreground text-primary-foreground hover:bg-foreground/90">
              <Link to="/kontakt">Domluvit úvodní hovor</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
