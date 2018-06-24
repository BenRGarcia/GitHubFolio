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
        {/* Hide navbar on larger screens */}
        <div className='d-md-none'>
          <Navbar
            routes={routes.dashboard}
            style={styleDarkPanel}
          />
        </div>
        {/* Hide sidebar on smaller screens */}
        <div className='d-none d-md-block'>
          <DashboardSidebar
            routes={routes.dashboard}
            style={styleDarkPanel}
          />
        </div>
        {/* Nested subpages render here */}
        <div className='col-12 col-md-9 ml-auto'>
          <DashboardRouter routes={routes.dashboard} />
        </div>
      </div>
    );
  }
}

export default Dashboard;
