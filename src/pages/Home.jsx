// logo served from public directory
import LeadForm from '../components/LeadForm';
import { Link } from 'react-router-dom';
import NewsletterSignup from '../components/NewsletterSignup';

import { useUi, useT } from '../context/UiContext.jsx';

const BRAND = {
  name: 'Angel Nexus',
  tagline: 'Ego kills growth'
};

export default function Home() {
  const { lang } = useUi();
  const t = useT();
  return (
    <div id='sand'>
      <div>
      <section className=" text-center">
      <img 
  src="/AngelNexusLogo[2].png" 
  alt="Angel Nexus Logo" 
  className="mx-auto my-4 w-60 h-auto max-h-40 "
/>

        {/* <h1 className="text-4xl font-bold mb-2">{BRAND.name}</h1> */}
        {/* <p className="text-gold mb-6">{BRAND.tagline}</p> */}
        <div className="flex gap-3 justify-center">
          <Link to="/open-account" className="bg-gold text-black font-semibold px-5 py-3 rounded hover:bg-gold-light">{lang==='en'?'Open Your Demat Account':'अपना डीमैट खाता खोलें'}</Link>
          <a href="#lead" className="bg-white/10 text-white border border-gold/60 font-semibold px-5 py-3 rounded hover:bg-white/20">{lang==='en'?'Get Free Consultation':'निःशुल्क सलाह प्राप्त करें'}</a>
        </div>
      </section>

      <section className="px-6 pb-12 max-w-5xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-6 text-center">{t('what_we_offer')}</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="bg-black rounded-xl p-6 border border-gold/30">
            <h3 className="text-xl font-semibold mb-2">Trading</h3>
            <p className="text-gray-300">Demat opening, trading support, and sub-broking.</p>
          </div>
          <div className="bg-black rounded-xl p-6 border border-gold/30">
            <h3 className="text-xl font-semibold mb-2">Insurance</h3>
            <p className="text-gray-300">Health, Life, and Motor insurance plans.</p>
          </div>
          <div className="bg-black rounded-xl p-6 border border-gold/30">
            <h3 className="text-xl font-semibold mb-2">Investments</h3>
            <p className="text-gray-300">SIPs, mutual funds, and long-term wealth planning.</p>
          </div>
        </div>
      </section>

      <section  className='bg-charcoal w-100 mx-auto p-10 ml-20 mr-20 rounded-[20px]'>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-gold">{t('how_open_demat')}</h2>
          <div className="grid md:grid-cols-4 gap-8 text-white">
            <div className="space-y-3">
              <span className="text-sm tracking-widest text-gold">STEP 1</span>
              <h3 className="text-xl font-semibold">Download the app or visit website</h3>
              <p className="text-purple-100">Start on web or mobile — quick signup.</p>
              <div className="flex gap-3 pt-2">
                <a className="bg-black text-white px-3 py-2 rounded text-xs" href="#">App Store</a>
                <a className="bg-black text-white px-3 py-2 rounded text-xs" href="#">Google Play</a>
              </div>
            </div>
            <div className="space-y-3">
              <span className="text-sm tracking-widest text-gold">STEP 2</span>
              <h3 className="text-xl font-semibold">Enter mobile and verify OTP</h3>
              <p className="text-purple-100">We’ll verify your number to secure your account.</p>
            </div>
            <div className="space-y-3">
              <span className="text-sm tracking-widest text-gold">STEP 3</span>
              <h3 className="text-xl font-semibold">Verify KYC and bank details</h3>
              <p className="text-purple-100">Complete KYC as per regulations, safely encrypted.</p>
            </div>
            <div className="space-y-3">
              <span className="text-sm tracking-widest text-gold">STEP 4</span>
              <h3 className="text-xl font-semibold">eSign your form and documents</h3>
              <p className="text-purple-100">Finish with secure eSign and get started.</p>
            </div>
          </div>
          <p className="flex items-center gap-2 text-gray-300 text-sm mt-10">
            <span className="text-lg">🔒</span>
            All data is stored safely with encryption as per regulatory guidelines.
          </p>
        </div>
      </section>

      <section className="px-6 pb-12 max-w-5xl mx-auto bg-charcoal w-100 mx-auto p-10 mt-5 mb-5 rounded-[20px]">
        <h2 className="text-5xl font-semibold mb-6 text-center">{t('clients_say')}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["Smooth Demat onboarding.", "Great advisory for SIPs.", "Helpful support team."].map((t,i)=> (
            <div key={i} className="bg-gray-800 rounded-xl p-6">
              <p className="text-gray-200">“{t}”</p>
              <span className="block mt-3 text-sm text-gray-400">— Client {i+1}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="lead" className="px-6 pb-12 max-w-3xl mx-auto">
        <LeadForm cta="Request Callback" />
      </section>

      <section className="px-6 pb-16 max-w-3xl mx-auto">
        <h3 className="text-center text-xl font-semibold mb-3">Get market tips & updates</h3>
        <NewsletterSignup />
      </section>
    </div>
    </div>
  );
}


