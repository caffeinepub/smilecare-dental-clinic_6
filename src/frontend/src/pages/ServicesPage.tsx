import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, Clock } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: "🦷",
    title: "Dental Implants",
    image: "/assets/generated/service-implants.dim_600x400.jpg",
    description:
      "Dental implants are the gold standard for replacing missing teeth. A titanium post is surgically placed in the jawbone, acting as an artificial root. Once healed, a natural-looking crown is attached, giving you a permanent smile that looks, feels, and functions like real teeth.",
    benefits: [
      "Natural look, feel & function",
      "Long-lasting — can last a lifetime with proper care",
      "No adhesives or removal needed",
      "Preserves jawbone and facial structure",
    ],
    time: "3–6 months",
    color: "bg-blue-50 border-blue-100",
  },
  {
    icon: "🔬",
    title: "Root Canal Treatment",
    image: null,
    description:
      "Root canal treatment (RCT) is a procedure to treat infected or damaged pulp inside a tooth. Rather than extracting the tooth, we remove the infected tissue, clean and seal the canal, and restore it with a crown. Modern RCT is painless and saves your natural tooth.",
    benefits: [
      "Eliminates severe toothache completely",
      "Saves your natural tooth from extraction",
      "Prevents spread of infection to other teeth",
      "Quick recovery — return to normal in days",
    ],
    time: "1–2 sessions",
    color: "bg-indigo-50 border-indigo-100",
  },
  {
    icon: "✨",
    title: "Teeth Whitening",
    image: "/assets/generated/service-whitening.dim_600x400.jpg",
    description:
      "Our professional teeth whitening treatment uses advanced bleaching agents to remove deep stains and discoloration caused by coffee, tea, tobacco, and aging. Safe, supervised in-clinic whitening delivers dramatically brighter results compared to over-the-counter products.",
    benefits: [
      "Brightens smile up to 8 shades whiter",
      "Safe, clinically-supervised procedure",
      "Removes deep stains and discoloration",
      "Instant visible results in one session",
    ],
    time: "1–2 hours",
    color: "bg-cyan-50 border-cyan-100",
  },
  {
    icon: "😁",
    title: "Braces & Aligners",
    image: "/assets/generated/service-braces.dim_600x400.jpg",
    description:
      "Straighten crooked or misaligned teeth with our orthodontic treatments. We offer traditional metal braces for maximum correction and discreet clear aligners (similar to Invisalign) for adults who prefer a virtually invisible solution. Both options deliver beautiful, lasting results.",
    benefits: [
      "Corrects crowding, gaps & bite issues",
      "Metal and clear aligner options available",
      "Improves chewing function and speech",
      "Boosts confidence with a straighter smile",
    ],
    time: "12–24 months",
    color: "bg-violet-50 border-violet-100",
  },
  {
    icon: "🩺",
    title: "Tooth Extraction",
    image: null,
    description:
      "When a tooth is severely damaged, decayed, or impacted and cannot be saved, extraction becomes necessary. At SmileCare, we perform gentle, pain-free extractions using local anaesthesia. We also offer wisdom tooth removal and surgical extractions when required.",
    benefits: [
      "Completely painless with modern anaesthesia",
      "Fast procedure — typically under an hour",
      "Prevents infections spreading to adjacent teeth",
      "Affordable with quick healing time",
    ],
    time: "30–60 minutes",
    color: "bg-rose-50 border-rose-100",
  },
  {
    icon: "👶",
    title: "Pediatric Dentistry",
    image: "/assets/generated/service-pediatric.dim_600x400.jpg",
    description:
      "Children deserve special dental care tailored to their unique needs. Our child-friendly clinic environment and gentle approach make dental visits a positive experience. We focus on preventive care to establish healthy habits that last a lifetime, from infants to teenagers.",
    benefits: [
      "Warm, child-friendly clinic environment",
      "Preventive care, fluoride & sealants",
      "Early detection of developmental issues",
      "Builds positive dental habits from childhood",
    ],
    time: "30–45 minutes",
    color: "bg-amber-50 border-amber-100",
  },
];

export default function ServicesPage() {
  return (
    <div>
      <section
        className="py-16"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.22 0.08 260) 0%, oklch(0.42 0.16 255) 100%)",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-3">
            Our Dental Services
          </h1>
          <p className="text-white/75 text-lg max-w-xl mx-auto">
            Advanced treatments by the best dentist in Agra — all under one
            roof.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 space-y-12">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`rounded-2xl border p-8 ${service.color}`}
            >
              {service.image && (
                <div className="mb-6">
                  <img
                    src={service.image}
                    alt={`${service.title} treatment at SmileCare Dental Clinic Agra`}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
              )}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{service.icon}</span>
                    <div>
                      <h2 className="text-2xl font-display font-bold text-foreground">
                        {service.title}
                      </h2>
                      <Badge variant="secondary" className="mt-1">
                        <Clock size={12} className="mr-1" /> {service.time}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-foreground/75 leading-relaxed mb-5">
                    {service.description}
                  </p>
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Link to="/appointment">Book This Treatment</Link>
                  </Button>
                </div>
                <div className="bg-white/80 rounded-xl p-5 border border-white shadow-xs">
                  <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-primary" /> Key
                    Benefits
                  </h3>
                  <ul className="space-y-2">
                    {service.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-0.5">✓</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        className="py-16"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.22 0.08 260) 0%, oklch(0.42 0.16 255) 100%)",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-white/75 mb-8">
            Book an appointment with the best dentist in Agra today.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-primary font-bold hover:bg-white/90"
          >
            <Link to="/appointment">Book Your Appointment</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
