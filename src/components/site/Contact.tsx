import { motion } from "framer-motion";
import { MapPin, Phone, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-12"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-primary">Contact</span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold">
            Visit, call, or <span className="text-gradient-teal">message.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {[
              { icon: User, label: "Contact Person", value: "Anish Pushpan" },
              { icon: MapPin, label: "Address", value: "Meerut, Uttar Pradesh, India" },
              { icon: Phone, label: "Phone", value: "+91 74172 71092", href: "tel:+917417271092" },
              { icon: Mail, label: "Email", value: "info@technieengineers.in", href: "mailto:info@technieengineers.in" },
            ].map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href || "#"}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-center gap-4 glass rounded-2xl p-5 hover-lift group"
              >
                <div className="w-12 h-12 rounded-xl [background-image:var(--gradient-accent)] flex items-center justify-center shrink-0">
                  <c.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                  <div className="font-display font-semibold text-lg group-hover:text-primary transition-colors">{c.value}</div>
                </div>
              </motion.a>
            ))}
            <div className="flex gap-3 pt-2">
              <Button variant="hero" className="flex-1" asChild>
                <a href="tel:+917417271092"><Phone className="w-4 h-4" /> Call Now</a>
              </Button>
              <Button variant="glass" className="flex-1" asChild>
                <a href="mailto:info@technieengineers.in"><Mail className="w-4 h-4" /> Email</a>
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden glass-strong h-[420px]"
          >
            <iframe
              title="Technie Engineers location"
              src="https://www.google.com/maps?q=Meerut,Uttar+Pradesh,India&output=embed"
              className="w-full h-full border-0 grayscale-[0.4] contrast-110"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
