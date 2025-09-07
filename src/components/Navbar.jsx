import { Link } from 'react-router-dom';
import { useUi, useT } from '../context/UiContext.jsx';
// use logo from public folder for consistency

const BRAND = {
  name: 'Angel Nexus',
  tagline: 'Ego kills growth'
};

export default function Navbar() {
  const { lang, setLang } = useUi();
  const t = useT();
  return (
    <nav className="bg-charcoal text-white px-6 py-4 flex justify-between items-center border-b border-gold/40">
      <div className="flex items-center gap-2">
        <img src="/AngelNexusLogo[2].png" alt="Angel Nexus Logo" className="h-10 w-auto" />
        <span className="font-bold text-2xl text-gold">{BRAND.name}</span>
      </div>
      <div className="flex gap-6 items-center">
        <Link to="/" className="hover:text-gold">{t('home')}</Link>
        <Link to="/about" className="hover:text-gold">{t('about')}</Link>
        <Link to="/services" className="hover:text-gold">{t('services')}</Link>
        <Link to="/blog" className="hover:text-gold">{t('blog')}</Link>
        <Link to="/news" className="hover:text-gold">{t('news')}</Link>
        <Link to="/careers" className="hover:text-gold">{t('careers')}</Link>
        <Link to="/contact" className="hover:text-gold">{t('contact')}</Link>
        <button onClick={()=>setLang(lang==='en'?'hi':'en')} className="text-xs px-2 py-1 border border-gold/50 rounded hover:bg-white/10">
          {lang==='en' ? 'हिंदी' : 'EN'}
        </button>
      </div>
    </nav>
  );
}


