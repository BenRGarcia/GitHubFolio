import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const styleSidebar = {
  backgroundColor: '#28314B',
  position: 'fixed',
  top: '0px',
  bottom: '0px',
  left: '0px',
  overflowY: 'scroll'
};

const DashboardSidebar = ({ routes }) => (
  <div className='col-lg-3 col-xl-2 pl-0' style={styleSidebar}>
    <div className='d-flex justify-content-center my-5 py-4'>
      <img
        className='img-fluid'
        src={require('../../images/githubfolio-gradient.png')}
        alt="GitHubFolio logo"
      />
    </div>
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
                className='nav-link'
                activeClassName='active'
              >
                <i
                  className={icon + ' mr-2'}
                ></i>
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
