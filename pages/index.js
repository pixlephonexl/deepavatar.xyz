import React from 'react';
import Header from '../components/main/header';
import Hero from '../components/main/hero';
import Divider from '../components/main/divider';

import HowItWorks from '../components/main/how-it-works';
import MakeMyOwn from '../components/main/make-my-own';
import TheyLoveIt from '../components/main/they-love-it';
import FAQ from '../components/main/faq';
import Footer from '../components/main/footer';

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

