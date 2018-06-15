import React from "react";
import "./DashboardEditRepos.css";


export const DashboardEditRepos = ({pinnedRepos})  => {
  // const {id, title, image, description, githubLink, deployedLink} = pinnedRepos;
  // const {pins} = state;
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


