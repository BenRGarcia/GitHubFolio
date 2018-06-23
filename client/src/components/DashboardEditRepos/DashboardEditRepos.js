import { connect } from "react-redux";
import React, { Component } from 'react';
import {editRepos } from '../../actions/index';
import { bindActionCreators } from "redux";
import "./DashboardEditRepos.css";


export class DashboardEditRepos extends Component {

  state = {
    repositories: []
  }

  initiliazed= false;
 
  componentWillReceiveProps(nextProps){
    if(!this.initialized){
      this.initialized = true;
      const { repositories } = nextProps.userInfo
      console.log("======================")
      this.setState({
        repositories
      })
    }
  }

  handleSubmit = (e) => {
      e.preventDefault()
      console.log(`user just clicked 'save repo data' IN COMPONENT and this is the current state:'`, this.state.repositories)
      this.props.editRepos(this.state);
    }

  handleChange = (event, _id) => {
    const { name, value } = event.target;
    const nextPinnedRepos = this.state.repositories.map(repo => {
      if (_id === repo._id) {
        const newData = { [name]: value }
        const nextRepo = { ...repo, ...newData }
        return nextRepo
      }
      return repo
    })
    this.setState({
      repositories: nextPinnedRepos
    });
  }
  
  repoMap(){
    return (
    // <div>
    //   {
    //     this.props.userInfo
    //     &&
    //     this.props.userInfo.repositories
    //     &&
    //     typeof this.props.userInfo.repositories === 'array'
    //     &&
    //     <div>
    //       {
            this.props.userInfo.repositories.map(repo =>   
              <div className='form-group' key ={repo._id}>
                <label>Project Name</label>
                  <input
                    type='text'
                    name= 'name'                   
                    value = {this.state.name}
                    // onChange={(e)=>this.handleChange(repo._id)}
                    onChange={(e)=>this.handleChange(e, repo._id)}                    
                    className='form-control' 
                    placeholder={repo.name}
                   >
                  </input>
                <label>Description</label>
                  <input 
                    type='text'
                    name= 'description' 
                    value = {this.state.description}
                    onChange={this.handleChange}
                    className='form-control' 
                    placeholder={repo.description}>
                  </input>
                <label>GitHub Link</label>
                  <input 
                    type='text'
                    name= 'repositoryUrl' 
                    value = {this.state.repositoryUrl}
                    onChange={this.handleChange}
                    className='form-control' 
                    placeholder={repo.repositoryUrl}>
                  </input>
                <label>Deployed Link</label>
                  <input 
                    type='text'
                    name= 'deployedUrl' 
                    value = {this.state.deployedUrl}
                    onChange={this.handleChange}
                    className='form-control' 
                    placeholder={repo.deployedUrl}>
                  </input>
              </div>
             )
    //       }
    //     </div>
    //     }
    // </div>
    )
  }
  
  render() {
    console.log(this.props.userInfo)
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
  return bindActionCreators({ editRepos }, dispatch);
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
