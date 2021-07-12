import React, { Suspense, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import '../../node_modules/font-awesome/scss/font-awesome.scss';

import Loader from './layout/Loader';
import Aux from '../hoc/_Aux';
import ScrollToTop from './layout/ScrollToTop';
import routes from '../route';
import '../assets/Override.css';
import { useDispatch } from 'react-redux';
import { fetchStudents, fetchBillings } from '../store/actions-thunk';

const AdminLayout = Loadable({
  loader: () => import('./layout/AdminLayout'),
  loading: Loader,
});

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBillings());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  const menu = routes.map((route, index) => {
    return route.component ? (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        name={route.name}
        render={(props) => <route.component {...props} />}
      />
    ) : null;
  });

  return (
    <Aux>
      <ScrollToTop>
        <Suspense fallback={<Loader />}>
          <Switch>
            {menu}
            <Route path="/" component={AdminLayout} />
          </Switch>
        </Suspense>
      </ScrollToTop>
    </Aux>
  );
};

export default App;
