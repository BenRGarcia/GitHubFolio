import React from 'react';

const Logout = () => (
  <li className="nav-item text-center mt-5">
    <a
      href="/api/auth/logout"
      className='nav-link'
    >
      <i
        className='fas fa-sign-out-alt mx-1'
      ></i>
      Logout
    </a>
  </li>
);

export default Logout;
