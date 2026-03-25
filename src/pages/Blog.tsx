import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/sections/AnimatedSection";
import { getPublishedArticles } from "@/lib/blog-store";

export default function Blog() {
  const articles = getPublishedArticles();

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide">
          <AnimatedSection className="max-w-3xl mb-16">
            <p className="micro-text mb-6">Články</p>
            <h1 className="heading-xl mb-4">Myšlenky o vyjednávání</h1>
            <p className="body-lg text-muted-foreground">
              Principy, přístupy a zkušenosti z praxe vyjednavače.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, i) => (
              <AnimatedSection key={article.id} delay={i * 0.08}>
                <Link to={`/clanky/${article.slug}`} className="group block">
                  <div className="premium-card h-full flex flex-col">
                    <p className="micro-text text-accent mb-4">{article.category}</p>
                    <h2 className="font-serif text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>
                    <p className="body-sm text-muted-foreground mb-4 flex-1">{article.perex}</p>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-muted-foreground">
                        {new Date(article.publishedAt).toLocaleDateString("cs-CZ")}
                      </p>
                      <span className="text-xs font-medium text-primary">Číst →</span>
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
      <section className="section-padding bg-secondary/50">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-lg mb-6">Chcete lepší výsledky u stolu?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="premium" size="xl" asChild>
                <Link to="/kontakt">Domluvit úvodní hovor</Link>
              </Button>
              <Button variant="premium-outline" size="xl" asChild>
                <Link to="/kurzy">Zobrazit kurzy</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
}
