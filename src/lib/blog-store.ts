export interface Article {
  id: string;
  title: string;
  slug: string;
  perex: string;
  content: string;
  heroImage: string;
  category: string;
  author: string;
  publishedAt: string;
  published: boolean;
}

const STORAGE_KEY = "ov-articles";

const defaultArticles: Article[] = [
  {
    id: "1",
    title: "Proč většina vyjednávačů prohrává ještě před začátkem jednání",
    slug: "proc-vetsina-vyjednavcu-prohrava",
    perex: "Nejčastější chyba ve vyjednávání není špatná argumentace. Je to nedostatečná příprava. Podívejme se na to, co odlišuje profesionální přístup od improvizace.",
    content: `<h2>Příprava je základ</h2><p>Ve vyjednávání platí jednoduchý princip: kdo je lépe připraven, má větší kontrolu nad výsledkem. Většina lidí přichází k jednacímu stolu s jednou verzí plánu a doufá, že to vyjde.</p><p>Profesionální vyjednavač pracuje se scénáři. Ví, co chce. Ví, co je ochotný akceptovat. A ví, kdy odejít.</p><h2>BATNA – vaše nejsilnější zbraň</h2><p>Best Alternative to a Negotiated Agreement. Česky: nejlepší alternativa k vyjednávané dohodě. Pokud ji neznáte, nemáte páku. Pokud ji znáte a protistrana ne, máte výhodu.</p><p>Příprava BATNA není luxus. Je to základ, bez kterého nelze vyjednávat efektivně.</p>`,
    heroImage: "",
    category: "Strategie",
    author: "Ondřej Vojáček",
    publishedAt: "2025-03-15",
    published: true,
  },
  {
    id: "2",
    title: "Kdy má smysl najmout profesionálního vyjednavače",
    slug: "kdy-najmout-vyjednavace",
    perex: "Existují situace, kdy je lepší nechat vyjednávat někoho jiného. Profesionální zastoupení není projev slabosti – je to strategické rozhodnutí.",
    content: `<h2>Situace, kdy vyjednavač přináší hodnotu</h2><p>Nejde jen o vysoké částky. Jde o složitost, emoce a vztahy. Pokud jednáte s důležitým partnerem a zároveň potřebujete tvrdě hájit své zájmy, profesionální vyjednavač vám umožní zachovat vztah a přitom dosáhnout výsledku.</p><h2>Typické případy</h2><ul><li>Fúze a akvizice</li><li>Spory s klíčovými dodavateli</li><li>Vyjednávání o ceně při velkých kontraktech</li><li>Pojistné události s vysokou hodnotou</li></ul>`,
    heroImage: "",
    category: "Vyjednávání",
    author: "Ondřej Vojáček",
    publishedAt: "2025-02-28",
    published: true,
  },
  {
    id: "3",
    title: "5 principů, které používám při každém vyjednávání",
    slug: "5-principu-vyjednavani",
    perex: "Každé vyjednávání je jiné. Ale principy, které vedou k výsledku, zůstávají stejné. Zde je pět z nich.",
    content: `<h2>1. Nikdy nejednejte bez přípravy</h2><p>Ani krátký telefonát není „jen telefonát". Každá interakce je příležitost posunout podmínky.</p><h2>2. Poslouchejte víc, než mluvíte</h2><p>Informace jsou měna vyjednávání. Čím víc víte o protistraně, tím přesnější je vaše strategie.</p><h2>3. Oddělte emoce od procesu</h2><p>Emoce jsou přirozené. Ale rozhodování pod jejich vlivem je nebezpečné.</p><h2>4. Mějte vždy alternativu</h2><p>Kdo nemá kam odejít, nemá páku.</p><h2>5. Cílte na dohodu, ne na vítězství</h2><p>Nejlepší dohoda je taková, kde obě strany cítí, že získaly hodnotu.</p>`,
    heroImage: "",
    category: "Dovednosti",
    author: "Ondřej Vojáček",
    publishedAt: "2025-01-20",
    published: true,
  },
];

export function getArticles(): Article[] {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultArticles));
  return defaultArticles;
}

export function getPublishedArticles(): Article[] {
  return getArticles().filter((a) => a.published);
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getArticles().find((a) => a.slug === slug);
}

export function saveArticle(article: Article): void {
  const articles = getArticles();
  const index = articles.findIndex((a) => a.id === article.id);
  if (index >= 0) {
    articles[index] = article;
  } else {
    articles.push(article);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
}

export function deleteArticle(id: string): void {
  const articles = getArticles().filter((a) => a.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
}
