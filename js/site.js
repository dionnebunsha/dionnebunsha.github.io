// ── Article Data ──
// This manifest maps slugs to metadata. Content is loaded from markdown files.
const ARTICLES = [
  { slug: "what-clayoquot-sound-faces-now", title: "What Clayoquot Sound Faces Now", date: "2013-10-17", categories: ["Environment", "Human Rights"], description: "On the front lines of forest conservation in British Columbia, where First Nations communities lead the fight to protect old-growth rainforests.", image: "images/clayoquot2.jpg", featured: true },
  { slug: "gone-with-the-waves", title: "Gone with the Waves", date: "2013-10-16", categories: ["Climate Change", "Environment"], description: "Coastal erosion is swallowing fishing villages in Gujarat. Rising seas, disappearing livelihoods, and communities bearing the first costs of climate change.", image: "images/danti1.jpg", featured: true },
  { slug: "the-holes-in-our-chappals", title: "The Holes in Our Chappals", date: "2007-06-30", categories: ["Farm Crisis", "Human Rights"], description: "An investigation into farmer suicides in Gujarat and the systemic underreporting that obscures the true scale of agrarian distress.", image: "images/guj-farmers-suicides.jpg", featured: true },
  { slug: "at-a-hindutva-factory", title: "At a Hindutva Factory", date: "2006-11-18", categories: ["Gujarat Violence", "Human Rights"], description: "Inside the training camps that shape ideology and foot soldiers — a ground-level look at how communal politics is manufactured.", image: "images/ClayoquotBirdsEye_thumb.jpg", featured: true },
  { slug: "contested-territory", title: "Contested Territory", date: "2015-06-08", categories: ["Environment", "Globalization", "Human Rights"], description: "How NGOs and civil society are being squeezed by governments worldwide, with particular focus on India's crackdown on foreign-funded organizations.", image: "images/anti-nuke-demo.png", featured: false },
  { slug: "teesta-dam", title: "Teesta's Tears", date: "2014-05-16", categories: ["Environment", "Human Rights"], description: "The devastating impact of hydroelectric dam construction on Sikkim's communities and environment.", image: "images/sikkim-dams-1.jpg", featured: false },
  { slug: "authors-note-scarred", title: "Author's Note for Scarred", date: "2014-05-16", categories: ["Gujarat Violence", "Human Rights"], description: "The author's personal reflection on writing Scarred: Experiments with Violence in Gujarat.", image: "images/Scarred-cover.jpg", featured: false },
  { slug: "cotton-aflame", title: "Cotton Aflame", date: "2007-06-30", categories: ["Farm Crisis"], description: "The devastating impact of Bt cotton on farmers in Yavatmal, Maharashtra.", featured: false },
  { slug: "vines-of-debt", title: "Vines of Debt", date: "2007-06-30", categories: ["Farm Crisis"], description: "How grape and onion farmers in Nashik, Maharashtra are trapped in cycles of debt.", featured: false },
  { slug: "harvest-of-death", title: "Harvest of Death", date: "2007-06-30", categories: ["Farm Crisis"], description: "Documenting farmer suicides in Wardha and Yavatmal, Maharashtra.", featured: false },
  { slug: "bt-rice-trials-uprooted", title: "Bt Rice Trials Uprooted", date: "2007-06-30", categories: ["Environment", "Farm Crisis"], description: "Community resistance against genetically modified rice trials in India.", featured: false },
  { slug: "back-to-the-basics", title: "Back to the Basics", date: "2007-06-30", categories: ["Environment", "Farm Crisis"], description: "Organic farming alternatives gaining ground in Wardha, Maharashtra.", featured: false },
  { slug: "weddings-in-the-time-of-suicide", title: "Weddings in the Time of Suicide", date: "2007-06-30", categories: ["Farm Crisis"], description: "How farmer suicides cast a shadow over rural celebrations in Amaravati, Maharashtra.", featured: false },
  { slug: "villages-for-sale-in-vidarbh", title: "Villages for Sale in Vidarbh", date: "2007-06-30", categories: ["Farm Crisis"], description: "Entire villages put up for sale as agrarian crisis deepens in Vidarbha.", image: "images/vidarbh1.jpg", featured: false },
  { slug: "biotech-brinjal", title: "Biotech Brinjal", date: "2007-06-30", categories: ["Environment", "Farm Crisis"], description: "The controversy around genetically modified brinjal and its implications for Indian agriculture.", featured: false },
  { slug: "sugar-daddies", title: "Sugar Daddies", date: "2007-03-31", categories: ["Farm Crisis", "Globalization"], description: "How sugar subsidies in rich nations devastate farmers in the developing world.", image: "images/sugarcane1.jpg", featured: false },
  { slug: "red-carpet-for-lions", title: "Red Carpet for Lions, Red Card for People", date: "2006-10-24", categories: ["Environment", "Human Rights"], description: "When wildlife conservation displaces indigenous communities near Gir forest.", featured: false },
  { slug: "a-kingdom-too-small", title: "A Kingdom Too Small", date: "2006-10-22", categories: ["Environment"], description: "The Asiatic lion's shrinking habitat and the conflict between conservation and local communities.", featured: false },
  { slug: "taking-on-the-lion-of-gujarat", title: "Taking on The Lion of Gujarat", date: "2006-11-22", categories: ["Gujarat Violence", "Human Rights"], description: "Zakia Jafri's fight for justice after the murder of her husband, former MP Ahsan Jafri.", featured: false },
  { slug: "festival-of-fear", title: "Festival of Fear", date: "2006-11-22", categories: ["Gujarat Violence"], description: "How religious festivals are weaponized to intimidate tribal communities in Dang, Gujarat.", featured: false },
  { slug: "hindus-awake-christians-run", title: "Hindus Awake, Christians Run", date: "2006-11-22", categories: ["Gujarat Violence", "Human Rights"], description: "Communal violence targeting Christians in Gujarat's tribal regions.", featured: false },
  { slug: "digging-up-the-dead", title: "Digging Up the Dead", date: "2006-11-19", categories: ["Gujarat Violence"], description: "The exhumation of mass graves in Lunawada and Ahmedabad reveals the true toll of the 2002 violence.", featured: false },
  { slug: "still-a-burning-question", title: "Still a Burning Question", date: "2006-11-19", categories: ["Gujarat Violence"], description: "Investigating the Godhra train fire and the questions that remain unanswered.", featured: false },
  { slug: "zahiras-third-somersault", title: "Zahira's Third Somersault", date: "2006-11-18", categories: ["Gujarat Violence"], description: "The twisting legal journey of Best Bakery witness Zahira Sheikh.", featured: false },
  { slug: "let-the-worms-out", title: "Let the Worms Out", date: "2006-11-18", categories: ["Gujarat Violence"], description: "Exposing the deeper structures behind the 2002 Gujarat violence.", featured: false },
  { slug: "dam-lies", title: "Dam Lies", date: "2006-10-28", categories: ["Environment", "Human Rights"], description: "Medha Patkar and the fight against the Narmada dam and forced displacement.", featured: false },
  { slug: "dandi-in-the-time-of-globalisation", title: "Dandi in the Time of Globalisation", date: "2006-10-22", categories: ["Globalization"], description: "How globalisation transforms the site of Gandhi's historic Salt March.", featured: false },
  { slug: "private-water-public-thirst", title: "Private Water, Public Thirst", date: "2006-10-22", categories: ["Globalization"], description: "Water privatization and its impact on communities in Chandrapur, Maharashtra.", featured: false },
  { slug: "contract-killing-workers", title: "Contract Killing Workers", date: "2006-10-22", categories: ["Mumbai"], description: "The exploitation of contract workers in Mumbai's industrial landscape.", featured: false },
  { slug: "bulldozing-bombays-belly", title: "Bulldozing Bombay's Belly", date: "2006-10-22", categories: ["Mumbai"], description: "The demolition of slums and the destruction of livelihoods in Mumbai.", featured: false },
  { slug: "hounded-by-an-image", title: "Hounded by an Image: Qutubuddin Ansari", date: "2006-10-22", categories: ["People", "Gujarat Violence"], description: "The man behind the iconic photograph of the 2002 Gujarat riots and how it changed his life.", featured: false },
  { slug: "zaheera-interview", title: "'I Want the Case to Be Reopened': Zaheera", date: "2006-10-22", categories: ["People", "Gujarat Violence"], description: "An interview with key witness Zaheera about the Best Bakery case.", featured: false },
  { slug: "the-lost-generation", title: "The Lost Generation", date: "2006-10-22", categories: ["Human Rights"], description: "Malnutrition and child death in Nandurbar district, Maharashtra — a crisis of governance and neglect.", featured: false }
];

