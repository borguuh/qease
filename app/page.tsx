import { faqs } from "@/source/__env";
import About from "@/source/components/landing/About";
import FAQ from "@/source/components/landing/FAQ";
import Features from "@/source/components/landing/Features";
import Hero from "@/source/components/landing/Hero";
import LandingFoot from "@/source/components/landing/LandingFoot";
import LandingNav from "@/source/components/landing/LandingNav";

export default function Home() {
  return (
    <main className="w-full">
      <LandingNav />
      <Hero />
      <About />
      <Features />
      <FAQ faqs={faqs} />
      <LandingFoot />
    </main>
  );
}
