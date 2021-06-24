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
const Attendance = React.lazy(() => import('./pages/Attendance/Attendance'));
const Department = React.lazy(() =>
  import('./pages/Department/department/Department')
);
const DepartmentDetails = React.lazy(() =>
  import('./pages/Department/department-details/DepartmentDetails')
);
const AuditLogs = React.lazy(() => import('./pages/AuditLogs/AuditLogs'));
const Enrollment = React.lazy(() => import('./pages/Enrollment/Enrollment'));
const EnrollmentLevel = React.lazy(() =>
  import('./pages/Enrollment/EnrollmentLevel')
);
const ReviewEnrollment = React.lazy(() =>
  import('./pages/Enrollment/ReviewEnrollment/ReviewEnrollment')
);
const ScheduleFees = React.lazy(() =>
  import('./pages/ScheduleFees/ScheduleFees')
);
const FeesList = React.lazy(() => import('./pages/ScheduleFees/FeesList'));
const PaymentTransactions = React.lazy(() =>
  import('./pages/PaymentTransactions/PaymentTransactions')
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
  {
    path: '/attendance',
    exact: true,
    name: 'Attendance',
    component: Attendance,
  },
  {
    path: '/department',
    exact: true,
    name: 'Department',
    component: Department,
  },
  {
    path: '/department-details',
    exact: true,
    name: 'Department Faculty',
    component: DepartmentDetails,
  },
  {
    path: '/logs',
    exact: true,
    name: 'Audit Logs',
    component: AuditLogs,
  },
  {
    path: '/enrollmentreg',
    exact: true,
    name: 'Enrollment',
    component: Enrollment,
  },
  {
    path: '/enrollmentlevel',
    exact: true,
    name: 'Enrollment Level',
    component: EnrollmentLevel,
  },
  {
    path: '/reviewenrollment',
    exact: true,
    name: 'Review Enrollment',
    component: ReviewEnrollment,
  },
  {
    path: '/schedulefees',
    exact: true,
    name: 'Schedule of Fees',
    component: ScheduleFees,
  },
  {
    path: '/fees-list',
    exact: true,
    name: 'Fees List',
    component: FeesList,
  },
  {
    path: '/transaction',
    exact: true,
    name: 'Payment Transactions',
    component: PaymentTransactions,
  },
];

export default routes;
