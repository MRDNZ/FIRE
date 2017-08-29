import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact={false} path="/" component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();