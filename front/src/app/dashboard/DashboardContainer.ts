import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { viewFuncResult } from '../dapps/DappActions';
import Dashboard from './Dashboard';


const mapStateToProps = (state) => ({
  dapps: state.dapps.dappList,
  dappsError: state.dapps.error,
  dappsFetchStatus: state.dapps.fetchStatus,
  isOpenModalAddContact: state.dashboard.isOpenModalAddContract,
});

const mapDispatchToProps = { viewFuncResult };

const DashboardContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Dashboard),
);

export default DashboardContainer;
