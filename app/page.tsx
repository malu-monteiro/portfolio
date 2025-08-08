import Hero from "@/components/hero";
import AboutMe from "@/components/about-me";
import TechStack from "@/components/techstack";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <TechStack />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
