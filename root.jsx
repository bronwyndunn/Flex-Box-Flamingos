import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import StageOne from './stages/stageone';
import StageTwo from './stages/stagetwo';
import StageThree from './stages/stagethree';
import StageFour from './stages/stagefour';
import StageFive from './stages/stagefive';
import StageSix from './stages/stagesix';
import StageSeven from './stages/stageseven';
import StageEight from './stages/stageeight';
import StageNine from './stages/stagenine';
import StageTen from './stages/stageten';

const Root = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={StageOne} />
        <Route path="/1" component={StageOne} />
        <Route path="/2" component={StageTwo} />
        <Route path="/3" component={StageThree} />
        <Route path="/4" component={StageFour} />
        <Route path="/5" component={StageFive} />
        <Route path="/6" component={StageSix} />
        <Route path="/7" component={StageSeven} />
        <Route path="/8" component={StageEight} />
        <Route path="/9" component={StageNine} />
        <Route path="/10" component={StageTen} />
      </Route>
    </Router>
  );
};

export default Root;
