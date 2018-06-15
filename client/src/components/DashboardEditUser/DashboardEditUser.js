import React from "react";
import "./DashboardEditUser.css";


export const DashboardEditUser = ({userInfo})  => {
  // const {id, title, image, description, githubLink, deployedLink} = pinnedRepos;
  // const {pins} = state;
  const {name, email, bio, userImage} = userInfo;

  return (
    <div className='container editPinForm'>
      <form>
        <div className='form-group'>
          <label>Name</label>
          <input type='text' className='form-control' placeholder={name}></input>
          <label>Email</label>          
          <input type='text' className='form-control' placeholder={email}></input>
          <label>Bio</label>          
          <input type='text' className='form-control' placeholder={bio}></input>        
        </div>
      </form>
    </div> 
  )
}

