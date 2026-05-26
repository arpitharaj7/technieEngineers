import { motion } from "framer-motion";
import { Truck, Crosshair, Hammer, Users, Tag } from "lucide-react";

const features = [
  { icon: Crosshair, title: "Certified Manufacturing", desc: "Certified manufacturing processes following industry standards for bridge bearings and expansion joints." },
  { icon: Hammer, title: "Railway Bridge Compliance", desc: "Designs and fabrication compliant with railway bridge specifications and regulatory requirements." },
  { icon: Users, title: "In-house Testing", desc: "Comprehensive in-house testing and quality assurance to validate performance and safety." },
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
            <span className="text-gradient-teal">Trusted Infrastructure</span>
            <br />
            Solutions
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
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

        <div className="mt-12 flex justify-center">
          <div className="glass rounded-[2rem] border border-white/10 p-8 max-w-5xl w-full">
            <div className="text-center mx-auto max-w-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Featured Project References</p>
              <h3 className="mt-4 text-3xl sm:text-4xl font-semibold text-foreground">Premium infrastructure credentials</h3>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {[
                "NH-66 Alleppey Kerala",
                "NTPC Rehab Work",
                "Jammu Bridge Work",
                "Odisha Railway Work",
              ].map((project) => (
                <div
                  key={project}
                  className="rounded-full border border-primary/20 bg-white/10 px-4 py-3 text-center text-sm font-medium text-foreground shadow-[0_0_25px_rgba(56,189,248,0.12)] transition-all hover:border-primary/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.18)]"
                >
                  {project}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
