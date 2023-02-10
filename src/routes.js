import React from 'react';

const Main = React.lazy(() => import('./pages/home/Main'));

const routes = [{ path: '/home', name: 'HomePage', element: Main }];

export default routes;
