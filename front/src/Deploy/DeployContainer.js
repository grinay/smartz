import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {find} from 'lodash';

import Deploy from './Deploy';
import {
  fetchCtorParamsRequest,
  fetchCtorParamsFailure,
  fetchCtorParamsSuccess
} from 'Ctors/CtorsActions';
import {
  initDeploy,
  constructRequest,
  constructError,
  constructSuccess,
  setPublicAccess,
  deployTxSent,
  deployTxError,
  deployTxMined
} from './DeployActions';
 
const mapStateToProps = (state, ownProps) => {
  const {ctorId, deployId} = ownProps.match.params;
  return {
    ctor: {...find(state.ctors.ctors, {ctor_id: ctorId})},
    ...state.deploy[deployId]
  };
};
 
const mapDispatchToProps = {
  initDeploy,
  fetchCtorParamsRequest,
  fetchCtorParamsFailure,
  fetchCtorParamsSuccess,
  constructRequest,
  constructError,
  constructSuccess,
  setPublicAccess,
  deployTxSent,
  deployTxError,
  deployTxMined
};
 
const DeployContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Deploy));
 
export default DeployContainer;
