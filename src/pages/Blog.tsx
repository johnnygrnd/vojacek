import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/sections/AnimatedSection";
import PageHero from "@/components/sections/PageHero";
import { getPublishedArticles } from "@/lib/blog-store";
import heroImg from "@/assets/hero-portrait.jpg";

export default function Blog() {
  const articles = getPublishedArticles();

  return (
    <Layout>
      <PageHero
        image={heroImg}
        imageAlt="Články"
        label="Články"
        title="Z praxe vyjednavače"
        description="Postřehy, principy a zkušenosti z reálných jednání."
      />

      <section className="py-20 md:py-28 lg:py-32">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((article, i) => (
              <AnimatedSection key={article.id} delay={i * 0.08}>
                <Link to={`/clanky/${article.slug}`} className="group block h-full">
                  <div className="premium-card h-full flex flex-col">
                    <p className="micro-text text-brass mb-3">{article.category}</p>
                    <h2 className="font-serif text-xl font-semibold mb-2 group-hover:text-brass transition-colors">
                      {article.title}
                    </h2>
                    <p className="body-sm text-muted-foreground mb-4 flex-1">{article.perex}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-muted-foreground">
                        {new Date(article.publishedAt).toLocaleDateString("cs-CZ")}
                      </p>
                      <span className="text-xs font-medium text-brass">Číst →</span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          {articles.length === 0 && (
            <p className="text-center text-muted-foreground body-lg">Zatím zde nejsou žádné články.</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-lg mb-5">Řešíte důležité jednání?</h2>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="premium" size="xl" asChild>
                <Link to="/kontakt">Popsat situaci</Link>
              </Button>
              <Button variant="premium-outline" size="xl" asChild>
                <Link to="/kurzy">Tréninky vyjednávání</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
