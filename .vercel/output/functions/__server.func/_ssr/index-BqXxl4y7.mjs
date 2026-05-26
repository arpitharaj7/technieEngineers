import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { T as Toaster$1, t as toast } from "../_libs/sonner.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import { C as Cog, M as Moon, S as Sun, X, a as Menu, W as Wrench, b as Sparkles, A as ArrowRight, B as Building2, c as Briefcase, F as FileCheck, d as ShieldCheck, U as Users, T as Truck, e as TrendingUp, f as Award, g as Check, h as Send, i as Crosshair, H as Hammer, j as Tag, k as Shield, l as CircleCheck, m as User, n as MapPin, P as Phone, o as Mail, L as Linkedin, p as MessageCircle } from "../_libs/lucide-react.mjs";
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
  { href: "#machinery", label: "Engineering Solutions" },
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
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "w-4 h-4 text-accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground", children: "we make the heart of bridges" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 mb-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full border border-border bg-background/80 px-4 py-2 text-xs sm:text-sm font-medium text-foreground shadow-sm", children: "RDSO Approved Firm" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-full border border-border bg-background/80 px-4 py-2 text-xs sm:text-sm font-medium text-foreground shadow-sm", children: "ISO 9001:2015 Certified" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-teal", children: "Engineering" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Strength Into",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-fire", children: "Every Structure" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed", children: "RDSO-approved bridge bearing and expansion joint specialists trusted across railway, highway, and infrastructure projects." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", size: "xl", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#machinery", children: [
              "Explore Solutions ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "glass", size: "xl", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#quote", children: "Get a Quote" }) })
          ] })
        ]
      }
    ) })
  ] });
}
const facts = [
  { icon: Building2, label: "Nature of Business", value: "Manufacturer" },
  { icon: Briefcase, label: "Legal Status", value: "Partnership" },
  { icon: FileCheck, label: "Approval Status", value: "RDSO Approved" },
  { icon: ShieldCheck, label: "Certification", value: "ISO 9001:2015" }
];
const stats = [
  { icon: Users, label: "Leadership Experience", value: "12+ Years" },
  { icon: Truck, label: "Infrastructure Expertise", value: "Railway & Highway Projects" },
  { icon: TrendingUp, label: "Project Execution", value: "Timely Delivery" },
  { icon: Award, label: "Manufacturing Standards", value: "Quality Assured" }
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground leading-relaxed", children: "Technie Engineers is an RDSO-approved engineering firm engaged in the manufacturing, supply, testing, and installation of bridge bearings, expansion joints, and steel fabrication works for railway and infrastructure projects." })
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xl font-display font-semibold text-gradient-teal relative", children: s.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm text-muted-foreground relative", children: s.label })
            ]
          },
          s.label
        )) })
      ] })
    ] })
  ] });
}
const mustard = "/assets/machine-mustard-ZrY_NY2K.jpg";
const vito = "/assets/machine-vito-Dw7lfMCp.jpg";
const oil = "/assets/machine-oil-BkHzHqw1.jpg";
const edible = "/assets/machine-edible-BwL_16Fk.jpg";
const machines = [
  { img: mustard, title: "Pot Cum PTFE Bearing", specs: ["High load capacity", "Rotational movement support", "Structural stability"] },
  { img: vito, title: "Elastomeric Bearing", specs: ["Vibration absorption", "Durable elastomer layers", "Bridge load distribution"] },
  { img: oil, title: "Expansion Joint", specs: ["Smooth structural movement", "Weather-resistant sealing", "Long service life"] },
  { img: edible, title: "Spherical Bearing", specs: ["Multidirectional rotation", "Thermal movement support", "Seismic compatibility"] },
  { img: mustard, title: "Pin Bearing", specs: ["Rotational flexibility", "Horizontal load transfer", "Precision-engineered steel"] },
  { img: vito, title: "Rocker Cum Roller Bearing", specs: ["Controlled bridge movement", "Heavy-duty roller system", "High load endurance"] }
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-accent", children: "Bridge Engineering Products" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold", children: [
              "Engineered for ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-fire", children: "movement, stability & strength." })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: machines.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.1 },
          className: "group relative rounded-3xl glass overflow-hidden hover:shadow-[0_0_60px_oklch(0.72_0.18_55/0.25)] transition-all duration-500",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-video overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: m.img,
                alt: m.title,
                loading: "lazy",
                className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex flex-col", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold", children: m.title }),
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
  { icon: Crosshair, title: "Certified Manufacturing", desc: "Certified manufacturing processes following industry standards for bridge bearings and expansion joints." },
  { icon: Hammer, title: "Railway Bridge Compliance", desc: "Designs and fabrication compliant with railway bridge specifications and regulatory requirements." },
  { icon: Users, title: "In-house Testing", desc: "Comprehensive in-house testing and quality assurance to validate performance and safety." },
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-teal", children: "Trusted Infrastructure" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Solutions"
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: features.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
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
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-[2rem] border border-white/10 p-8 max-w-5xl w-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mx-auto max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "Featured Project References" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-3xl sm:text-4xl font-semibold text-foreground", children: "Premium infrastructure credentials" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4", children: [
        "NH-66 Alleppey Kerala",
        "NTPC Rehab Work",
        "Jammu Bridge Work",
        "Odisha Railway Work"
      ].map((project) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "rounded-full border border-primary/20 bg-white/10 px-4 py-3 text-center text-sm font-medium text-foreground shadow-[0_0_25px_rgba(56,189,248,0.12)] transition-all hover:border-primary/40 hover:shadow-[0_0_30px_rgba(56,189,248,0.18)]",
          children: project
        },
        project
      )) })
    ] }) })
  ] }) });
}
const upsbclCeilInspection = "/assets/UPSBCL_CEIL-inspection-CCxUEVPO.jpg";
const dfccilInspection = "/assets/DFCCIL-inspection-yNEcKbEz.jpg";
const nhaiInspection = "/assets/NHAI-inspection-BttBZTkA.jpg";
const railwayInspection = "/assets/railway-inspection-Dw7PbWwa.jpg";
const jammuRailwayRehab = "/assets/jammu-railway-rehab-work-BeJgIbRI.jpg";
const nh12Rehab = "/assets/NH12-rehab-work-DUGo2fo9.jpg";
const nh66Alleppey = "/assets/NH66-alleppey-work-GEGMaw7H.jpg";
const nhaiRaigarh = "/assets/NHAI-raigarh-work-CK2BaZKK.jpg";
const railwayOpenWeb = "/assets/Railway45.7-open-web-work-TH6VTUoP.jpg";
const ntpcRehab = "/assets/NTPC-rehab-work-CEQitAQt.jpg";
const odishaRailway = "/assets/odisha-railway-work-DIqccT4R.jpg";
const jammuBridge = "/assets/jammu-bridge-work-DcnMbcXu.jpg";
const images = [
  { src: upsbclCeilInspection, label: "UPSBCL & CEIL Inspection", span: "row-span-2" },
  { src: dfccilInspection, label: "DFCCIL Inspection", span: "" },
  { src: nhaiInspection, label: "NHAI Inspection", span: "" },
  { src: railwayInspection, label: "Railway Inspection", span: "row-span-2" },
  { src: jammuRailwayRehab, label: "Jammu Railway Rehab Work", span: "" },
  { src: nh12Rehab, label: "NH12 Rehab Work", span: "" },
  { src: nh66Alleppey, label: "NH-66 Alleppey Kerala", span: "row-span-2" },
  { src: nhaiRaigarh, label: "NHAI Raigarh Work", span: "" },
  { src: railwayOpenWeb, label: "Railway 45.7 Open Web Work", span: "" },
  { src: ntpcRehab, label: "NTPC Rehab Work", span: "row-span-2" },
  { src: odishaRailway, label: "Odisha Railway Work", span: "" },
  { src: jammuBridge, label: "Jammu Bridge Work", span: "" }
];
function Gallery() {
  const [open, setOpen] = reactExports.useState(null);
  const [touchIndex, setTouchIndex] = reactExports.useState(null);
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-fire", children: "Engineering Process." })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-4", children: images.map((img, i) => {
        const isTouchActive = touchIndex === i;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.button,
          {
            type: "button",
            onClick: () => setOpen(img.src),
            onTouchStart: () => setTouchIndex(i),
            onTouchEnd: () => setTouchIndex(null),
            onTouchCancel: () => setTouchIndex(null),
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
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute inset-0 bg-black/60 transition-opacity ${isTouchActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}` }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute bottom-3 left-3 text-sm font-semibold text-cyan-100 transition-opacity ${isTouchActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`, children: img.label })
            ]
          },
          i
        );
      }) })
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
const credentials = [
  { icon: Award, label: "Certifications", value: "ISO 9001:2015" },
  { icon: FileCheck, label: "Project Inspections", value: "Railway & Infrastructure Works" },
  { icon: Building2, label: "Infrastructure Projects", value: "Railway & Highway Works" },
  { icon: Briefcase, label: "Approved Authorities", value: "RDSO • NHAI • DFCCIL" },
  { icon: Shield, label: "Approval Documents", value: "Compliance Verified" }
];
function Testimonials() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 sm:py-32 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 [background-image:var(--gradient-hero)] animate-gradient opacity-50" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "Infrastructure Confidence" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-teal", children: "Trusted Across" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Infrastructure Projects"
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-5xl mx-auto", children: credentials.map((cred, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { delay: i * 0.08 },
          className: "glass-strong rounded-3xl p-6 text-center",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(cred.icon, { className: "w-7 h-7 text-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-lg mb-2", children: cred.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: cred.value })
          ]
        },
        cred.label
      )) })
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
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Product / Service", children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, name: "product", placeholder: "e.g. Expansion Joint Requirement", className: "field-input" }) }),
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
          { icon: User, label: "Contact Team", value: "Engineering Team" },
          { icon: MapPin, label: "Office Address", value: "G-123, Dwarka Dham, Shivaya Modipuram, Meerut (U.P)" },
          { icon: MapPin, label: "Works Unit", value: "Plot No. G-56, Phase-1, UPSIDC Industrial Area, Ghaziabad (U.P)" },
          { icon: Phone, label: "Phone", value: "+91 9058871092, +91 7017985564", href: "tel:+919058871092" },
          { icon: Mail, label: "Email", value: "technieengineers@gmail.com", href: "mailto:technieengineers@gmail.com" }
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
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "hero", className: "flex-1", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:+919058871092", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "w-4 h-4" }),
            " Call Now"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "glass", className: "flex-1", asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:technieengineers@gmail.com", children: [
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
              src: "https://www.google.com/maps?q=G-123%2C+Dwarka+Dham%2C+Shivaya+Modipuram%2C+Meerut%2C+Uttar+Pradesh%2C+India&output=embed",
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
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-[0.3em] text-primary mt-1", children: "Bridge Engineering • Infrastructure Solutions" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-md leading-relaxed", children: "Technie Engineers specializes in bridge bearings, expansion joints, steel fabrication, and bridge rehabilitation solutions for railway and infrastructure projects." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-3 mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "w-4 h-4" }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4", children: "Quick Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 text-sm", children: [["About", "#about"], ["Engineering Solutions", "#machinery"], ["Project Gallery", "#gallery"], ["Contact", "#contact"]].map(([l, h]) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: h, className: "text-muted-foreground hover:text-primary transition-colors", children: l }) }, l)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4", children: "Reach Us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Meerut, Uttar Pradesh, India" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+919058871092", className: "hover:text-primary", children: "+91 9058871092" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+917017985564", className: "hover:text-primary", children: "+91 7017985564" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:technieengineers@gmail.com", className: "hover:text-primary", children: "technieengineers@gmail.com" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "© 2025 Technie Engineers. All rights reserved." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Crafted with precision in Meerut, India." })
    ] })
  ] }) });
}
function WhatsAppButton() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.a,
    {
      href: "https://wa.me/919058871092?text=Hi%20Technie%20Engineers,%20I%27d%20like%20a%20quote",
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
