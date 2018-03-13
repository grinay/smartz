import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import Store from './Store';
import {fetchCtorsRequest, fetchCtorsFailure, fetchCtorsSuccess} from 'Ctors/CtorsActions';
 
const mapStateToProps = state => ({
  ctors: state.ctors.ctors,
  fetchStatus: state.ctors.fetchStatus
});
 
const mapDispatchToProps = {fetchCtorsRequest,
                            fetchCtorsFailure,
                            fetchCtorsSuccess};
 
const StoreContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Store));
 
export default StoreContainer;
