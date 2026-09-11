import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import pot from "@/assets/pot.jpg";
import elastomeric from "@/assets/elastomeric.jpg";
import fTypeElastomeric from "@/assets/F-TYPE ELASTOMERIC BEARINGS.jpeg";

const products = [
  { img: pot, title: "Pot Cum PTFE Bearings", desc: "High-load bridge bearing systems designed for rotational movement and structural stability." },
  { img: elastomeric, title: "Elastomeric Bearings", desc: "Reinforced elastomeric bridge bearings engineered for durability and vibration absorption." },
  { title: "Expansion Joints", desc: "Reliable bridge expansion joint systems ensuring smooth structural movement and long-term performance." },
  { title: "Spherical Bearings", desc: "Multidirectional bearing solutions designed for thermal expansion and seismic movement." },
  { title: "Pin Bearings", desc: "Precision-engineered rotational bridge bearing systems for infrastructure applications." },
  { title: "Rocker Cum Roller Bearings", desc: "Heavy-duty steel roller bearing assemblies for controlled structural movement." },
];


export function Products() {
  return (
    <section id="products" className="relative py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-10 mb-16 lg:grid-cols-[1.4fr_minmax(0,0.9fr)]"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Product Range</span>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold">
              Engineered for <span className="text-gradient-teal">infrastructure.</span>
            </h2>
            <p className="mt-6 max-w-xl text-muted-foreground">
              Explore our range of bridge bearings, expansion joints, rehabilitation systems, and steel fabrication solutions engineered for railway and infrastructure projects.
            </p>
            <ul className="mt-8 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                Actual bearing systems
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                Expansion joints
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                Rehab services
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-background/80 p-8">
            <span className="text-xs uppercase tracking-[0.3em] text-primary">Engineering Services</span>
            <h3 className="mt-4 text-3xl font-semibold text-foreground">Infrastructure delivery support</h3>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                Bridge rehabilitation
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                Installation
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                Consultancy
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                Steel fabrication
              </li>
            </ul>
            <div className="mt-6 flex items-start gap-4">
              <div className="w-24 h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                <img src={fTypeElastomeric} alt="F-Type Elastomeric Bearings" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-semibold">F-Type Elastomeric Bearings</h4>
                <p className="mt-1 text-sm text-muted-foreground">Factory-manufactured F-Type elastomeric bearings for moderate-to-high loads — provide vertical load support, horizontal flexibility, and excellent damping to reduce vibration and extend structure life.</p>
              </div>
            </div>
          </div>
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
              {p.img && (
                <div className="aspect-4/3 overflow-hidden bg-muted">
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background via-background/30 to-transparent opacity-80" />
                </div>
              )}
              <div className="p-5">
                <h3 className="font-display font-semibold text-lg group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.desc}</p>
                {i === 0 ? (
                  <a
                    href="#quote"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary/90"
                  >
                    Send Inquiry <ArrowUpRight className="w-4 h-4" />
                  </a>
                ) : (
                  <a
                    href="#quote"
                    className="mt-4 inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all"
                  >
                    View Details <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-transparent group-hover:ring-primary/40 rounded-2xl transition" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
