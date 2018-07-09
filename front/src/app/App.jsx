import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import Header from './header/Header';
import Footer from './footer/Footer';
import Auth from './auth/Auth';
import Callback from './auth/callback/Callback';
import Store from './store/StoreContainer';
import MyConstructors from './my-constructors/MyConstructorsContainer';
import Profile from './profile/Profile';
import Deploy from './deploy/DeployContainer';
import Login from './auth/login/LoginContainer';
import CtorAdd from './ctor-add/CtorAdd';
import Dashboard from './dashboard/DashboardContainer';
import Dapp from './dapps/DappContainer';
import Docs from './docs/Docs';
import { getMetamaskStatus } from '../helpers/eth';
import InstallExtension from './common/install-extension/InstallExtension';
import Page404 from './page-404/Page404';

import './App.less';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (Auth.isAuthenticated()) {
        return <Component {...props} />;
      } else {
        Auth.login(window.location.pathname);

        return <Callback {...props} />;
      }
    }}
  />
);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      metamaskStatus: getMetamaskStatus(),
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  componentDidMount() {
    setInterval(() => {
      const { metamaskStatus } = this.state;
      const currentStatus = currentStatus;

      if (metamaskStatus !== currentStatus) {
        this.setState({ metamaskStatus: currentStatus });
      }
    }, 250);

    window.Intercom('boot', {
      app_id: 'q0bwfagc'
    });
  }

  render() {
    const { metamaskStatus } = this.state;
    const isAuthenticated = Auth.isAuthenticated();
    const { profile, setUserProfile } = this.props;

    if (!isAuthenticated && profile) {
      setUserProfile(null);
    }

    if (isAuthenticated && !profile) {
      const newProfile = Auth.getProfile();

      if (newProfile) {
        setUserProfile(newProfile);
      }
    }

    return (
      <main className="app">
        {/* Install extension */}
        {metamaskStatus === 'noMetamask' && (
          <InstallExtension />
        )}

        <Route render={(props) => <Header profile={profile} {...props} />} />

        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Store metamaskStatus={metamaskStatus} {...props} />}
          />
          <Route
            path="/login"
            render={(props) => <Login metamaskStatus={metamaskStatus} {...props} />}
          />

          <Route path="/docs/:docUri?" component={Docs} />

          <PrivateRoute
            path="/profile"
            component={(props) => <Profile profile={profile} {...props} />}
          />

          <PrivateRoute
            exact
            path="/deploy/:ctorId"
            component={(props) => (
              <Redirect to={`/deploy/${props.match.params.ctorId}/${this.props.nextDeploy}`} />
            )}
          />

          <PrivateRoute
            path="/deploy/:ctorId/:deployId"
            component={(props) => <Deploy metamaskStatus={metamaskStatus} {...props} />}
          />

          <PrivateRoute
            path="/dashboard"
            component={(props) => <Dashboard metamaskStatus={metamaskStatus} {...props} />}
          />
          <Route
            path="/dapp/:id"
            component={(props) => <Dapp metamaskStatus={metamaskStatus} {...props} />}
          />

          <Route
            exact
            path="/instance/:id"
            component={(props) =>
              <Redirect to={`/dapp/${props.match.params.id}`} />
            }
          />

          <PrivateRoute path="/ctor-add" component={(props) => <CtorAdd {...props} />} />

          <PrivateRoute
            path="/constructors/:id/update"
            component={(props) => <CtorAdd {...props} />}
          />

          <PrivateRoute
            path="/my-constructors"
            component={(props) => <MyConstructors metamaskStatus={metamaskStatus} {...props} />}
          />

          <Route component={(props) => <Page404 {...props} />} />
        </Switch>

        <Route render={(props) => <Footer {...props} />} />
      </main>
    );
  }
}

export default hot(module)(App);
