import React from 'react';

const logoutLinks = {
  fontFamily: 'Roboto sans-serif',
  fontSize: '18px',
  color: '#979799',
  paddingTop: '15px',
  paddingLeft: '25px',
  height: '50px',
  width: '100%',
}

const Logout = () => (
  <li className="nav-item my-2">
    <a
      href="/api/auth/logout"
      className='nav-link ml-2'
      style={ logoutLinks }
    >
      <i
        className='fas fa-sign-out-alt mx-1 mr-4'
      ></i>
      Logout
    </a>
  </li>
);

export default Logout;
