import React from 'react';
import Header from '../components/header';
import Divider from '../components/divider';
import Footer from '../components/footer';

import UploadImage from '../components/create/upload-image';
import SelectTransformation from '../components/create/select-transformation';
import EmailAddress from '../components/create/email-address';

export default class extends React.Component {
  state = {
    file: null,
    transformation: null,
    email: '',
  };

  handleChange = (email) =>
    this.setState({ email });

  handleDrop = (file) =>
    this.setState({ file });

  handleSelect = (transformation) =>
    this.setState({
      transformation: transformation.key,
    });

  handleSubmit = () =>
    console.log('on submit');

  render() {
    return (
      <React.Fragment>
        <Header />
        <UploadImage
          file={this.state.file}
          onDrop={this.handleDrop}
        />
        <Divider />
        <SelectTransformation
          selected={this.state.transformation}
          onClick={this.handleSelect}
        />
        <EmailAddress
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          value={this.state.email}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

