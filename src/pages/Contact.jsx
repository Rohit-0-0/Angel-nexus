import LeadForm from '../components/LeadForm';

export default function Contact() {
  return (
    <div className="p-8 text-white max-w-6xl mx-auto bg-charcoal">
      <h2 className="text-3xl font-bold mb-6 text-gold">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <section>
          <h3 className="text-xl font-semibold mb-3">Reach us</h3>
          <p className="text-gray-300">Email: helloangelnexus@gmail.com</p>
          <p className="text-gray-300">Phone: +91-9285295235</p>
          <div className="mt-6 space-x-4">
            <a className="text-gold hover:underline" rel="noreferrer" href="https://www.linkedin.com/company/angel-nexus/" target='_blank'>LinkedIn</a>
            <a className="text-gold hover:underline" rel="noreferrer" href="https://www.instagram.com/angelonewithyash?igsh=a2s0cnAxYTh5Z3k%3D&utm_source=qr" target='_blank'>Instagram</a>
          </div>
          <div className="mt-6">
            <iframe title="map" className="w-full h-64 rounded-xl border-0" loading="lazy" allowFullScreen src="https://www.google.com/maps?q=Indore&output=embed"></iframe>
          </div>
        </section>
        <section>
          <h3 className="text-xl font-semibold mb-3">Send a message</h3>
          <LeadForm cta="Send" />
        </section>
      </div>
    </div>
  );
}


