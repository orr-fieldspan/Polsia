import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Pillars } from "@/components/Pillars";
import { Manifesto } from "@/components/Manifesto";
import { Sovereignty } from "@/components/Sovereignty";
import { Founders } from "@/components/Founders";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Pillars />
      <Manifesto />
      <Sovereignty />
      <Founders />
      <FAQ />
      <Footer />
    </main>
  );
}
