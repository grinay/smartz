import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Dashboard from './Dashboard';
import { viewFuncResult } from '../dapps/DappsActions';

const mapStateToProps = (state) => ({
  ctors: state.ctors.ctors,
  ctorsError: state.ctors.error,
  ctorsFetchStatus: state.ctors.fetchStatus,
  dapps: [...state.dapps.dapps],
  dappsError: state.dapps.error,
  dappsFetchStatus: state.dapps.fetchStatus
});

const mapDispatchToProps = { viewFuncResult };

const DashboardContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard)
);

export default DashboardContainer;
