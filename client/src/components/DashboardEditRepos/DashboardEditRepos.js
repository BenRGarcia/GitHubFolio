import React from "react";
import { connect } from "react-redux";
import "./DashboardEditRepos.css";

const mapStateToProps = state => {
  return { pinnedRepos: state.pinnedRepos };
};


const DashboardEditRepos = ({pinnedRepos})  => {
  const {id, title, image, description, githubLink, deployedLink} = pinnedRepos;

  const editPinnedRepos = pinnedRepos.map(repo => (
    <div className='container editPinForm'>
      <form>
        <div className='form-group'>
          <label>Project Name</label>
          <input type='text' className='form-control' placeholder={repo.title}></input>
          <label>Description</label>
          <input type='text' className='form-control' placeholder={repo.description}></input>
          <label>GitGub Link</label>
          <input type='text' className='form-control' placeholder={repo.githubLink}></input>
          <label>Deployed Link</label>
          <input type='text' className='form-control' placeholder={repo.deployedLink}></input>
        </div>
      </form>
    </div>
  ))

  return (
    <div>
    {editPinnedRepos} 
    <div className='container'>
      <button type='submit'>submit</button>
    </div>
    </div>
  )
}

const PinnedRepos = connect(mapStateToProps)(DashboardEditRepos);

export default PinnedRepos;


