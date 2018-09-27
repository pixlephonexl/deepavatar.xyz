import React from 'react';
import './email-address.css';

import Static from '../../services/static';

export default class EmailAddress extends React.Component {
  handleChange = (e) =>
    this.props.onChange(e.target.value);

  render() {
    return (
      <section className="email-address bg-primary">
        <h1 className="section-title">
          Where should we send it?
        </h1>
        <div className="container">
          <input
            placeholder="morty@getschwif.ty"
            type="email"
            onChange={this.handleChange}
            value={this.props.value}
          />
          <button
            className="btn btn--inverted"
            disabled={this.props.disabled}
            onClick={this.props.onSubmit}
          >
            Submit
          </button>
        </div>
      </section>
    );
  }
}

