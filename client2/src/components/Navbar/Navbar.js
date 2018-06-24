import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ routes }) => (
  <nav className="navbar navbar-expand-md navbar-dark p-3">
    <span className="navbar-brand">
      GitHubFolio
    </span>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarNavDropdown"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div
      className="collapse navbar-collapse"
      id="navbarNavDropdown"
    >
      <ul className="ml-auto navbar-nav text-right">
        {
          routes
          &&
          routes.map(route => {
            const { path, label } = route
            return (
              <li
                className='nav-item'
                key={label}
              >
                <NavLink
                  to={path}
                  className='nav-link'
                  activeClassName='active'
                >
                  {label}
                </NavLink>
              </li>
            );
          })
        }
      </ul>
    </div>
  </nav>
);


export default Navbar
