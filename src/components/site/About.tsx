import { motion } from "framer-motion";
import { Building2, Briefcase, TrendingUp, FileCheck, Users, Award, Truck, ShieldCheck } from "lucide-react";

const facts = [
  { icon: Building2, label: "Nature of Business", value: "Manufacturer" },
  { icon: Briefcase, label: "Legal Status", value: "Partnership" },
  { icon: FileCheck, label: "Approval Status", value: "RDSO Approved" },
  { icon: ShieldCheck, label: "Certification", value: "ISO 9001:2015" },
];

const stats = [
  { icon: Users, label: "Leadership Experience", value: "12+ Years" },
  { icon: Truck, label: "Infrastructure Expertise", value: "Railway & Highway Projects" },
  { icon: TrendingUp, label: "Project Execution", value: "Timely Delivery" },
  { icon: Award, label: "Manufacturing Standards", value: "Quality Assured" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-primary">About Us</span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold">
            Built on <span className="text-gradient-teal">precision</span>,
            <br />
            powered by <span className="text-gradient-fire">trust</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Technie Engineers is an RDSO-approved engineering firm engaged in the
            manufacturing, supply, testing, and installation of bridge bearings, expansion
            joints, and steel fabrication works for railway and infrastructure projects.
          </p>
        </motion.div>

        <div className="mt-16 grid lg:grid-cols-2 gap-8">
          {/* Company facts */}
          <div className="grid sm:grid-cols-2 gap-4">
            {facts.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-6 hover-lift"
              >
                <f.icon className="w-8 h-8 text-primary mb-4" />
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{f.label}</div>
                <div className="mt-1 text-xl font-display font-semibold">{f.value}</div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative glass rounded-2xl p-6 overflow-hidden group"
              >
                <div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-primary/5 group-hover:bg-primary/15 transition-colors" />
                <s.icon className="w-8 h-8 text-accent mb-3 relative" />
                <div className="mt-1 text-xl font-display font-semibold text-gradient-teal relative">{s.value}</div>
                <div className="mt-2 text-sm text-muted-foreground relative">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
