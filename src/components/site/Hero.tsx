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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              we make the heart of bridges
            </span>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            <div className="rounded-full border border-border bg-background/95 px-4 py-2 text-xs sm:text-sm font-medium text-foreground shadow-sm">
              RDSO Approved Firm
            </div>
            <div className="rounded-full border border-border bg-background/95 px-4 py-2 text-xs sm:text-sm font-medium text-foreground shadow-sm">
              ISO 9001:2015 Certified
            </div>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight">
            <span className="text-gradient-teal">Engineering</span>
            <br />
            Strength Into
            <br />
            <span className="text-gradient-fire">Every Structure</span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            RDSO-approved bridge bearing and expansion joint specialists trusted across railway,
            highway, and infrastructure projects.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#machinery">
                Explore Solutions <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#quote">Get a Quote</a>
            </Button>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
