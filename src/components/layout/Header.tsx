import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Služby", href: "/sluzby" },
  { label: "Kurzy", href: "/kurzy" },
  { label: "Reference", href: "/reference" },
  { label: "Články", href: "/clanky" },
  { label: "O mně", href: "/o-mne" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/40">
      <div className="container-wide flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-serif text-xl md:text-2xl font-semibold tracking-tight text-foreground">
          Ondřej Vojáček
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === item.href
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button variant="premium" size="lg" asChild>
            <Link to="/kontakt">Domluvit úvodní hovor</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-t border-border/40">
          <nav className="container-wide py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className={`text-base font-medium py-2 ${
                  location.pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="premium" size="lg" asChild className="mt-4">
              <Link to="/kontakt" onClick={() => setOpen(false)}>
                Domluvit úvodní hovor
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
