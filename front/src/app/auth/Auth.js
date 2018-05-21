const jwtDecode = require('jwt-decode');
import history from '../../helpers/history';

class Auth {
  // todo maybe do in another way?
  userProfile;

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  login(redirectUri = '/') {
    // set redirect route after login
    localStorage.setItem('route_after_login', redirectUri);
    history.replace('/login');
  }

  handleAuthentication(token) {
    let authResult;
    try {
      authResult = jwtDecode(token);
      console.log(authResult)
    } catch (e) {
      console.log(e);
      history.replace('/login');
      return;
    }
    this.setSession(token, authResult);
  }

  setSession(token, authResult) {
    localStorage.setItem('access_token2', token);
    localStorage.setItem('access_token_decoded', JSON.stringify(authResult));
    localStorage.setItem('expires_at', JSON.stringify(authResult.expires_at * 1000));
    // navigate to the redirect route
    history.replace(localStorage.getItem('route_after_login'));
  }

  getAccessToken() {
    const accessToken = localStorage.getItem('access_token2');
    if (!accessToken) {
      throw new Error('No access token found');
    }
    return accessToken;
  }

  getProfile(cb) {
    const profile = localStorage.getItem('access_token_decoded');
    if (!profile) {
      cb('No access token found', {});
    }

    this.userProfile = JSON.parse(profile);
    cb(false, JSON.parse(profile));
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token2');
    localStorage.removeItem('access_token_decoded');
    localStorage.removeItem('expires_at');

    this.userProfile = null;

    history.replace('/');
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}

// Singleton.
// A solution with ES6 is to use an instance of a class scoped to a module.
// There are some drawbacks though:
// if you want to use a static method, you will have 
// to use the constructor property of the exported instance.
export default new Auth();
