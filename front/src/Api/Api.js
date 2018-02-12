import axios from 'axios';

import {API_URL} from 'constants.js';

const api = (auth) => {
  const accessToken = auth.getAccessToken();
  return axios.create({
    baseURL: API_URL,
    headers: {
      'X-AccessToken': accessToken
    }
  });
};

export default api;
