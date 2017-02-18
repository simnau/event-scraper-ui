import 'es6-promise';
import 'isomorphic-fetch';

import {
  TOKEN,
} from '../constants/constants';
import environment from '../environment/environment';

function getAuthentication() {
  const userObj = JSON.parse(localStorage.getItem(TOKEN));
  return userObj ? userObj.id_token : '';
}

function checkStatus(response) {
  if (response.ok) {
    return response.json()
      .then(json => Promise.resolve(json))
      .catch(() => Promise.resolve(response));
  }
  return response.json()
    .then(json => Promise.reject(json))
    .catch(() => Promise.reject(response));
}

export function enhancedFetch(url, options = {}) {
  const extendedOptions = options;
  extendedOptions.headers = {
    ...extendedOptions.headers,
    Accept: '*/*',
    Authorization: `Bearer ${getAuthentication()}`
  };
  if (typeof options.body === 'object') {
    extendedOptions.body = JSON.stringify(options.body);
  }
  return fetch(`${environment.apiUrl}${url}`, extendedOptions)
    .then(checkStatus);
}

export function post(url, data) {
  return enhancedFetch(url, {
    method: 'post',
    body: data,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export function get(url) {
  return enhancedFetch(url, {
    method: 'get',
  });
}

export function put(url, data = {}) {
  return enhancedFetch(url, {
    method: 'put',
    body: data,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export function del(url) {
  return enhancedFetch(url, {
    method: 'delete'
  });
}
