import React from 'react';
import {Redirect, Route, Router} from 'react-router-dom';

import Header from 'Header/Header';
import Footer from 'Footer/Footer';
import Home from 'Home/Home';
import Callback from 'Callback/Callback';
import Auth from 'Auth/Auth';
import Profile from 'Profile/Profile';
import Deploy from 'Deploy/Deploy';
import CtorAdd from 'CtorAdd/CtorAdd';
import Dashboard from 'Dashboard/Dashboard';
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
        <Route path="/" render={(props) => <Header auth={auth} {...props} />} />
        <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} />
        }}/>
        <Route path="/profile" render={(props) => (
          auth.isAuthenticated() ? <Profile auth={auth} {...props} /> : <Redirect to="/"/>
        )} />
        <Route path="/deploy/:id" render={(props) => (
          auth.isAuthenticated() ? <Deploy auth={auth} {...props} /> : <Redirect to="/"/>
        )} />
        <Route path="/ctor-add" render={(props) => (
          auth.isAuthenticated() ? <CtorAdd auth={auth} {...props} /> : <Redirect to="/"/>
        )} />
        <Route path="/dashboard" render={(props) => (
          auth.isAuthenticated() ? <Dashboard auth={auth} {...props} /> : <Redirect to="/"/>
        )} />
        <Route path="/" render={(props) => <Footer auth={auth} {...props} />} />
      </div>
    </Router>
  );
}
