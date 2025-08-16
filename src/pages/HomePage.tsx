import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PopularDestinations from '../components/PopularDestinations';
import Footer from '../components/Footer';
import NewsletterSignup from '../components/NewsletterSignup';

const HomePage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // TODO: Remove auth modal logic when rebuilding auth

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