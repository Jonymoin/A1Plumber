import { useState, useEffect } from "react";
import HeroSection from "./HeroSection";

const WHATSAPP = "https://wa.me/6584130016";
const PHONE = "tel:+6584130016";
const PHONE_DISPLAY = "+65 8413 0016";

const WhatsAppIcon = ({ size = 20 }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const services = [
  { icon: "💧", title: "Pipe Repair & Leaks", desc: "Burst pipes, leaking joints, hidden pipe leaks — detected and fixed fast with minimal disruption to your home." },
  { icon: "🚿", title: "Bathroom Installation", desc: "Full bathroom fit-outs, shower systems, bathtubs, vanity units, and toilet installations with quality workmanship." },
  { icon: "🚨", title: "Emergency Plumbing", desc: "Plumbing emergencies don't wait. Our team is on call 24/7, reaching you anywhere in Singapore within the hour." },
  { icon: "🚰", title: "Water Heater Service", desc: "Installation, repair, and replacement of storage and instant water heaters. All major brands serviced." },
  { icon: "🔩", title: "Choke & Drainage", desc: "Stubborn clogs in sinks, toilets, floor traps, or main lines — cleared efficiently using professional tools." },
  { icon: "🏠", title: "Renovation Plumbing", desc: "New installations for kitchen and bathroom renovations. We coordinate seamlessly with your ID or contractor." },
];

const stats = [
  { value: "500+", label: "Jobs Completed" },
  { value: "10+", label: "Years Experience" },
  { value: "24/7", label: "Emergency Service" },
  { value: "PUB", label: "Licensed Plumbers" },
];

const whyUs = [
  { icon: "🏅", title: "PUB Licensed", desc: "Fully certified and licensed plumbers compliant with Singapore regulations." },
  { icon: "⚡", title: "Fast Response", desc: "Same-day bookings available. Emergency response within 60 minutes." },
  { icon: "💰", title: "Transparent Pricing", desc: "No hidden fees. Upfront quotes before work begins. No surprises." },
  { icon: "🛡️", title: "Workmanship Warranty", desc: "All repairs backed by our 90-day workmanship guarantee." },
];

const testimonials = [
  { text: "Called at 11pm for a burst pipe emergency. Plumber arrived within 45 minutes and fixed everything professionally. Highly recommended!", name: "Priya R.", location: "Tampines HDB" },
  { text: "Very honest and transparent. They quoted me before starting the job — no surprise charges. Will definitely use A1Plumber again for my next renovation.", name: "Daniel Lim", location: "Jurong West Condo" },
  { text: "Fixed our shower choke problem in under 30 minutes. Clean, efficient, and polite. Also replaced our old water heater — great value for money!", name: "Mei Lin T.", location: "Bishan Landed" },
];

const badges = ["✅ Free Quote", "✅ All Areas in Singapore", "✅ Weekends & PHs"];
const navLinks = ["Services", "About", "Reviews", "Contact"];

export default function Plumbersg() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-emerald-50 text-emerald-950 font-sans">

      {/* NAV */}
      <nav className={`bg-emerald-950 sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-2xl" : ""}`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-emerald-500 rounded-xl w-10 h-10 flex items-center justify-center text-xl">🔧</div>
            <div>
              <p className="text-white font-bold text-lg leading-tight tracking-tight">A1Plumber</p>
              <p className="text-emerald-300 text-xs uppercase tracking-widest">Plumbing Singapore</p>
            </div>
          </div>

          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-white/80 hover:text-white text-sm font-medium transition-colors duration-200 relative group bg-transparent border-0 cursor-pointer"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-emerald-300 transition-all duration-300" />
              </button>
            ))}
          </div>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-teal-600 hover:scale-105 transition-transform duration-300 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-green-500/30 no-underline"
          >
            <WhatsAppIcon size={16} />
            WhatsApp Us
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative bg-gradient-to-br from-emerald-950 via-emerald-800 to-emerald-700 py-24 px-6 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-80 h-80 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-pulse" />
              <span className="text-emerald-300 text-xs font-semibold uppercase tracking-widest">Available 24/7 · All Singapore</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Singapore's Trusted{" "}
              <em className="text-emerald-300 not-italic">Plumbing</em>{" "}
              Experts
            </h1>

            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Fast, reliable, and affordable plumbing services for HDB, condo, and landed properties. Certified plumbers, same-day service available.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-teal-600 hover:scale-105 active:scale-95 transition-transform duration-300 text-white font-bold text-base px-8 py-4 rounded-full shadow-xl shadow-green-500/30 no-underline"
              >
                <WhatsAppIcon size={22} />
                Chat on WhatsApp
              </a>
              <a
                href={PHONE}
                className="border-2 border-emerald-400/50 hover:bg-emerald-400/10 transition-colors duration-300 text-white font-semibold px-8 py-4 rounded-full no-underline"
              >
                📞 {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="hidden md:flex justify-center">
            <div className="relative bg-white/10 border border-emerald-400/30 rounded-3xl p-10 backdrop-blur-md">
              <div className="absolute -top-4 -right-4 bg-yellow-500 text-yellow-900 text-xs font-bold px-4 py-2 rounded-full animate-bounce shadow-lg">
                ⭐ 4.9 / 5 Rating
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="bg-white/10 border-l-4 border-emerald-400 rounded-xl p-4">
                    <p className="text-3xl font-black text-emerald-300">{s.value}</p>
                    <p className="text-white/70 text-xs mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
       <section>
        <HeroSection />
       </section>
      {/* SERVICES */}
      <section id="services" className="py-24 px-6 bg-emerald-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-emerald-600 text-xs font-semibold uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-4xl font-black text-emerald-950">Our Plumbing Services</h2>
            <p className="text-emerald-700/70 mt-4 max-w-md mx-auto leading-relaxed">
              From emergency pipe bursts to full bathroom installations — we handle it all across Singapore.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-8 shadow-md border border-emerald-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-300 flex items-center justify-center text-2xl shadow-lg shadow-emerald-400/30 mb-5">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-emerald-950 mb-2">{s.title}</h3>
                <p className="text-emerald-800/60 leading-relaxed text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="about" className="relative bg-emerald-950 py-24 px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <p className="text-emerald-300 text-xs font-semibold uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="text-4xl font-black text-white">The A1Plumber Difference</h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {whyUs.map((w) => (
              <div key={w.title} className="text-center px-4 py-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors duration-300">
                <div className="text-4xl mb-4">{w.icon}</div>
                <h4 className="text-emerald-300 font-bold mb-2">{w.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="bg-emerald-100 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-emerald-600 text-xs font-semibold uppercase tracking-widest mb-3">Customer Reviews</p>
            <h2 className="text-4xl font-black text-emerald-950">What Our Customers Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white border-t-4 border-emerald-500 rounded-2xl p-8 shadow-sm hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
              >
                <p className="text-yellow-500 text-lg mb-4">★★★★★</p>
                <p className="text-emerald-800/70 leading-relaxed mb-6 text-sm">"{t.text}"</p>
                <p className="font-bold text-emerald-950">{t.name}</p>
                <p className="text-emerald-600 text-xs mt-1">{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-emerald-600 text-xs font-semibold uppercase tracking-widest mb-3">Get In Touch</p>
          <h2 className="text-4xl font-black text-emerald-950 mb-4">Need a Plumber Now?</h2>
          <p className="text-emerald-700/70 leading-relaxed max-w-md mx-auto mb-10">
            Drop us a WhatsApp message for the fastest response. We serve all areas across Singapore.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-teal-600 hover:scale-105 active:scale-95 transition-transform duration-300 text-white font-bold text-lg px-10 py-5 rounded-full shadow-xl shadow-green-500/30 no-underline"
            >
              <WhatsAppIcon size={24} />
              {PHONE_DISPLAY}
            </a>
            <a
              href={PHONE}
              className="border-2 border-emerald-500 text-emerald-700 hover:bg-emerald-50 transition-colors duration-300 font-bold text-base px-8 py-5 rounded-full no-underline"
            >
              📞 Call Us
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-10 text-emerald-600/80 text-sm">
            {badges.map((b) => <span key={b}>{b}</span>)}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-emerald-950 text-white/60 py-10 px-6 text-center">
        <p className="text-white font-bold text-lg mb-1">A1Plumber Plumbing Singapore</p>
        <p className="text-sm mb-2">📞 {PHONE_DISPLAY} &nbsp;|&nbsp; Available 24/7 across Singapore</p>
        <p className="text-xs">© {new Date().getFullYear()} A1Plumber Plumbing. All rights reserved. PUB Licensed.</p>
      </footer>

      {/* STICKY WHATSAPP */}
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-7 right-7 z-50 flex items-center gap-2 bg-gradient-to-r from-green-500 to-teal-600 hover:scale-110 active:scale-95 transition-transform duration-300 text-white font-semibold text-sm px-5 py-3 rounded-full shadow-2xl shadow-green-500/40 no-underline"
      >
        <WhatsAppIcon size={20} />
        Chat Now
      </a>
    </div>
  );
}