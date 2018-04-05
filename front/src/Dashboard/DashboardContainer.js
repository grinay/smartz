import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import Dashboard from './Dashboard';
import {
  fetchCtorsRequest, fetchCtorsFailure, fetchCtorsSuccess
} from '../Ctors/CtorsActions';
import {
  fetchInstancesRequest, fetchInstancesFailure, fetchInstancesSuccess,
  viewFuncResult
} from '../Instances/InstancesActions';
 
const mapStateToProps = state => ({
  ctors: state.ctors.ctors,
  ctorsError: state.ctors.error,
  ctorsFetchStatus: state.ctors.fetchStatus,
  instances: [...state.instances.instances],
  instancesError: state.instances.error,
  instancesFetchStatus: state.instances.fetchStatus,
});
 
const mapDispatchToProps = {
  fetchCtorsRequest, fetchCtorsFailure, fetchCtorsSuccess,
  fetchInstancesRequest, fetchInstancesFailure, fetchInstancesSuccess,
  viewFuncResult
};
 
const DashboardContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard));
 
export default DashboardContainer;
