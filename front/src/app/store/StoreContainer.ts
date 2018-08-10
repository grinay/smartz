import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Store from './Store';


const mapStateToProps = (state) => ({
  ctors: state.ctors.ctors,
  fetchStatus: state.ctors.fetchStatus,
});

export default withRouter(
  connect(mapStateToProps)(Store),
);
