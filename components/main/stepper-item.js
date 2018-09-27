import React from 'react';
import './stepper-item.css';

class StepperItem extends React.PureComponent {
  renderText() {
    return (
      <div className="stepper-item__text">
        <span>#{this.props.index + 1}</span>
        <h3>{this.props.title}</h3>
        <p>{this.props.subtitle}</p>
      </div>
    );
  }

  renderImage() {
    return (
      <div className="stepper-item__image">
        <img src={this.props.image} />
      </div>
    );
  }

  render() {
    const classNames = ['stepper-item'];
    if (this.props.inverted) {
      classNames.push('stepper-item--inverted');
    }
    return (
      <div className={classNames.join(' ')}>
        {this.renderText()}
        {this.renderImage()}
      </div>
    );
  }
}

export default StepperItem;

