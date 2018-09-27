import React from 'react';
import './how-it-works.css';

import StepperItem from './stepper-item';

export default () => (
  <section className="howitworks__root">
    <div className="container">
      <h1>How it works</h1>
      <StepperItem
        index={0}
        title="Step one"
        subtitle="Upload your image"
        image="static/cat-normal.jpg"
      />
      <StepperItem
        index={1}
        inverted
        title="Step two"
        subtitle="Choose your transformation"
        image="static/cat-transformation.jpg"
      />
      <StepperItem
        index={2}
        title="Step three"
        subtitle="Download your image and add it to your profiles!"
        image="static/gallery.svg"
      />
    </div>
  </section>
);

