import React from "react";
import "./DashboardSidebar.css";

export const DashboardSidebar = props => (
  <div className="sidenav">
    <div className='container'>
      <img className='githubfoliologo'src='/images/githubfoliologo.png'/>
      <a href="/dashboard/templates" className='sidenavText'>Templates<i className="fas fa-caret-right arrowPad"></i></a><hr />
      <a href="/dashboard/myportfolio" className='sidenavText'>My Portfolio<i className="fas fa-caret-right arrowPad"></i></a><hr />
      <a href="#" className='sidenavText'>Git Pinned Repos<i className="fas fa-caret-right arrowPad"></i></a><hr />
      <a href="/dashboard/edit" className='sidenavText'>Edit Portfolio<i className="fas fa-caret-right arrowPad"></i></a><hr />
      <a href="/" className='sidenavText'>Logout</a>
    </div>
  </div>
);



