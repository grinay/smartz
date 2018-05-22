import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { find } from 'lodash';

import Login from './Login';
import {
  startLoginAction,
  finishLoginAction
} from './LoginActions';

const mapStateToProps = (state) => {
  return {
    login: state.login
  };
};

const mapDispatchToProps = {
  startLoginAction,
  finishLoginAction
};

const LoginContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)
);

export default LoginContainer;
