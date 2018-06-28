import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isValidImageFile } from '../../utils/imageChecker';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchUserInfo } from '../../store/store';
import axios from 'axios';
require('./ImageUpload.css')

const styleImageWrapper = {
  height: '290px',
  width: '348px',
  overflow: 'hidden'
}

class ImageUpload extends Component {
  state = {
    file: null,
    warning: null,
    loading: false
  };

  handleChange = (e, _id) => {
    const nextFile = e.target.files[0]
    if (nextFile && isValidImageFile(nextFile)) {
      this.setState({
        file: nextFile,
        warning: null
      }, () => this.handleUpload(_id))
    } else {
      this.setState({
        warning: 'Only .jpg .jpeg .png and .gif files smaller than 250kb allowed! Try Again'
      })
    }
  }

  handleUpload = _id => {
    const url = `/api/user/photo/${_id}`
    const formData = new FormData()
    formData.append('repoImage', this.state.file)
    const config = { headers: { 'content-type': 'multipart/form-data' } }
    return axios.post(url, formData, config)
      .then(this.setState({ file: null, loading: true }))
      .then(this.props.fetchUserInfo)
      .then(() => this.setState({ loading: false }))
      .catch(err => console.error(err))
  };

  render() {
    return (
      <div className="form-group mb-3 row">
        <label className='col-sm-3 col-form-label text-left my-auto'>
          Repository Image:
        </label>
        <div className=' col-sm-9'>
          <div className="row" style={{ height: '250px', overflow: 'hidden' }}>
            <div className="col d-flex justify-content-center align-items-center">
              {
                this.state.loading
                ?
                <div className='image-loading'></div>
                :
                <div style={styleImageWrapper}>
                  <img
                    z-index='-1'
                    className="img-fluid mx-auto"
                    src={this.props.src}
                    style={{ minHeight: '100%', verticalAlign: 'middle', horizontalAlign: 'top' }}
                    alt="Repo thumbnail"
                  />
                </div>
              }
            </div>
          </div>
          {
            this.state.warning
            &&
            <small className='text-danger'>
              {this.state.warning}
            </small>
          }
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

const mapStateToProps = state => {
  return { userInfo: state.userInfo };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchUserInfo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageUpload);
