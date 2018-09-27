import React from 'react';
import Header from '../components/header';
import Divider from '../components/divider';
import Footer from '../components/footer';

import Hero from '../components/main/hero';
import HowItWorks from '../components/main/how-it-works';
import MakeMyOwn from '../components/main/make-my-own';
import TheyLoveIt from '../components/main/they-love-it';
import FAQ from '../components/main/faq';

export default () => (
  <React.Fragment>
    <Header />
    <Hero />
    <Divider />
    <HowItWorks />
    <MakeMyOwn />
    <TheyLoveIt />
    <FAQ />
    <Footer />
  </React.Fragment>
);

