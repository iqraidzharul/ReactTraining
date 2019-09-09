import React from 'react';

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config

import RouterExample from '../modules/example/RouterExample';
import RouterDashboard from '../modules/dashboard/RouterDashboard';
import RouterBook from '../modules/book/RouterBook';
import RouterAuthor from '../modules/author/RouterAuthor';

export const RouterContainer = [
  ...RouterExample,
  ...RouterDashboard,
  ...RouterBook,
  ...RouterAuthor,
];

export const RouterNonContainer = [
  {
    path: '/login',
    exact: true,
    name: 'Login',
    component: React.lazy(() => import('../modules/example/views/Pages/Login/Login')),
  },
  {
    path: '/register',
    exact: true,
    name: 'Register',
    component: React.lazy(() => import('../modules/example/views/Pages/Register/Register')),
  },
  {
    path: '/404',
    exact: true,
    name: '404 Not Found',
    component: React.lazy(() => import('../modules/example/views/Pages/Page404/Page404')),
  },
  {
    path: '/500',
    exact: true,
    name: '500 Internal Server Error',
    component: React.lazy(() => import('../modules/example/views/Pages/Page500/Page500')),
  },
];
