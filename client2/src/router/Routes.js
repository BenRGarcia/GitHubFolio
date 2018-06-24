import React from 'react';
import { Redirect } from 'react-router-dom';
import {
  DashboardGetRepos,
  DashboardEditRepos,
  DashboardTemplates,
  DashboardEditUser,
  DashboardPreview
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
      component: <DashboardGetRepos />
    }, {
      label: 'Templates',
      path: '/dashboard/templates',
      exact: true,
      component: <DashboardTemplates />
    }, {
      label: 'Edit Portfolio Info',
      path: '/dashboard/edituser',
      exact: true,
      component: <DashboardEditUser />
    }, {
      label: 'Edit Repo Data',
      path: '/dashboard/editrepos',
      exact: true,
      component: <DashboardEditRepos />
    }, {
      label: 'Preview Portfolio',
      path: '/dashboard/preview',
      exact: true,
      component: <DashboardPreview />
    }
  ],
  home: [
    {
      label: 'HOME',
      path: '/'
    },
    {
      label: 'FAQS',
      path: '/faqs'
    },
    {
      label: 'CONTACT US',
      path: '/contact'
    }
  ]
};

export default routes;
