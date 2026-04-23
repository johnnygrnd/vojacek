import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Vyjednávání", href: "/vyjednavani" },
  { label: "Tréninky", href: "/kurzy" },
  { label: "Reference", href: "/reference" },
  { label: "Články", href: "/clanky" },
  { label: "O mně", href: "/o-mne" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/30">
      <div className="container-wide flex items-center justify-between h-14 md:h-16">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Vojáček" className="h-7 md:h-8 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-[15px] font-medium transition-colors duration-200 ${
                location.pathname === item.href || location.pathname.startsWith(item.href + "/")
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button variant="premium" size="default" asChild>
            <Link to="/kontakt">Domluvit hovor</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-t border-border/30">
          <nav className="container-wide py-5 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={`text-[15px] font-medium py-2 ${
                  location.pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="premium" size="default" asChild className="mt-3">
              <Link to="/kontakt" onClick={() => setOpen(false)}>
                Domluvit hovor
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
