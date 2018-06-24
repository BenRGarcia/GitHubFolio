import React from 'react';

const LoginWithGitHub = () => (
  <a
    href='https://github.com/login/oauth/authorize?client_id=d704cc5bc30e737c2c31&scope=read:user'
    className='btn btn-outline-light py-2 px-3'
  >
    Sign in with GitHub
  </a>
);

export default LoginWithGitHub;