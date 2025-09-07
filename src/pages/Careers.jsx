import { useState } from 'react';

const openings = [
  { id: 1, role: 'Social Media Manager', type: 'Full-time', location: 'Remote' },
  { id: 2, role: 'Content Creator', type: 'Part-time', location: 'Remote' }
];

export default function Careers() {
  const [resume, setResume] = useState(null);
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      const form = new FormData(e.currentTarget);
      form.append('_subject', 'New career application from Angel Nexus website');
      // Send to FormSubmit (supports multipart)
      const res = await fetch('https://formsubmit.co/ajax/helloangelnexus@gmail.com', {
        method: 'POST',
        body: form
      });
      if (res.ok) {
        setStatus('success');
        e.currentTarget.reset();
        setResume(null);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <div className="p-8 text-white max-w-5xl mx-auto bg-charcoal">
      <h2 className="text-3xl font-bold mb-6 text-gold">Careers</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <section>
          <h3 className="text-xl font-semibold mb-3">Open Positions</h3>
          <div className="space-y-4">
            {openings.map(o => (
              <div key={o.id} className="bg-black border border-gold/30 rounded-xl p-6">
                <h4 className="text-lg font-semibold">{o.role}</h4>
                <p className="text-sm text-gray-400">{o.type} • {o.location}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-300 mt-6">Work with Angel Nexus to grow with us.</p>
        </section>
        <section>
          <h3 className="text-xl font-semibold mb-3">Apply Now</h3>
          <form onSubmit={handleSubmit} className="bg-black border border-gold/30 rounded-xl p-6">
            <input name="Full Name" type="text" placeholder="Full Name" className="w-full mb-3 p-3 rounded bg-gray-700 text-white placeholder-gray-400" required />
            <input name="Email" type="email" placeholder="Email" className="w-full mb-3 p-3 rounded bg-gray-700 text-white placeholder-gray-400" required />
            <input name="Phone" type="tel" placeholder="Phone" className="w-full mb-3 p-3 rounded bg-gray-700 text-white placeholder-gray-400" />
            <input name="Resume" onChange={e=>setResume(e.target.files?.[0]||null)} type="file" accept=".pdf,.doc,.docx" className="w-full mb-4 text-gray-300" />
            <button disabled={status==='submitting'} className="w-full bg-gold text-black font-semibold py-3 rounded hover:bg-gold-light disabled:opacity-60">
              {status==='submitting' ? 'Submitting...' : 'Submit Application'}
            </button>
            {resume && <p className="text-sm text-gray-400 mt-2">Selected: {resume.name}</p>}
            {status==='success' && <p className="text-green-400 mt-3">Application submitted! We’ll get back soon.</p>}
            {status==='error' && <p className="text-red-400 mt-3">Unable to submit. Please try again later.</p>}
          </form>
        </section>
      </div>
    </div>
  );
}


