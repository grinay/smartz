import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Home from 'Home/HomeContainer';
import Auth from 'Auth/Auth';
import Callback from 'Auth/Callback/Callback';
import Profile from 'Profile/Profile';
import Deploy from 'Deploy/Deploy';
import CtorAdd from 'CtorAdd/CtorAdd';
import Dashboard from 'Dashboard/Dashboard';
import Instance from 'Instance/Instance';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const App = () => {
  return (
    <div>
      <Route render={(props) => <Header auth={auth} {...props} />} />

      <Switch>
        <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} />
        }}/>

        {!auth.isAuthenticated() &&
          <Redirect to="/" />
        }

        <Route path="/profile" render={props => (<Profile auth={auth} {...props} />)} />
        <Route path="/deploy/:id" render={props => (<Deploy auth={auth} {...props} />)} />
        <Route path="/ctor-add" render={props => (<CtorAdd auth={auth} {...props} />)} />
        <Route path="/dashboard" render={props => (<Dashboard auth={auth} {...props} />)} />
        <Route path="/instance/:id" render={props => (<Instance auth={auth} {...props} />)} />
        {/* TODO: <Route component={Page404} />*/}
      </Switch>

      <Route render={(props) => <Footer auth={auth} {...props} />} />
    </div>
  );
}
