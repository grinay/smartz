import axios from 'axios';
import Auth from '../app/auth/Auth';
import MockAdapter from 'axios-mock-adapter';
import subscribeMockRequests from './apiMock';

const USE_MOCK = true;
const COLLAPSED_LOG_REQUESTS = true;
const API_URL = /localhost/.test(window.location.origin)
  ? 'http://localhost:3000/api'
  // ? 'http://localhost:3000/api'
  : window.location.origin + '/api';

if (USE_MOCK) {
  subscribeMockRequests(new MockAdapter(axios));
}

function logFetch(promise) {

  console.clear();

  function wrapper(url, data, method, mock) {

    const result = promise(url, data, method, mock);

    result
      .then(response => {

        const str = USE_MOCK ?
          [
            `%c MOCK %c %c ${method.toUpperCase()} %c ${url}`,
            'border: 1px solid yellow; color: white;', '',
            'background-color: green; color: white', ''
          ] :
          [
            `%c ${method.toUpperCase()} `,
            'background-color: green; color: white',
            `${url}`
          ];

        if (COLLAPSED_LOG_REQUESTS) {
          console.groupCollapsed(...str);
        } else {
          console.group(...str);
        }
        console.log('HANDLER: ', url);
        console.log('METHOD: ', method.toUpperCase());
        if (data !== undefined) console.log('SENDING REQUEST OBJECT: ', data);
        console.log(`RESPONSE STATUS: ${response.status}`);
        console.log('RESPONSE DATA: ', response.data);
        console.groupEnd();
      })
      .catch(error => {
        console.group(`ERROR!!! REQUEST. HANDLER: ${url} %c Error `, 'background-color: red; color: white');
        if (data !== undefined) console.log('SENDING REQUEST OBJECT: ', data);
        console.log('ERROR: ', error);
        console.groupEnd();
      });

    return result;
  }
  return wrapper;
}

const apiNew = (url = '/', data = undefined, method = 'post', mock = USE_MOCK) => {
  const accessToken = Auth.isAuthenticated() ? Auth.getAccessToken() : null;

  const config = {
    method,
    baseURL: API_URL,
    url,
    headers: {
      'X-AccessToken': accessToken
    },
  };

  if (data !== undefined) {
    config['data'] = data;
  }

  return axios(config);
};


// old version. Remove after refactoring
const api = () => {
  const accessToken = Auth.isAuthenticated() ? Auth.getAccessToken() : null;
  return axios.create({
    baseURL: API_URL,
    headers: {
      'X-AccessToken': accessToken
    }
  });
};

export const fetch = process.env.NODE_ENV !== 'production' ? logFetch(apiNew) : apiNew;

export default api;
