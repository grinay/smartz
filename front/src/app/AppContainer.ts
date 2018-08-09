import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import App from './App';
import { setUserProfile } from './AppActions';


const mapStateToProps = (state) => ({
  profile: state.app.profile,
  app: state.app,
  nextDeploy: state.deploy.length,
});

const mapDispatchToProps = {
  setUserProfile,
};

const AppContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(App));

export default AppContainer;
