import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isValidImageFile } from '../../utils/imageChecker';

class ImageUpload extends Component {
  state = {
    file: null,
    warning: null
  };

  handleChange = (e, _id) => {
    const nextFile = e.target.files[0]
    console.log(`User clicked 'upload new image' for _id: ${_id}`)
    if (isValidImageFile(nextFile)) {
      this.setState({
        file: nextFile,
        warning: null
      }, () => this.handleUpload(_id))
    } else {
      this.setState({
        warning: 'Only .jpg .jpeg .png and .gif files smaller than 250kb allowed!'
      })
    }
  }

  handleUpload = _id => {
    console.log(`time to execute the upload`)
  };

  render() {
    return (
      <div className="form-group mb-3 row">
        <label className='col-sm-3 col-form-label text-left my-auto'>
          Repository Image:
        </label>
        <div className=' col-sm-9'>
          <div className="border rounded pt-2">
            <div
              className='mx-auto'
              style={{ width: '15rem', overflow: 'hidden' }}
            >
              <img
                className="img-fluid rounded mb-2"
                src={this.props.src}
                alt="Repo thumbnail"
              />
            </div>
            <div className="custom-file">
              <input
                onChange={e => this.handleChange(e, this.props._id)}
                type="file"
                className="custom-file-input"
                id="validatedCustomFile"
              />
              <label
                className="custom-file-label"
                htmlFor="validatedCustomFile"
              >
                Upload New Image&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </label>
              {
                this.state.warning
                &&
                <small className='text-danger'>
                  {this.state.warning}
                </small>
              }
            </div>
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
