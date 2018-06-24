import React from 'react';

const styleGradientButton = {
  backgroundImage: 'linear-gradient(-180deg, #F25059 0%, #7135C6 100%)',
  boxShadow: '0 0 10px 5px rgba(255,255,255,0.93)',
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
    className='py-2 px-3'
    style={styleGradientButton}
  >
  <i
    className="fab fa-github pr-3 fa-lg"
  ></i>
    Sign in with GitHub
  </a>
);

export default LoginWithGitHub;
