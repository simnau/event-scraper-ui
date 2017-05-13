import {
  get,
  post,
} from '../../utilities/fetch';
import {
  TOKEN,
  UNAUTHORIZED_STATUS,
  AUTHENTICATE_URL,
  USER_ACCOUNT_URL,
} from '../../constants/constants';
import {
  USER_LOGIN,
  USER_LOGOUT,
  CHECK_TOKEN,
  SET_USER_INFO_LOGIN,
  FETCH_INIT_AUTHENTICATION,
  FETCH_SUCCESS_AUTHENTICATION,
  FETCH_FAILURE_AUTHENTICATION,
  CLEAR_ERROR_AUTHENTICATION,
} from './login-action-types';
import {
  UNAUTHORIZED,
} from '../shared/action-types';

function handleError(dispatch, error) {
  if (error.status === UNAUTHORIZED_STATUS) {
    dispatch({ type: UNAUTHORIZED });
  }
  dispatch({
    type: FETCH_FAILURE_AUTHENTICATION,
    payload: error,
  });
  return Promise.reject(error);
}

export function setUserInfo(userInfo) {
  return {
    type: SET_USER_INFO_LOGIN,
    payload: userInfo,
  };
}

export function fetchUserAccount() {
  return (dispatch) => {
    return get(USER_ACCOUNT_URL)
      .then((userInfo) => {
        dispatch(setUserInfo(userInfo));
      }).catch(() => {});
  };
}

export function login(userForm) {
  return (dispatch) => {
    dispatch({ type: FETCH_INIT_AUTHENTICATION });
    return post(AUTHENTICATE_URL, userForm)
      .then((response) => {
        dispatch({
          type: USER_LOGIN,
          payload: response.token,
        });
        dispatch({
          type: FETCH_SUCCESS_AUTHENTICATION,
        });
        localStorage.setItem(TOKEN, JSON.stringify(response));
        return response;
      })
      .then(() => {
        dispatch(fetchUserAccount());
      }).catch(error => handleError(dispatch, error));
  };
}

export function logout() {
  localStorage.removeItem(TOKEN);
  return {
    type: USER_LOGOUT,
  };
}

export function checkToken() {
  return (dispatch) => {
    const token = JSON.parse(localStorage.getItem(TOKEN));

    if (token) {
      dispatch({
        type: CHECK_TOKEN,
        payload: token,
      });
      return dispatch(fetchUserAccount());
    }

    return token;
  };
}

export function clearError() {
  return {
    type: CLEAR_ERROR_AUTHENTICATION,
  };
}
