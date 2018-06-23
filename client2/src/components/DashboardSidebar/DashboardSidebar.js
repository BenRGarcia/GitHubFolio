import React from 'react'
import { NavLink } from 'react-router-dom'

const DashboardSidebar = props => (
  <div>
    <h1>DashboardSidebar.js</h1>
    <p>logo</p>
    <ul className="nav flex-column">
      <li className="nav-item">
        <NavLink
          to='/dashboard/'
        />
        <a className="nav-link active" href="#">Get GitHub Repos</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
    </ul>
  </div>
)

export default DashboardSidebar
