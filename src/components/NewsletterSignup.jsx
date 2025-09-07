import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('https://formsubmit.co/ajax/helloangelnexus@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: 'Newsletter signup from Angel Nexus website',
          Email: email,
          Source: 'Newsletter Form'
        })
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-black border border-gold/30 p-4 rounded-xl flex flex-col sm:flex-row gap-3 items-center">
      <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter your email" className="flex-1 p-3 rounded bg-gray-800 text-white placeholder-gray-400" required />
      <button disabled={status==='submitting'} className="bg-gold text-black font-semibold px-4 py-3 rounded hover:bg-gold-light disabled:opacity-60">
        {status==='submitting' ? 'Joining...' : 'Join Newsletter'}
      </button>
      {status==='success' && <span className="text-green-400 text-sm">Subscribed!</span>}
      {status==='error' && <span className="text-red-400 text-sm">Try again later.</span>}
    </form>
  );
}


