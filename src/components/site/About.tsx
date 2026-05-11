import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { Building2, Briefcase, TrendingUp, FileCheck, Users, Award, Truck, ShieldCheck } from "lucide-react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(mv, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => { if (ref.current) ref.current.textContent = Math.floor(v) + suffix; },
    });
    return c.stop;
  }, [inView, to, suffix, mv]);
  return <span ref={ref}>0{suffix}</span>;
}

const facts = [
  { icon: Building2, label: "Nature of Business", value: "Manufacturer" },
  { icon: Briefcase, label: "Legal Status", value: "Partnership" },
  { icon: TrendingUp, label: "Annual Turnover", value: "0 - 40 L" },
  { icon: FileCheck, label: "GST Registered", value: "Mar 2024" },
];

const stats = [
  { icon: Users, value: 100, suffix: "+", label: "Industrial Clients" },
  { icon: Award, value: 500, suffix: "+", label: "Projects Completed" },
  { icon: Truck, value: 99, suffix: "%", label: "Fast Delivery" },
  { icon: ShieldCheck, value: 100, suffix: "%", label: "Quality Assurance" },
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
            Technie Engineers provides the best range of industrial springs, control valves,
            fabrication services, and oil extraction machines — engineered with effective and
            timely delivery to keep your operations running.
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
                <div className="font-display text-4xl font-bold text-gradient-teal relative">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-1 text-sm text-muted-foreground relative">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
