import { motion } from "framer-motion";
import { Award, FileCheck, Building2, Briefcase, Shield } from "lucide-react";

const credentials = [
  { icon: Award, label: "Certifications", value: "ISO 9001:2015" },
  { icon: FileCheck, label: "Project Inspections", value: "Railway & Infrastructure Works" },
  { icon: Building2, label: "Infrastructure Projects", value: "Railway & Highway Works" },
  { icon: Briefcase, label: "Approved Authorities", value: "RDSO • NHAI • DFCCIL" },
  { icon: Shield, label: "Approval Documents", value: "Compliance Verified" },
];

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 [background-image:var(--gradient-hero)] animate-gradient opacity-50" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Infrastructure Confidence</span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold">
            <span className="text-gradient-teal">Trusted Across</span>
            <br />
            Infrastructure Projects
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-5xl mx-auto">
          {credentials.map((cred, i) => (
            <motion.div
              key={cred.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-strong rounded-3xl p-6 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <cred.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{cred.label}</h3>
              <p className="text-sm text-muted-foreground">{cred.value}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
