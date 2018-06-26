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
  paddingTop: '15px',
  height: '50px',
  width: '100%',
  whiteSpace: 'nowrap',
  color: '#979799',
}

const leftBorder = {
  backgroundImage: 'linear-gradient(-180deg, #9A48E3 0%, #FB697B 100%)',
  width: '4px',
  height: '50px',
  maxWidth: '100%',
  float: 'left',
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
            {window.location.pathname === path
              ? <div style={leftBorder}></div> 
              : <div style={{display: 'none'}}></div>
            }
              <NavLink
                exact to={path}
                className='nav-link sidenavText'
                style={styleLinks}
                activeClassName='active'
              >
                <i
                  className={icon + ' mx-1 mr-3'}
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
