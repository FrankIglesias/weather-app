import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import { useSelector } from '~contexts/UserContext';

import { ROUTES } from './constants';
import RouteItem from './components/RouteItem';
import styles from './styles.module.scss';

function Routes() {
  const user = useSelector(state => state.user);

  return (
    <Router>
      <div className={styles.container}>
        <Switch>
          {ROUTES.map(({ path, ...config }) => (
            <RouteItem key={path} path={path} {...config} />
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;
