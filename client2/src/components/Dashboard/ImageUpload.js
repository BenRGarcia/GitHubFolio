import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isValidImageFile } from '../../utils/imageChecker';

class ImageUpload extends Component {
  state = {
    file: null
  };

  handleUpload = _id => {
    console.log(`User clicked 'upload new image' for _id: ${_id}`)
    if (!!this.state.file) {
      console.log(`is the image valid?`, isValidImageFile(this.state.file))
    } else {
      console.log(`but 'this.state.file' was falsy`)
    }
  };

  render() {
    return (
      <div className="form-group mb-3 row">
        <label className='col-sm-3 col-form-label text-left my-auto'>
          Repository Image:
        </label>
        <div className=' col-sm-9'>
          <div className="border rounded py-2">
            <div
              className='mx-auto'
              style={{ width: '15rem', overflow: 'hidden' }}
            >
              <img
                className="img-fluid rounded mb-2"
                src={this.props.src}
                alt="Repo thumbnail"
              />
              <button
                onClick={() => this.handleUpload(this.props._id)}
                type='button'
                className='btn btn-outline-dark mb-1'
              >
                Upload new image
              </button>
            </div>
          </div>
          <div className="custom-file">
            <input type="file" className="custom-file-input" id="validatedCustomFile" required />
            <label className="custom-file-label" htmlFor="validatedCustomFile">Upload new image</label>
            <div className="invalid-feedback">Only .jpg .jpeg .png and .gif files smaller than 250kb allowed!</div>
          </div>
        </div>
      </div>
    );
  }
}

ImageUpload.propTypes = {
  _id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
}

export default ImageUpload;
