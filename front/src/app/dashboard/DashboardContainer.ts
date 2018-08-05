import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { viewFuncResult } from '../dapps/DappActions';
import Dashboard from './Dashboard';


const mapStateToProps = (state) => ({
  ctors: state.ctors.ctors,
  ctorsError: state.ctors.error,
  ctorsFetchStatus: state.ctors.fetchStatus,
  dapps: state.dapps.dappList,
  dappsError: state.dapps.error,
  dappsFetchStatus: state.dapps.fetchStatus,
});

const mapDispatchToProps = { viewFuncResult };

const DashboardContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Dashboard),
);

export default DashboardContainer;
