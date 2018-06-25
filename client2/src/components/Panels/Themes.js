import React from 'react';

const themesTitleFontStyle = {
  fontFamily: 'Roboto-Regular',
  fontSize: '36px',
  letterSpacing: '-0.08px'
}

const Themes = () => (
  <div className="row">
    <div className="col-12">
      <h2 className='display-4 mb-4' style={ themesTitleFontStyle } >Beautiful Themes</h2>
    </div>
    <div className="col-12">
      <img
        className='img-fluid'
        src={require("../../images/themes.png")}
        alt="Theme templates"
      />
    </div>
  </div>
);

export default Themes;
