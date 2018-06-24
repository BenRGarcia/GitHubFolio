// import React from "react";
import { connect } from "react-redux";
import React, { Component } from 'react';
import { fetchUserInfo, editUserInfo } from '../../actions/index';
import { bindActionCreators } from "redux";
import "./DashboardEditUser.css";

export class DashboardEditUser extends Component {

  state = {
    profileName: "" ,
    email: " ",
    bio: " "
  }
  
  initialized = false;

  componentWillReceiveProps(nextProps){
    if(!this.initialized){
      this.initialized = true;
      const {email, profileName, bio} = nextProps.userInfo
      this.setState({
        profileName,
        email,
        bio
      })
    }
  }

  handleSubmit = (e) => {
      e.preventDefault()
      this.props.editUserInfo(this.state).then(response => {console.log(response)}) 
      // console.log("submit is being read")
      // this.props.fetchUserInfo();
    }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    }
  
  render() {
    console.log(this.props)
    return (
    <div className='container editPinForm'>
      <form>
        <div className='form-group'>
          <label>Name</label>
            <input 
              type='text' 
              name = 'profileName'
              value = {this.state.profileName}
              onChange={this.handleChange}
              // onChange={(e)=>this.handleChange(repo._id)}              
              className='form-control' 
              placeholder={this.props.userInfo.profileName}>
            </input>
          <label>Email</label>          
            <input 
              type='text' 
              name= 'email'
              value = {this.state.email}
              onChange={this.handleChange}
              className='form-control' 
              placeholder={this.props.userInfo.email}>
            </input>
          <label>Bio</label>          
          <input 
            type='text' 
            name='bio'
            value = {this.state.bio}
            onChange={this.handleChange}
            className='form-control'
            placeholder={this.props.userInfo.bio}>
          </input>        
        </div>
        <button 
          // disabled={!(this.state.name || this.state.bio || this.state.email)}
          onClick={this.handleSubmit}
          type='submit' 
          >
          SAVE
        </button>
      </form>
    </div> 
    )
  }
}

const mapStateToProps = state => {
  return { userInfo: state.userInfo };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchUserInfo, editUserInfo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardEditUser);

// export const DashboardEditUser = props => {

//     return (
//       <div>
//         {
//           props.userInfo
//           &&
//           props.userInfo.pinnedRepositories
//           &&
//           typeof props.userInfo.pinnedRepositories === 'array'
//           &&
//           <div>
//             {
//               props.userInfo.pinnedRepositories.map(repo => {
//                 <h1>{repo.name}</h1>
//               })
//             }
//           </div>
//         }
//       </div>
//     );

// };
