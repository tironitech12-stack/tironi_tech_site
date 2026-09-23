import { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getSiteText } from '../../content/siteContent';
import Navbar from '../layout/Navbar';
import '../../styles/theme.css';
import '../../styles/blog.css';

export default function NotFoundPage() {
  const { languageOptions } = useLanguage();
  const t = getSiteText('pt');
  useEffect(() => {
    document.title = 'Página não encontrada | Tironi Tech';
    const robots = document.head.querySelector('meta[name="robots"]');
    if (robots) robots.content = 'noindex, follow';
  }, []);
  return <div className="tt2-page tt-blog-page"><Navbar t={t} language="pt" setLanguage={() => {}} languageOptions={languageOptions} /><main className="tt-blog-not-found"><span className="tt-blog-kicker">ERRO 404</span><h1>Esta página não existe.</h1><p>Use os caminhos abaixo para continuar.</p><div className="tt-service-actions"><a className="tt-blog-primary-link" href="/">Página inicial</a><a className="tt-blog-primary-link" href="/blog">Acessar o blog</a></div></main></div>;
}
