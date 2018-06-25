import React, { Component } from 'react';
import axios from 'axios';
import isValidImageFile from '../../utils/utils';

export class UploadImage extends Component {
  state = {
    file: null,
    repoId: null,
    src: null,
    warning: null
  }

  handleUploadImage = (repoId, e) => {
    e.preventDefault()
    return isValidImageFile(this.state.file)
    ? this.sendPostRequest()
    : this.resetState()
  }

  sendPostRequest = () => {
    const url = `/api/user/photo/${this.state.repoId}`
    const formData = new FormData()
    formData.append('repoImage', this.state.file)
    const config = { headers: { 'content-type': 'multipart/form-data' } }  
    return axios.post(url, formData, config)
      .then(resp => {
        this.resetState()
        return console.log(`POST success response:`, resp)
      })
      .catch(err => console.error(`POST request error:\n`, err))
  };

  resetState = () => {
    return this.setState({ file: null, repoId: null, src: null, warning: null })
  }

  handleChooseFile = (repoId, e) => {
    // clear previous state
    this.setState({ file: null, repoId: null, src: null, warning: null })
    // Check if file is valid sized image
    if (isValidImageFile(e.target.files[0])) {
      const reader = new FileReader();
      const file = e.target.files[0]
      reader.onloadend = () => {
        this.setState({
          file: file,
          repoId: repoId,
          src: reader.result,
          warning: null
        })
      }
      reader.readAsDataURL(file)
    } else {
      this.setState({
        warning: 'Image must be jpeg, jpg, png, or gif AND be less than 250kb'
      })
    }
  };

  render() {   
    return (
      <div>
        <form onSubmit={e => this.handleUploadImage(this.props.repoId, e)}>
          <div className='input-group mb-3'>
            <div className='custom-file'>
              <input onChange={e => this.handleChooseFile(this.props.repoId, e)} type='file' name='repoImage' className='custom-file-input'/>
              <label className='custom-file-label'>Choose Image</label>
            </div>
            <div className='input-group-append'>
              <button type='submit' className='input-group-text'>Upload</button>
            </div>
          </div>
        </form>
        {
          this.state.warning
          &&
          <div className="alert alert-danger" role="alert">
            {this.state.warning}
          </div>
        }
        {
          this.state.src
            &&
          <div style={{ width: '150px' }}>
            <img src={this.state.src} alt="upload" className='img-fluid' />
          </div>
        }
      </div>
    );
  }
}

export default UploadImage;
