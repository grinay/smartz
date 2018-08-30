import { combineReducers } from 'redux';
import { createStore } from 'redux';

import app from '../app/AppReducer';
import ctors from '../app/common/ctor-card/CtorsReducer';
import deploy from '../app/deploy/DeployReducer';
import dapps from '../app/dapps/DappReducer';
import login from '../app/auth/login/LoginReducer';
import dashboard from '../app/dashboard/DashboardReducer';
import ctoredit from '../app/common/ctor-card/CtorEditReducer';

const reducers = combineReducers({
  app,
  ctors,
  ctoredit,
  deploy,
  dapps,
  login,
  dashboard
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
