import React from "react";
import "./DashboardEditUser.css";
import { connect } from "react-redux";
import {initialState} from '../../reducers/index'


const mapStateToProps = state => {
  return { userInfo: state.userInfo };
};

const DashboardEditUser = ({userInfo})  => {
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

const UserInfo = connect(mapStateToProps)(DashboardEditUser);

export default UserInfo;

// import React from "react";
// import "./DashboardEditUser.css";
// import { connect } from "react-redux";

// const mapStateToProps = state => {
//   return ({ userInfo: state.userInfo });
// };

// const ConnectedUserInfo = ({ userInfo }) => (
//   <ul className="list-group list-group-flush">
//     {userInfo.map(el => (
//       <li className="list-group-item" key={el.id}>
//         {el.name}
//       </li>
//     ))}
//   </ul>
// );

// const UserInfo = connect(mapStateToProps)(ConnectedUserInfo);

// export default UserInfo;

