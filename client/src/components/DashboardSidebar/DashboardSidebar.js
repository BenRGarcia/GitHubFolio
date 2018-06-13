import React from "react";
import "./DashboardSidebar.css";

export const DashboardSidebar = props => (
  <div className="sidenav">
    <a href="#">Templates</a>
    <a href="#">My Portfolio</a>
    <a href="#">Git Pinned Repos</a>
    <a href="/dashboard/edit">Edit Portfolio</a>
    <a href="#">Logout</a>  
  </div>
);



