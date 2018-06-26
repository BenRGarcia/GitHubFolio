import React from 'react';
import { EditRepos } from '../../components';


const DashboardEditRepos = () => (
  <div className="row" style={{ minHeight: '100vh' }}>
    <div className="col d-flex justify-content-center align-items-center">
      <div className="flex-fill">
        <EditRepos />
      </div>
    </div>
  </div>
);

export default DashboardEditRepos;
