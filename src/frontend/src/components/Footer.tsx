import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[oklch(0.22_0.06_260)] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🦷</span>
              <span className="font-display font-bold text-xl">SmileCare</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Advanced dental care for a healthy, confident smile. Serving Agra
              and surrounding areas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/70">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Doctor" },
                { to: "/services", label: "Services" },
                { to: "/appointment", label: "Book Appointment" },
                { to: "/reviews", label: "Patient Reviews" },
                { to: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-white/70">
              {[
                "Dental Implants",
                "Root Canal Treatment",
                "Teeth Whitening",
                "Braces & Aligners",
                "Tooth Extraction",
                "Pediatric Dentistry",
              ].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                <span>
                  15, Civil Lines, Near Agra Fort, Agra - 282001, Uttar Pradesh
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-primary" />
                <a href="tel:+919876543210" className="hover:text-white">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-primary" />
                <a
                  href="mailto:info@smilecaredental.in"
                  className="hover:text-white"
                >
                  info@smilecaredental.in
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} className="shrink-0 text-primary" />
                <span>Mon–Sat 9AM–7PM | Sun 10AM–2PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/50">
          <p>© {year} SmileCare Dental Clinic, Agra. All rights reserved.</p>
          <p>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
