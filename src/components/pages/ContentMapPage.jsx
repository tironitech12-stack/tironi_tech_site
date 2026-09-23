import { useEffect, useMemo } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { blogArticles, blogCategories } from '../../content/blogArticles';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import CookieConsent from '../shared/CookieConsent';
import '../../styles/theme.css';
import '../../styles/blog.css';

export default function ContentMapPage() {
  const { t, language, setLanguage, languageOptions } = useLanguage();
  const groups = useMemo(() => blogCategories.filter((category) => category !== 'Todos').map((category) => ({
    category,
    articles: blogArticles.filter((article) => article.category === category),
  })).filter((group) => group.articles.length), []);

  useEffect(() => {
    document.title = 'Mapa de conteúdo | Tironi Tech';
    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = 'https://www.tironitech.com/mapa-do-site';
    window.scrollTo(0, 0);
  }, []);

  return <div className="tt2-page tt-blog-page"><div className="tt2-page-inner">
    <Navbar t={t} language={language} setLanguage={setLanguage} languageOptions={languageOptions} />
    <main className="tt-content-map tt2-container">
      <header><span className="tt-blog-kicker">MAPA DE CONTEÚDO</span><h1>Tudo o que a Tironi Tech publicou, organizado por assunto.</h1><p>Encontre guias sobre IA para WhatsApp, software, automação, ChatBô, GeoAura, SEO e GEO.</p></header>
      <nav aria-label="Páginas principais"><a href="/">Início</a><a href="/club">Tironi Tech Club</a><a href="/blog">Blog</a><a href="/#contato">Contato</a></nav>
      {groups.map((group) => <section key={group.category}><h2>{group.category} <small>{group.articles.length} guias</small></h2><ul>{group.articles.map((article) => <li key={article.slug}><a href={`/blog/${article.slug}`}>{article.title}</a></li>)}</ul></section>)}
    </main>
    <Footer t={t} contactEmail="tironi@tironitech.com" whatsappNumber="5543996676633" language={language} setLanguage={setLanguage} languageOptions={languageOptions} />
    <CookieConsent t={t} />
  </div></div>;
}
