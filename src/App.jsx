import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <Experience/>
      <Footer />
    </div>
  );
}
