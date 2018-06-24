import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from 'axios';

export class UploadImage extends Component {
  state = { file: null, repoId: null, src: null, warning: null }

  handleUploadImage = e => {
    e.preventDefault()
    return this.isValidFile(this.state.file)
      ? this.sendPostRequest()
      // ? this.sendPostRequest(this.state.repoId)
      : this.resetState()
  }

  isValidFile = ({ name, type, size }) => {
    // Regex for proper file/mime types
    const allowedFileExt = /^jpeg$|^jpg$|^png$|^gif$/gi
    const allowedMimeTypes = /^image\/jpeg$|^image\/jpg$|^image\/png$|^image\/gif$/gi
    // Test for correct file/mime types
    const isCorrectFileExt = allowedFileExt.test(this.getFileExtension(name))
    const isCorrectMimeType = allowedMimeTypes.test(type)
    const isCorrectFileSize = size < 250000
    // Return boolean
    return isCorrectFileExt && isCorrectMimeType && isCorrectFileSize
  }

  getFileExtension = (fileName) => {
    var fileNameArray = fileName.split('.')
    var fileExtension = fileNameArray[fileNameArray.length - 1]
    return fileExtension
  }

  sendPostRequest = () => {
    const url = `/api/user/photo/${this.state.repoId}`
    console.log(`sending post request to: ${url}`)
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
    if (this.isValidFile(e.target.files[0])) {
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
    // console.log('uploadimageProp\n', this.props)
    // console.log('uploadimageState\n', this.state)
    return (
      <div>
        <form onSubmit={this.handleUploadImage}>
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

const mapStateToProps = state => {
  return { userInfo: state.userInfo };
};

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ editRepos }, dispatch);
// }

export default connect(mapStateToProps)(UploadImage);
