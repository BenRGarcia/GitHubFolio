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
  textAlign: 'left',
  float: 'left'
}

const outerDiv = {
  justifyContent: 'center'
}

const ListInfo = () => (
 <div> 
  <div className="row text-white center-text" style={outerDiv}>
    <div className="col-12">
      <h2 className='display-4 mb-4' style={ listTitleFontStyle }>Everything you need for your portfolio</h2>
    </div>
  </div>

  <div className = 'container' style= {listFontStyle}> 
    <div className = 'row'>
      <div className = 'col-2'>
        <p><i className='fas fa-code-branch mx-1 mr-3'></i></p>
      </div>
      <div className = 'col-10'>
        <p>Retrieve your pinned repositories from GitHub.</p>
      </div>
    </div>
    <div className = 'row'>
      <div className = 'col-2'>
        <p><i className='fas fa-file-alt mx-1 mr-3'></i></p>
      </div>
      <div className = 'col-10'>
        <p>Choose a beautiful template and preview your portfolio.</p>
      </div>
    </div>
    <div className = 'row'>
      <div className = 'col-2'>
        <p><i className='far fa-edit mx-1 mr-3'></i></p>
      </div>
      <div className = 'col-10'>
        <p>Edit your personal information and mission.</p>
      </div>
    </div>
    <div className = 'row'>
      <div className = 'col-2'>
        <p><i className='fas fa-wrench mx-1 mr-3'></i></p>
      </div>
      <div className = 'col-10'>
        <p>Edit your repository information and upload photos.</p>
      </div>
    </div>
    <div className = 'row'>
      <div className = 'col-2'>
        <p><i className='fas fa-th-large mx-1 mr-3'></i></p>
      </div>
      <div className = 'col-10'>
        <p>Receive a public URL and download the source code.</p>
      </div>
    </div>
  </div>
</div>
);

export default ListInfo;




