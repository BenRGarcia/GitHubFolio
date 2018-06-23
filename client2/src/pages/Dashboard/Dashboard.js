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
      path: '/dashboard',
      exact: true,
      component: <DashboardGetRepos />
    },
    {
      path: '/dashboard/templates',
      exact: true,
      component: <DashboardTemplates />
    },
    {
      path: '/dashboard/edituser',
      exact: true,
      component: <DashboardEditUser />
    },
    {
      path: '/dashboard/editrepos',
      exact: true,
      component: <DashboardEditRepos />
    },
    {
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
            <DashboardSidebar routes={this.routes} />
          </div>
          <div>
            <DashboardRouter routes={this.routes} />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard
