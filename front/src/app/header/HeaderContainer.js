import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';

const mapStateToProps = state => ({
  header: state.app.header,
  profile: state.app.profile
});

const HeaderContainer = withRouter(connect(
  mapStateToProps,
  null
)(Header));

export default HeaderContainer;
