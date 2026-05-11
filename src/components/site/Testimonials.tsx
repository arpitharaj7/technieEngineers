import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  { name: "Rajesh Kumar", role: "Procurement Head, Delhi Metro Vendor", rating: 5, text: "Technie's springs and metro components have been flawless across two project cycles. Their tolerances and delivery are best in class." },
  { name: "Anita Sharma", role: "Plant Manager, Edible Oils Co.", rating: 5, text: "We've installed three of their oil filter machines. Throughput and uptime exceeded the spec sheet — and the team was on-site the next day for commissioning." },
  { name: "Mohammed Iqbal", role: "Owner, Iqbal Fabricators", rating: 5, text: "Custom fabrication of a 6-meter assembly. Drawings to delivery in 18 days. Solid welds, perfect finish, fair pricing." },
  { name: "Suresh Patel", role: "MD, Patel Industries", rating: 5, text: "Reliable supplier of control valves for 2+ years. Zero rejects, on-time every quarter. That's all we need." },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((i + 1) % reviews.length);
  const prev = () => setI((i - 1 + reviews.length) % reviews.length);
  const r = reviews[i];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 [background-image:var(--gradient-hero)] animate-gradient opacity-50" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Client Voices</span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold">
            Trusted by <span className="text-gradient-teal">industry.</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <div className="glass-strong rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <Quote className="absolute -top-4 -left-4 w-32 h-32 text-primary/10" />
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-xl sm:text-2xl font-display leading-relaxed">"{r.text}"</p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full [background-image:var(--gradient-accent)] flex items-center justify-center font-display font-bold text-primary-foreground">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold">{r.name}</div>
                    <div className="text-sm text-muted-foreground">{r.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button onClick={prev} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, j) => (
                <button
                  key={j}
                  onClick={() => setI(j)}
                  className={`h-1.5 rounded-full transition-all ${j === i ? "bg-primary w-8" : "bg-muted-foreground/30 w-2"}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
