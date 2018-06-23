import React from 'react';
import DashboardRouter from '../../router/Dashboard';
import { DashboardSidebar } from '../../components';

const Dashboard = props => (
  <div>
    <h1>Dashboard.js</h1>
    <div className='d-flex'>
      <div>
        <DashboardSidebar />
      </div>
      <div>
        <DashboardRouter />
      </div>
    </div>
  </div>
)

export default Dashboard
