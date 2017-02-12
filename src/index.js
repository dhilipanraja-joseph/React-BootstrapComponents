import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { SplashPage, App, WhatWeDo, WhoWeAre, WhyUs, WorkWithUs } from './components';
import './assets/styles/global.css';
import './assets/styles/circle.css';

render(
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={SplashPage} />
      <Route path="/WhatWeDo" component={WhatWeDo} />
      <Route path="/WhoWeAre" component={WhoWeAre} />
      <Route path="/WhyUs" component={WhyUs} />
      <Route path="/WorkWithUs" component={WorkWithUs} />
    </Route>
  </Router>,
  document.getElementById('root')
);
