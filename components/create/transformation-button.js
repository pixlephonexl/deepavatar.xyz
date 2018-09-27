import React from 'react';
import './transformation-button.css';
import Static from '../../services/static';

export default class TransformationButton extends React.PureComponent {
  handleClick = () => {
    this.props.onClick(this.props.transformation);
  };

  render() {
    return (
      <div className="transformation-button" onClick={this.handleClick}>
        <img src={this.props.transformation.image} />
        {this.props.selected ? (
          <img className="check" src={Static.url('/static/check.svg')} />
        ) : null}
      </div>
    );
  }
}

