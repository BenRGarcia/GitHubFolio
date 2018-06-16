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


/* 
First naive thoughts of an image upload form:
<form action='/api/user/photo' method='POST' enctype='multipart/form-data'>
  <div className='input-group mb-3'>
    <div className='custom-file'>
      <input type='file' className='custom-file-input' id={`repo-${repo._id}`} />
      <label className='custom-file-label' htmlFor={`repo-${repo._id}`}>Choose Image</label>
    </div>
    <div className='input-group-append'>
      <button type='submit' className='input-group-text'>Upload</button>
    </div>
  </div>
</form>
*/
