import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@/hooks/useActor";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  DollarSign,
  Heart,
  Mail,
  MessageSquare,
  Microscope,
  Phone,
  Star,
  User,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const services = [
  {
    icon: "🦷",
    title: "Dental Implants",
    desc: "Permanent, natural-looking tooth replacements that restore your smile and confidence.",
  },
  {
    icon: "🔬",
    title: "Root Canal Treatment",
    desc: "Save your natural tooth and eliminate pain with our gentle, advanced root canal procedure.",
  },
  {
    icon: "✨",
    title: "Teeth Whitening",
    desc: "Professional whitening that brightens your smile up to 8 shades in a single visit.",
  },
  {
    icon: "😁",
    title: "Braces & Aligners",
    desc: "Straighten your teeth with metal braces or discreet clear aligners for a perfect bite.",
  },
  {
    icon: "💎",
    title: "Cosmetic Dentistry",
    desc: "Transform your smile with veneers, bonding, and smile makeover treatments.",
  },
  {
    icon: "👶",
    title: "Pediatric Dentistry",
    desc: "Gentle, child-friendly dental care to keep your little ones' smiles healthy from the start.",
  },
];

const whyUs = [
  {
    icon: Award,
    title: "Experienced Dentist",
    desc: "Dr. Rajesh Kumar Sharma brings 12+ years of expertise across all dental specialties.",
  },
  {
    icon: Microscope,
    title: "Modern Equipment",
    desc: "State-of-the-art digital X-rays, laser dentistry, and latest treatment technology.",
  },
  {
    icon: Heart,
    title: "Pain-Free Treatment",
    desc: "Advanced anaesthetic techniques ensure comfortable, anxiety-free dental care.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    desc: "Transparent, competitive pricing with flexible payment plans for all treatments.",
  },
];

const STAR_KEYS = ["s1", "s2", "s3", "s4", "s5"];

const testimonials = [
  {
    name: "Priya Agarwal",
    location: "Rakabganj, Agra",
    rating: 5,
    quote:
      "Dr. Sharma is absolutely wonderful! I had terrible tooth pain and he fixed my root canal the very next day. The clinic is spotless and the staff is so caring. Highly recommend SmileCare to everyone in Agra!",
  },
  {
    name: "Mohit Saxena",
    location: "Kamla Nagar, Agra",
    rating: 5,
    quote:
      "I got dental implants done here after years of hesitation. Dr. Sharma explained everything patiently and the procedure was completely painless. My smile looks natural and beautiful. Worth every rupee!",
  },
  {
    name: "Sunita Gupta",
    location: "Civil Lines, Agra",
    rating: 5,
    quote:
      "Brought my 8-year-old daughter for her first dental check-up. Dr. Sharma made her feel so at ease — she wasn't scared at all! The clinic has a warm, friendly atmosphere. Best dentist in Agra for families.",
  },
];

