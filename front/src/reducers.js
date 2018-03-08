import {combineReducers} from 'redux';
import ctors from 'Ctors/CtorsReducer';
import deploy from 'Deploy/DeployReducer';

const reducers = combineReducers({
  ctors,
  deploy
});

export default reducers;
