import React from 'react';
import Dropzone from 'react-dropzone';
import './upload-image.css';

import Static from '../../services/static';

export default class UploadImage extends React.Component {
  handleDrop = (files) => {
    if (!files.length) return;
    this.props.onDrop(files[0]);
  };

  render() {
    const { file } = this.props;
    return (
      <section className="upload-image bg-primary">
        <h1 className="section-title">
          Pick an image
        </h1>
        <div className="container">
          <Dropzone
            accept="image/*"
            className="upload-image__dropzone"
            onDrop={this.handleDrop}
          >
            {file ? (
              <img
                className="upload-image__preview"
                src={file.preview}
              />
            ) : (
              <React.Fragment>
                <img
                  className="upload-image__icon"
                  src={Static.url('/static/cloud-upload.svg')}
                />
                <p>
                  Click or drop an image here
                </p>
              </React.Fragment>
            )}
          </Dropzone>
        </div>
      </section>
    );
  }
}

