import { Star } from "lucide-react";
import { motion } from "motion/react";

const reviews = [
  {
    name: "Priya Agarwal",
    location: "Rakabganj, Agra",
    date: "February 2025",
    rating: 5,
    treatment: "Root Canal Treatment",
    quote:
      "Dr. Sharma is absolutely wonderful! I had terrible tooth pain for weeks and he fixed my root canal the very next day. The clinic is spotless, modern, and the staff is so caring and professional. The procedure was completely painless. Highly recommend SmileCare to everyone in Agra!",
  },
  {
    name: "Mohit Saxena",
    location: "Kamla Nagar, Agra",
    date: "January 2025",
    rating: 5,
    treatment: "Dental Implants",
    quote:
      "I got dental implants done here after years of hesitation. Dr. Sharma explained every step of the procedure patiently and it was completely painless. My new teeth look absolutely natural and beautiful. Worth every single rupee! Best dental clinic in Agra without a doubt.",
  },
  {
    name: "Sunita Gupta",
    location: "Civil Lines, Agra",
    date: "December 2024",
    rating: 5,
    treatment: "Pediatric Dentistry",
    quote:
      "Brought my 8-year-old daughter for her first dental check-up. Dr. Sharma made her feel so comfortable and at ease — she wasn't scared at all! The clinic has a warm, child-friendly atmosphere. My daughter actually wants to come back! Best dentist for kids in Agra.",
  },
  {
    name: "Amit Chaudhary",
    location: "Taj Nagari, Agra",
    date: "November 2024",
    rating: 5,
    treatment: "Teeth Whitening",
    quote:
      "Got professional teeth whitening done before my wedding and the results were stunning! My teeth are at least 6-7 shades brighter. The process took just under 2 hours and was completely comfortable. Everyone at the wedding noticed my smile. Thank you Dr. Sharma!",
  },
  {
    name: "Rekha Sharma",
    location: "Lohamandi, Agra",
    date: "October 2024",
    rating: 5,
    treatment: "Braces",
    quote:
      "My teenage son got metal braces at SmileCare and the transformation in 18 months has been incredible. Dr. Sharma monitored his progress closely at every visit. The pricing is very reasonable compared to other clinics in Agra. Very happy with the results!",
  },
  {
    name: "Rajiv Verma",
    location: "Bodla, Agra",
    date: "September 2024",
    rating: 5,
    treatment: "Tooth Extraction",
    quote:
      "I was terrified of tooth extraction but Dr. Sharma was incredibly reassuring. I felt absolutely no pain during the procedure. He gave clear aftercare instructions and the healing was fast. The clinic is very hygienic. Will definitely come back for any future dental needs.",
  },
  {
    name: "Kavita Yadav",
    location: "Sikandra, Agra",
    date: "August 2024",
    rating: 5,
    treatment: "Cosmetic Dentistry",
    quote:
      "I got veneers done at SmileCare for my uneven front teeth. The results exceeded my expectations completely! Dr. Sharma has an incredible eye for aesthetics. My confidence has skyrocketed. Best investment I've ever made!",
  },
  {
    name: "Sanjay Bansal",
    location: "Agra Cantt",
    date: "July 2024",
    rating: 5,
    treatment: "Regular Check-up",
    quote:
      "I've been bringing my whole family to SmileCare for the past 3 years. Dr. Sharma is thorough, honest, and never recommends unnecessary treatments. Clean, modern, affordable — this is simply the best dental clinic in Agra.",
  },
];

const STAR_KEYS = ["s1", "s2", "s3", "s4", "s5"];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {STAR_KEYS.map((k, i) => (
        <Star
          key={k}
          size={16}
          className={
            i < rating ? "text-amber-400 fill-amber-400" : "text-gray-300"
          }
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
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
            Patient Testimonials
          </h1>
          <p className="text-white/75 text-lg">
            What our patients say about SmileCare Dental Clinic, Agra
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {STAR_KEYS.map((k) => (
                <Star
                  key={k}
                  size={20}
                  className="text-amber-400 fill-amber-400"
                />
              ))}
            </div>
            <span className="text-white font-semibold">4.9/5</span>
            <span className="text-white/70 text-sm">· 500+ Reviews</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[oklch(0.97_0.01_240)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, i) => (
              <motion.article
                key={review.name}
                data-ocid={`reviews.item.${i + 1}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl p-6 shadow-card border border-border flex flex-col"
              >
                <StarRating rating={review.rating} />
                <p className="text-foreground/75 text-sm leading-relaxed mt-3 mb-4 flex-1 italic">
                  "{review.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-display">
                        {review.name[0]}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{review.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {review.location}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-primary font-medium">
                        {review.treatment}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {review.date}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
