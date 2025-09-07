import NewsletterSignup from '../components/NewsletterSignup';
import { useT } from '../context/UiContext.jsx';

const posts = [
  { id: 1, title: 'Psychology of Money: Staying Invested', excerpt: 'Why time in the market beats timing the market.' },
  { id: 2, title: 'Beginner’s Guide to SIPs', excerpt: 'How small, regular investments compound over time.' },
  { id: 3, title: 'Health Insurance Basics', excerpt: 'Picking the right coverage for your family.' }
];

export default function Blog() {
  const t = useT();
  return (
    <div className="p-8 text-white max-w-5xl mx-auto bg-charcoal">
      <h2 className="text-3xl font-bold mb-6 text-gold">{t('blog_h')}</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {posts.map(p => (
          <article key={p.id} className="bg-black border border-gold/30 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-300 mb-3">{p.excerpt}</p>
            <a href="/blog" className="text-gold hover:underline">{t('read_more')}</a>
          </article>
        ))}
      </div>
      <div className="max-w-3xl mx-auto">
        <h3 className="text-xl font-semibold mb-3">Get new posts in your inbox</h3>
        <NewsletterSignup />
      </div>
    </div>
  );
}


