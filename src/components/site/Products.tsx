import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import springs from "@/assets/product-springs.jpg";
import valve from "@/assets/product-valve.jpg";
import train from "@/assets/product-train.jpg";
import fab from "@/assets/product-fabrication.jpg";
import oil from "@/assets/machine-oil.jpg";
import mustard from "@/assets/machine-mustard.jpg";

const products = [
  { img: springs, title: "Industrial Springs", desc: "Heavy-duty compression and torsion springs engineered for industrial loads." },
  { img: springs, title: "Metro Spring", desc: "Precision metro & rail-grade springs built to vibration tolerances." },
  { img: valve, title: "Control Valve", desc: "Reliable flow regulation across pneumatic and hydraulic systems." },
  { img: train, title: "Train Parts", desc: "Forged and machined railway components engineered for safety." },
  { img: fab, title: "Fabrication", desc: "Custom metal fabrication — cutting, welding, finishing." },
  { img: fab, title: "Fabrication Services", desc: "End-to-end project fabrication, on-site or in workshop." },
  { img: oil, title: "Oil Extraction Machine", desc: "Continuous-duty extraction systems for edible oils." },
  { img: mustard, title: "Machine Manufacturing", desc: "Bespoke industrial machines manufactured to spec." },
];

export function Products() {
  return (
    <section id="products" className="relative py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Products & Services</span>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold">
              Engineered for <span className="text-gradient-teal">industry.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Explore our complete catalog of industrial-grade springs, valves, machinery and
            custom fabrication services.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((p, i) => (
            <motion.article
              key={p.title + i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.08 }}
              className="group relative rounded-2xl overflow-hidden glass hover-lift cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80" />
              </div>
              <div className="p-5">
                <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.desc}</p>
                <a
                  href="#quote"
                  className="mt-4 inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all"
                >
                  View Details <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-transparent group-hover:ring-primary/40 rounded-2xl transition" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
