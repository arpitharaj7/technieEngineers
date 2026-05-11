import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import mustard from "@/assets/machine-mustard.jpg";
import vito from "@/assets/machine-vito.jpg";
import oil from "@/assets/machine-oil.jpg";
import edible from "@/assets/machine-edible.jpg";

const machines = [
  { img: mustard, title: "Mustard Oil Filter Machine", specs: ["Capacity: 50–500 L/hr", "Power: 3–7.5 HP", "Stainless body"] },
  { img: vito, title: "Vito 30 Oil Filter Machine", specs: ["Compact tabletop", "Auto filtration", "Food-grade SS"] },
  { img: oil, title: "Oil Filter Machine", specs: ["Continuous duty", "Heavy frame", "Custom voltage"] },
  { img: edible, title: "Edible Oil Filter Machine", specs: ["Hygienic design", "Easy clean", "FSSAI-ready"] },
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
          <span className="text-xs uppercase tracking-[0.3em] text-accent">Featured Machinery</span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold">
            Production-grade <span className="text-gradient-fire">machines.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {machines.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-3xl glass overflow-hidden hover:shadow-[0_0_60px_oklch(0.72_0.18_55/0.25)] transition-all duration-500"
            >
              <div className="grid sm:grid-cols-5">
                <div className="sm:col-span-2 aspect-video sm:aspect-auto overflow-hidden bg-muted">
                  <img
                    src={m.img}
                    alt={m.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="sm:col-span-3 p-6 flex flex-col">
                  <h3 className="font-display text-xl font-semibold">{m.title}</h3>
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
