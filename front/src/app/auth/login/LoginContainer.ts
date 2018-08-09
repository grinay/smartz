import { find } from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Login from './Login';


const mapStateToProps = (state) => {
  return {
    login: state.login,
  };
};

const LoginContainer = withRouter(
  connect(
    mapStateToProps,
  )(Login),
);

export default LoginContainer;
