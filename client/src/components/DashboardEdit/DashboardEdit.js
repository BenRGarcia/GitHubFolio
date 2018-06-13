import React from "react";
import "./DashboardEdit.css";


export const DashboardEdit = ({userInfo, pinnedRepos})  => {
  // const {id, title, image, description, githubLink, deployedLink} = pinnedRepos;
  // const {pins} = state;
  const {name, email, bio, userImage} = userInfo;
  const {id, title, image, description, githubLink, deployedLink} = pinnedRepos;

  const editPinnedRepos = pinnedRepos.map(repo => (
    <div>
      <form>
        <div className='form-group'>
          <label>Project Name</label>
          <input type='text' className='form-control' placeholder={repo.title}></input>
        </div>
      </form>
    </div>
  ))

  const editName = (<h1>TESTING</h1>);
  
  
  
  return (
    editName,
    editPinnedRepos
  )
}


