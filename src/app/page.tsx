import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Services } from "@/components/sections/Services";
import { ExampleWorkflow } from "@/components/sections/ExampleWorkflow";
import { Approach } from "@/components/sections/Approach";
import { Values } from "@/components/sections/Values";
import { About } from "@/components/sections/About";
import { CallToAction } from "@/components/sections/CallToAction";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Problem />
        <HowItWorks />
        <Services />
        <ExampleWorkflow />
        <Approach />
        <Values />
        <About />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
