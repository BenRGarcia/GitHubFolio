import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LogoSidebar, LogoutSidebar } from '../';

const styleSidebar = {
  backgroundColor: '#28314B',
  position: 'fixed',
  top: '0px',
  bottom: '0px',
  left: '0px',
  overflowY: 'scroll'
};

const DashboardSidebar = ({ routes }) => (
  <div className='col-lg-3 col-xl-2 px-0' style={styleSidebar}>
    <LogoSidebar />
    <ul className="nav flex-column">
      {
        routes
        &&
        routes.map(route => {
          const { path, label, icon } = route;
          return (
            <li
              className="nav-item my-2"
              key={label}
            >
              <NavLink
                to={path}
                className='nav-link ml-2'
                activeClassName='active'
              >
                <i
                  className={icon + ' mx-1'}
                ></i>
                {label}
              </NavLink>
            </li>
          );
        })
      }
      <LogoutSidebar />
    </ul>
  </div>
);

DashboardSidebar.propTypes = {
  routes: PropTypes.array.isRequired
};

export default DashboardSidebar
