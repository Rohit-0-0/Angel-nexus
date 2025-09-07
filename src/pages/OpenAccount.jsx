import { useNavigate } from 'react-router-dom';

export default function OpenAccount() {
  const navigate = useNavigate();

  function goAngelOne() {
    window.open('https://angel-one.onelink.me/Wjgr/f5aptka3', '_blank', 'noopener,noreferrer');
  }

  function goLemonn() {
    navigate('/open-account/lemonn');
  }

  return (
    <div className="min-h-screen bg-charcoal text-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gold mb-8 text-center">Choose Your Account Provider</h1>
        <div className="grid sm:grid-cols-2 gap-6">
          <button onClick={goAngelOne} className="bg-black border border-gold/40 rounded-xl p-6 text-left hover:border-gold transition">
            <h2 className="text-xl font-semibold mb-2 text-gold">Angel One</h2>
            <p className="text-gray-300 mb-3">Trusted full‑stack broker with seamless onboarding and a powerful app for trading and investing.</p>
            <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 mb-4">
              <li>Quick KYC and account activation</li>
              <li>Stocks, F&O, commodities, mutual funds</li>
              <li>Reliable research and market insights</li>
            </ul>
            <span className="inline-block mt-4 bg-gold text-black px-4 py-2 rounded">Proceed</span>
          </button>
          <button onClick={goLemonn} className="bg-black border border-gold/40 rounded-xl p-6 text-left hover:border-gold transition">
            <h2 className="text-xl font-semibold mb-2 text-gold">Lemonn</h2>
            <p className="text-gray-300 mb-3">Simple, modern investing experience focused on ease of use and fast setup.</p>
            <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 mb-4">
              <li>Clean UI and smooth onboarding</li>
              <li>Core investing essentials to get started</li>
              <li>We’ll link to the official signup shortly</li>
            </ul>
            <span className="inline-block mt-4 bg-gold text-black px-4 py-2 rounded">Proceed</span>
          </button>
        </div>
      </div>
    </div>
  );
}


