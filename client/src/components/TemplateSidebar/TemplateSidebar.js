import React from "react";
import "./TemplateSidebar.css";

export const TemplateSidebar = props => (
  <div className="sidenav">
    <div className='container'>
      <img className='githubfoliologo'src='/images/githubfoliologo.png'/>
      <a href="/dashboard/templates/minimalist" className='sidenavText'>Minimalist<i className="fas fa-caret-right arrowPad"></i></a><hr />
      <a href="/dashboard/templates/stylized" className='sidenavText'>Stylized<i className="fas fa-caret-right arrowPad"></i></a><hr />
      <a href="#" className='sidenavText'>Color 1<i className="fas fa-caret-right arrowPad"></i></a><hr />
      <a href="#" className='sidenavText'>Color 2<i className="fas fa-caret-right arrowPad"></i></a><hr />      
      <a href="/" className='btn btn-secondary center-block logout'>Logout</a>
    </div>
  </div>
);
