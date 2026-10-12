import { Architecture } from "@/components/Architecture";
import { Audience } from "@/components/Audience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Impact } from "@/components/Impact";
import { Market } from "@/components/Market";
import { Nav } from "@/components/Nav";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Team } from "@/components/Team";

export default function Home() {
  return (
    <>
      <a
        href="#problem"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Architecture />
        <Impact />
        <Market />
        <Audience />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
