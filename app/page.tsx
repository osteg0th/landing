import Nav        from "@/components/Nav";
import Hero       from "@/components/Hero";
import Skills     from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects   from "@/components/Projects";
import Contact    from "@/components/Contact";
import Footer     from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="container">
        <Hero />
        <hr className="divider" />
        <Skills />
        <hr className="divider" />
        <Experience />
        <hr className="divider" />
        <Projects />
        <hr className="divider" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
