const translations = {
  en: {
    'nav-home':        'Home',
    'nav-about':       'About',
    'nav-projects':    'Projects',
    'nav-blog':        'Blog',
    'sm-home':         'Home',
    'sm-about':        'About',
    'sm-projects':     'Projects',
    'sm-blog':         'Blog',
    'welcome-title':   'Welcome to my corner of the internet',
    'intro-greeting':  '<strong>Hi, I\'m Arielle!</strong> 👋',
    'intro-1':         'Welcome to my cute little website! I\'m into <em>computer networking</em>, <em>moe anime</em> and <em>niche tech</em>.',
    'intro-2':         'I\'ll put here things I find interesting, bloggy essays and generally just personal stuffs.',
    'intro-3':         'Grown tired of the sameness of normie net, I thought it would be a neat idea to go back to our roots and join <strong>nekonet</strong>, a revival of the past, to an era where we all had cringe websites, used forums and nolifed on irc, but were all the better for it!',
    'intro-links':     'Have a look around: <a href="/blog/">posts</a>, <a href="/projects/">projects</a>, or <a href="/about/">about me</a>.',
    'recent-posts':    'Recent Blog Posts',
    'view-all-posts':  'View all posts →',
    'no-posts':        'No posts yet. Check back soon!',
    'whats-up':        'What I\'m Up To',
    'label-interest':  'Interested In:',
    'label-watching':  'Watching:',
    'label-working':   'Working On:',
    'label-into':      'Into:',
    'label-based':     'Based In:',
    'val-interest':    'Computer Networking & Niche Tech',
    'val-watching':    'CGDCT, Wholesome Yuri',
    'val-working':     'Learning Claude, Studying for CompTIA',
    'val-into':        'Maids and Catgirls',
    'val-based':       '🇳🇱 Netherlands',
    'footer-made':     'made with',
  },
  ca: {
    'nav-home':        'Inici',
    'nav-about':       'Sobre mi',
    'nav-projects':    'Projectes',
    'nav-blog':        'Blog',
    'sm-home':         'Inici',
    'sm-about':        'Sobre mi',
    'sm-projects':     'Projectes',
    'sm-blog':         'Blog',
    'welcome-title':   "Benvinguda al meu racó d'internet",
    'intro-greeting':  "<strong>Hola, soc l'Arielle!</strong> 👋",
    'intro-1':         "Benvinguda al meu adorable lloc web! M'interessen les <em>xarxes informàtiques</em>, l'<em>anime moe</em> i la <em>tecnologia de nínxol</em>.",
    'intro-2':         'Aquí hi posaré coses que trobo interessants, assaigs i coses personals en general.',
    'intro-3':         "Cansada de la uniformitat de la xarxa normie, vaig pensar que seria una bona idea tornar als orígens i unir-me a <strong>nekonet</strong>, un revival del passat, d'una època on tothom tenia webs de cringe, usava fòrums i no tenia vida a l'irc, i tots hi érem millors!",
    'intro-links':     'Fes un cop d\'ull: <a href="/blog/">entrades</a>, <a href="/projects/">projectes</a>, o <a href="/about/">sobre mi</a>.',
    'recent-posts':    'Entrades recents',
    'view-all-posts':  'Veure totes les entrades →',
    'no-posts':        'Encara no hi ha entrades. Torna aviat!',
    'whats-up':        'Què estic fent',
    'label-interest':  "M'interessa:",
    'label-watching':  'Veient:',
    'label-working':   'Treballant en:',
    'label-into':      "M'agrada:",
    'label-based':     'Ubicació:',
    'val-interest':    'Xarxes informàtiques i tecnologia de nínxol',
    'val-watching':    'CGDCT, Yuri entranyable',
    'val-working':     'Aprenent Claude, estudiant per a la CompTIA',
    'val-into':        'Maides i noies gat',
    'val-based':       '🇳🇱 Països Baixos',
    'footer-made':     'fet amb',
  }
};

function applyLanguage(lang) {
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = lang === 'en' ? 'CA' : 'EN';
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang') || 'en';
  applyLanguage(saved);
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.addEventListener('click', () => {
    applyLanguage((localStorage.getItem('lang') || 'en') === 'en' ? 'ca' : 'en');
  });
});
