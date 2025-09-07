export default function About() {
  return (
    <div className="p-8 text-white max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gold">About Angel Nexus</h2>

      <section className="bg-black border border-gold/30 rounded-xl p-6 md:p-8 mb-8">
        <p className="text-gray-300">
          Angel Nexus is a trusted financial services company dedicated to helping individuals and
          businesses achieve their financial goals with confidence. As an authorized sub-broker with
          Angel One & Lemonn and a certified advisor for life, health, and motor insurance, we offer a
          complete range of investment and protection solutions.
        </p>
        <p className="text-gray-300 mt-4">
          Our mission is to simplify investing and financial planning for everyone by combining stock
          market expertise, modern technology, and personalized guidance. At Angel Nexus, we believe in
          building long-term relationships based on trust, transparency, and growth.
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <section className="bg-black border border-gold/30 rounded-xl p-6 md:p-8">
          <h3 className="text-xl font-semibold mb-3 text-gold">Our Services Include</h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Stock Broking & Demat Services</li>
            <li>Equity & Mutual Fund Investments</li>
            <li>Trading Support & Market Insights</li>
            <li>Life, Health & Motor Insurance</li>
            <li>Financial Planning & Wealth Management</li>
          </ul>
        </section>

        <section className="bg-black border border-gold/30 rounded-xl p-6 md:p-8">
          <h3 className="text-xl font-semibold mb-3 text-gold">Our Vision</h3>
          <p className="text-gray-300">
            To be a one-stop financial hub that empowers people to invest smarter, grow wealth, and
            secure their future.
          </p>
        </section>
      </div>

      <p className="text-xs text-gray-400 mt-8">
        We are not SEBI registered. Investments in securities market are subject to market risks.
        Please read all related documents carefully before investing.
      </p>
    </div>
  );
}


