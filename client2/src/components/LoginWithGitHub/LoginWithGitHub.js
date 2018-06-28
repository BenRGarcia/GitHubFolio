import React from 'react';
require('./LoginWithGitHub.css')

const styleGradientButton = {
  backgroundImage: 'linear-gradient(-180deg, #F25059 0%, #7135C6 100%)',
  boxShadow: '0 0 8px 4px rgba(255,255,255,0.7)',
  borderRadius: '8px',
  fontFamily: 'Roboto-Bold',
  fontSize: '24px',
  color: '#FFFFFF',
  letterSpacing: '0',
  textAlign: 'center',
}

const LoginWithGitHub = () => (
  <a
    href='https://github.com/login/oauth/authorize?client_id=d704cc5bc30e737c2c31&scope=read:user'
    className='github-login-button py-2 px-3'
    style={styleGradientButton}
  >
  <i
    className="fab fa-github pr-3 fa-md"
  ></i>
    Sign in with GitHub
  </a>
);

export default LoginWithGitHub;
