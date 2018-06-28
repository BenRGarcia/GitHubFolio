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
      <p>Retrieve your pinned repositories from GitHub.</p>
      <p>Edit your personal information and mission.</p>
      <p>Edit your repository information and description for your portfolio.</p>
      <p>Upload photos to accompany your repositories.</p>
      <p>Choose a beautiful template and preview your portfolio.</p>
      <p>Receive access to a public URL for your portfolio.</p>
      <p>Download a file of your portfolio code to edit.</p>
    </div>
  </div>
);

export default ListInfo;
