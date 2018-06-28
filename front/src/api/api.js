import axios from 'axios';

import Auth from '../app/auth/Auth';
import MockAdapter from 'axios-mock-adapter';
import subscribeMockRequests from './apiMock';
import { requestsConfig } from '../../config/config';
import history from '../helpers/history';

if (requestsConfig.USE_MOCK) {
  subscribeMockRequests(new MockAdapter(axios));
}

const TOKEN_EXPIRED_ERROR_MESSAGE = 'Token expired. Please log in again';

function logFetch(promise) {
  console.clear();

  function wrapper(url, data, method, mock) {
    const result = promise(url, data, method, mock);

    result
      .then((response) => {
        const str = requestsConfig.USE_MOCK
          ? [
              `%c MOCK %c %c ${method.toUpperCase()} %c ${url}`,
              'border: 1px solid yellow; color: white;',
              '',
              'background-color: green; color: white',
              ''
            ]
          : [`%c ${method.toUpperCase()} `, 'background-color: green; color: white', `${url}`];

        if (requestsConfig.COLLAPSED_LOG_REQUESTS) {
          console.groupCollapsed(...str);
        } else {
          console.group(...str);
        }
        console.log('HOST: ', window.location.origin);
        console.log('HANDLER: ', url);
        console.log('METHOD: ', method.toUpperCase());
        if (data !== undefined) {
          console.log('SENDING REQUEST OBJECT: ', data);
        }
        console.log(`RESPONSE STATUS: ${response.status}`);
        console.log('RESPONSE DATA: ', response.data);
        console.groupEnd();
      })
      .catch((error) => {
        const str = requestsConfig.USE_MOCK
          ? [
              `%c MOCK %c %c ${method.toUpperCase()} %c ${url}`,
              'border: 1px solid yellow; color: white;',
              '',
              'background-color: red; color: white',
              ''
            ]
          : [`%c ${method.toUpperCase()} `, 'background-color: red; color: white', `${url}`];

        if (requestsConfig.COLLAPSED_LOG_REQUESTS) {
          console.groupCollapsed(...str);
        } else {
          console.group(...str);
        }
        console.log('HOST: ', window.location.origin);
        console.log('HANDLER: ', url);
        console.log('METHOD: ', method.toUpperCase());
        if (data !== undefined) {
          console.log('SENDING REQUEST OBJECT: ', data);
        }
        if (data in error) {
          console.log('RESPONSE DATA: ', error.data);
        }
        console.log('ERROR: ', error);
        console.groupEnd();
      });

    return result;
  }
  return wrapper;
}

function checkToken(promise) {
  function wrapper(url, data, method, mock) {
    const result = promise(url, data, method, mock);

    result.then((response) => {
      const { data, status } = response;

      if (status === 200 && data.error && data.error === TOKEN_EXPIRED_ERROR_MESSAGE) {
        history.replace('/login');
      }
    });

    return result;
  }
  return wrapper;
}

const apiNew = (url = '/', data = undefined, method = 'post', mock = requestsConfig.USE_MOCK) => {
  const accessToken = Auth.isAuthenticated() ? Auth.getAccessToken() : null;

  const config = {
    method,
    baseURL: requestsConfig.API_URL,
    url,
    headers: {
      'X-AccessToken': accessToken
    }
  };

  if (data !== undefined) {
    config['data'] = data;
  }

  return axios(config);
};

const api = checkToken(apiNew);

export const fetch = process.env.NODE_ENV !== 'production' ? logFetch(api) : api;
