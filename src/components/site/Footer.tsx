import { Cog, Facebook, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Cog className="w-7 h-7 text-primary" />
              <div className="leading-none">
                <div className="font-display font-bold text-lg">Technie Engineers</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-primary mt-1">Bridge Engineering • Infrastructure Solutions</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Technie Engineers specializes in bridge bearings, expansion joints, steel
              fabrication, and bridge rehabilitation solutions for railway and infrastructure projects.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Quick Links</div>
            <ul className="space-y-2 text-sm">
              {[['About', '#about'], ['Engineering Solutions', '#machinery'], ['Project Gallery', '#gallery'], ['Contact', '#contact']].map(([l, h]) => (
                <li key={l}><a href={h} className="text-muted-foreground hover:text-primary transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Reach Us</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Meerut, Uttar Pradesh, India</li>
              <li><a href="tel:+919058871092" className="hover:text-primary">+91 9058871092</a></li>
              <li><a href="tel:+917017985564" className="hover:text-primary">+91 7017985564</a></li>
              <li><a href="mailto:technieengineers@gmail.com" className="hover:text-primary">technieengineers@gmail.com</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Technie Engineers. All rights reserved.</p>
          <p>Crafted with precision in Meerut, India.</p>
        </div>
      </div>
    </footer>
  );
}
