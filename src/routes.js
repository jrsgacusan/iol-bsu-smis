import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const Dashboard = React.lazy(() => import('./pages/Dashboard/Dashboard'));

const routes = [
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
];

export default routes;
