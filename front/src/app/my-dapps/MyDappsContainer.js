import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import MyDapps from './MyDapps';

const mapStateToProps = state => ({
  ctors: state.ctors.ctors,
  fetchStatus: state.ctors.fetchStatus
});

const MyDappsContainer = withRouter(
  connect(mapStateToProps)(MyDapps)
);

export default MyDappsContainer;
