import React from "react";
import "./DashboardSidebar.css";
import { NavLink } from 'react-router-dom'

export const DashboardSidebar = props => (
  <div className="sidenav">
    <div>
      <img className='githubfoliologo'src='/images/githubfolio-gradient.png' alt='thumbnail logo'/>
      
      <ul className="ulNone">
        <li>
          <div className={ window.location.pathname === "/dashboard" ? "leftBorder": "d-none" }>
          </div>
          <NavLink exact to="/dashboard" className="sidenavText" activeClassName="active"><i className="fas fa-code-branch pr-3"></i>Git Pinned Repos</NavLink>
        </li>
        <li>
          <div className={ window.location.pathname === "/dashboard/template" ? "leftBorder": "d-none" }>
          </div>
          <NavLink exact to="/dashboard/template" className="sidenavText" activeClassName="active"><i className="fas fa-archive pr-3"></i>Templates</NavLink>
        </li>
        <li>
          <div className={ window.location.pathname === "/dashboard/user" ? "leftBorder": "d-none" }>
          </div>
          <NavLink exact to="/dashboard/user" className="sidenavText" activeClassName="active"><i className="far fa-edit pr-3"></i>Edit User Info</NavLink>
        </li>
        <li>
          <div className={ window.location.pathname === "/dashboard/repos" ? "leftBorder": "d-none" }>
          </div>
          <NavLink exact to="/dashboard/repos" className="sidenavText" activeClassName="active"><i className="fas fa-user-edit pr-3"></i>Edit Repo Info</NavLink>
        </li>
        <li>
          <div className={ window.location.pathname === "/dashboard/preview" ? "leftBorder": "d-none" }>
          </div>
          <NavLink exact to="/dashboard/preview" className="sidenavText" activeClassName="active"><i className="fas fa-eye pr-3"></i>Preview Portfolio</NavLink>
        </li>
        <li>
          <div className={ window.location.pathname === "/dashboard/logout" ? "leftBorder": "d-none" }>
          </div>
          <NavLink exact to="/api/auth/logout" className="sidenavText" activeClassName="active">Logout</NavLink>
        </li>
      </ul>

    </div>
  </div>
);



