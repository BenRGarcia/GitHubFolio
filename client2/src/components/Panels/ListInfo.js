import React from 'react';

const listTitleFontStyle = {
  fontFamily: 'Roboto-Regular',
  fontSize: '36px',
  letterSpacing: '-0.08px'
}

const listFontStyle = {
  fontFamily: 'Oswald-Light',
  fontSize: '18px',
  color: '#D8D8D8',
  letterSpacing: '-0.05px',
  textAlign: 'left'
}



const ListInfo = () => (
  <div className="row text-white">
    <div className="col-12">
      <h2 className='display-4 mb-4' style={ listTitleFontStyle }>Everything you need for your portfolio</h2>
    </div>
    <div className="col-12 col-md-8 offset-md-2 text-left" style={ listFontStyle }>
      <p>Things that GitHub does to your things and so on...etc</p>
      <p>We have templates and such.... yeeeehaw</p>
      <p>This is a pencil writing on paper... you know what that means</p>
      <p>Pencil wrench cross... some kind of teacher mechanic cult</p>
    </div>
  </div>
);

export default ListInfo;
