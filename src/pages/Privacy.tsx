import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/sections/AnimatedSection";

export default function Privacy() {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <h1 className="heading-xl mb-8">Ochrana osobních údajů (GDPR)</h1>
            <div className="space-y-8 body-md text-muted-foreground">
              <div>
                <h2 className="heading-sm text-foreground mb-3">1. Správce osobních údajů</h2>
                <p>Správcem osobních údajů je Ondřej Vojáček, IČ: 03253384, se sídlem Krumlovská 527/4, Praha 4 – Michle, 140 00. Kontakt: ondrej.vojacek@gmail.com.</p>
              </div>
              <div>
                <h2 className="heading-sm text-foreground mb-3">2. Rozsah zpracování</h2>
                <p>Zpracovávám osobní údaje v rozsahu nezbytném pro poskytování služeb: jméno, e-mail, telefon, fakturační údaje a informace poskytnuté v rámci konzultací.</p>
              </div>
              <div>
                <h2 className="heading-sm text-foreground mb-3">3. Účel zpracování</h2>
                <p>Osobní údaje zpracovávám za účelem plnění smlouvy, komunikace s klienty, registrace na kurzy a plnění zákonných povinností.</p>
              </div>
              <div>
                <h2 className="heading-sm text-foreground mb-3">4. Doba uchování</h2>
                <p>Osobní údaje uchovávám po dobu trvání smluvního vztahu a dále po dobu stanovenou právními předpisy (obvykle 10 let pro daňové doklady).</p>
              </div>
              <div>
                <h2 className="heading-sm text-foreground mb-3">5. Práva subjektů údajů</h2>
                <p>Máte právo na přístup k údajům, opravu, výmaz, omezení zpracování, přenositelnost a právo vznést námitku. Pro uplatnění práv mě kontaktujte na výše uvedeném e-mailu.</p>
              </div>
              <div>
                <h2 className="heading-sm text-foreground mb-3">6. Zabezpečení</h2>
                <p>Osobní údaje jsou chráněny technickými a organizačními opatřeními proti neoprávněnému přístupu, ztrátě nebo zneužití.</p>
              </div>
              <div>
                <h2 className="heading-sm text-foreground mb-3">7. Cookies</h2>
                <p>Tento web používá pouze technicky nezbytné cookies pro správné fungování. Analytické nebo marketingové cookies nepoužíváme.</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
