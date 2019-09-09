/**
 * @author: dwi.setiyadi@gmail.com
*/

import React from 'react';

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  {
    path: '/book',
    name: 'Book',
    component: React.lazy(() => import('./views/Home')),
  },
  {
    path: '/add',
    name: 'Add',
    component: React.lazy(() => import('./views/Add')),
  },
];

export default routes;
