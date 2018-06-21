import { connect } from "react-redux";
import React, { Component } from 'react';
import { fetchUserInfo, editUserInfo } from '../../actions/index';
import { bindActionCreators } from "redux";
import "./DashboardEditRepos.css";


export class DashboardEditRepos extends Component {

  state = {
    name: this.props.userInfo.pinnedRepositories.name,
    description: this.props.userInfo.pinnedRepositories.name,
    url: this.props.userInfo.pinnedRepositories.name,
    homepageUrl: this.props.userInfo.pinnedRepositories.name
  }
 
  componentWillMount(){
    this.props.fetchUserInfo();
    }

  handleSubmit = (e) => {
      e.preventDefault()
      this.props.editUserInfo(this.state); 
      console.log("submit is being read")
    }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }
  
  repoMap(){
    return (
    <div>
      {
        this.props.userInfo
        &&
        this.props.userInfo.pinnedRepositories
        &&
        typeof this.props.userInfo.pinnedRepositories === 'array'
        &&
        <div>
          {
            this.props.userInfo.pinnedRepositories.map(repo =>   
              <div className='form-group' key ={repo._id}>
                <label>Project Name</label>
                  <input
                    value = {this.state.name}
                    onChange={this.handleChange}
                    type='text' 
                    className='form-control' 
                    placeholder={repo.name}
                   >
                  </input>
                <label>Description</label>
                  <input 
                    value = {this.state.description}
                    onChange={this.handleChange}
                    type='text' 
                    className='form-control' 
                    placeholder={repo.description}>
                  </input>
                <label>GitHub Link</label>
                  <input 
                    value = {this.state.url}
                    onChange={this.handleChange}
                    type='text' 
                    className='form-control' 
                    placeholder={repo.url}>
                  </input>
                <label>Deployed Link</label>
                  <input 
                    value = {this.state.homepageUrl}
                    onChange={this.handleChange}
                    type='text' 
                    className='form-control' 
                    placeholder={repo.homepageUrl}>
                  </input>
              </div>
             )
          }
        </div>
        }
    </div>
    )
  }
  
  render() {
    return (
      <div className='container editPinForm'>
        <form>
          {this.repoMap()} 
          <div className='container'>
            <button onClick={this.handleSubmit} type='submit'>submit</button>
          </div>
        </form>
      </div>   
    )
  }
}

const mapStateToProps = state => {
  return { userInfo: state.userInfo };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchUserInfo, editUserInfo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardEditRepos);


/* 
backend restricts file size to 250,000 bytes = 250 kilobytes = 0.25 megabytes
First naive thoughts of an image upload form:
<form action='/api/user/photo' method='POST' enctype='multipart/form-data'>
  <div className='input-group mb-3'>
    <div className='custom-file'>
      <input type='file' name='repoImage' className='custom-file-input' id={`repo-${repo._id}`} />
      <label className='custom-file-label' htmlFor={`repo-${repo._id}`}>Choose Image</label>
    </div>
    <div className='input-group-append'>
      <button type='submit' className='input-group-text'>Upload</button>
    </div>
  </div>
</form>
*/
