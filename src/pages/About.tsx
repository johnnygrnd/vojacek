import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/sections/AnimatedSection";
import PageHero from "@/components/sections/PageHero";
import aboutImg from "@/assets/about-portrait.jpg";
import heroImg from "@/assets/hero-portrait.jpg";

export default function About() {
  return (
    <Layout>
      <PageHero
        image={heroImg}
        imageAlt="Ondřej Vojáček"
        label="O mně"
        title="Ondřej Vojáček"
        description="Profesionální vyjednavač, vysokoškolský pedagog a ekonom. Spojuji tvrdou praxi s porozuměním psychologii jednání."
      />

      {/* Bio */}
      <section className="py-20 md:py-28 lg:py-32">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <AnimatedSection>
              <img src={aboutImg} alt="Ondřej Vojáček" className="w-full max-w-lg mx-auto" width={800} height={1000} />
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="w-10 h-px bg-brass mb-6" />
              <p className="body-lg text-muted-foreground mb-2">
                doc. Ing. Ondřej Vojáček, Ph.D.
              </p>
              <p className="body-md text-muted-foreground mb-4">
                Jsem najímán pro důležitá obchodní vyjednávání, cenová jednání, akvizice i sporné situace.
              </p>
              <p className="body-md text-muted-foreground">
                Vedle zastupování klientů vedu firemní tréninky a individuální přípravu na míru. Učím jen to, co sám používám při vyjednáváních.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What makes me different */}
      <section className="py-20 md:py-28 lg:py-32 bg-foreground text-primary-foreground">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-12 md:mb-16">
            <p className="micro-text text-brass mb-4">Přístup</p>
            <h2 className="heading-lg text-primary-foreground">Proč ne běžný školitel nebo konzultant</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-px bg-primary-foreground/10 max-w-5xl mx-auto overflow-hidden rounded-sm">
            {[
              { title: "Praxe, ne teorie", desc: "Učím vyjednávání jako disciplínu — s jasnou strukturou a měřitelnými výsledky." },
              { title: "Simulace, ne přednášky", desc: "Každý trénink je postavený na simulacích. Účastníci vyjednávají pod tlakem, proti reálným scénářům." },
              { title: "Příprava, ne improvizace", desc: "Když zastupuji klienta, jdu ke stolu se scénáři, argumentací a plánem B." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-foreground p-8 md:p-10 h-full">
                  <h3 className="font-serif text-xl font-medium text-primary-foreground mb-2">{item.title}</h3>
                  <p className="body-md text-primary-foreground/50">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 md:py-28 lg:py-32">
        <div className="container-wide">
          <AnimatedSection className="mb-12">
            <p className="micro-text text-brass mb-4">Zkušenosti</p>
            <h2 className="heading-lg">Kde jsem vyjednával</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
            {[
              "Evropská komise a evropské regulační orgány",
              "Ministerstva a veřejné instituce v ČR",
              "Vyjednávání výjimek z evropských regulací",
              "Cenová vyjednávání v řádech miliard i milionů",
              "Strategie k udržení dotačních prostředků v ČR",
              "Firemní i individuální výcviky založené na simulacích",
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <div className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-brass mt-2 shrink-0" />
                  <p className="body-md text-muted-foreground">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <span className="block font-serif text-5xl text-brass/30 leading-none mb-4 select-none">„</span>
            <p className="font-serif text-xl md:text-2xl lg:text-3xl text-foreground leading-relaxed mb-5 italic">
              Většina lidí nepřichází o peníze kvůli slabé pozici — ale proto, že šli do jednání bez přípravy.
            </p>
            <p className="text-sm text-muted-foreground">— Ondřej Vojáček</p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-br from-brass/90 to-brass">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-lg text-foreground mb-4">Řešíte důležité jednání, nebo chcete posunout svůj tým?</h2>
            <p className="body-lg text-foreground/70 mb-8">
              Ozvěte se. Navrhnu, zda je pro vás vhodnější zastoupení, strategická příprava, nebo trénink na míru.
            </p>
            <Button variant="premium" size="xl" asChild className="bg-foreground text-primary-foreground hover:bg-foreground/90">
              <Link to="/kontakt">Domluvit úvodní rozhovor</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
