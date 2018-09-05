import * as React from 'react';
import { hot } from 'react-hot-loader';
import { Redirect, Route, Switch } from 'react-router-dom';

import { getMetamaskStatus } from '../helpers/eth';
import { goToDocsRoute } from '../helpers/utils';
import Auth from './auth/Auth';
import Callback from './auth/callback/Callback';
import Login from './auth/login/LoginContainer';
import RouteWrapper from './common/route-wrapper/RouteWrapper';
import CtorAdd from './ctor-add/CtorAddContainer';
import DappStore from './dapp-store/DappStore';
import Dapp from './dapps/DappContainer';
import Dashboard from './dashboard/DashboardContainer';
import Deploy from './deploy/DeployContainer';
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
      <Switch>
        <Route
          path="/dapp-store"
          render={(props) => <DappStore {...props} />}
        />
        <RouteWrapper
          exact={true}
          path="/"
          component={(props) => <Store metamaskStatus={metamaskStatus} {...props} />}
        />

        <RouteWrapper
          path="/login"
          component={(props) => <Login metamaskStatus={metamaskStatus} {...props} />}
        />

        <RouteWrapper
          path="/docs/:docUri?"
          component={(props) => {
            window.location.href = `https://wiki.smartz.io/${goToDocsRoute(props.match.params.docUri)}`;
          }}
        />

        <RouteWrapper
          isPrivate={true}
          path="/profile"
          component={(props) => <Profile profile={profile} {...props} />}
        />

        <RouteWrapper
          isPrivate={true}
          exact={true}
          path="/deploy/:ctorId"
          component={(props) => (
            <Redirect to={`/deploy/${props.match.params.ctorId}/${this.props.nextDeploy}`} />
          )}
        />

        <RouteWrapper
          isPrivate={true}
          path="/deploy/:ctorId/:deployId"
          component={(props) => <Deploy metamaskStatus={metamaskStatus} {...props} />}
        />

        <RouteWrapper
          isPrivate={true}
          path="/dashboard"
          component={(props) => <Dashboard metamaskStatus={metamaskStatus} {...props} />}
        />
        <RouteWrapper
          path="/dapp/:id"
          component={(props) => <Dapp metamaskStatus={metamaskStatus} {...props} />}
        />

        <RouteWrapper
          exact={true}
          path="/instance/:id"
          component={(props) => <Redirect to={`/dapp/${props.match.params.id}`} />}
        />

        <RouteWrapper
          isPrivate={true}
          path="/ctor-add"
          component={(props) => <CtorAdd {...props} />}
        />

        <RouteWrapper
          isPrivate={true}
          path="/constructors/:id/update"
          component={(props) => <CtorAdd {...props} />}
        />

        <RouteWrapper
          isPrivate={true}
          path="/my-constructors"
          component={(props) => <MyConstructors metamaskStatus={metamaskStatus} {...props} />}
        />

        <RouteWrapper component={(props) => <Page404 {...props} />} />
      </Switch>
    );
  }
}

export default hot(module)(App);
