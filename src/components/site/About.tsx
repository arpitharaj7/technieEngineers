import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Building2, Briefcase, TrendingUp, FileCheck, Users, Award, Truck, ShieldCheck, X } from "lucide-react";
import partnersImage from "@/assets/partners.jpg";
import isoApprovalImage from "@/assets/ISO-approval.jpg.png";

type Fact = {
  icon: typeof Building2;
  label: string;
  value: string;
  image?: string;
  images?: string[];
  actionLabel?: string;
  actionHref?: string;
};

const facts: Fact[] = [
  { icon: Building2, label: "Nature of Business", value: "Manufacturer" },
  {
    icon: Briefcase,
    label: "Legal Status",
    value: "Partnership",
    image: partnersImage,
    actionLabel: "Open Partnership Deed",
    actionHref: "https://drive.google.com/file/d/19QrTAERBWGvhsywerpoT5TV3oirCdkvt/view?usp=sharing",
  },
  {
    icon: FileCheck,
    label: "Approval Status",
    value: "RDSO Approval",
    actionHref: "https://drive.google.com/file/d/1Ow0Zs5TNu0UCNs0N_e_SJ9Na2dkD44Ru/view?usp=sharing",
  },
  { icon: ShieldCheck, label: "Certification", value: "ISO 9001:2015", image: isoApprovalImage },
];

const stats = [
  { icon: Users, label: "Leadership Experience", value: "12+ Years" },
  { icon: Truck, label: "Infrastructure Expertise", value: "Railway & Highway Projects" },
  { icon: TrendingUp, label: "Project Execution", value: "Timely Delivery" },
  { icon: Award, label: "Manufacturing Standards", value: "Quality Assured" },
];

export function About() {
  const [modalState, setModalState] = useState<{
    images: string[];
    index: number;
    actionLabel?: string;
    actionHref?: string;
  } | null>(null);

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
            {facts.map((f, i) => {
              const images = f.images ?? (f.image ? [f.image] : []);
              const clickable = images.length > 0 || Boolean(f.actionHref);
              return (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`glass rounded-2xl p-6 hover-lift ${clickable ? "cursor-pointer" : ""}`}
                  onClick={clickable ? () => {
                    if (images.length > 0) {
                      setModalState({
                        images,
                        index: 0,
                        actionLabel: f.actionLabel,
                        actionHref: f.actionHref,
                      });
                    } else if (f.actionHref) {
                      window.open(f.actionHref, "_blank", "noopener,noreferrer");
                    }
                  } : undefined}
                >
                  <f.icon className="w-8 h-8 text-primary mb-4" />
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{f.label}</div>
                  <div className="mt-1 text-xl font-display font-semibold">{f.value}</div>
                </motion.div>
              );
            })}
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

      <AnimatePresence>
        {modalState && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setModalState(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className="relative max-w-[90vw] max-h-[90vh] rounded-3xl overflow-hidden bg-white shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setModalState(null)}
                className="absolute top-4 right-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 text-white hover:bg-slate-900"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={modalState.images[modalState.index]}
                alt="Approval document"
                className="w-full h-auto max-h-[90vh] object-cover"
              />
              {modalState.actionHref && modalState.actionLabel && (
                <div className="px-6 pb-6 pt-4 bg-slate-100 text-center">
                  <button
                    type="button"
                    onClick={() => window.open(modalState.actionHref, "_blank", "noopener,noreferrer")}
                    className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-primary/90 cursor-pointer"
                  >
                    {modalState.actionLabel}
                  </button>
                </div>
              )}
              {modalState.images.length > 1 && (
                <div className="absolute inset-x-0 bottom-4 flex justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setModalState({
                      ...modalState,
                      index: (modalState.index - 1 + modalState.images.length) % modalState.images.length,
                    })}
                    className="rounded-full bg-slate-900/80 px-4 py-2 text-sm font-medium text-white hover:bg-slate-900"
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    onClick={() => setModalState({
                      ...modalState,
                      index: (modalState.index + 1) % modalState.images.length,
                    })}
                    className="rounded-full bg-slate-900/80 px-4 py-2 text-sm font-medium text-white hover:bg-slate-900"
                  >
                    Next
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
