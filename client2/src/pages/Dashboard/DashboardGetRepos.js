import React from 'react';
import { GetRepos } from '../../components'

const styleCard = {
  width: '100%'
};

const styleBG = {
  backgroundImage: `url(${require('../../images/404Bg.png')})`,
  backgroundSize: 'cover',
  backgroundPosition: '30% 35%'
};

const styleHeader = {
  fontFamily: 'Roboto',
  fontSize: '1.35rem'
};

const DashboardGetRepos = () => (
  <div className="row" style={{ minHeight: '90vh'}}>
    <div className="col d-flex justify-content-center align-items-center">
      <div className='shadow card' style={styleCard}>
        <div className="card-header" style={styleBG}>
          <h1 className='text-white mb-0' style={styleHeader}>
            Get My Pinned Repositories!
          </h1>
        </div>
        <div className='card-body bg-light pt-3'>
          <div className='card-text'>
            <p className='pb-0 text-dark'>
              Caution: This will overwrite all previously saved repository data.
            </p>
          </div>
          <div className='card-title'>
            <GetRepos />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default DashboardGetRepos;
