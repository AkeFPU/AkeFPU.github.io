import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Certifications } from "@/components/portfolio/Certifications";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { SocialDock } from "@/components/portfolio/SocialDock";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Akif Rifath | Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Akif Rifath — Electronics & Communication Engineering student focused on cybersecurity, AI, networking, and electronics.",
      },
      {
        name: "keywords",
        content:
          "Akif Rifath, Cybersecurity, ECE, AI, Machine Learning, Portfolio, PSG College of Technology, Networking, Python, OpenCV",
      },
      { property: "og:title", content: "Akif Rifath | Portfolio" },
      {
        property: "og:description",
        content:
          "Electronics & Communication Engineering student — cybersecurity, AI/ML, networking, embedded systems.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Akif Rifath | Portfolio" },
      {
        name: "twitter:description",
        content:
          "Electronics & Communication Engineering student — cybersecurity, AI/ML, networking, embedded systems.",
      },
    ],
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="relative min-h-dvh bg-black text-white">
      <Navbar />
      <SocialDock />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
