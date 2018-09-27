import React from 'react';
import Header from '../components/header';
import Divider from '../components/divider';
import Footer from '../components/footer';

import UploadImage from '../components/create/upload-image';
import SelectTransformation from '../components/create/select-transformation';

export default class extends React.Component {
  state = {
    file: null,
    transformation: null,
  };

  handleDrop = (file) =>
    this.setState({ file });

  handleSelect = (transformation) =>
    this.setState({
      transformation: transformation.key,
    });

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
        <Footer />
      </React.Fragment>
    );
  }
}

