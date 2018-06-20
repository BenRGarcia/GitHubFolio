import { connect } from "react-redux";
import React, { Component } from 'react';
import { fetchUserInfo } from '../../actions/index';
import { bindActionCreators } from "redux";
import "./DashboardEditRepos.css";


export class DashboardEditRepos extends Component {
 
  componentDidMount(){
    this.props.fetchUserInfo();
  }

  repoMap(){
    console.log(this.props.userInfo.pinnedRepositories)
    // return this.props.userInfo.pinnedRepositories.map(repo =>   
    //   <div className='form-group'>
    //     <label>Project Name</label>
    //       <input
    //         key={repo._id} 
    //         type='text' 
    //         className='form-control' 
    //         placeholder={repo.title}>
    //       </input>
    //     <label>Description</label>
    //       <input 
    //         key={repo._id}
    //         type='text' 
    //         className='form-control' 
    //         placeholder={repo.description}>
    //       </input>
    //     <label>GitGub Link</label>
    //       <input 
    //         key={repo._id}
    //         type='text' 
    //         className='form-control' 
    //         placeholder={repo.githubLink}>
    //       </input>
    //     <label>Deployed Link</label>
    //       <input 
    //         key={repo._id} 
    //         type='text' 
    //         className='form-control' 
    //         placeholder={repo.deployedLink}>
    //       </input>
    //   </div>
    // )
  }

  render() {
    return (
      <div className='container editPinForm'>
        <form>
          {this.repoMap()} 
          <div className='container'>
            <button type='submit'>submit</button>
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
  return bindActionCreators({ fetchUserInfo: fetchUserInfo }, dispatch);
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
