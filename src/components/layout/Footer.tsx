import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-foreground text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl font-semibold mb-4 text-primary-foreground">Ondřej Vojáček</h3>
            <p className="body-sm text-primary-foreground/60 max-w-sm">
              Vyjednavač, konzultant a lektor vyjednávání. Pomáhám firmám i jednotlivcům dosáhnout lepších podmínek.
            </p>
            <div className="mt-6 space-y-1 text-sm text-primary-foreground/60">
              <p>+420 731 407 976</p>
              <p>ondrej.vojacek@gmail.com</p>
              <p>Krumlovská 527/4, Praha 4 – Michle, 140 00</p>
              <p>IČ: 03253384</p>
            </div>
          </div>

          <div>
            <h4 className="micro-text text-primary-foreground/40 mb-4">Navigace</h4>
            <ul className="space-y-3">
              {[
                { label: "Vyjednávání", href: "/vyjednavani" },
                { label: "Tréninky vyjednávání", href: "/kurzy" },
                { label: "Veřejný trénink", href: "/verejny-trenink" },
                { label: "Reference", href: "/reference" },
              ].map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="micro-text text-primary-foreground/40 mb-4">Další</h4>
            <ul className="space-y-3">
              {[
                { label: "O mně", href: "/o-mne" },
                { label: "Články", href: "/clanky" },
                { label: "Kontakt", href: "/kontakt" },
                { label: "Obchodní podmínky", href: "/obchodni-podminky" },
                { label: "GDPR", href: "/gdpr" },
              ].map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/30">
          © {new Date().getFullYear()} Ondřej Vojáček. Všechna práva vyhrazena.
        </div>
      </div>
    </footer>
  );
}
