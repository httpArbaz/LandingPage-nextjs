import Image from "next/image";
import Hero from "./components/Hero";
import Feature from "./components/Feature";
import Contact from "./components/Contact";
import Content from "./components/Content";

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <Content />
      <Contact />
    </main>
  );
}
