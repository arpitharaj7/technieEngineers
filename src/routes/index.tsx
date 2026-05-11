import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Products } from "@/components/site/Products";
import { Machinery } from "@/components/site/Machinery";
import { WhyUs } from "@/components/site/WhyUs";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Quote } from "@/components/site/Quote";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppButton } from "@/components/site/WhatsAppButton";
import { Loader } from "@/components/site/Loader";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Technie Engineers — Industrial Springs, Valves & Oil Machinery | Meerut" },
      {
        name: "description",
        content:
          "Technie Engineers manufactures industrial springs, control valves, train parts, fabrication services, and oil extraction machines from Meerut, India.",
      },
      { property: "og:title", content: "Technie Engineers — Precision Engineering & Fabrication" },
      { property: "og:description", content: "Premium industrial manufacturing solutions with effective and timely delivery." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Machinery />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <Quote />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster position="bottom-left" />
    </div>
  );
}
