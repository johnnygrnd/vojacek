import { useState } from "react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/sections/AnimatedSection";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", type: "konzultace" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate submission delay - ready for real endpoint
    await new Promise(resolve => setTimeout(resolve, 800));
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <Layout>
      <section className="py-20 md:py-28 lg:py-36">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <AnimatedSection>
              <div className="w-10 h-px bg-brass mb-6" />
              <p className="micro-text text-brass mb-4">Kontakt</p>
              <h1 className="heading-xl mb-6">
                Popište situaci. Navrhnu další krok.
              </h1>
              <p className="body-lg text-muted-foreground mb-10">
                Ať hledáte zastoupení, přípravu na jednání nebo trénink — začneme krátkým rozhovorem.
              </p>

              <div className="space-y-6 mb-10">
                <div>
                  <p className="micro-text mb-2">Telefon</p>
                  <a href="tel:+420731407976" className="font-serif text-xl font-medium text-foreground hover:text-brass transition-colors">
                    +420 731 407 976
                  </a>
                </div>
                <div>
                  <p className="micro-text mb-2">E-mail</p>
                  <a href="mailto:ondrej.vojacek@gmail.com" className="font-serif text-xl font-medium text-foreground hover:text-brass transition-colors">
                    ondrej.vojacek@gmail.com
                  </a>
                </div>
                <div className="pt-2">
                  <p className="micro-text mb-2">Adresa</p>
                  <p className="body-md text-muted-foreground">
                    Krumlovská 527/4, Praha 4 – Michle, 140 00
                  </p>
                </div>
                <div>
                  <p className="micro-text mb-2">IČ</p>
                  <p className="body-md text-muted-foreground">03253384</p>
                </div>
              </div>

              <div className="premium-card border-l-2 border-brass/40">
                <h3 className="font-serif text-lg font-medium mb-2">Akutní situace?</h3>
                <p className="body-sm text-muted-foreground mb-3">
                  Zavolejte přímo. Pokud je jednání blízko nebo situace eskaluje, domluvíme se rychle.
                </p>
                <a href="tel:+420731407976" className="text-sm font-medium text-brass hover:underline">
                  +420 731 407 976 →
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              {submitted ? (
                <div className="premium-card text-center py-16 border-t-2 border-brass/30">
                  <span className="block font-serif text-4xl text-brass mb-4">✓</span>
                  <h3 className="heading-md mb-4">Děkuji za zprávu</h3>
                  <p className="body-md text-muted-foreground mb-2">
                    Ozvu se vám do 24 hodin s návrhem dalšího kroku.
                  </p>
                  <p className="body-sm text-muted-foreground/60">
                    V případě urgentní situace volejte přímo.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="micro-text mb-3 block">Co řešíte</label>
                    <div className="flex flex-wrap gap-2">
                      {[
                        { v: "konzultace", l: "Konzultace" },
                        { v: "zastoupeni", l: "Zastoupení" },
                        { v: "priprava", l: "Příprava na jednání" },
                        { v: "kurz", l: "Trénink / Kurz" },
                      ].map((t) => (
                        <button
                          key={t.v}
                          type="button"
                          onClick={() => setForm({ ...form, type: t.v })}
                          className={`px-4 py-2.5 text-sm transition-all duration-200 ${
                            form.type === t.v
                              ? "bg-foreground text-background border border-foreground"
                              : "border border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                          }`}
                        >
                          {t.l}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="name" className="micro-text mb-2 block">Jméno</label>
                    <input
                      id="name"
                      type="text"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-border bg-transparent px-4 py-3.5 text-sm focus:outline-none focus:border-foreground transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="micro-text mb-2 block">E-mail</label>
                    <input
                      id="email"
                      type="email"
                      required
                      maxLength={255}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-border bg-transparent px-4 py-3.5 text-sm focus:outline-none focus:border-foreground transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="micro-text mb-2 block">Telefon</label>
                    <input
                      id="phone"
                      type="tel"
                      maxLength={20}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border border-border bg-transparent px-4 py-3.5 text-sm focus:outline-none focus:border-foreground transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="micro-text mb-2 block">Popište situaci</label>
                    <textarea
                      id="message"
                      required
                      maxLength={2000}
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border border-border bg-transparent px-4 py-3.5 text-sm focus:outline-none focus:border-foreground transition-colors resize-none"
                      placeholder="S kým jednáte, o co jde a co je v sázce..."
                    />
                  </div>

                  <Button variant="premium" size="xl" type="submit" className="w-full" disabled={submitting}>
                    {submitting ? "Odesílám…" : "Odeslat zprávu"}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Vaše údaje zpracovávám v souladu s{" "}
                    <a href="/gdpr" className="underline hover:text-foreground transition-colors">GDPR</a>.
                    Ozvu se do 24 hodin.
                  </p>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
}
