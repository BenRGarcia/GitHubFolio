import React from "react";
import "./DashboardUserInfo.css";

export const DashboardUserInfo = props => (
  <div className="userCard">
    <div className="user-img-container">
      <img className= "userImage" alt={props.name} src={props.userImage} />
    </div>
    <div className="userContent">
      <ul>
        <li>
          <strong>{props.name}</strong> 
        </li>
        <li>
          <strong> {props.email}</strong>
        </li>
        <li>
          <strong>{props.bio}</strong>
        </li>
      </ul>
    </div>
  </div>
);