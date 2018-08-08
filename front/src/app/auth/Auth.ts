import history from '../../helpers/history';


const jwtDecode = require('jwt-decode');
class Auth {
  // todo maybe do in another way?
  public userProfile;
  public redirectUri: string;

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getProfile = this.getProfile.bind(this);
  }

  public login(redirectUri = '/') {
    // set redirect route after login
    this.redirectUri = redirectUri;

    history.replace('/login');
  }

  public handleAuthentication(token) {
    let authResult;
    try {
      authResult = jwtDecode(token);
    } catch (e) {
      console.error(e);
      history.replace('/login');
      return;
    }
    this.setSession(token, authResult);
  }

  public setSession(token, authResult) {
    localStorage.setItem('access_token2', token);
    localStorage.setItem('access_token_decoded', JSON.stringify(authResult));
    localStorage.setItem('expires_at2', JSON.stringify(authResult.expires_at * 1000));
  }

  public getAccessToken() {
    const accessToken = localStorage.getItem('access_token2');
    if (!accessToken) {
      throw new Error('No access token found');
    }
    return accessToken;
  }

  public getAccessTokenDecoded() {
    const accessToken = localStorage.getItem('access_token_decoded');
    if (!accessToken) {
      throw new Error('No access token found');
    }
    return JSON.parse(accessToken);
  }

  public getProfile() {
    let profile = localStorage.getItem('access_token_decoded');

    if (profile !== null) {
      try {
        profile = JSON.parse(profile);

        this.userProfile = profile;

        return profile;
      } catch (error) {
        console.error(error);
      }
    }

    return null;
  }

  public logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token2');
    localStorage.removeItem('access_token_decoded');
    localStorage.removeItem('expires_at2');

    this.userProfile = null;

    history.replace('/');
  }

  public isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at2'));
    return new Date().getTime() < expiresAt;
  }
}

// Singleton.
// A solution with ES6 is to use an dapp of a class scoped to a module.
// There are some drawbacks though:
// if you want to use a static method, you will have
// to use the constructor property of the exported dapp.
export default new Auth();
