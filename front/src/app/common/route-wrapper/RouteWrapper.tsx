import * as React from 'react';
import { Route } from 'react-router-dom';

import { getMetamaskStatus } from '../../../helpers/eth';
import Auth from '../../auth/Auth';
import Callback from '../../auth/callback/Callback';
import Footer from '../../footer/Footer';
import Header from '../../header/HeaderContainer';
import InstallExtension from '../install-extension/InstallExtension';


export default class RouteWrapper extends React.PureComponent<any, any> {
  public render() {
    const { component: Component, isPrivate = false, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={(props) => {
          if (!isPrivate || Auth.isAuthenticated()) {
            return (
              <main className="app" id="js-app">
                {getMetamaskStatus() === 'noMetamask' && (
                  <InstallExtension />
                )}

                <Header {...props} />
                <Component {...props} />
                <Footer {...props} />
              </main>
            );
          } else {
            Auth.login(window.location.pathname);

            return <Callback {...props} />;
          }
        }}
      />
    );
  }
}
