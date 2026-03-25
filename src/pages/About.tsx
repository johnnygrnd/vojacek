import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/sections/AnimatedSection";
import aboutImg from "@/assets/about-portrait.jpg";

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <AnimatedSection>
              <img src={aboutImg} alt="Ondřej Vojáček" className="w-full max-w-lg mx-auto" width={800} height={1000} />
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <p className="micro-text mb-6">O mně</p>
              <h1 className="heading-xl mb-6">Ondřej Vojáček</h1>
              <p className="body-lg text-muted-foreground mb-2">
                doc. Ing. Ondřej Vojáček, Ph.D.
              </p>
              <p className="body-md text-muted-foreground mb-6">
                Vyjednavač, vysokoškolský pedagog a ekonom.
              </p>
              <div className="divider mb-6" />
              <p className="body-md text-muted-foreground mb-4">
                Vyjednávám od roku 2009. Začínal jsem na evropské úrovni – v regulačních jednáních, kde šlo o miliardy a kde se rozhodovalo o celých odvětvích. Postupně jsem přenesl tyto principy do byznysové praxe.
              </p>
              <p className="body-md text-muted-foreground mb-4">
                Dnes pomáhám firmám i jednotlivcům vyjednat lepší podmínky – v kontraktech, sporech, cenách i strategických dohodách. A učím ostatní, jak vyjednávat sami.
              </p>
              <p className="body-md text-muted-foreground">
                Můj přístup je postavený na přípravě, scénářích a kontrole rizik. Ne na improvizaci. Ne na manipulaci. Na dovednosti.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section-padding bg-foreground text-primary-foreground">
        <div className="container-wide">
          <AnimatedSection className="text-center mb-16">
            <h2 className="heading-lg text-primary-foreground">Profesní zkušenosti</h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Zkušenosti z evropských jednání a regulačních procesů",
              "Zastupování klientů v táhlých konfliktech i zásadních dohodách",
              "Vyjednávání výjimek z evropských regulací",
              "Strategie k udržení dotačních prostředků v ČR",
              "Cenová vyjednávání v řádech miliard i milionů",
              "Firemní i individuální výcviky postavené na simulacích",
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="flex items-start gap-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                  <p className="body-md text-primary-foreground/70">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <h2 className="heading-lg mb-8 text-center">Proč jiný než běžní školitelé</h2>
            <div className="space-y-6">
              <p className="body-md text-muted-foreground">
                Nejsem motivační řečník. Neučím soft skills. Učím vyjednávání jako disciplínu – s jasnou strukturou, měřitelnými výsledky a důrazem na praxi.
              </p>
              <p className="body-md text-muted-foreground">
                Každý kurz je postaven na simulacích. Účastníci nevyplňují dotazníky – vyjednávají. Pod tlakem, s omezenými informacemi, proti reálným scénářům.
              </p>
              <p className="body-md text-muted-foreground">
                A když zastupuji klienta, jdu ke stolu připraven. Se scénáři, s argumentací, s plánem B. Protože profesionální vyjednávání není o štěstí. Je o přípravě.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary/50">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-lg mb-6">Kontaktujte mě</h2>
            <p className="body-lg text-muted-foreground mb-8">
              Ať už hledáte zastoupení, strategii nebo trénink.
            </p>
            <Button variant="premium" size="xl" asChild>
              <Link to="/kontakt">Domluvit úvodní hovor</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
