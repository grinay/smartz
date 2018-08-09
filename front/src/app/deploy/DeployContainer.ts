import { find } from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Deploy from './Deploy';
import {
    deployTxError, deployTxMined, deployTxSent, initDeploy, setPublicAccess,
} from './DeployActions';


const mapStateToProps = (state, ownProps) => {
  const { ctorId, deployId } = ownProps.match.params;
  return {
    ctor: { ...find(state.ctors.ctors, { id: ctorId }) },
    ...state.deploy[deployId],
  };
};

const mapDispatchToProps = {
  initDeploy,
  setPublicAccess,
  deployTxSent,
  deployTxError,
  deployTxMined,
};

const DeployContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Deploy));

export default DeployContainer;
