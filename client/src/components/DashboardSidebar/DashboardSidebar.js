import React from "react";
import "./DashboardSidebar.css";

export const DashboardSidebar = props => (
  <div className="sidenav">
    <div className='container'>
      <img className='githubfoliologo'src='/images/githubfoliologo.png'/>
      <a href="/dashboard" className='sidenavText'>Git Pinned Repos<i className="fas fa-caret-right arrowPad"></i></a><hr />      
      <a href="/dashboard/template" className='sidenavText'>Templates<i className="fas fa-caret-right arrowPad"></i></a><hr />
      <a href="/dashboard/user" className='sidenavText'>Edit User Info<i className="fas fa-caret-right arrowPad"></i></a><hr />
      <a href="/dashboard/repos" className='sidenavText'>Edit Repo Info<i className="fas fa-caret-right arrowPad"></i></a><hr />      
      <a href="/dashboard/preview" className='sidenavText'>Preview Portfolio<i className="fas fa-caret-right arrowPad"></i></a><hr />
      <a href="/" className='sidenavText'>Logout</a>
    </div>
  </div>
);



