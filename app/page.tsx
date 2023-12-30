import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Contact from "./components/Contact";

export default async function Home() {
  return (
    <section>
      <Hero />
      <Mission />
      <Contact />
    </section>
  );
}
