import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { CheckCircle2, Star, ThumbsUp, Trophy, Users } from "lucide-react";
import { motion } from "motion/react";

const specializations = [
  "Dental Implants & Bone Grafting",
  "Cosmetic Dentistry & Smile Makeovers",
  "Orthodontics (Braces & Clear Aligners)",
  "Pediatric Dentistry",
  "Root Canal Treatment",
  "Aesthetic Crown & Bridge Work",
];

const achievements = [
  { icon: Users, num: "5000+", label: "Patients Treated" },
  { icon: Trophy, num: "12+", label: "Years Experience" },
  { icon: ThumbsUp, num: "98%", label: "Patient Satisfaction" },
  { icon: Star, num: "Best", label: "Dentist Award 2023" },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero Banner */}
      <section
        className="py-16"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.22 0.08 260) 0%, oklch(0.42 0.16 255) 100%)",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-3">
            Meet Your Dentist
          </h1>
          <p className="text-white/75 text-lg">
            Experienced, caring, and dedicated to your smile
          </p>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
                <img
                  src="/assets/generated/doctor-profile.dim_400x500.jpg"
                  alt="Dr. Rajesh Kumar Sharma — Best Dentist in Agra"
                  className="w-full max-w-sm mx-auto block object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-xl p-4 shadow-lg hidden md:block">
                <p className="text-3xl font-display font-bold">12+</p>
                <p className="text-xs text-primary-foreground/80">
                  Years of Excellence
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">
                  Your Trusted Dentist in Agra
                </p>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">
                  Dr. Rajesh Kumar Sharma
                </h2>
                <p className="text-muted-foreground font-medium">
                  BDS (Bangalore) | MDS Prosthodontics, KGMC Lucknow
                </p>
              </div>

              <p className="text-foreground/80 leading-relaxed">
                Dr. Rajesh Kumar Sharma is one of Agra's most trusted and highly
                qualified dentists with over 12 years of clinical experience.
                After completing his BDS from Bangalore and MDS in
                Prosthodontics from the prestigious KGMC Lucknow, he returned to
                Agra with a mission: to provide world-class dental care to every
                family.
              </p>

              <div>
                <h3 className="font-display font-bold text-lg mb-3">
                  Specializations
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {specializations.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm">
                      <CheckCircle2
                        size={16}
                        className="text-primary shrink-0"
                      />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <blockquote className="border-l-4 border-primary pl-4 py-2 italic text-foreground/70">
                "My goal is to make every patient feel comfortable and confident
                about their smile. I believe in providing gentle, caring dental
                treatment using the latest techniques. Your oral health is my
                priority."
                <footer className="mt-2 text-sm font-semibold not-italic text-foreground">
                  — Dr. Rajesh Kumar Sharma
                </footer>
              </blockquote>

              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link to="/appointment">Book an Appointment</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-[oklch(0.97_0.01_240)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="section-heading mb-3">Achievements & Milestones</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl p-6 text-center shadow-card border border-border"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                  <a.icon size={24} className="text-primary" />
                </div>
                <p className="text-3xl font-display font-bold text-primary">
                  {a.num}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{a.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clinic Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-8"
            >
              <h2 className="section-heading mb-3">
                A Welcoming, Modern Clinic
              </h2>
              <p className="section-subheading mx-auto">
                Our clinic is designed with your comfort in mind — from the
                moment you walk in. Equipped with the latest dental technology,
                a hygienic environment, and a warm, friendly team, SmileCare
                offers a truly world-class dental experience right here in Agra.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="rounded-2xl overflow-hidden shadow-card border border-border"
            >
              <img
                src="/assets/generated/clinic-interior.dim_800x500.jpg"
                alt="SmileCare Dental Clinic interior — modern and welcoming dental clinic in Agra"
                className="w-full h-80 md:h-[420px] object-cover"
              />
              <div className="bg-primary/5 border-t border-border px-6 py-4 flex flex-wrap gap-6 justify-center">
                {[
                  ["🔬", "Digital X-Ray"],
                  ["💡", "Laser Dentistry"],
                  ["🧴", "Sterilized Equipment"],
                  ["🛋️", "Comfortable Chairs"],
                  ["❄️", "Air-Conditioned"],
                ].map(([emoji, label]) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 text-sm text-foreground/70"
                  >
                    <span>{emoji}</span>
                    <span className="font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16 bg-[oklch(0.97_0.01_240)]">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="section-heading mb-8 text-center">
            Education & Qualifications
          </h2>
          <div className="space-y-4">
            {[
              {
                year: "2012",
                degree: "MDS — Prosthodontics & Crown Bridge",
                institution: "King George's Medical University (KGMC), Lucknow",
                detail:
                  "Specialized in prosthetic dental restorations, implants, and cosmetic dentistry",
              },
              {
                year: "2009",
                degree: "BDS — Bachelor of Dental Surgery",
                institution:
                  "Rajiv Gandhi University of Health Sciences, Bangalore",
                detail:
                  "Comprehensive training in all areas of general and preventive dentistry",
              },
            ].map((q) => (
              <div
                key={q.year}
                className="flex gap-4 p-5 rounded-xl border border-border hover:border-primary/40 transition-colors bg-white"
              >
                <div className="text-center shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-xs">
                      {q.year}
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-foreground">{q.degree}</h3>
                  <p className="text-primary text-sm font-medium">
                    {q.institution}
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    {q.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
