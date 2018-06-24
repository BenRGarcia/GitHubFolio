import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Navbar = ({ routes, style }) => (
  <div
    className='fixed-top'
    style={style}
  >
    <div className="container">
      <nav
        className="navbar navbar-expand-lg p-2 navbar-dark"
      >
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
                const { path, label, disabled } = route
                return (
                  <li
                    className='nav-item'
                    key={label}
                  >
                    <NavLink
                      to={path}
                      className='nav-link'
                      activeClassName='active'
                      onClick={e => { if (disabled) e.preventDefault() }}
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
    </div>
  </div>
);

Navbar.propTypes = {
  style: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired
};

export default Navbar
