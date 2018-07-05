import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { requestsConfig } from '../../config/config';
import Auth from '../app/auth/Auth';
import { logFetch } from '../helpers/dev/log';
import history from '../helpers/history';
import subscribeMockRequests from './apiMock';


if (requestsConfig.USE_MOCK) {
  subscribeMockRequests(new MockAdapter(axios));
}

const TOKEN_EXPIRED_ERROR_MESSAGE = 'Token expired. Please log in again';


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
      'X-AccessToken': accessToken,
    },
  };

  if (data !== undefined) {
    config['data'] = data;
  }

  return axios(config);
};

const api = checkToken(apiNew);

export const fetch = process.env.NODE_ENV !== 'production'
  ? logFetch(api, requestsConfig.USE_MOCK, requestsConfig.COLLAPSED_LOG_REQUESTS)
  : api;
