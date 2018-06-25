import React from 'react';

const logoSizing = {
width: '50px',
height: 'auto',
display: 'block',
margin: 'auto'
}

const LogoSidebar = () => (
  <div className='d-flex justify-content-center my-5 py-4'>
    <img
      className='img-fluid'
      style={ logoSizing }
      src={require('../../images/githubfolio-gradient.png')}
      alt="GitHubFolio logo"
    />
  </div>
);

export default LogoSidebar;