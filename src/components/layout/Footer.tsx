import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-primary-foreground/[0.06] bg-foreground text-primary-foreground">
      <div className="container-wide py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
          <div className="md:col-span-2">
            <h3 className="font-serif text-xl font-semibold mb-2 text-primary-foreground">Ondřej Vojáček</h3>
            <p className="text-[13px] text-primary-foreground/40 max-w-sm mb-4 leading-relaxed">
              Vyjednavač, konzultant a lektor vyjednávání. Pomáhám firmám i jednotlivcům dosáhnout lepších podmínek.
            </p>
            <div className="space-y-0.5 text-[13px] text-primary-foreground/35">
              <p>+420 731 407 976</p>
              <p>ondrej.vojacek@gmail.com</p>
              <p>Krumlovská 527/4, Praha 4 – Michle, 140 00</p>
              <p>IČ: 03253384</p>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-primary-foreground/30 font-medium mb-3">Navigace</h4>
            <ul className="space-y-2">
              {[
                { label: "Vyjednávání", href: "/vyjednavani" },
                { label: "Tréninky vyjednávání", href: "/kurzy" },
                { label: "Reference", href: "/reference" },
              ].map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-[13px] text-primary-foreground/40 hover:text-primary-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] text-primary-foreground/30 font-medium mb-3">Další</h4>
            <ul className="space-y-2">
              {[
                { label: "O mně", href: "/o-mne" },
                { label: "Články", href: "/clanky" },
                { label: "Kontakt", href: "/kontakt" },
                { label: "Obchodní podmínky", href: "/obchodni-podminky" },
                { label: "GDPR", href: "/gdpr" },
              ].map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-[13px] text-primary-foreground/40 hover:text-primary-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-5 border-t border-primary-foreground/[0.06] text-center text-[11px] text-primary-foreground/20">
          © {new Date().getFullYear()} Ondřej Vojáček. Všechna práva vyhrazena.
        </div>
      </div>
    </footer>
  );
}
