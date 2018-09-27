import React from 'react';
import Header from '../components/header';
import Divider from '../components/divider';
import Footer from '../components/footer';

import UploadImage from '../components/create/upload-image';

export default class extends React.Component {
  state = {
    file: null,
  };

  handleDrop = (file) =>
    this.setState({ file });

  render() {
    return (
      <React.Fragment>
        <Header />
        <UploadImage
          file={this.state.file}
          onDrop={this.handleDrop}
        />
        <Divider />
        <Footer />
      </React.Fragment>
    );
  }
}

