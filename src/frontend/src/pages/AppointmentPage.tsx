import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@/hooks/useActor";
import { CheckCircle2, Clock, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

const services = [
  "Dental Implants",
  "Root Canal Treatment",
  "Teeth Whitening",
  "Braces & Aligners",
  "Tooth Extraction",
  "Pediatric Dentistry",
  "General Check-up & Cleaning",
  "Other / Not Sure",
];

const today = new Date().toISOString().split("T")[0];

export default function AppointmentPage() {
  const { actor, isFetching } = useActor();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor || isFetching) return;
    setSubmitting(true);
    try {
      const id = await actor.bookAppointment(
        form.name,
        form.phone,
        form.date,
        form.service,
        form.message,
      );
      setSuccess(
        `Appointment #${id} confirmed! We'll call you at ${form.phone} to confirm your slot.`,
      );
      toast.success("Appointment booked successfully!");
      setForm({ name: "", phone: "", service: "", date: "", message: "" });
    } catch {
      toast.error("Booking failed. Please try again or call us directly.");
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
            Book Your Appointment
          </h1>
          <p className="text-white/75 text-lg">
            Best Dentist in Agra | SmileCare Dental Clinic
          </p>
        </div>
      </section>

      <section className="py-16 bg-[oklch(0.97_0.01_240)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Form */}
            <div className="lg:col-span-2">
              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white rounded-2xl p-10 shadow-card border border-border text-center"
                  data-ocid="appointment.success_state"
                >
                  <CheckCircle2
                    size={56}
                    className="text-green-500 mx-auto mb-4"
                  />
                  <h2 className="text-2xl font-display font-bold mb-3">
                    Booking Confirmed!
                  </h2>
                  <p className="text-muted-foreground">{success}</p>
                  <Button
                    className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => setSuccess(null)}
                  >
                    Book Another Appointment
                  </Button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-8 shadow-card border border-border space-y-5"
                >
                  <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                    Fill in Your Details
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="appt-name">Patient Name *</Label>
                      <Input
                        id="appt-name"
                        data-ocid="appointment.name.input"
                        placeholder="Full name"
                        required
                        value={form.name}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, name: e.target.value }))
                        }
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="appt-phone">Phone Number *</Label>
                      <Input
                        id="appt-phone"
                        type="tel"
                        data-ocid="appointment.phone.input"
                        placeholder="+91 XXXXX XXXXX"
                        required
                        value={form.phone}
                        onChange={(e) =>
                          setForm((p) => ({ ...p, phone: e.target.value }))
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label>Service Required *</Label>
                    <Select
                      required
                      value={form.service}
                      onValueChange={(v) =>
                        setForm((p) => ({ ...p, service: v }))
                      }
                    >
                      <SelectTrigger data-ocid="appointment.service.select">
                        <SelectValue placeholder="Select a dental service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (
                          <SelectItem key={s} value={s}>
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="appt-date">Preferred Date *</Label>
                    <Input
                      id="appt-date"
                      type="date"
                      data-ocid="appointment.date.input"
                      min={today}
                      required
                      value={form.date}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, date: e.target.value }))
                      }
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="appt-msg">Additional Notes</Label>
                    <Textarea
                      id="appt-msg"
                      data-ocid="appointment.message.textarea"
                      placeholder="Any specific concerns, symptoms, or questions for the doctor..."
                      rows={4}
                      value={form.message}
                      onChange={(e) =>
                        setForm((p) => ({ ...p, message: e.target.value }))
                      }
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={submitting || !form.service}
                    data-ocid="appointment.submit_button"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {submitting ? "Booking..." : "Confirm Appointment"}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    We'll confirm your appointment via phone call within 2
                    hours.
                  </p>
                </form>
              )}
            </div>

            {/* Info Sidebar */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 shadow-card border border-border">
                <h3 className="font-display font-bold text-lg mb-4">
                  Clinic Information
                </h3>
                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin
                      size={18}
                      className="text-primary shrink-0 mt-0.5"
                    />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">
                        15, Civil Lines, Near Agra Fort, Agra - 282001, UP
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={18} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Call Us</p>
                      <a
                        href="tel:+919876543210"
                        className="text-primary hover:underline"
                      >
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock size={18} className="text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Clinic Hours</p>
                      <p className="text-muted-foreground">
                        Mon–Sat: 9:00 AM – 7:00 PM
                      </p>
                      <p className="text-muted-foreground">
                        Sunday: 10:00 AM – 2:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-bold py-3 px-4 rounded-xl hover:bg-[#20BA5A] transition-colors"
              >
                <span>💬</span> Book via WhatsApp
              </a>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                <p className="text-xs text-foreground/70 leading-relaxed">
                  <strong>Note:</strong> This is an online appointment request.
                  Our team will contact you to confirm the exact time slot based
                  on availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
