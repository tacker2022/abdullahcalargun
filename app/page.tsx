import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { Contact } from "@/components/sections/Contact";
import { LeadershipTicker } from "@/components/sections/LeadershipTicker";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <About />
      <Projects />
      <BlogPreview />
      <Contact />
      <LeadershipTicker />
    </main>
  );
}
