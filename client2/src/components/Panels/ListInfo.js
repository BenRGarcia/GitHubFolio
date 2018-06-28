import React from 'react';

const listTitleFontStyle = {
  fontFamily: 'Roboto-Regular',
  letterSpacing: '-0.08px'
}

const listFontStyle = {
  fontFamily: 'Oswald-Light',
  fontSize: '22px',
  color: '#D8D8D8',
  letterSpacing: '-0.05px',
  textAlign: 'left'
}

const outerDiv = {
  justifyContent: 'center'
}

const ListInfo = () => (
 <div> 
  <div className="row text-white center-text" style={outerDiv}>
    <div className="col-12">
      <h2 className='d-lg-none mb-4 display-4' style={listTitleFontStyle}>Everything You Need</h2>
      <h2 className='d-none d-lg-block mb-5 display-4' style={listTitleFontStyle}>Everything You Need For Your Portfolio</h2>
    </div>
  </div>
  <div className="col d-flex justify-content-center align-items-center">
      <div className='container' style={listFontStyle}>
        <div className='row'>
          <div className='col-2'>
            <p className='text-right'><i className='fas fa-code-branch'></i></p>
          </div>
          <div className='col-10'>
            <p>Retrieve your pinned repositories from GitHub.</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-2'>
            <p className='text-right'><i className='fas fa-file-alt'></i></p>
          </div>
          <div className='col-10'>
            <p>Choose a beautiful template and preview your portfolio.</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-2'>
            <p className='text-right'><i className='far fa-edit'></i></p>
          </div>
          <div className='col-10'>
            <p>Edit your personal information and mission.</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-2'>
            <p className='text-right'><i className='fas fa-wrench'></i></p>
          </div>
          <div className='col-10'>
            <p>Edit your repository information and upload photos.</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-2'>
            <p className='text-right'><i className='fas fa-th-large'></i></p>
          </div>
          <div className='col-10'>
            <p>Receive a public URL and download the source code.</p>
          </div>
        </div>
      </div>
  </div>
</div>
);

export default ListInfo;
