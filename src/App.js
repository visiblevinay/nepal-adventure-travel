import React, { useEffect } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Tours from './components/Tours';
import Hotels from './components/Hotels';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Reviews from "./components/Reviews";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Gallery from "./components/Gallery";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <Tours />
       <Services />
      <Hotels />
      <Gallery />
      <Reviews />
      <ContactForm />
      <WhatsAppButton />
      <Footer />
    </>
  );
}

export default App;
