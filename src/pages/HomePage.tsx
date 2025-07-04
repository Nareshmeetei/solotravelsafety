import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import PopularDestinations from '../components/PopularDestinations';
import Footer from '../components/Footer';
import NewsletterSignup from '../components/NewsletterSignup';

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Benefits />
      <PopularDestinations />
      <NewsletterSignup />
      <Footer />
    </>
  );
};

export default HomePage;