'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Pillars from '@/components/Pillars';
import Sensor from '@/components/Sensor';
import Ecosystem from '@/components/Ecosystem';
import Business from '@/components/Business';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollAnimator from '@/components/ScrollAnimator';

export default function Home() {
  return (
    <>
      <ScrollAnimator />
      <Navbar />
      <main>
        <Hero />
        <Pillars />
        <Sensor />
        <Ecosystem />
        <Business />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
