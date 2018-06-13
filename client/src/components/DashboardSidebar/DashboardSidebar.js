import React from "react";
import "./DashboardSidebar.css";

export const DashboardSidebar = props => (
  <div className="sidenav">
    <div className='container'>
      <a href="/dashboard/templates" className='sidenavText'>Templates</a><hr />
      <a href="/dashboard/myportfolio" className='sidenavText'>My Portfolio</a><hr />
      <a href="#" className='sidenavText'>Git Pinned Repos</a><hr />
      <a href="/dashboard/edit" className='sidenavText'>Edit Portfolio</a><hr />
      <a href="/" className='sidenavText'>Logout</a><hr />
    </div>
  </div>
);



