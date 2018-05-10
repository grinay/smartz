import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './header/Header';
import Footer from './footer/Footer';
import Auth from './auth/Auth';
import Callback from './auth/callback/Callback';
import Store from '../Store/StoreContainer';
import MyDapps from '../MyDapps/MyDappsContainer';
import Profile from '../Profile/Profile';
import Deploy from '../Deploy/DeployContainer';
import CtorAdd from '../CtorAdd/CtorAdd';
import Dashboard from '../Dashboard/DashboardContainer';
import Instance from '../Instances/InstanceContainer';
import Docs from '../Docs/Docs';
import { checkMetaMask } from '../helpers/eth';

import './App.css';

const handleAuthentication = ({ location }) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    Auth.handleAuthentication();
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
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
  componentWillMount() {
    this.setState({});

    let metamaskStatus = false;
    setInterval(() => {
      if (metamaskStatus !== checkMetaMask()) {
        metamaskStatus = checkMetaMask();
        this.setState({ metamaskStatus });
      }
    }, 250);
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { metamaskStatus } = this.state;
    const isAuthenticated = Auth.isAuthenticated();
    const { profile, setUserProfile } = this.props;

    if (!isAuthenticated && profile) setUserProfile(null);
    if (isAuthenticated && !profile) {
      Auth.getProfile((err, newProfile) => {
        setUserProfile(newProfile);
      });
    }

    return (
      <div>
        <Route render={(props) => (
          <Header profile={profile} {...props} />
        )} />

        <Switch>
          <Route exact path="/" render={(props) => (
            <Store metamaskStatus={metamaskStatus} {...props} />
          )} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }} />
          {/* <Route path="/docs/:docUri?" component={Docs} /> */}

          <PrivateRoute path="/profile" component={props =>
            <Profile profile={profile} {...props} />}
          />

          <PrivateRoute exact path="/deploy/:ctorId" component={props =>
            <Redirect to={`/deploy/${props.match.params.ctorId}/${this.props.nextDeploy}`} />
          } />

          <PrivateRoute path="/deploy/:ctorId/:deployId" component={props =>
            <Deploy metamaskStatus={metamaskStatus} {...props} />
          } />

          <PrivateRoute path="/dashboard" component={props =>
            <Dashboard metamaskStatus={metamaskStatus} {...props} />
          } />
          <PrivateRoute path="/instance/:id" component={props =>
            <Instance metamaskStatus={metamaskStatus} {...props} />
          } />

          <PrivateRoute path="/ctor-add" component={props =>
            <CtorAdd {...props} />
          } />

          <PrivateRoute path="/constructors/:id/update" component={props =>
            <CtorAdd {...props} />
          } />

          <PrivateRoute path="/my-dapps" component={props =>
            <MyDapps metamaskStatus={metamaskStatus} {...props} />
          } />

          {/* TODO: <Route component={Page404} />*/}
        </Switch>

        <Route render={(props) => <Footer {...props} />} />
      </div>
    );
  }
}

export default App;
