import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import mustard from "@/assets/machine-mustard.jpg";
import vito from "@/assets/machine-vito.jpg";
import oil from "@/assets/machine-oil.jpg";
import edible from "@/assets/machine-edible.jpg";

const machines = [
  { img: mustard, title: "Pot Cum PTFE Bearing", specs: ["High load capacity", "Rotational movement support", "Structural stability"] },
  { img: vito, title: "Elastomeric Bearing", specs: ["Vibration absorption", "Durable elastomer layers", "Bridge load distribution"] },
  { img: oil, title: "Expansion Joint", specs: ["Smooth structural movement", "Weather-resistant sealing", "Long service life"] },
  { img: edible, title: "Spherical Bearing", specs: ["Multidirectional rotation", "Thermal movement support", "Seismic compatibility"] },
  { img: mustard, title: "Pin Bearing", specs: ["Rotational flexibility", "Horizontal load transfer", "Precision-engineered steel"] },
  { img: vito, title: "Rocker Cum Roller Bearing", specs: ["Controlled bridge movement", "Heavy-duty roller system", "High load endurance"] },
];

export function Machinery() {
  return (
    <section id="machinery" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Bridge Engineering Products</span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold">
            Engineered for <span className="text-gradient-fire">movement, stability & strength.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {machines.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-3xl glass overflow-hidden hover:shadow-[0_0_60px_oklch(0.72_0.18_55/0.25)] transition-all duration-500"
            >
              <div className="flex flex-col">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={m.img}
                    alt={m.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 flex flex-col">
                  <h3 className="font-display text-lg font-semibold">{m.title}</h3>
                  <ul className="mt-4 space-y-2 flex-1">
                    {m.specs.map((s) => (
                      <li key={s} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary shrink-0" /> {s}
                      </li>
                    ))}
                  </ul>
                  <Button variant="hero" className="mt-6 self-start" asChild>
                    <a href="#quote">
                      <Send className="w-4 h-4" /> Send Inquiry
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
