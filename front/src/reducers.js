import {combineReducers} from 'redux';
import ctors from 'Ctors/CtorsReducer';
import deploy from 'Deploy/DeployReducer';
import instances from 'Instances/InstancesReducer';

const reducers = combineReducers({
  ctors,
  deploy,
  instances
});

export default reducers;
