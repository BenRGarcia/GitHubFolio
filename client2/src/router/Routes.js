import React from 'react';
import {
  DashboardGetRepos,
  DashboardEditRepos,
  DashboardTemplates,
  DashboardEditUser,
  DashboardPreview
} from '../pages/Dashboard'

const routes = [
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

export default routes;