// ── Markdown Parser (minimal, no dependencies) ──
function parseFrontMatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { meta: {}, content: text };
  const meta = {};
  match[1].split('\n').forEach(line => {
    const m = line.match(/^(\w+):\s*"?(.+?)"?\s*$/);
    if (m) meta[m[1]] = m[2];
  });
  return { meta, content: match[2].trim() };
}

// ── Simple Markdown to HTML ──
function markdownToHtml(md) {
  let html = md
    // Headers
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^# (.+)$/gm, '<h1>$1</h1>')
    // Bold & italic
    .replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    // Images
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" loading="lazy">')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>')
    // Blockquotes
    .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
    // Horizontal rules
    .replace(/^---$/gm, '<hr>')
    // Unordered lists
    .replace(/^- (.+)$/gm, '<li>$1</li>');

  // Wrap consecutive <li> in <ul>
  html = html.replace(/((?:<li>.*<\/li>\n?)+)/g, '<ul>$1</ul>');

  // Wrap paragraphs (lines not already tagged)
  html = html.split('\n\n').map(block => {
    block = block.trim();
    if (!block) return '';
    if (block.startsWith('<h') || block.startsWith('<ul') || block.startsWith('<blockquote') ||
      block.startsWith('<hr') || block.startsWith('<img')) return block;
    // Only wrap if not already an HTML block
    if (!block.startsWith('<')) return `<p>${block.replace(/\n/g, '<br>')}</p>`;
    return block;
  }).join('\n');

  // Merge adjacent blockquotes
  html = html.replace(/<\/blockquote>\s*<blockquote>/g, '<br>');

  return html;
}

