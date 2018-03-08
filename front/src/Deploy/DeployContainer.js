import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {find} from 'lodash';

import Deploy from './Deploy';
import {fetchCtorParamsRequest,
        fetchCtorParamsFailure,
        fetchCtorParamsSuccess} from 'Ctors/CtorsActions';
import {constructRequest,
        constructError,
        constructSuccess} from './DeployActions';
 
const mapStateToProps = (state, ownProps) => {
  return {
    ctor: {...find(state.ctors.ctors, {ctor_id: ownProps.match.params.id})},
    ...state.deploy
  };
};
 
const mapDispatchToProps = {
  fetchCtorParamsRequest,
  fetchCtorParamsFailure,
  fetchCtorParamsSuccess,
  constructRequest,
  constructError,
  constructSuccess
};
 
const DeployContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Deploy));
 
export default DeployContainer;
