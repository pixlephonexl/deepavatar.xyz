import React from 'react';
import './select-transformation.css';

import TransformationButton from './transformation-button';
import Static from '../../services/static';

const transformations = [
  'candy',
  'mosaic',
  'rain',
  'udnie',
].map((key) => ({
  key,
  image: Static.url(`/static/transformation-${key}-cat.jpg`),
}));

export default class SelectTransformation extends React.Component {
  render() {
    return (
      <section className="select-transformation">
        <h1 className="section-title">Choose your transformation</h1>
        <div className="container">
          {transformations.map((transformation) => (
            <TransformationButton
              key={transformation.key}
              selected={transformation.key === this.props.selected}
              transformation={transformation}
              onClick={this.props.onClick}
            />
          ))}
        </div>
      </section>
    );
  }
}

