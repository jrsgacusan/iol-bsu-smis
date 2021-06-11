import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const Dashboard = React.lazy(() => import('./pages/Dashboard/Dashboard'));
const Billing = React.lazy(() => import('./pages/Billing/Billing'));
const Subject = React.lazy(() => import('./pages/Subject/subject/Subject'));
const SubjectDetails = React.lazy(() =>
  import('./pages/Subject/subject-details/SubjectDetails')
);
const SubjectTeachers = React.lazy(() =>
  import('./pages/Subject/subject-teachers/SubjectTeachers')
);
const SubjectStudents = React.lazy(() =>
  import('./pages/Subject/subject-students/SubjectStudents')
);

const routes = [
  { path: '/dashboard', exact: true, name: 'Dashboard', component: Dashboard },
  { path: '/billing', exact: true, name: 'Billing', component: Billing },
  {
    path: '/subject',
    exact: true,
    name: 'Manage Subjects',
    component: Subject,
  },
  {
    path: '/subject-details',
    exact: true,
    name: 'Subject Details',
    component: SubjectDetails,
  },
  {
    path: '/subject-teachers',
    exact: true,
    name: 'Subject Teachers',
    component: SubjectTeachers,
  },
  {
    path: '/subject-students',
    exact: true,
    name: 'Student Profile',
    component: SubjectStudents,
  },
];

export default routes;
