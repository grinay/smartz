import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import MyConstructors from '../my-constructors/MyConstructors';

const mapStateToProps = (state) => ({
  ctors: state.ctors.ctors,
  fetchStatus: state.ctors.fetchStatus
});

const MyConstructorsContainer = withRouter(connect(mapStateToProps)(MyConstructors));

export default MyConstructorsContainer;
