const updates = [
  { id: 1, headline: 'Markets rally after policy announcement', date: '2025-09-01' },
  { id: 2, headline: 'Angel Nexus hits 1,000+ happy clients milestone', date: '2025-08-20' }
];

export default function News() {
  return (
    <div className="p-8 text-white max-w-5xl mx-auto bg-charcoal">
      <h2 className="text-3xl font-bold mb-6 text-gold">News & Updates</h2>
      <div className="space-y-4">
        {updates.map(u => (
          <div key={u.id} className="bg-black border border-gold/30 rounded-xl p-6 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">{u.headline}</h3>
              <p className="text-sm text-gray-400">{u.date}</p>
            </div>
            <a href="#" className="text-gold hover:underline">Read</a>
          </div>
        ))}
      </div>
    </div>
  );
}


