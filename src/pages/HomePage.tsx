import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PopularDestinations from '../components/PopularDestinations';
import Footer from '../components/Footer';
import NewsletterSignup from '../components/NewsletterSignup';

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <PopularDestinations />
      <NewsletterSignup />
      <Footer />
    </>
  );
};

export default HomePage;