// ── Date Formatting ──
function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

// ── Get unique categories ──
function getCategories() {
  const cats = new Set();
  ARTICLES.forEach(a => a.categories.forEach(c => cats.add(c)));
  return [...cats].sort();
}

// ── Render article cards ──
function renderArticleCards(filter = 'All') {
  const container = document.getElementById('article-cards');
  if (!container) return;

  const filtered = filter === 'All'
    ? ARTICLES
    : ARTICLES.filter(a => a.categories.includes(filter));

  container.innerHTML = filtered.map(a => `
    <div class="article-card fade-in visible" onclick="navigateToArticle('${a.slug}')">
      ${a.image ? `<img class="thumb" src="${a.image}" alt="${a.title}" loading="lazy">` : ''}
      <div class="card-body">
        <span class="tag">${a.categories[0]}</span>
        <h3>${a.title}</h3>
        <p>${a.description}</p>
        <span class="meta">${formatDate(a.date)}</span>
      </div>
    </div>
  `).join('');
}

// ── Render category filters ──
function renderCategoryFilters() {
  const container = document.getElementById('category-filters');
  if (!container) return;

  const cats = getCategories();
  container.innerHTML = `<button class="active" onclick="filterArticles('All')">All</button>` +
    cats.map(c => `<button onclick="filterArticles('${c}')">${c}</button>`).join('');
}

function filterArticles(category) {
  document.querySelectorAll('.category-filter button').forEach(b => {
    b.classList.toggle('active', b.textContent === category);
  });
  renderArticleCards(category);
}

function jumpToCategory(category) {
  // Photography tag scrolls to photography section
  if (category === 'Photography') {
    document.getElementById('photography').scrollIntoView({ behavior: 'smooth' });
    return;
  }
  filterArticles(category);
  document.getElementById('writing').scrollIntoView({ behavior: 'smooth' });
}

// ── Article View ──
async function navigateToArticle(slug) {
  history.pushState(null, '', `#article/${slug}`);
  showArticle(slug);
}

