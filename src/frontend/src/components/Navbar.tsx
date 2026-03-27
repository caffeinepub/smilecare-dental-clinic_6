import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home", ocid: "nav.home.link" },
  { to: "/about", label: "About", ocid: "nav.about.link" },
  { to: "/services", label: "Services", ocid: "nav.services.link" },
  { to: "/reviews", label: "Reviews", ocid: "nav.reviews.link" },
  { to: "/contact", label: "Contact", ocid: "nav.contact.link" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link
          to="/"
          className="flex items-center gap-2 font-display font-bold text-xl"
        >
          <span className="text-2xl">🦷</span>
          <span className="text-[oklch(0.42_0.16_255)]">SmileCare</span>
          <span className="text-foreground/60 font-body font-medium text-sm hidden sm:block">
            Dental Clinic
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid={link.ocid}
              className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors rounded-md hover:bg-accent"
              activeProps={{ className: "text-primary bg-accent" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Link to="/appointment" data-ocid="nav.appointment.primary_button">
              Book Appointment
            </Link>
          </Button>

          <button
            type="button"
            className="md:hidden p-2 rounded-md hover:bg-accent"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-ocid={link.ocid}
              className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-primary rounded-md hover:bg-accent block"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/appointment"
            onClick={() => setOpen(false)}
            className="mt-2 btn-primary text-center rounded-md"
          >
            Book Appointment
          </Link>
        </div>
      )}
    </header>
  );
}
