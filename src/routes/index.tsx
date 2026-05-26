import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
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
      { title: "Technie Engineers — Bridge Bearings, Expansion Joints & Infrastructure Solutions" },
      {
        name: "description",
        content:
          "Technie Engineers provides RDSO-approved bridge bearings, expansion joints, and bridge rehabilitation systems from Meerut, India.",
      },
      { property: "og:title", content: "Technie Engineers — Bridge Bearings & Infrastructure Solutions" },
      { property: "og:description", content: "Premium bridge bearing, expansion joint, and infrastructure rehabilitation expertise delivered from Meerut." },
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
