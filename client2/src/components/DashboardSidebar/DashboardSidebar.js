import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';

const DashboardSidebar = ({ routes }) => (
  <div>
    <h1>DashboardSidebar.js</h1>
    <h2>logo</h2>
    <ul className="nav flex-column">
      {
        routes
        &&
        routes.map(route => {
          const { path, label } = route;
          return (
            <li className="nav-item" key={label}>
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
);

DashboardSidebar.propTypes = {
  routes: PropTypes.array.isRequired
};

export default DashboardSidebar
