import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import history from './history';

import {App} from 'App/App';

import './index.css';

const store = createStore((state = []) => (state));

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,

  document.getElementById('root')
);
