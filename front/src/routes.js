import React from 'react';
import {Redirect, Route, Router} from 'react-router-dom';

import App from 'App';
import Home from 'Home/Home';
import Callback from 'Callback/Callback';
import Auth from 'Auth/Auth';
import Profile from 'Profile/Profile';
import Ctor from 'Ctor/Ctor';
import CtorAdd from 'CtorAdd/CtorAdd';
import Eth from 'Eth/Eth';
import history from './history';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <Route path="/" render={(props) => <App auth={auth} {...props} />} />
        <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
        <Route path="/eth" render={(props) => <Eth auth={auth} {...props} />} />
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} />
        }}/>
        <Route path="/profile" render={(props) => (
          !auth.isAuthenticated() ? (
            <Redirect to="/home"/>
          ) : (
            <Profile auth={auth} {...props} />
          )
        )} />
        <Route path="/ctor/:id" render={(props) => (
          !auth.isAuthenticated() ? (
            <Redirect to="/home"/>
          ) : (
            <Ctor auth={auth} {...props} />
          )
        )} />
        <Route path="/ctor-add" render={(props) => (
          !auth.isAuthenticated() ? (
            <Redirect to="/home"/>
          ) : (
            <CtorAdd auth={auth} {...props} />
          )
        )} />
      </div>
    </Router>
  );
}
