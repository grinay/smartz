import {combineReducers} from 'redux';

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

export default reducers;
