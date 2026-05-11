import { motion } from "framer-motion";
import { Truck, Crosshair, Hammer, Users, Tag } from "lucide-react";

const features = [
  { icon: Truck, title: "Timely Delivery", desc: "Schedules we honour. Lead times we hit." },
  { icon: Crosshair, title: "Precision Manufacturing", desc: "Tolerances measured in microns, not millimetres." },
  { icon: Hammer, title: "Durable Materials", desc: "Industrial-grade alloys built to last decades." },
  { icon: Users, title: "Skilled Workforce", desc: "Veteran fabricators and certified engineers." },
  { icon: Tag, title: "Affordable Pricing", desc: "Direct-to-buyer pricing without middlemen." },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Why Choose Us</span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold">
            Five reasons clients <span className="text-gradient-teal">stay.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="relative glass rounded-2xl p-6 group overflow-hidden"
            >
              <div className="absolute inset-0 [background-image:var(--gradient-accent)] opacity-0 group-hover:opacity-10 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl [background-image:var(--gradient-accent)] flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                  <f.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-lg">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
