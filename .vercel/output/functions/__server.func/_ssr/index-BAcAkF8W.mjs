import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { T as Toaster$1, t as toast } from "../_libs/sonner.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { A as AnimatePresence, m as motion, u as useInView, a as useMotionValue, b as animate } from "../_libs/framer-motion.mjs";
import { C as Cog, M as Moon, S as Sun, X, a as Menu, W as Wrench, b as Sparkles, A as ArrowRight, B as Building2, c as Briefcase, T as TrendingUp, F as FileCheck, U as Users, d as Award, e as Truck, f as ShieldCheck, g as ArrowUpRight, h as Check, i as Send, j as Crosshair, H as Hammer, k as Tag, Q as Quote$1, l as Star, m as ChevronLeft, n as ChevronRight, o as CircleCheck, p as User, q as MapPin, P as Phone, r as Mail, s as Facebook, L as Linkedin, t as Twitter, u as MessageCircle } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "[background-image:var(--gradient-accent)] text-primary-foreground shadow-[0_0_40px_oklch(0.72_0.15_195/0.4)] hover:scale-105 hover:shadow-[0_0_60px_oklch(0.72_0.15_195/0.6)] transition-all duration-300 font-semibold",
        fire: "[background-image:var(--gradient-fire)] text-accent-foreground shadow-[0_0_40px_oklch(0.72_0.18_55/0.4)] hover:scale-105 hover:shadow-[0_0_60px_oklch(0.72_0.18_55/0.6)] transition-all duration-300 font-semibold",
        glass: "glass text-foreground hover:bg-white/10 transition-all duration-300"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        xl: "h-14 rounded-lg px-10 text-base",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#machinery", label: "Machinery" },
  { href: "#why", label: "Why Us" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const [active, setActive] = reactExports.useState("#home");
  const [light, setLight] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = links.map((l) => document.querySelector(l.href));
      for (const s of sections) {
        if (!s) continue;
        const r = s.getBoundingClientRect();
        if (r.top <= 120 && r.bottom >= 120) {
          setActive("#" + s.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const toggleTheme = () => {
    setLight((v) => {
      const next = !v;
      document.documentElement.classList.toggle("light", next);
      return next;
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.header,
    {
      initial: { y: -80, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.6, ease: "easeOut" },
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "glass-strong py-3" : "py-5"}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#home", className: "flex items-center gap-2 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-primary/40 blur-lg group-hover:blur-xl transition-all" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Cog, { className: "relative w-7 h-7 text-primary group-hover:rotate-180 transition-transform duration-700" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col leading-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-lg tracking-tight", children: "Technie" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.3em] text-primary", children: "Engineers" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-1", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: l.href,
              className: `relative px-4 py-2 text-sm font-medium transition-colors ${active === l.href ? "text-primary" : "text-muted-foreground hover:text-foreground"}`,
              children: [
                l.label,
                active === l.href && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.span,
                  {
                    layoutId: "navactive",
                    className: "absolute inset-x-3 -bottom-0.5 h-0.5 bg-primary rounded-full"
                  }
                )
              ]
            },
            l.href
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: toggleTheme,
                "aria-label": "Toggle theme",
                className: "hidden sm:inline-flex w-10 h-10 items-center justify-center rounded-full glass hover:bg-white/10 transition",
                children: light ? /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "sm", className: "hidden sm:inline-flex", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#quote", children: "Get Quote" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                className: "lg:hidden w-10 h-10 inline-flex items-center justify-center rounded-md glass",
                onClick: () => setOpen((o) => !o),
                "aria-label": "Menu",
                children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-5 h-5" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { height: 0, opacity: 0 },
            animate: { height: "auto", opacity: 1 },
            exit: { height: 0, opacity: 0 },
            className: "lg:hidden overflow-hidden glass-strong border-t border-border mt-3",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 py-4 flex flex-col gap-1", children: [
              links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: l.href,
                  onClick: () => setOpen(false),
                  className: "px-3 py-3 rounded-md text-sm hover:bg-white/5",
                  children: l.label
                },
                l.href
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", className: "mt-2", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#quote", onClick: () => setOpen(false), children: "Get Quote" }) })
            ] })
          }
        ) })
      ]
    }
  );
}
const heroImg = "/assets/hero-industrial-CcCjDgu2.jpg";
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "home", className: "relative min-h-screen flex items-center overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { scale: 1.15, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        transition: { duration: 2, ease: "easeOut" },
        className: "absolute inset-0",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Industrial fabrication workshop", className: "w-full h-full object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-pattern opacity-30" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "absolute top-32 right-16 hidden md:block",
        animate: { y: [0, -20, 0], rotate: [0, 360] },
        transition: { y: { duration: 6, repeat: Infinity }, rotate: { duration: 30, repeat: Infinity, ease: "linear" } },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cog, { className: "w-32 h-32 text-primary/20" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "absolute bottom-32 right-1/3 hidden md:block",
        animate: { y: [0, 15, 0], rotate: [0, -360] },
        transition: { y: { duration: 4, repeat: Infinity }, rotate: { duration: 20, repeat: Infinity, ease: "linear" } },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Wrench, { className: "w-20 h-20 text-accent/30" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 relative z-10 pt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.8, delay: 0.3 },
        className: "max-w-3xl",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground", children: "Manufacturing Excellence • Since 2025" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight", children: [
            "Precision",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-teal", children: "Engineering" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "& Industrial",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-fire", children: "Fabrication" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed", children: "From industrial springs and control valves to custom oil extraction machines — Technie Engineers delivers built-to-last solutions with effective and timely delivery." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "xl", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#products", children: [
              "Explore Products ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "glass", size: "xl", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#quote", children: "Get a Quote" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-3 gap-8 max-w-xl", children: [
            { v: "100+", l: "Industrial Clients" },
            { v: "500+", l: "Projects Done" },
            { v: "24/7", l: "Support" }
          ].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.8 + i * 0.15 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl sm:text-4xl font-bold text-gradient-teal", children: s.v }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground mt-1", children: s.l })
              ]
            },
            s.l
          )) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        className: "absolute bottom-8 left-1/2 -translate-x-1/2",
        animate: { y: [0, 10, 0] },
        transition: { duration: 2, repeat: Infinity },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-6 h-10 rounded-full border-2 border-muted-foreground/40 flex items-start justify-center p-1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-1 h-2 rounded-full bg-primary" }) })
      }
    )
  ] });
}
function Counter({ to, suffix = "" }) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true });
  const mv = useMotionValue(0);
  reactExports.useEffect(() => {
    if (!inView) return;
    const c = animate(mv, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.floor(v) + suffix;
      }
    });
    return c.stop;
  }, [inView, to, suffix, mv]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    "0",
    suffix
  ] });
}
const facts = [
  { icon: Building2, label: "Nature of Business", value: "Manufacturer" },
  { icon: Briefcase, label: "Legal Status", value: "Partnership" },
  { icon: TrendingUp, label: "Annual Turnover", value: "0 - 40 L" },
  { icon: FileCheck, label: "GST Registered", value: "Mar 2024" }
];
const stats = [
  { icon: Users, value: 100, suffix: "+", label: "Industrial Clients" },
  { icon: Award, value: 500, suffix: "+", label: "Projects Completed" },
  { icon: Truck, value: 99, suffix: "%", label: "Fast Delivery" },
  { icon: ShieldCheck, value: 100, suffix: "%", label: "Quality Assurance" }
];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "about", className: "relative py-24 sm:py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-pattern opacity-20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
          className: "max-w-3xl",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "About Us" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold", children: [
              "Built on ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-teal", children: "precision" }),
              ",",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "powered by ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-fire", children: "trust" }),
              "."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground leading-relaxed", children: "Technie Engineers provides the best range of industrial springs, control valves, fabrication services, and oil extraction machines — engineered with effective and timely delivery to keep your operations running." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 grid lg:grid-cols-2 gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-4", children: facts.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.1 },
            className: "glass rounded-2xl p-6 hover-lift",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "w-8 h-8 text-primary mb-4" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: f.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xl font-display font-semibold", children: f.value })
            ]
          },
          f.label
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.9 },
            whileInView: { opacity: 1, scale: 1 },
            viewport: { once: true },
            transition: { delay: i * 0.1 },
            className: "relative glass rounded-2xl p-6 overflow-hidden group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-primary/5 group-hover:bg-primary/15 transition-colors" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "w-8 h-8 text-accent mb-3 relative" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl font-bold text-gradient-teal relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: s.value, suffix: s.suffix }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-sm text-muted-foreground relative", children: s.label })
            ]
          },
          s.label
        )) })
      ] })
    ] })
  ] });
}
const springs = "/assets/product-springs-CCUvex0f.jpg";
const valve = "/assets/product-valve-C0CzvnMR.jpg";
const train = "/assets/product-train-COSzmoXG.jpg";
const fab = "/assets/product-fabrication-C8Kh9GsW.jpg";
const oil = "/assets/machine-oil-BkHzHqw1.jpg";
const mustard = "/assets/machine-mustard-ZrY_NY2K.jpg";
const products = [
  { img: springs, title: "Industrial Springs", desc: "Heavy-duty compression and torsion springs engineered for industrial loads." },
  { img: springs, title: "Metro Spring", desc: "Precision metro & rail-grade springs built to vibration tolerances." },
  { img: valve, title: "Control Valve", desc: "Reliable flow regulation across pneumatic and hydraulic systems." },
  { img: train, title: "Train Parts", desc: "Forged and machined railway components engineered for safety." },
  { img: fab, title: "Fabrication", desc: "Custom metal fabrication — cutting, welding, finishing." },
  { img: fab, title: "Fabrication Services", desc: "End-to-end project fabrication, on-site or in workshop." },
  { img: oil, title: "Oil Extraction Machine", desc: "Continuous-duty extraction systems for edible oils." },
  { img: mustard, title: "Machine Manufacturing", desc: "Bespoke industrial machines manufactured to spec." }
];
function Products() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "products", className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "Products & Services" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold", children: [
              "Engineered for ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-teal", children: "industry." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md text-muted-foreground", children: "Explore our complete catalog of industrial-grade springs, valves, machinery and custom fabrication services." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: products.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.article,
      {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i % 4 * 0.08 },
        className: "group relative rounded-2xl overflow-hidden glass hover-lift cursor-pointer",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[4/3] overflow-hidden bg-muted", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: p.img,
                alt: p.title,
                loading: "lazy",
                className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-lg group-hover:text-primary transition-colors", children: p.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground line-clamp-2", children: p.desc }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "#quote",
                className: "mt-4 inline-flex items-center gap-1 text-sm text-primary font-medium group-hover:gap-2 transition-all",
                children: [
                  "View Details ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "w-4 h-4" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 ring-1 ring-inset ring-transparent group-hover:ring-primary/40 rounded-2xl transition" })
        ]
      },
      p.title + i
    )) })
  ] }) });
}
const vito = "/assets/machine-vito-Dw7lfMCp.jpg";
const edible = "/assets/machine-edible-BwL_16Fk.jpg";
const machines = [
  { img: mustard, title: "Mustard Oil Filter Machine", specs: ["Capacity: 50–500 L/hr", "Power: 3–7.5 HP", "Stainless body"] },
  { img: vito, title: "Vito 30 Oil Filter Machine", specs: ["Compact tabletop", "Auto filtration", "Food-grade SS"] },
  { img: oil, title: "Oil Filter Machine", specs: ["Continuous duty", "Heavy frame", "Custom voltage"] },
  { img: edible, title: "Edible Oil Filter Machine", specs: ["Hygienic design", "Easy clean", "FSSAI-ready"] }
];
function Machinery() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "machinery", className: "relative py-24 sm:py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "max-w-2xl mb-16",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-accent", children: "Featured Machinery" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold", children: [
              "Production-grade ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-fire", children: "machines." })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-6", children: machines.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1 },
          className: "group relative rounded-3xl glass overflow-hidden hover:shadow-[0_0_60px_oklch(0.72_0.18_55/0.25)] transition-all duration-500",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:col-span-2 aspect-video sm:aspect-auto overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: m.img,
                alt: m.title,
                loading: "lazy",
                className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-3 p-6 flex flex-col", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-semibold", children: m.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2 flex-1", children: m.specs.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4 text-primary shrink-0" }),
                " ",
                s
              ] }, s)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", className: "mt-6 self-start", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#quote", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-4 h-4" }),
                " Send Inquiry"
              ] }) })
            ] })
          ] })
        },
        m.title
      )) })
    ] })
  ] });
}
const features = [
  { icon: Truck, title: "Timely Delivery", desc: "Schedules we honour. Lead times we hit." },
  { icon: Crosshair, title: "Precision Manufacturing", desc: "Tolerances measured in microns, not millimetres." },
  { icon: Hammer, title: "Durable Materials", desc: "Industrial-grade alloys built to last decades." },
  { icon: Users, title: "Skilled Workforce", desc: "Veteran fabricators and certified engineers." },
  { icon: Tag, title: "Affordable Pricing", desc: "Direct-to-buyer pricing without middlemen." }
];
function WhyUs() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "why", className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "text-center max-w-2xl mx-auto mb-16",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "Why Choose Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold", children: [
            "Five reasons clients ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-teal", children: "stay." })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-5 gap-5", children: features.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: i * 0.08 },
        whileHover: { y: -8 },
        className: "relative glass rounded-2xl p-6 group overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 [background-image:var(--gradient-accent)] opacity-0 group-hover:opacity-10 transition-opacity" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl [background-image:var(--gradient-accent)] flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "w-6 h-6 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-lg", children: f.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: f.desc })
          ] })
        ]
      },
      f.title
    )) })
  ] }) });
}
const g1 = "/assets/gallery-1-DZMdGeBl.jpg";
const g2 = "/assets/gallery-2-C2S-MwxC.jpg";
const g3 = "/assets/gallery-3-D5_meutn.jpg";
const g4 = "/assets/gallery-4-GQl-JXj9.jpg";
const g5 = "/assets/gallery-5-CioqEiB7.jpg";
const g6 = "/assets/gallery-6-DPtrGcxy.jpg";
const images = [
  { src: g1, label: "Workshop floor", span: "row-span-2" },
  { src: g2, label: "Welding precision", span: "" },
  { src: g3, label: "Industrial tools", span: "" },
  { src: g4, label: "CNC machining", span: "row-span-2" },
  { src: g5, label: "Finished stock", span: "" },
  { src: g6, label: "On-site inspection", span: "" }
];
function Gallery() {
  const [open, setOpen] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "gallery", className: "relative py-24 sm:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "max-w-2xl mb-16",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-accent", children: "Workshop Gallery" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold", children: [
              "Inside the ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-fire", children: "fabrication." })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-4", children: images.map((img, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.button,
        {
          type: "button",
          onClick: () => setOpen(img.src),
          initial: { opacity: 0, scale: 0.95 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          transition: { delay: i * 0.06 },
          className: `relative rounded-2xl overflow-hidden group ${img.span} hover-lift`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: img.src,
                alt: img.label,
                loading: "lazy",
                className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-3 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity", children: img.label })
          ]
        },
        i
      )) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        className: "fixed inset-0 z-[100] bg-background/90 backdrop-blur-md flex items-center justify-center p-6",
        onClick: () => setOpen(null),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setOpen(null),
              className: "absolute top-6 right-6 w-10 h-10 rounded-full glass flex items-center justify-center",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.img,
            {
              initial: { scale: 0.9, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              src: open,
              alt: "",
              className: "max-h-[85vh] max-w-[90vw] rounded-2xl shadow-2xl"
            }
          )
        ]
      }
    ) })
  ] });
}
const reviews = [
  { name: "Rajesh Kumar", role: "Procurement Head, Delhi Metro Vendor", rating: 5, text: "Technie's springs and metro components have been flawless across two project cycles. Their tolerances and delivery are best in class." },
  { name: "Anita Sharma", role: "Plant Manager, Edible Oils Co.", rating: 5, text: "We've installed three of their oil filter machines. Throughput and uptime exceeded the spec sheet — and the team was on-site the next day for commissioning." },
  { name: "Mohammed Iqbal", role: "Owner, Iqbal Fabricators", rating: 5, text: "Custom fabrication of a 6-meter assembly. Drawings to delivery in 18 days. Solid welds, perfect finish, fair pricing." },
  { name: "Suresh Patel", role: "MD, Patel Industries", rating: 5, text: "Reliable supplier of control valves for 2+ years. Zero rejects, on-time every quarter. That's all we need." }
];
function Testimonials() {
  const [i, setI] = reactExports.useState(0);
  const next = () => setI((i + 1) % reviews.length);
  const prev = () => setI((i - 1 + reviews.length) % reviews.length);
  const r = reviews[i];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 sm:py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 [background-image:var(--gradient-hero)] animate-gradient opacity-50" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-12",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "Client Voices" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold", children: [
              "Trusted by ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-teal", children: "industry." })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass-strong rounded-3xl p-8 sm:p-12 relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Quote$1, { className: "absolute -top-4 -left-4 w-32 h-32 text-primary/10" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, x: 30 },
              animate: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: -30 },
              transition: { duration: 0.3 },
              className: "relative",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-6", children: Array.from({ length: r.rating }).map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "w-5 h-5 fill-accent text-accent" }, j)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xl sm:text-2xl font-display leading-relaxed", children: [
                  '"',
                  r.text,
                  '"'
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center gap-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full [background-image:var(--gradient-accent)] flex items-center justify-center font-display font-bold text-primary-foreground", children: r.name.charAt(0) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: r.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground", children: r.role })
                  ] })
                ] })
              ]
            },
            i
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: prev, className: "w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-5 h-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: reviews.map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: () => setI(j),
              className: `h-1.5 rounded-full transition-all ${j === i ? "bg-primary w-8" : "bg-muted-foreground/30 w-2"}`
            },
            j
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: next, className: "w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-5 h-5" }) })
        ] })
      ] })
    ] })
  ] });
}
function Quote() {
  const [sent, setSent] = reactExports.useState(false);
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    toast.success("Quote request received — we'll be in touch soon!");
    setTimeout(() => setSent(false), 4e3);
    e.target.reset();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "quote", className: "relative py-24 sm:py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-pattern opacity-20" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-12",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-accent", children: "Get in Touch" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold", children: [
              "Request a ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-teal", children: "quote." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Tell us what you need. We'll get back within 24 hours." })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.form,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          onSubmit: submit,
          className: "glass-strong rounded-3xl p-6 sm:p-10 space-y-5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Product / Service", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, name: "product", placeholder: "e.g. Mustard Oil Filter Machine", className: "field-input" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Mobile Number", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, name: "phone", type: "tel", placeholder: "+91 XXXXX XXXXX", className: "field-input" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Your Message", children: /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { required: true, name: "message", rows: 4, placeholder: "Specs, quantity, delivery location...", className: "field-input resize-none" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "hero", size: "xl", className: "w-full", children: sent ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-5 h-5" }),
              " Sent"
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "w-5 h-5" }),
              " Submit Request"
            ] }) })
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        .field-input {
          width: 100%;
          background: oklch(1 0 0 / 0.04);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 14px 16px;
          font-size: 15px;
          color: var(--foreground);
          outline: none;
          transition: all 0.3s var(--transition-smooth);
        }
        .field-input:focus {
          border-color: var(--primary);
          background: oklch(1 0 0 / 0.06);
          box-shadow: 0 0 0 4px oklch(0.72 0.15 195 / 0.15);
        }
        .field-input::placeholder { color: var(--muted-foreground); opacity: 0.6; }
      ` })
  ] });
}
function Field({ label, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs uppercase tracking-widest text-muted-foreground mb-2", children: label }),
    children
  ] });
}
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "relative py-24 sm:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        className: "max-w-2xl mb-12",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "Contact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold", children: [
            "Visit, call, or ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-teal", children: "message." })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        [
          { icon: User, label: "Contact Person", value: "Anish Pushpan" },
          { icon: MapPin, label: "Address", value: "Meerut, Uttar Pradesh, India" },
          { icon: Phone, label: "Phone", value: "+91 74172 71092", href: "tel:+917417271092" },
          { icon: Mail, label: "Email", value: "info@technieengineers.in", href: "mailto:info@technieengineers.in" }
        ].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.a,
          {
            href: c.href || "#",
            initial: { opacity: 0, x: -20 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { delay: i * 0.08 },
            className: "flex items-center gap-4 glass rounded-2xl p-5 hover-lift group",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl [background-image:var(--gradient-accent)] flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "w-5 h-5 text-primary-foreground" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: c.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-semibold text-lg group-hover:text-primary transition-colors", children: c.value })
              ] })
            ]
          },
          c.label
        )),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 pt-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", className: "flex-1", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+917417271092", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
            " Call Now"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "glass", className: "flex-1", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:info@technieengineers.in", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-4 h-4" }),
            " Email"
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 0.95 },
          whileInView: { opacity: 1, scale: 1 },
          viewport: { once: true },
          className: "rounded-3xl overflow-hidden glass-strong h-[420px]",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "iframe",
            {
              title: "Technie Engineers location",
              src: "https://www.google.com/maps?q=Meerut,Uttar+Pradesh,India&output=embed",
              className: "w-full h-full border-0 grayscale-[0.4] contrast-110",
              loading: "lazy"
            }
          )
        }
      )
    ] })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative border-t border-border pt-16 pb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-4 gap-10 mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Cog, { className: "w-7 h-7 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "leading-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-lg", children: "Technie Engineers" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] text-primary mt-1", children: "Manufacturing • Fabrication" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-md leading-relaxed", children: "Industrial springs, control valves, fabrication services, and oil extraction machines — manufactured in Meerut, delivered nationwide." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 mt-6", children: [Facebook, Linkedin, Twitter].map((Icon, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "w-4 h-4" }) }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4", children: "Quick Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm", children: [["About", "#about"], ["Products", "#products"], ["Machinery", "#machinery"], ["Gallery", "#gallery"], ["Contact", "#contact"]].map(([l, h]) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: h, className: "text-muted-foreground hover:text-primary transition-colors", children: l }) }, l)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4", children: "Reach Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Meerut, Uttar Pradesh" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "India" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+917417271092", className: "hover:text-primary", children: "+91 74172 71092" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:info@technieengineers.in", className: "hover:text-primary", children: "info@technieengineers.in" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Technie Engineers. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Crafted with precision in Meerut, India." })
    ] })
  ] }) });
}
function WhatsAppButton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.a,
    {
      href: "https://wa.me/917417271092?text=Hi%20Technie%20Engineers,%20I%27d%20like%20a%20quote",
      target: "_blank",
      rel: "noreferrer",
      initial: { scale: 0, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      transition: { delay: 1.5, type: "spring" },
      className: "fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.5)] hover:scale-110 transition-transform animate-pulse-glow",
      "aria-label": "WhatsApp",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-7 h-7 text-white", fill: "white" })
    }
  );
}
function Loader() {
  const [show, setShow] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const t = setTimeout(() => setShow(false), 900);
    return () => clearTimeout(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: show && /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      exit: { opacity: 0, y: -20 },
      transition: { duration: 0.6 },
      className: "fixed inset-0 z-[200] bg-background flex flex-col items-center justify-center",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            animate: { rotate: 360 },
            transition: { duration: 1.5, repeat: Infinity, ease: "linear" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cog, { className: "w-16 h-16 text-primary" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-xs uppercase tracking-[0.4em] text-muted-foreground", children: "Technie Engineers" })
      ]
    }
  ) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Products, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Machinery, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WhyUs, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Gallery, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WhatsAppButton, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { position: "bottom-left" })
  ] });
}
export {
  Index as component
};
