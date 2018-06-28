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
  display: 'inline-block',
  textAlign: 'left'
}

const outerDiv = {
  justifyContent: 'center'

}



const ListInfo = () => (
  <div className="row text-white center-text" style={outerDiv}>
    <div className="col-12">
      <h2 className='display-4 mb-4' style={ listTitleFontStyle }>Everything you need for your portfolio</h2>
    </div>
    <div style={ listFontStyle }>
      <p><i className='fas fa-code-branch mx-1 mr-3'></i>Retrieve your pinned repositories from GitHub.</p>
      <p><i className='fas fa-file-alt mx-1 mr-3'></i>Choose a beautiful template and preview your portfolio.</p>
      <p><i className='far fa-edit mx-1 mr-3'></i>Edit your personal information and mission.</p>
      <p><i className='fas fa-wrench mx-1 mr-3'></i>Edit your repository information and upload photos.</p>
      <p><i className='fas fa-th-large mx-1 mr-3'></i>Receive a public URL and download the source code.</p>
    </div>
  </div>
);

export default ListInfo;
