import { combineReducers } from 'redux';
import { createStore } from 'redux';

import app from './App/AppReducer';
import ctors from './Ctors/CtorsReducer';
import deploy from './Deploy/DeployReducer';
import instances from './Instances/InstancesReducer';

const reducers = combineReducers({
  app,
  ctors,
  deploy,
  instances
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
