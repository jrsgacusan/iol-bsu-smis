import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const Dashboard = React.lazy(() => import('./pages/Dashboard/Dashboard'));
const Billing = React.lazy(() => import('./pages/Billing/Billing'));

const routes = [
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/billing', exact: true, name: 'Billing', component: Billing },
];

export default routes;
