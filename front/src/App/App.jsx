import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Auth from './Auth/Auth';
import Callback from './Auth/Callback/Callback';
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
          <Route path="/docs/:docUri?" component={Docs} />

          {!Auth.isAuthenticated() &&
            <Redirect to="/" />
          }

          <Route path="/profile" render={props => (
            <Profile profile={profile} {...props} />)}
          />

          <Route exact path="/deploy/:ctorId" render={props => (
            <Redirect to={`/deploy/${props.match.params.ctorId}/${this.props.nextDeploy}`} />
          )} />
          <Route path="/deploy/:ctorId/:deployId" render={props => (
            <Deploy metamaskStatus={metamaskStatus} {...props} />
          )} />

          <Route path="/dashboard" render={props => (
            <Dashboard metamaskStatus={metamaskStatus} {...props} />
          )} />
          <Route path="/instance/:id" render={props => (
            <Instance metamaskStatus={metamaskStatus} {...props} />
          )} />

          <Route path="/ctor-add" render={props => (<CtorAdd {...props} />)} />
          <Route path="/constructors/:id/update" render={props => (<CtorAdd {...props} />)} />
          <Route path="/my-dapps" render={(props) => (
            <MyDapps metamaskStatus={metamaskStatus} {...props} />
          )} />

          {/* TODO: <Route component={Page404} />*/}
        </Switch>

        <Route render={(props) => <Footer {...props} />} />
      </div>
    );
  }
}

export default App;
