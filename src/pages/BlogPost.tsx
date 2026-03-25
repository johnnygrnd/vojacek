import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import AnimatedSection from "@/components/sections/AnimatedSection";
import { getArticleBySlug, getPublishedArticles } from "@/lib/blog-store";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? getArticleBySlug(slug) : undefined;
  const related = getPublishedArticles().filter((a) => a.slug !== slug).slice(0, 2);

  if (!article) {
    return (
      <Layout>
        <section className="section-padding">
          <div className="container-narrow text-center">
            <h1 className="heading-xl mb-4">Článek nenalezen</h1>
            <Button variant="premium-outline" size="lg" asChild>
              <Link to="/clanky">Zpět na články</Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="section-padding">
        <div className="container-narrow">
          <AnimatedSection>
            <Link to="/clanky" className="micro-text text-accent hover:text-foreground transition-colors mb-8 inline-block">
              ← Zpět na články
            </Link>
            <p className="micro-text mb-4">{article.category}</p>
            <h1 className="heading-xl mb-6">{article.title}</h1>
            <div className="flex items-center gap-4 mb-12 text-sm text-muted-foreground">
              <span>{article.author}</span>
              <span>·</span>
              <span>{new Date(article.publishedAt).toLocaleDateString("cs-CZ")}</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div
              className="prose prose-lg max-w-none [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4 [&_li]:text-muted-foreground [&_ul]:space-y-2 [&_ul]:mb-6"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </AnimatedSection>
        </div>
      </article>

      {/* CTA */}
      <section className="section-padding bg-secondary/50">
        <div className="container-narrow text-center">
          <AnimatedSection>
            <h2 className="heading-md mb-6">Chcete posunout své vyjednávací dovednosti?</h2>
            <Button variant="premium" size="xl" asChild>
              <Link to="/kontakt">Domluvit úvodní hovor</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="section-padding">
          <div className="container-wide">
            <h3 className="heading-md mb-8 text-center">Další články</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {related.map((a) => (
                <Link key={a.id} to={`/clanky/${a.slug}`} className="group">
                  <div className="premium-card">
                    <p className="micro-text text-accent mb-3">{a.category}</p>
                    <h4 className="font-serif text-lg font-semibold group-hover:text-primary transition-colors mb-2">
                      {a.title}
                    </h4>
                    <p className="body-sm text-muted-foreground">{a.perex}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
