import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@/hooks/useActor";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const { actor } = useActor();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) return;
    setSubmitting(true);
    try {
      await actor.submitContactForm(
        form.name,
        form.phone,
        form.email,
        form.message,
      );
      toast.success("Message sent! We'll get back to you within 24 hours.");
      setForm({ name: "", phone: "", email: "", message: "" });
    } catch {
      toast.error("Failed to send. Please call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section
        className="py-16"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.22 0.08 260) 0%, oklch(0.42 0.16 255) 100%)",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-3">
            Contact Us
          </h1>
          <p className="text-white/75 text-lg">
            We'd love to hear from you — get in touch with our team
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section
        data-ocid="contact.section"
        className="py-16 bg-[oklch(0.97_0.01_240)]"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground">
                  Have questions or want to book an appointment? Reach us
                  through any of the channels below.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-border shadow-xs">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-muted-foreground text-sm">
                      15, Civil Lines, Near Agra Fort,
                      <br />
                      Agra - 282001, Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-border shadow-xs">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a
                      href="tel:+919876543210"
                      className="text-primary hover:underline text-sm"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-[#25D366]/10 rounded-xl border border-[#25D366]/30 hover:bg-[#25D366]/20 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/20 flex items-center justify-center shrink-0">
                    <MessageCircle size={20} className="text-[#25D366]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1a8a42]">WhatsApp</p>
                    <p className="text-sm text-[#1a8a42]/70">
                      Chat with us instantly — +91 98765 43210
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-border shadow-xs">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a
                      href="mailto:info@smilecaredental.in"
                      className="text-primary hover:underline text-sm"
                    >
                      info@smilecaredental.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-border shadow-xs">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">Clinic Hours</p>
                    <p className="text-sm text-muted-foreground">
                      Monday – Saturday: 9:00 AM – 7:00 PM
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Sunday: 10:00 AM – 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Form + Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Contact Form */}
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-6 shadow-card border border-border space-y-4"
              >
                <h3 className="font-display font-bold text-xl">
                  Send Us a Message
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <Label htmlFor="c-name">Name *</Label>
                    <Input
                      id="c-name"
                      data-ocid="contact.name.input"
                      placeholder="Your name"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, name: e.target.value }))
                      }
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="c-phone">Phone *</Label>
                    <Input
                      id="c-phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      required
                      value={form.phone}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, phone: e.target.value }))
                      }
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <Label htmlFor="c-email">Email</Label>
                  <Input
                    id="c-email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="c-msg">Message *</Label>
                  <Textarea
                    id="c-msg"
                    placeholder="How can we help you?"
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
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

              {/* Map */}
              <div className="rounded-2xl overflow-hidden shadow-card border border-border">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114480.15224088784!2d77.97449135!3d27.17669145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39740d857dbe5b0f%3A0xc4b7e8b3c50b4b7e!2sAgra%2C+Uttar+Pradesh!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="SmileCare Dental Clinic in Agra Map"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
