import React from 'react';
import './footer.css';

export default () => (
  <footer className="footer">
    <div className="container">
      <div>© {new Date().getFullYear()} In Your Saas</div>
      <a href="https://www.inyoursaas.io/" target="_blank">
        In Your Saas
      </a>
    </div>
  </footer>
);

