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

  handleSuccess = (res) => {
    if (res.status !== 200) {
      return this.handleError();
    }
    alert('Your image will be processed soon');
  };

  handleError = () => {
    alert('An error append...');
  };

  handleSubmit = () => {
    const formData = new FormData();
    formData.append('picture', this.state.file);
    formData.append('model', this.state.transformation);
    formData.append('email', this.state.email);
    window
      .fetch(`${process.env.BACKEND_URL}/api/pictures`, {
        method: 'POST',
        body: formData,
      })
      .then(this.handleSuccess)
      .catch(this.handleError);
  };

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

