import Header from "@/components/Header";
import Scene from "@/components/Scene";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative w-full">
        <Scene />
        <Hero />
        <About />
        <Work />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
