import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import Home from './Home';
import {fetchCtorsRequest, fetchCtorsFailure, fetchCtorsSuccess} from './HomeActions';
 
const mapStateToProps = state => ({
  ctors: state.home.ctors,
  fetchStatus: state.home.fetchStatus
});
 
const mapDispatchToProps = dispatch => ({
  fetchCtorsRequest: () => {
    dispatch(fetchCtorsRequest());
  },
  fetchCtorsFailure: error => {
    dispatch(fetchCtorsFailure(error));
  },
  fetchCtorsSuccess: ctors => {
    dispatch(fetchCtorsSuccess(ctors));
  }
});
 
const HomeContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home));
 
export default HomeContainer;
