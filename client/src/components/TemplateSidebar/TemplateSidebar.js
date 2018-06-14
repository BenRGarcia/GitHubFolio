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
      <a href="/dashboard" className='sidenavText'><i className="fas fa-caret-left arrowPad"></i>Go Back</a><hr />                
      <a href="/" className='sidenavText'>Logout</a><hr />
    </div>
  </div>
);
