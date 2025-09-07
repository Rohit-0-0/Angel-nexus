import { useState } from 'react';

export default function LeadForm({ variant = 'default', cta = 'Submit' }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', interest: '', message: '' });
  const [status, setStatus] = useState('idle');

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('https://formsubmit.co/ajax/helloangelnexus@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: 'New lead from Angel Nexus website',
          Name: formData.name,
          Email: formData.email,
          Phone: formData.phone,
          'Service Interest': formData.interest,
          Message: formData.message
        })
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`bg-black border border-gold/30 p-6 rounded-xl w-full ${variant === 'compact' ? 'max-w-md' : 'max-w-lg'} mx-auto`}>
      <h2 className="text-xl mb-4 font-semibold text-white">Get in Touch</h2>
      <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Your Name" className="w-full mb-3 p-3 rounded bg-gray-700 text-white placeholder-gray-400" required />
      <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Your Email" className="w-full mb-3 p-3 rounded bg-gray-700 text-white placeholder-gray-400" required />
      <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Your Phone" className="w-full mb-3 p-3 rounded bg-gray-700 text-white placeholder-gray-400" />
      <select name="interest" value={formData.interest} onChange={handleChange} className="w-full mb-3 p-3 rounded bg-gray-700 text-white">
        <option value="">Service Interest</option>
        <option>Stock Market & Demat</option>
        <option>Insurance Services</option>
        <option>Financial Advisory</option>
      </select>
      <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message (optional)" className="w-full mb-4 p-3 rounded bg-gray-700 text-white placeholder-gray-400" rows="3"></textarea>
      <button type="submit" disabled={status==='submitting'} className="w-full bg-gold text-black font-bold py-3 rounded hover:bg-gold-light disabled:opacity-60">
        {status==='submitting' ? 'Sending...' : cta}
      </button>
      {status==='success' && <p className="text-green-400 mt-3">Thank you! We have received your details.</p>}
      {status==='error' && <p className="text-red-400 mt-3">Something went wrong. Please try again.</p>}
    </form>
  );
}


