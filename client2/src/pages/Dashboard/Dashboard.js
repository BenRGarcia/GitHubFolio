import React, { Component } from 'react';
import DashboardRouter from '../../router/Dashboard';
import { DashboardSidebar, DashboardNavbar } from '../../components';
import routes from '../../router/Routes'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <DashboardNavbar routes={routes} />
        <h1>Dashboard.js</h1>
        <div className='d-flex'>
          <div>
            <DashboardSidebar routes={routes}/>
          </div>
          <div>
            <div className='container'>
              <DashboardRouter routes={routes} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
