import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { enthusiasm } from '../../reducers/index';
import { StoreState } from '../../types/index';

import './Main.css';

import Home from '../home/Home';
import Form from '../form/Form';
import NotFound from '../not-found/NotFound';

import Hello from '../../containers/Hello';

import { Switch, Route, Redirect } from 'react-router-dom';

const store = createStore<StoreState>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript'
});

const Main = () => (
  <main>
    <Switch>
      <Route exact={true} path="/" component={Home}/>

      <Route
        exact={false}
        path="/hello"
        render={() => (
          <Provider store={store}>
            <Hello />
          </Provider>
        )}
      />

      {/* <Provider store={store}>
        <Route exact={false} path="/hello" component={Hello}/>
      </Provider> */}

      <Route exact={false} path="/form" component={Form}/>
      <Route exact={true} path="/404" component={NotFound} />
      <Redirect path="/*" to="/404" />
    </Switch>
  </main>
);

export default Main;