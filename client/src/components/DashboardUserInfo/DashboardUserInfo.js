import React from "react";
import "./DashboardUserInfo.css";

export const DashboardUserInfo = ({userInfo}) => {
  const {name, email, bio} = userInfo;
  return (
    <div className="userCard">

      <div className="userContent">
        <ul>
          <li>
            <strong>{name}</strong> 
          </li>
          <li>
            <strong> {email}</strong>
          </li>
          <li>
            <strong>{bio}</strong>
          </li>
        </ul>
      </div>
    </div>
  );
} 