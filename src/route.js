import React from 'react';

const SignIn1 = React.lazy(() =>
  import('./Demo/Authentication/SignIn/SignIn1')
);

const SignIn = React.lazy(() => import('./pages/Signin/Signin'));
const Registration = React.lazy(() =>
  import('./pages/Registration/Registration')
);

const route = [
  { path: '/auth/signin-1', exact: true, name: 'Signin 1', component: SignIn1 },
  { path: '/', exact: true, name: 'Signin', component: SignIn },
  {
    path: '/registration',
    exact: true,
    name: 'Registration',
    component: Registration,
  },
];

export default route;
