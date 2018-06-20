// import React from "react";
import { connect } from "react-redux";
import React, { Component } from 'react';
import { fetchUserInfo } from '../../actions/index';
import { bindActionCreators } from "redux";
import "./DashboardEditUser.css";

export class DashboardEditUser extends Component {

  componentDidMount(){
    this.props.fetchUserInfo();
  }
  
  render() {
    return (
    <div className='container editPinForm'>
      <form>
        <div className='form-group'>
          <label>Name</label>
          <input type='text' className='form-control' placeholder={this.props.userInfo.displayName} ></input>
          <label>Email</label>          
          <input type='text' className='form-control' placeholder={this.props.userInfo.email}></input>
          <label>Bio</label>          
          <input type='text' className='form-control'placeholder={this.props.userInfo.bio}></input>        
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardEditUser);
