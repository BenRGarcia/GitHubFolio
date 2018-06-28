import React from 'react';

const footerGradient = {
  backgroundImage: 'linear-gradient(-180deg, #D44972 0%, #9013FE 100%)'
}

const Footer = () => (
  <div style={ footerGradient } >
    <div className="container">
      <div className="row">
        <div className="col">
          <footer className='p-4'>
            <span className='text-white'>
              &copy; GitHubFolio 2018
            </span>
          </footer>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
