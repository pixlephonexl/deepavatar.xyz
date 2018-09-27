import React from 'react';
import Header from '../components/header';
import Divider from '../components/divider';
import Footer from '../components/footer';
import LoadingOverlay from '../components/loading-overlay';

import UploadImage from '../components/create/upload-image';
import SelectTransformation from '../components/create/select-transformation';
import EmailAddress from '../components/create/email-address';

export default class extends React.Component {
  state = {
    running: false,
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
    this.setState({ running: false });
    alert('Your image will be processed soon');
  };

  handleError = () => {
    this.setState({ running: false });
    alert('An error append...');
  };

  handleSubmit = () => {
    this.setState({ running: true });
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
          disabled={this.state.running}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          value={this.state.email}
        />
        <Footer />
        <LoadingOverlay
          visible={this.state.running}
        />
      </React.Fragment>
    );
  }
}

