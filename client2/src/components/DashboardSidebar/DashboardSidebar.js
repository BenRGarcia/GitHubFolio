import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LogoSidebar, LogoutSidebar } from '../';
import "./DashboardSidebar.css";

const styleSidebar = {
  backgroundColor: '#28314B',
  position: 'fixed',
  top: '0px',
  bottom: '0px',
  left: '0px',
  overflowY: 'scroll',
};

const styleLinks = {
  fontFamily: 'Roboto sans-serif',
  fontSize: '18px',
  color: '#979799',
  paddingTop: '15px',
  paddingLeft: '25px',
  height: '50px',
  width: '100%',
  whiteSpace: 'nowrap',
}

const DashboardSidebar = ({ routes }) => (
  <div className='col-md-3 col-lg-3 col-xl-2 px-0' style={styleSidebar}>
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
                exact to={path}
                className='nav-link ml-2 sidenavText' 
                activeClassName='active'
                style={styleLinks}
              >
                <i
                  className={icon + ' mx-1 mr-4'}
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
