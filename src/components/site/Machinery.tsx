import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import pot from "@/assets/pot.jpg";
import elastomeric from "@/assets/elastomeric.jpg";
import expansion from "@/assets/expansion.jpg";
import spherical from "@/assets/spherical.jpg";
import pinBearing from "@/assets/pinbearing.jpg";
import rocker from "@/assets/rocker.jpg";
import fTypeElastomeric from "@/assets/F-TYPE ELASTOMERIC BEARINGS.jpeg";

const machines = [
  { img: pot, title: "Pot Cum PTFE Bearing", specs: ["High load capacity", "Rotational movement support", "Structural stability"] },
  { img: elastomeric, title: "Elastomeric Bearing", specs: ["Vibration absorption", "Durable elastomer layers", "Bridge load distribution"] },
  { img: expansion, title: "Expansion Joint", specs: ["Smooth structural movement", "Weather-resistant sealing", "Long service life"] },
  { img: spherical, title: "Spherical Bearing", specs: ["Multidirectional rotation", "Thermal movement support", "Seismic compatibility"] },
  { img: pinBearing, title: "Pin Bearing", specs: ["Rotational flexibility", "Horizontal load transfer", "Precision-engineered steel"] },
  { img: rocker, title: "Rocker Cum Roller Bearing", specs: ["Controlled bridge movement", "Heavy-duty roller system", "High load endurance"] },
  {
    img: fTypeElastomeric,
    title: "F-Type Elastomeric Bearings",
    description: "Factory-manufactured bridge bearings designed for vertical loads, horizontal flexibility, and vibration control.",
    specs: ["Vertical load support", "Horizontal flexibility", "Vibration damping"],
  },
];

export function Machinery() {
  return (
    <section id="machinery" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-150 h-150 bg-accent/10 rounded-full blur-3xl" />
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
              className="group relative rounded-3xl glass overflow-hidden hover:shadow-[0_0_60px_rgba(255,212,0,0.25)] transition-all duration-500"
            >
              {m.img && (
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={m.img}
                    alt={m.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col h-full">
                <h3 className="font-display text-lg font-semibold">{m.title}</h3>
                {m.description && <p className="mt-2 text-sm text-muted-foreground">{m.description}</p>}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
