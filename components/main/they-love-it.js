import React from 'react';
import './they-love-it.css';

export default () => (
  <section className="theyloveit">
    <h1>They love their avatars</h1>
    <div className="container">
      <div className="theyloveit__person">
        <img
          className="theyloveit__avatar"
          src="static/john-smith.jpg"
        />
        <h3>John Smith</h3>
        <h4>Leader</h4>
        <p>We share a slack with our clients, and it's getting a bit messy. I used deepavatar on all our employees pictures. It's great to be able to identify a poster as part of the team immediately.</p>
      </div>
      <div className="theyloveit__person">
        <img
          className="theyloveit__avatar"
          src="static/jane-doe.jpg"
        />
        <h3>Jane Doe</h3>
        <h4>CEO</h4>
        <p>I was getting tired of all those instagram filters. My deepavatar is really different, I love it.</p>
      </div>
      <div className="theyloveit__person">
        <img
          className="theyloveit__avatar"
          src="static/john-doe.jpg"
        />
        <h3>John Doe</h3>
        <h4>CTO</h4>
        <p>As CTO, part of my job is to make sure my tech team is happy, and how they see me on our internal chat tool is important. I've spent so much time trying to find the perfect avatar, now I've got it!</p>
      </div>
    </div>
  </section>
);

