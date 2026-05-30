import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.jpg";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#machinery", label: "Engineering Solutions" },
  { href: "#why", label: "Why Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = links.map((l) => document.querySelector(l.href));
      for (const s of sections) {
        if (!s) continue;
        const r = (s as HTMLElement).getBoundingClientRect();
        if (r.top <= 120 && r.bottom >= 120) {
          setActive("#" + s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "glass py-3 shadow-sm" : "py-5"
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-md group-hover:blur-lg transition-all" />
              <img
                src={logo}
                alt="Technie Engineers"
                className="relative w-7 h-7 object-contain group-hover:rotate-180 transition-transform duration-700"
              />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display font-bold text-lg tracking-tight">Technie</span>
            <span className="text-[10px] mt-0.5 uppercase tracking-[0.3em] text-primary">Engineers</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                active === l.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
              {active === l.href && (
                <motion.span
                  layoutId="navactive"
                  className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-primary rounded-full"
                />
              )}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="hero" size="sm" className="hidden sm:inline-flex" asChild>
            <a href="#quote">Get Quote</a>
          </Button>
          <button
            className="lg:hidden w-10 h-10 inline-flex items-center justify-center rounded-md glass"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden glass-strong border-t border-border mt-3"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 rounded-md text-sm hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
              <Button variant="hero" className="mt-2" asChild>
                <a href="#quote" onClick={() => setOpen(false)}>Get Quote</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
