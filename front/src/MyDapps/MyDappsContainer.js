import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import MyDapps from './MyDapps';
import { fetchCtorsRequest, fetchCtorsFailure, fetchCtorsSuccess } from '../Ctors/CtorsActions';
const mapStateToProps = state => ({
  ctors: state.ctors.ctors,
  fetchStatus: state.ctors.fetchStatus
});

const mapDispatchToProps = {
  fetchCtorsRequest,
  fetchCtorsFailure,
  fetchCtorsSuccess
};

const MyDappsContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(MyDapps));

export default MyDappsContainer;
