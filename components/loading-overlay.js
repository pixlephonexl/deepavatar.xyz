import React from 'react';
import './loading-overlay.css';

export default (props) => props.visible ? (
  <div className="loading-overlay">
    <div className="loading-overlay__ripple">
      <div />
      <div />
    </div>
  </div>
) : null;

