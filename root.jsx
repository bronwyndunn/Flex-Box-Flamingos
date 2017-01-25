import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import StageOne from './stages/stageone';
import StageTwo from './stages/stagetwo';

const Root = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={StageOne} />
        <Route path="/1" component={StageOne} />
        <Route path="/2" component={StageTwo} />
      </Route>
    </Router>
  );
};

export default Root;
