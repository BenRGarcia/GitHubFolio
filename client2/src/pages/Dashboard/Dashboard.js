import React, { Component } from 'react';
import DashboardRouter from '../../router/Dashboard';
import { DashboardSidebar, DashboardNavbar } from '../../components';
import {
  DashboardGetRepos,
  DashboardEditRepos,
  DashboardTemplates,
  DashboardEditUser,
  DashboardPreview
} from './'

class Dashboard extends Component {
  routes = [
    {
      label: 'Get GitHub Repos',
      path: '/dashboard',
      exact: true,
      component: <DashboardGetRepos />
    },
    {
      label: 'Templates',
      path: '/dashboard/templates',
      exact: true,
      component: <DashboardTemplates />
    },
    {
      label: 'Edit Portfolio Info',
      path: '/dashboard/edituser',
      exact: true,
      component: <DashboardEditUser />
    },
    {
      label: 'Edit Repo Data',
      path: '/dashboard/editrepos',
      exact: true,
      component: <DashboardEditRepos />
    },
    {
      label: 'Preview Portfolio',
      path: '/dashboard/preview',
      exact: true,
      component: <DashboardPreview />
    }
  ];

  render() {
    return (
      <div>
        <DashboardNavbar routes={this.routes} />
        <h1>Dashboard.js</h1>
        <div className='d-flex'>
          <div>
            <DashboardSidebar routes={this.routes}/>
          </div>
          <div>
            <div className='container'>
              <DashboardRouter routes={this.routes} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
