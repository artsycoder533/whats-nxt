import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Contact from "./components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Home',
}

export default async function Home() {
  return (
    <section>
      <Hero />
      <Mission />
      <Contact />
    </section>
  );
}
