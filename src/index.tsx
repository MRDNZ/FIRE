import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import App from './App';
import NotFound from './components/not-found/NotFound';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={App} />
      <Route exact={true} path="/404" component={NotFound} />
      <Redirect path="*" to="/404" />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();

// --------------------------------- APP
// import * as React from 'react';
// import * as ReactDOM from 'react-dom';

// import App from './App';

// import registerServiceWorker from './registerServiceWorker';
// import './index.css';

// ReactDOM.render(
//   <App />,
//   document.getElementById('root') as HTMLElement
// );

// registerServiceWorker();

// --------------------------------- HELLO
// import * as React from 'react';
// import * as ReactDOM from 'react-dom';

// import Hello from './containers/Hello';

// import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import { enthusiasm } from './reducers/index';
// import { StoreState } from './types/index';

// import registerServiceWorker from './registerServiceWorker';
// import './index.css';

// const store = createStore<StoreState>(enthusiasm, {
//   enthusiasmLevel: 1,
//   languageName: 'TypeScript'
// });

// ReactDOM.render(
//   <Provider store={store}>
//     <Hello />
//   </Provider>,
//   document.getElementById('root') as HTMLElement
// );

// registerServiceWorker();