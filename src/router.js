import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import TodoTable from './routes/TodoTable';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/todos" exact component={TodoTable} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
