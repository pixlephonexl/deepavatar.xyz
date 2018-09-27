import React from 'react';
import './faq.css';

export default () => (
  <section className="faq bg-primary">
    <h1>FAQ</h1>
    <div className="container">
      <div className="faq__question">
        <h3>How do I get my avatar?</h3>
        <p>We're currently in closed beta test. Leave us your email, and we'll be in touch.</p>
      </div>
      <div className="faq__question">
        <h3>Another question?</h3>
        <p>That's all the frequently asqued questions we've got! If you have another one, we'll add it here :)</p>
      </div>
      <div className="faq__question">
        <h3>How does it work?</h3>
        <p>We've trained the best deep learning models on a fabulous dataset. Our Artificial Intelligence learned to make amazing different avatars that catch the eye!</p>
      </div>
    </div>
  </section>
);