export default function HomePage() {
  const { actor } = useActor();
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) return;
    setSubmitting(true);
    try {
      await actor.submitContactForm(
        contactForm.name,
        contactForm.phone,
        contactForm.email,
        contactForm.message,
      );
      toast.success("Message sent! We'll get back to you soon.");
      setContactForm({ name: "", phone: "", email: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {/* HERO */}
      <section
        data-ocid="hero.section"
        className="relative min-h-[600px] flex items-center overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.22 0.08 260) 0%, oklch(0.38 0.16 255) 60%, oklch(0.52 0.18 245) 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "url('/assets/generated/hero-patient.dim_1200x600.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.22_0.08_260/0.85)] to-transparent" />

        <div className="container mx-auto px-4 relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Best Dentist in Agra | Now Accepting Appointments
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Advanced Dental Care for a{" "}
              <span className="text-[oklch(0.82_0.12_200)]">Healthy Smile</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 leading-relaxed">
              Best Dentist in Agra | SmileCare Dental Clinic, Uttar Pradesh.
              Gentle, pain-free treatments for the whole family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-[oklch(0.42_0.16_255)] font-bold hover:bg-white/90 shadow-lg"
              >
                <Link
                  to="/appointment"
                  data-ocid="hero.appointment.primary_button"
                >
                  Book Appointment
                </Link>
              </Button>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hero.whatsapp.secondary_button"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#20BA5A] transition-colors shadow-lg"
              >
                <span>💬</span> Contact Us on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-4">
              <span className="text-4xl">🦷</span>
            </div>
            <h2 className="section-heading mb-4">
              Welcome to SmileCare Dental Clinic
            </h2>
            <p className="section-subheading mx-auto text-center">
              SmileCare Dental Clinic in Agra offers world-class dental care
              with a gentle, patient-first approach. Our experienced dentist
              uses the latest technology to ensure comfortable, pain-free
              treatments for the entire family. Located in the heart of Agra,
              we've been transforming smiles for over 12 years.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {[
                ["5000+", "Patients Treated"],
                ["12+", "Years Experience"],
                ["98%", "Satisfaction Rate"],
                ["6+", "Specialties"],
              ].map(([num, label]) => (
                <div key={label} className="text-center">
                  <div className="text-3xl font-display font-bold text-primary">
                    {num}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-[oklch(0.97_0.01_240)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-3">Our Dental Services</h2>
            <p className="section-subheading mx-auto">
              Comprehensive dental care under one roof — from routine check-ups
              to advanced cosmetic treatments.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl p-6 shadow-card card-hover border border-border"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link to="/services">
                View All Services <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-3">Why Choose SmileCare?</h2>
            <p className="section-subheading mx-auto">
              We go above and beyond to make your dental experience comfortable
              and effective.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center p-6 rounded-xl border border-border hover:border-primary/40 hover:shadow-card transition-all"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <item.icon size={28} className="text-primary" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Clinic Interior Image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-12 rounded-2xl overflow-hidden shadow-card border border-border"
          >
            <img
              src="/assets/generated/clinic-interior.dim_800x500.jpg"
              alt="SmileCare Dental Clinic interior in Agra"
              className="w-full h-72 md:h-96 object-cover"
            />
            <div className="bg-primary/5 border-t border-border px-6 py-4 text-center">
              <p className="text-sm font-medium text-foreground/70">
                🏥 Our state-of-the-art clinic in Agra — equipped with the
                latest dental technology for your comfort
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 bg-[oklch(0.97_0.01_240)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-heading mb-3">What Our Patients Say</h2>
            <p className="section-subheading mx-auto">
              Trusted by thousands of patients in Agra for gentle, high-quality
              dental care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-white rounded-xl p-6 shadow-card border border-border"
              >
                <div className="flex items-center gap-1 mb-4">
                  {STAR_KEYS.slice(0, t.rating).map((k) => (
                    <Star
                      key={k}
                      size={16}
                      fill="#f59e0b"
                      className="text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed mb-4 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-display">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link to="/reviews">
                Read More Reviews <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* BEFORE AFTER */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-heading mb-3">Treatment Results Gallery</h2>
            <p className="section-subheading mx-auto">
              See the real difference our dental treatments make.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl overflow-hidden shadow-card border border-border"
            >
              <img
                src="/assets/generated/before-after-teeth.dim_800x400.jpg"
                alt="Before and after teeth whitening results at SmileCare Agra"
                className="w-full h-52 object-cover"
              />
              <div className="p-4 bg-accent/50 text-center">
                <p className="text-sm font-semibold text-foreground/80">
                  ✨ Teeth Whitening
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  8 shades brighter in a single session
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-2xl overflow-hidden shadow-card border border-border"
            >
              <img
                src="/assets/generated/service-braces.dim_600x400.jpg"
                alt="Before and after orthodontic braces treatment at SmileCare Agra"
                className="w-full h-52 object-cover"
              />
              <div className="p-4 bg-accent/50 text-center">
                <p className="text-sm font-semibold text-foreground/80">
                  😁 Braces & Alignment
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  Perfectly aligned smile with clear aligners
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="py-16 bg-[oklch(0.97_0.01_240)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-heading mb-3">Find Us in Agra</h2>
            <p className="section-subheading mx-auto">
              15, Civil Lines, Near Agra Fort, Agra - 282001, Uttar Pradesh
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-card border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114480.15224088784!2d77.97449135!3d27.17669145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39740d857dbe5b0f%3A0xc4b7e8b3c50b4b7e!2sAgra%2C+Uttar+Pradesh!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="SmileCare Dental Clinic Location in Agra"
            />
          </div>
        </div>
      </section>

      {/* QUICK CONTACT */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="section-heading mb-3">Get in Touch</h2>
              <p className="section-subheading mx-auto">
                Have a question? Send us a message and we'll respond promptly.
              </p>
            </div>
            <form
              onSubmit={handleContactSubmit}
              className="bg-white rounded-2xl shadow-card border border-border p-8 space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label
                    htmlFor="contact-name"
                    className="flex items-center gap-1.5"
                  >
                    <User size={14} /> Name
                  </Label>
                  <Input
                    id="contact-name"
                    data-ocid="contact.name.input"
                    placeholder="Your full name"
                    required
                    value={contactForm.name}
                    onChange={(e) =>
                      setContactForm((p) => ({ ...p, name: e.target.value }))
                    }
                  />
                </div>
                <div className="space-y-1.5">
                  <Label
                    htmlFor="contact-phone"
                    className="flex items-center gap-1.5"
                  >
                    <Phone size={14} /> Phone
                  </Label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    required
                    value={contactForm.phone}
                    onChange={(e) =>
                      setContactForm((p) => ({ ...p, phone: e.target.value }))
                    }
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label
                  htmlFor="contact-email"
                  className="flex items-center gap-1.5"
                >
                  <Mail size={14} /> Email
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="your@email.com"
                  value={contactForm.email}
                  onChange={(e) =>
                    setContactForm((p) => ({ ...p, email: e.target.value }))
                  }
                />
              </div>
              <div className="space-y-1.5">
                <Label
                  htmlFor="contact-message"
                  className="flex items-center gap-1.5"
                >
                  <MessageSquare size={14} /> Message
                </Label>
                <Textarea
                  id="contact-message"
                  placeholder="How can we help you?"
                  rows={4}
                  required
                  value={contactForm.message}
                  onChange={(e) =>
                    setContactForm((p) => ({ ...p, message: e.target.value }))
                  }
                />
              </div>
              <Button
                type="submit"
                disabled={submitting}
                data-ocid="contact.submit_button"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {submitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
