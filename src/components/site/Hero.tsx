import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Cog, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-industrial.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with parallax-ish */}
      <motion.div
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img src={heroImg} alt="Industrial fabrication workshop" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
      </motion.div>

      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Floating elements */}
      <motion.div
        className="absolute top-32 right-16 hidden md:block"
        animate={{ y: [0, -20, 0], rotate: [0, 360] }}
        transition={{ y: { duration: 6, repeat: Infinity }, rotate: { duration: 30, repeat: Infinity, ease: "linear" } }}
      >
        <Cog className="w-32 h-32 text-primary/20" />
      </motion.div>
      <motion.div
        className="absolute bottom-32 right-1/3 hidden md:block"
        animate={{ y: [0, 15, 0], rotate: [0, -360] }}
        transition={{ y: { duration: 4, repeat: Infinity }, rotate: { duration: 20, repeat: Infinity, ease: "linear" } }}
      >
        <Wrench className="w-20 h-20 text-accent/30" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Manufacturing Excellence • Since 2024
            </span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight">
            Precision{" "}
            <span className="text-gradient-teal">Engineering</span>
            <br />
            & Industrial{" "}
            <span className="text-gradient-fire">Fabrication</span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            From industrial springs and control valves to custom oil extraction machines —
            Technie Engineers delivers built-to-last solutions with effective and timely delivery.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#products">
                Explore Products <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#quote">Get a Quote</a>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-xl">
            {[
              { v: "100+", l: "Industrial Clients" },
              { v: "500+", l: "Projects Done" },
              { v: "24/7", l: "Support" },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.15 }}
              >
                <div className="font-display text-3xl sm:text-4xl font-bold text-gradient-teal">
                  {s.v}
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  {s.l}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/40 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  );
}
