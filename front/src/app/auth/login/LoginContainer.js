import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { find } from 'lodash';

import Login from './Login';
import {
  startLogin,
  finishLogin
} from './LoginActions';

const mapStateToProps = (state) => {
  return {
    login: state.login
  };
};

const mapDispatchToProps = {
  startLogin,
  finishLogin
};

const LoginContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);

export default LoginContainer;
