import React, { Component } from 'react';
import axios from 'axios';
import { PublicPortfolioExample } from './PublicPortfolioExample';

export class UploadImageExample extends Component {
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

  /****************************************
   * Fallback parameter used for testing  *
   * -> Delete fallback before production *
   ****************************************/
  handleChooseFile = (repoId = '5b30e7bb84bca80630e325dc', e) => {
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
    return (
      <div className='container'>
        <div className="jumbotron">
          <h1 className="display-4">Hello, Melissa!</h1>
          <p className="lead">This is an example of how to do a file upload &amp; POST request so users can save photos for each repo</p>
          <hr className="my-4" />
          <h2>Pointers</h2>
          <ul>
            <li>upload file has 'name' attribute set to value 'repoImage'</li>
            <li>backend restricts file size to 250,000 bytes/250 kilobytes/0.25 megabytes</li>
            <li>POST request has special config for the backend, see <code>handleUploadImage()</code></li>
          </ul>
        </div>
        {/* Start example */}
        <form onSubmit={this.handleUploadImage}>
          <div className='input-group mb-3'>
            <div className='custom-file'>
              <input onChange={e => this.handleChooseFile(this.props._id, e)} type='file' name='repoImage' className='custom-file-input'/>
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
        {/* End example */}
        <div>
          <PublicPortfolioExample 
            gitHubId='26657982'
          />
        </div>
      </div>
    );
  }
}