async function showArticle(slug) {
  const article = ARTICLES.find(a => a.slug === slug);
  if (!article) return showHome();

  try {
    const res = await fetch(`content/articles/${slug}.md`);
    if (!res.ok) throw new Error('Not found');
    const text = await res.text();
    const { content } = parseFrontMatter(text);
    const html = markdownToHtml(content);

    const view = document.getElementById('article-view');
    view.innerHTML = `
      <div class="container">
        <a href="#writing" class="back-link" onclick="showHome('writing'); return false;">&larr; Back to writing</a>
        <div class="article-meta">
          <h1>${article.title}</h1>
          <div class="meta-info">
            <span>${formatDate(article.date)}</span>
            <span>${article.categories.join(' · ')}</span>
          </div>
        </div>
        <div class="article-content">${html}</div>
      </div>
    `;

    document.body.classList.add('viewing-article');
    view.classList.add('active');
    window.scrollTo(0, 0);
  } catch (e) {
    console.error('Failed to load article:', e);
    showHome();
  }
}

function showHome(scrollTo) {
  history.pushState(null, '', scrollTo ? `#${scrollTo}` : window.location.pathname);
  document.body.classList.remove('viewing-article');
  const view = document.getElementById('article-view');
  if (view) { view.classList.remove('active'); view.innerHTML = ''; }
  if (scrollTo) {
    const target = document.getElementById(scrollTo);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  }
}

// ── Photography Lightbox with keyboard nav ──
let lightboxPhotos = [];
let lightboxIndex = 0;

function buildPhotoList() {
  lightboxPhotos = [];
  document.querySelectorAll('.photo-cell').forEach(cell => {
    const img = cell.querySelector('img');
    const label = cell.querySelector('.label');
    if (img) lightboxPhotos.push({ src: img.src, caption: label ? label.textContent : '' });
  });
}

function openLightbox(src, caption) {
  buildPhotoList();
  lightboxIndex = lightboxPhotos.findIndex(p => p.src.endsWith(src.replace(/^.*\//, '')));
  if (lightboxIndex === -1) lightboxIndex = 0;

  const lb = document.getElementById('lightbox');
  lb.querySelector('img').src = src;
  lb.querySelector('.caption').textContent = caption;
  updateLightboxCounter();
  lb.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lb = document.getElementById('lightbox');
  lb.classList.remove('active');
  document.body.style.overflow = '';
}

function lightboxNav(direction) {
  if (!lightboxPhotos.length) return;
  lightboxIndex = (lightboxIndex + direction + lightboxPhotos.length) % lightboxPhotos.length;
  const photo = lightboxPhotos[lightboxIndex];
  const lb = document.getElementById('lightbox');
  lb.querySelector('img').src = photo.src;
  lb.querySelector('.caption').textContent = photo.caption;
  updateLightboxCounter();
}

function updateLightboxCounter() {
  const counter = document.getElementById('lightbox-counter');
  if (counter) counter.textContent = `${lightboxIndex + 1} / ${lightboxPhotos.length}`;
}

// ── Router ──
function handleRoute() {
  const hash = window.location.hash.slice(1);
  if (hash.startsWith('article/')) {
    const slug = hash.replace('article/', '');
    showArticle(slug);
  } else {
    document.body.classList.remove('viewing-article');
    const view = document.getElementById('article-view');
    if (view) { view.classList.remove('active'); view.innerHTML = ''; }
  }
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  // Render dynamic content
  renderCategoryFilters();
  renderArticleCards();

  // Scroll animations
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.fade-in').forEach(el => io.observe(el));

  // Nav shadow
  window.addEventListener('scroll', () => {
    document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 20);
  });

  // Mobile nav
  document.querySelectorAll('nav ul a').forEach(a => {
    a.addEventListener('click', () => document.querySelector('nav ul').classList.remove('open'));
  });

  // Lightbox close on click
  const lb = document.getElementById('lightbox');
  if (lb) {
    lb.addEventListener('click', (e) => {
      if (e.target === lb || e.target.classList.contains('close-btn')) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (!lb.classList.contains('active')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); lightboxNav(1); }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); lightboxNav(-1); }
    });
  }

  // Route handling
  window.addEventListener('hashchange', handleRoute);
  window.addEventListener('popstate', handleRoute);
  handleRoute();
});
