import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Auth from './Auth/Auth';
import Callback from './Auth/Callback/Callback';
import Store from 'Store/StoreContainer';
import MyApps from 'MyApps/MyAppsContainer';
import Profile from 'Profile/Profile';
import Deploy from 'Deploy/DeployContainer';
import CtorAdd from 'CtorAdd/CtorAdd';
import Dashboard from 'Dashboard/DashboardContainer';
import Instance from 'Instances/InstanceContainer';
import {checkMetaMask} from 'helpers/eth';

import './App.css';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
};

class App extends Component {
  componentWillMount() {
    this.setState({});

    let metamaskStatus = false;
    setInterval(() => {
      if (metamaskStatus !== checkMetaMask()) {
        metamaskStatus = checkMetaMask();
        this.setState({metamaskStatus});
      }
    }, 250);
  }

  render() {
    const {metamaskStatus} = this.state;
    const isAuthenticated = auth.isAuthenticated();
    const {profile, setUserProfile} = this.props;

    if (!isAuthenticated && profile) setUserProfile({});
    if (isAuthenticated && !profile) {
      auth.getProfile((err, newProfile) => {
        setUserProfile(newProfile);
      });
    }

    // if(noMetamask) return <Alert message={checkMetaMask()} />;
    return (
      <div>
        <Route render={(props) => (
          <Header auth={auth} profile={profile} {...props} />
        )} />

        <Switch>
          <Route exact path="/" render={(props) => (
            <Store auth={auth} metamaskStatus={metamaskStatus} {...props} />
          )} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>

          {!auth.isAuthenticated() &&
            <Redirect to="/" />
          }

          <Route path="/profile" render={props => (
            <Profile auth={auth} profile={profile} {...props} />)}
          />
          <Route path="/deploy/:id" render={props => (
            <Deploy auth={auth} metamaskStatus={metamaskStatus} {...props} />
          )} />
          <Route path="/dashboard" render={props => (
            <Dashboard auth={auth} metamaskStatus={metamaskStatus} {...props} />
          )} />
          <Route path="/instance/:id" render={props => (
            <Instance auth={auth} metamaskStatus={metamaskStatus} {...props} />
          )} />

          <Route path="/ctor-add"                render={props => (<CtorAdd auth={auth} {...props} />)} />
          <Route path="/constructors/:id/update" render={props => (<CtorAdd auth={auth} {...props} />)} />
          <Route path="/my_apps" render={(props) => (
            <MyApps auth={auth} metamaskStatus={metamaskStatus} {...props} />
          )} />

          {/* TODO: <Route component={Page404} />*/}
        </Switch>

        <Route render={(props) => <Footer auth={auth} {...props} />} />
      </div>
    );
  }
}

export default App;
