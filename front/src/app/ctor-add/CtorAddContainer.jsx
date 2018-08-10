import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import CtorAdd from './CtorAdd';

const mapStateToProps = (state) => ({
  formData: state.ctoredit.ctor,
  fetchStatus: state.ctoredit.fetchStatus,
  fetchErrorMessage: state.ctoredit.error,
});

const CtorEditContainer = withRouter(connect(mapStateToProps)(CtorAdd));

export default CtorEditContainer;
