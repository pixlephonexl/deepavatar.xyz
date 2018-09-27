import React from 'react';
import './hero.css';

import Static from '../../services/static';

export default () => (
  <section className="hero__root bg-primary">
    <div className="container">
      <div className="hero__left">
        <h1>
          Make your avatar stand out
        </h1>
        <h2>
          Transform your avatar with the help of artificial intelligence.
        </h2>
        <div className="hero__cta">
          <a className="btn btn--inverted" href="./create">
            Make your own
          </a>
        </div>
      </div>
      <div className="hero__right">
        <img src={Static.url('/static/woman.jpg')} />
      </div>
    </div>
  </section>
);

