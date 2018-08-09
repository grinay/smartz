import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Redirect, Route, Switch } from 'react-router-dom';

import { getMetamaskStatus } from '../helpers/eth';
import { goToDocsRoute } from '../helpers/utils';
import Auth from './auth/Auth';
import Callback from './auth/callback/Callback';
import Login from './auth/login/LoginContainer';
import InstallExtension from './common/install-extension/InstallExtension';
import CtorAdd from './ctor-add/CtorAdd';
import Dapp from './dapps/DappContainer';
import Dashboard from './dashboard/DashboardContainer';
import Deploy from './deploy/DeployContainer';
import Footer from './footer/Footer';
import Header from './header/HeaderContainer';
import MyConstructors from './my-constructors/MyConstructorsContainer';
import Page404 from './page-404/Page404';
import Profile from './profile/Profile';
import Store from './store/StoreContainer';

import './App.less';


interface IAppProps {
  location: any;
  profile: any;
  setUserProfile: any;
  nextDeploy: any;
}

interface IAppState {
  metamaskStatus: any;
}

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

class App extends React.Component<IAppProps, IAppState> {
  constructor(props) {
    super(props);

    this.state = {
      metamaskStatus: getMetamaskStatus(),
    };
  }

  public componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  public componentDidMount() {
    setInterval(() => {
      const { metamaskStatus } = this.state;
      const currentStatus = getMetamaskStatus();

      if (metamaskStatus !== currentStatus) {
        this.setState({ metamaskStatus: currentStatus });
      }
    }, 250);

    window.Intercom('boot', {
      app_id: 'q0bwfagc',
    });
  }

  public render() {
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
      <main className="app" id="js-app">
        {/* Install extension */}
        {metamaskStatus === 'noMetamask' && (
          <InstallExtension />
        )}

        <Route render={(props) => <Header profile={profile} {...props} />} />

        <Switch>
          <Route
            exact={true}
            path="/"
            render={(props) => <Store metamaskStatus={metamaskStatus} {...props} />}
          />
          <Route
            path="/login"
            render={(props) => <Login metamaskStatus={metamaskStatus} {...props} />}
          />

          <Route
            path="/docs/:docUri?"
            component={(props) => {
              window.location.href = `https://wiki.smartz.io/${goToDocsRoute(props.match.params.docUri)}`;
            }
            }
          />

          <PrivateRoute
            path="/profile"
            component={(props) => <Profile profile={profile} {...props} />}
          />

          <PrivateRoute
            exact={true}
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
            exact={true}
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
