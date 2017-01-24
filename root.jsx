import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import StageOne from './stages/stageone';

const Root = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={StageOne} />
        <Route path="/1" component={StageOne} />
      </Route>
    </Router>
  );
};

export default Root;
