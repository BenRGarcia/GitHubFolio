import React, { Component } from 'react';
import DashboardRouter from '../../router/Dashboard';
import { DashboardSidebar, Navbar } from '../../components';
import routes from '../../router/Routes'

const styleDarkPanel = {
  backgroundColor: '#28314B'
};

class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className='d-md-none'>
          <Navbar
            routes={routes.dashboard}
            style={styleDarkPanel}
          />
        </div>
        <div className='d-flex'>
          <div className='d-none d-md-flex px-3'>
            <DashboardSidebar
              routes={routes.dashboard}
              style={styleDarkPanel}
            />
          </div>
          <div>
            <DashboardRouter routes={routes.dashboard} />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
