import React from 'react';
import { GetRepos } from '../../components'

const DashboardGetRepos = props => (
  <div className="row" style={{ minHeight: '90vh' }}>
    <div className="col d-flex justify-content-center align-items-center">
      <div className='card'>
        <div className='card-body'>
          <div className='card-title'>
            <GetRepos />
          </div>
          <div className='card-text'>
            <p className='pb-0'>
              Caution, this operation will overwrite all previously saved repository data.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default DashboardGetRepos
