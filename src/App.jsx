import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Works from './components/Works';
import Capabilities from './components/Capabilities';
import Experiences from './components/Experiences';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Insights from './components/Insights';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BentoGrid />
      <Works />
      <Capabilities />
      <Experiences />
      <Pricing />
      <FAQ />
      <Insights />
      <Footer />
    </main>
  );
}

export default App;
