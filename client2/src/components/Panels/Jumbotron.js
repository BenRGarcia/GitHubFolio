import React from 'react';
import { LoginWithGitHub } from '../'

const heroFontStyle = {
  fontFamily: 'Roboto',
  fontSize: '60px',
  letterSpacing: '-0.08px'
}

const pHeroFontStyle = {
  /* Create a beautiful p: */
  fontFamily: 'Roboto',
  fontSize: '26px',
  color: '#FFFFFF',
  letterSpacing: '-0.04px',
  textAlign: 'center',
  lineHeight: '1.2'
}

const Jumbotron = () => (
  <div className="jumbotron jumbotron-fluid mb-0 bg-transparent">
    <div className="container text-white">
      <h1 className="d-lg-none display-4 mb-2" style={ heroFontStyle } >
        <span style={{ fontFamily: 'lora', fontWeight: 'bold' }}>
          GitHubFolio
        </span>
      </h1>
      <h1 className="d-none d-lg-block display-4 mb-2" style={heroFontStyle} >
        Introducing&nbsp;
        <span style={{ fontFamily: 'lora', fontWeight: 'bold' }}>
          GitHubFolio
        </span>
      </h1>
      <p className="lead pb-4 mb-5" style={ pHeroFontStyle } >
        Create a beautiful portfolio to showcase your best work.
      </p>
      <LoginWithGitHub />
    </div>
  </div>
);

export default Jumbotron;
