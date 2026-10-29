import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Principles } from "@/components/Principles";
import { AutomationDemo } from "@/components/AutomationDemo";
import { Services } from "@/components/Services";
import { Work } from "@/components/Work";
import { TechStack } from "@/components/TechStack";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { ContactCta } from "@/components/ContactCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between selection:bg-[#FF6363]/30 selection:text-white">
      {/* 1. Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero */}
        <Hero />

        {/* 3. Principles */}
        <Principles />

        {/* 4. Live Automation Demo */}
        <AutomationDemo />

        {/* 5. Services */}
        <Services />

        {/* 6. Selected Work */}
        <Work />

        {/* 7. Tech Stack */}
        <TechStack />

        {/* 8. Process */}
        <Process />

        {/* 9. About */}
        <About />

        {/* 10. Testimonials (hidden if showTestimonials: false) */}
        <Testimonials />

        {/* 11. Final CTA + Contact */}
        <ContactCta />
      </main>

      {/* 12. Footer */}
      <Footer />
    </div>
  );
}
