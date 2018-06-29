import React from 'react';

const LogoutNavbar = () => (
  <li
    className='nav-item'
  >
    <a
      href="/api/auth/logout"
      className='nav-link'
    >
      Logout
    </a>
  </li>
);

export default LogoutNavbar;
