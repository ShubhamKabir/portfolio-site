import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ApiSection from "./components/ApiSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <ApiSection />
      <Footer />
    </div>
  );
}