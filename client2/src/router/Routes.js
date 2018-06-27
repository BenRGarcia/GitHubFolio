import React from 'react';
import { Redirect } from 'react-router-dom';
import {
  DashboardGetRepos,
  DashboardEditRepos,
  DashboardTemplates,
  DashboardEditUser,
  DashboardPreview/* ,
  ProtectedRoute */
} from '../pages/Dashboard'
import { Home, Portfolio, Dashboard, NotFound } from '../pages'

const routes = {
  app: [
    {
      label: 'Home',
      path: '/',
      exact: true,
      component: <Home />
    }, {
      label: 'Dashboard',
      path: '/dashboard',
      exact: false,
      // component: <ProtectedRoute component={Dashboard} />
      component: <Dashboard />
    }, {
      label: 'Portfolios',
      path: '/portfolio/:gitHubId',
      exact: true,
      component: <Portfolio />
    }, {
      label: 'Not Found',
      path: '/404',
      exact: false,
      component: <NotFound />
    }, {
      label: 'Redirect to 404',
      component: <Redirect to="/404" />
    }
  ],
  dashboard: [
    {
      label: 'Get GitHub Repos',
      path: '/dashboard',
      exact: true,
      icon: 'fas fa-code-branch',
      component: <DashboardGetRepos />
    }, {
      label: 'Templates',
      path: '/dashboard/templates',
      exact: true,
      icon: 'fas fa-file-alt',
      component: <DashboardTemplates />
    }, {
      label: 'Edit Portfolio Info',
      path: '/dashboard/edituser',
      exact: true,
      icon: 'far fa-edit',
      component: <DashboardEditUser />
    }, {
      label: 'Edit Repo Data',
      path: '/dashboard/editrepos',
      exact: true,
      icon: 'fas fa-wrench',
      component: <DashboardEditRepos />
    }, {
      label: 'Preview Portfolio',
      path: '/dashboard/preview',
      exact: true,
      icon: 'fas fa-th-large',
      component: <DashboardPreview />
    }
  ],
  home: [
    {
      label: 'HOME',
      path: '/',
      disabled: false
    },
    {
      label: 'FAQS',
      path: '/faqs',
      disabled: true
    },
    {
      label: 'CONTACT US',
      path: '/contact',
      disabled: true
    }
  ]
};

export default routes;
