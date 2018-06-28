import React from 'react';

const themesTitleFontStyle = {
  fontFamily: 'Roboto-Regular',
  letterSpacing: '-0.08px',
  color: '#4a4a4a'
}

const Themes = () => (
  <div className="row">
    <div className="col-12">
      <h2 className='d-lg-none display-4 mb-5' style={themesTitleFontStyle} >Beautiful Themes</h2>
      <h2 className='d-none d-lg-block display-4 mb-5' style={ themesTitleFontStyle } >Beautiful Portfolio Themes</h2>
    </div>
    <div className="col-12 pt-5">
      <img
        className='img-fluid'
        src={require("../../images/themes.png")}
        alt="Theme templates"
      />
    </div>
  </div>
);

export default Themes;
