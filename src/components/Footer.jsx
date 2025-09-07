const BRAND = {
  name: 'Angel Nexus',
  tagline: 'Ego kills growth'
};

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white text-center py-6 mt-12 border-t border-gold/40">
      <p className="text-gold">&copy; {new Date().getFullYear()} {BRAND.name}. All Rights Reserved.</p>
      <p className="text-sm text-gray-300">{BRAND.tagline}</p>
    </footer>
  );
}


