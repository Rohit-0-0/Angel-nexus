import { useT } from '../context/UiContext.jsx';
import { Link } from 'react-router-dom'; // Add this import

export default function Services() {
  const t = useT();
  return (
    <div className="p-8 text-white max-w-6xl mx-auto bg-charcoal">
      <h2 className="text-3xl font-bold mb-6 text-gold">{t('our_services')}</h2>

      <section className="bg-black border border-gold/30 rounded-xl p-6 md:p-8 mb-6">
        <h3 className="text-2xl font-semibold mb-2">{t('stock_demat')}</h3>
        <p className="text-gray-300 mb-4">{t('stock_demat_p')}</p>
        <Link to="/contact" className="inline-block bg-gold text-black font-semibold px-5 py-3 rounded hover:bg-gold-light">{t('apply_now')}</Link>
      </section>

      <section className="bg-black border border-gold/30 rounded-xl p-6 md:p-8 mb-6">
        <h3 className="text-2xl font-semibold mb-2">{t('insurance_services')}</h3>
        <p className="text-gray-300 mb-4">{t('insurance_services_p')}</p>
        <Link to="/contact" className="inline-block bg-gold text-black font-semibold px-5 py-3 rounded hover:bg-gold-light">{t('contact_us')}</Link>
      </section>

      <section className="bg-black border border-gold/30 rounded-xl p-6 md:p-8">
        <h3 className="text-2xl font-semibold mb-2">{t('financial_advisory')}</h3>
        <p className="text-gray-300 mb-4">{t('financial_advisory_p')}</p>
        <Link to="/contact" className="inline-block bg-gold text-black font-semibold px-5 py-3 rounded hover:bg-gold-light">{t('talk_to_advisor')}</Link>
      </section>
    </div>
  );
}