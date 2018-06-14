import React from "react";
import "./DashboardEditSidebar.css";

export const DashboardEditSidebar = props => (
  <div className="sidenav">
  <div className='container'>
    <img className='githubfoliologo'src='/images/githubfoliologo.png'/>
    <a href="#" className='sidenavText'>Text<i className="fas fa-caret-right arrowPad"></i></a><hr />
    <a href="#" className='sidenavText'>Thumbnails<i className="fas fa-caret-right arrowPad"></i></a><hr />
    <a href="/dashboard" className='sidenavText'>Go Back<i className="fas fa-caret-right arrowPad"></i></a><hr />
    <a href="/" className='sidenavText'>Logout</a>
  </div>
</div>
);
