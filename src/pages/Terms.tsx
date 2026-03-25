import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/sections/AnimatedSection";

export default function Terms() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <h1 className="heading-xl mb-8">Obchodní podmínky</h1>
            <div className="space-y-8 body-md text-muted-foreground">
              <div>
                <h2 className="heading-sm text-foreground mb-3">1. Úvodní ustanovení</h2>
                <p>Tyto obchodní podmínky upravují vztahy mezi Ondřejem Vojáčkem, IČ: 03253384, se sídlem Krumlovská 527/4, Praha 4 – Michle, 140 00 (dále jen „Poskytovatel") a účastníky kurzů a klienty konzultačních služeb (dále jen „Klient").</p>
              </div>
              <div>
                <h2 className="heading-sm text-foreground mb-3">2. Předmět služeb</h2>
                <p>Poskytovatel nabízí služby v oblasti vyjednávání, konzultací a vzdělávacích kurzů. Rozsah služeb je specifikován v konkrétní nabídce nebo objednávce.</p>
              </div>
              <div>
                <h2 className="heading-sm text-foreground mb-3">3. Objednávka a uzavření smlouvy</h2>
                <p>Smlouva je uzavřena okamžikem potvrzení objednávky ze strany Poskytovatele. U kurzů je smlouva uzavřena registrací a uhrazením ceny kurzu.</p>
              </div>
              <div>
                <h2 className="heading-sm text-foreground mb-3">4. Ceny a platební podmínky</h2>
                <p>Ceny jsou uvedeny bez DPH, není-li uvedeno jinak. Platba je splatná na základě vystavené faktury nebo online platbou předem. Splatnost faktur je 14 dní.</p>
              </div>
              <div>
                <h2 className="heading-sm text-foreground mb-3">5. Storno podmínky</h2>
                <p>Storno registrace na kurz je možné bezplatně do 14 dní před konáním. Při stornování 7–14 dní předem účtujeme 50 % ceny. Méně než 7 dní předem účtujeme 100 % ceny. Účastník může za sebe vyslat náhradníka.</p>
              </div>
              <div>
                <h2 className="heading-sm text-foreground mb-3">6. Důvěrnost</h2>
                <p>Veškeré informace sdílené v rámci konzultací a zastupování jsou považovány za důvěrné. Poskytovatel je povinen zachovávat mlčenlivost.</p>
              </div>
              <div>
                <h2 className="heading-sm text-foreground mb-3">7. Závěrečná ustanovení</h2>
                <p>Tyto obchodní podmínky nabývají účinnosti dnem jejich zveřejnění. Poskytovatel si vyhrazuje právo podmínky aktualizovat.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
