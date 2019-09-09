import React from 'react';

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  {
    path: '/author',
    name: 'Author',
    component: React.lazy(() => import('./views/Home')),
  },
  {
    path: '/addAuthor',
    name: 'Add',
    component: React.lazy(() => import('./views/Add')),
  },
];

export default routes;
