import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import { getArticles, saveArticle, deleteArticle, type Article } from "@/lib/blog-store";

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function generateSlug(title: string) {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function Admin() {
  const [articles, setArticles] = useState<Article[]>(getArticles());
  const [editing, setEditing] = useState<Article | null>(null);

  const blank: Article = {
    id: "",
    title: "",
    slug: "",
    perex: "",
    content: "",
    heroImage: "",
    category: "",
    author: "Ondřej Vojáček",
    publishedAt: new Date().toISOString().split("T")[0],
    published: false,
  };

  const handleEdit = (a: Article) => setEditing({ ...a });
  const handleNew = () => setEditing({ ...blank, id: generateId() });

  const handleSave = () => {
    if (!editing) return;
    const article = {
      ...editing,
      slug: editing.slug || generateSlug(editing.title),
    };
    saveArticle(article);
    setArticles(getArticles());
    setEditing(null);
  };

  const handleDelete = (id: string) => {
    if (confirm("Opravdu smazat článek?")) {
      deleteArticle(id);
      setArticles(getArticles());
    }
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-8">
            <h1 className="heading-lg">Správa článků</h1>
            <Button variant="premium" size="lg" onClick={handleNew}>
              Nový článek
            </Button>
          </div>

          {editing ? (
            <div className="premium-card space-y-6">
              <div>
                <label className="micro-text mb-2 block">Titulek</label>
                <input
                  type="text"
                  value={editing.title}
                  onChange={(e) => setEditing({ ...editing, title: e.target.value })}
                  className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
                />
              </div>
              <div>
                <label className="micro-text mb-2 block">Slug</label>
                <input
                  type="text"
                  value={editing.slug}
                  onChange={(e) => setEditing({ ...editing, slug: e.target.value })}
                  placeholder="Vyplní se automaticky z titulku"
                  className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
                />
              </div>
              <div>
                <label className="micro-text mb-2 block">Perex</label>
                <textarea
                  value={editing.perex}
                  onChange={(e) => setEditing({ ...editing, perex: e.target.value })}
                  rows={3}
                  className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors resize-none"
                />
              </div>
              <div>
                <label className="micro-text mb-2 block">Obsah (HTML)</label>
                <textarea
                  value={editing.content}
                  onChange={(e) => setEditing({ ...editing, content: e.target.value })}
                  rows={12}
                  className="w-full border border-border bg-transparent px-4 py-3 text-sm font-mono focus:outline-none focus:border-foreground transition-colors resize-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="micro-text mb-2 block">Kategorie</label>
                  <input
                    type="text"
                    value={editing.category}
                    onChange={(e) => setEditing({ ...editing, category: e.target.value })}
                    className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
                <div>
                  <label className="micro-text mb-2 block">Datum publikace</label>
                  <input
                    type="date"
                    value={editing.publishedAt}
                    onChange={(e) => setEditing({ ...editing, publishedAt: e.target.value })}
                    className="w-full border border-border bg-transparent px-4 py-3 text-sm focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="published"
                  checked={editing.published}
                  onChange={(e) => setEditing({ ...editing, published: e.target.checked })}
                  className="w-4 h-4"
                />
                <label htmlFor="published" className="text-sm">Publikováno</label>
              </div>
              <div className="flex gap-4">
                <Button variant="premium" size="lg" onClick={handleSave}>Uložit</Button>
                <Button variant="premium-outline" size="lg" onClick={() => setEditing(null)}>Zrušit</Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {articles.map((a) => (
                <div key={a.id} className="premium-card flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-medium">{a.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {a.category} · {new Date(a.publishedAt).toLocaleDateString("cs-CZ")} ·{" "}
                      {a.published ? (
                        <span className="text-primary">Publikováno</span>
                      ) : (
                        <span className="text-accent">Koncept</span>
                      )}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {a.published && (
                      <Button variant="ghost" size="sm" asChild>
                        <Link to={`/clanky/${a.slug}`}>Zobrazit</Link>
                      </Button>
                    )}
                    <Button variant="premium-outline" size="sm" onClick={() => handleEdit(a)}>Upravit</Button>
                    <Button variant="ghost" size="sm" onClick={() => handleDelete(a.id)} className="text-destructive">Smazat</Button>
                  </div>
                </div>
              ))}
              {articles.length === 0 && (
                <p className="text-center text-muted-foreground body-lg py-12">Zatím žádné články.</p>
              )}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
