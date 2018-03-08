import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import Home from './Home';
import {fetchCtorsRequest, fetchCtorsFailure, fetchCtorsSuccess} from 'Ctors/CtorsActions';
 
const mapStateToProps = state => ({
  ctors: state.ctors.ctors,
  fetchStatus: state.ctors.fetchStatus
});
 
const mapDispatchToProps = {fetchCtorsRequest,
                            fetchCtorsFailure,
                            fetchCtorsSuccess};
 
const HomeContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home));
 
export default HomeContainer;
