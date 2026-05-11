import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function Quote() {
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast.success("Quote request received — we'll be in touch soon!");
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="quote" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-accent">Get in Touch</span>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold">
              Request a <span className="text-gradient-teal">quote.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Tell us what you need. We'll get back within 24 hours.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={submit}
            className="glass-strong rounded-3xl p-6 sm:p-10 space-y-5"
          >
            <Field label="Product / Service">
              <input required name="product" placeholder="e.g. Mustard Oil Filter Machine" className="field-input" />
            </Field>
            <Field label="Mobile Number">
              <input required name="phone" type="tel" placeholder="+91 XXXXX XXXXX" className="field-input" />
            </Field>
            <Field label="Your Message">
              <textarea required name="message" rows={4} placeholder="Specs, quantity, delivery location..." className="field-input resize-none" />
            </Field>
            <Button type="submit" variant="hero" size="xl" className="w-full">
              {sent ? (
                <><CheckCircle2 className="w-5 h-5" /> Sent</>
              ) : (
                <><Send className="w-5 h-5" /> Submit Request</>
              )}
            </Button>
          </motion.form>
        </div>
      </div>

      <style>{`
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
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</span>
      {children}
    </label>
  );
}
