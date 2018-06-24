import React, { Component } from 'react';
import DashboardRouter from '../../router/Dashboard';
import { DashboardSidebar, Navbar } from '../../components';
import routes from '../../router/Routes'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navbar routes={routes.dashboard} />
        <h1>Dashboard.js</h1>
        <div className='d-flex'>
          <div>
            <DashboardSidebar routes={routes.dashboard}/>
          </div>
          <div>
            <div className='container'>
              <DashboardRouter routes={routes.dashboard} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
