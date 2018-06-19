// import React from "react";
import { connect } from "react-redux";
import "./DashboardEditUser.css";
import React, { Component } from 'react'
import { fetchUserInfo } from '../../actions/index'


export class DashboardEditUser extends Component {

  componentDidMount(){
    this.props.fetchUserInfo();
  }
  

  render() {
    // const {name, email, bio, userImage} = userInfo;
    
    return (
      <div className='container editPinForm'>
      <form>
        <div className='form-group'>
          <label>Name</label>
          <input type='text' className='form-control' ></input>
          <label>Email</label>          
          <input type='text' className='form-control' ></input>
          <label>Bio</label>          
          <input type='text' className='form-control'></input>        
        </div>
      </form>
    </div> 
    )
  }
}


const mapStateToProps = state => {
  return { userInfo: state.userInfo };
};

const EditUserInfo = connect(mapStateToProps, {fetchUserInfo})(DashboardEditUser);

export default EditUserInfo;