import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ImageUpload extends Component {
  handleUpload = _id => {
    console.log(`User clicked 'upload new image' for _id: ${_id}`)
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
                onClick={this.handleUpload(this.props._id)}
                type='button'
                className='btn btn-outline-dark mb-1'
              >
                Upload new image
              </button>
            </div>
          </div>
          <div
            className="alert alert-danger"
            role="alert"
          >
            Oops! Only .jpg .jpeg .png and .gif files smaller than 250kb allowed!
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
