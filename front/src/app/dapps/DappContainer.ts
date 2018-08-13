import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Dapp from './Dapp';
import { viewFuncResult } from './DappActions';


const mapStateToProps = (state, ownProps) => {
  let dapp = null;
  if (state.dapps.dappList != null) {
    dapp = state.dapps.dappList.get(ownProps.match.params.id);
  }

  return {
    dapp,
    dappError: state.dapps.error,
    dappStatus: state.dapps.fetchStatus,
    profile: state.app.profile,
  };
};

const mapDispatchToProps = { viewFuncResult };

const DappContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Dapp),
);

export default DappContainer;
