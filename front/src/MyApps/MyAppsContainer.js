import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import MyApps from './MyApps';
import {fetchCtorsRequest, fetchCtorsFailure, fetchCtorsSuccess} from 'Ctors/CtorsActions';
 
const mapStateToProps = state => ({
  ctors: state.ctors.ctors,
  fetchStatus: state.ctors.fetchStatus
});
 
const mapDispatchToProps = {fetchCtorsRequest,
                            fetchCtorsFailure,
                            fetchCtorsSuccess};
 
const MyAppsContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MyApps));
 
export default MyAppsContainer;
