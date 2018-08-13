import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import MyConstructors from './MyConstructors';


const mapStateToProps = (state) => ({
  ctors: state.ctors.ctors,
  fetchStatus: state.ctors.fetchStatus,
});

const MyConstructorsContainer = withRouter(connect(mapStateToProps, null)(MyConstructors));

export default MyConstructorsContainer;
