import React from "react";
import { connect } from "react-redux";
import "./DashboardEditUser.css";


const mapStateToProps = state => {
  return { userInfo: state.userInfo };
};

const DashboardEditUser = ({userInfo})  => {
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

const UserInfo = connect(mapStateToProps)(DashboardEditUser);

export default UserInfo;
