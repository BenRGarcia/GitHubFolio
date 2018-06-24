import React from 'react';

const Themes = () => (
  <div className="row">
    <div className="col-12">
      <h2 className='display-4 mb-3'>Beautiful Themes</h2>
    </div>
    <div className="col-12">
      <img className='img-fluid' src={require("../../images/themes.png")} alt="Theme templates" />
    </div>
  </div>
);

export default Themes;