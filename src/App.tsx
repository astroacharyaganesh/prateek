import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CareerGuidance from "./components/CareerGuidance";
import About from "./components/About";
import HowItWorks from "./components/HowItWorks";
import FAQ from "./components/FAQ";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <CareerGuidance />
        <About />
        <HowItWorks />
        <FAQ />
        <Booking />
      </main>

      <Footer />
    </>
  );
}