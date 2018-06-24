import React from 'react';
import { LoginWithGitHub } from '../'

const heroFontStyle = {
  fontFamily: 'Roboto-Regular',
  fontSize: '36px',
  letterSpacing: '-0.08px'
}

const pHeroFontStyle = {
  /* Create a beautiful p: */
  fontFamily: 'Roboto-Regular',
  fontSize: '18px',
  color: '#FFFFFF',
  letterSpacing: '-0.04px',
  textAlign: 'center',
}

const Jumbotron = () => (
  <div className="jumbotron jumbotron-fluid mb-0 bg-transparent">
    <div className="container text-white">
      <h1 className="display-4 mb-2" style={ heroFontStyle } >
        Introducing GitHubFolio
      </h1>
      <p className="lead pb-4" style={ pHeroFontStyle } >
        Create a beautiful portolio to showcase your best work.
      </p>
      <LoginWithGitHub />
    </div>
  </div>
);

export default Jumbotron;
