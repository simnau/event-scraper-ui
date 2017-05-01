import {
  post,
} from '../../utilities/fetch';
import {
  UNAUTHORIZED_STATUS,
} from '../../constants/constants';
import {
  FETCH_INIT_SIGNUP,
  FETCH_SUCCESS_SIGNUP,
  FETCH_FAILURE_SIGNUP,
  CLEAR_STATE_SIGNUP,
  CLEAR_ERROR_SIGNUP,
} from './action_types';
import {
  UNAUTHORIZED,
} from '../shared/action_types';

function handleError(dispatch, error) {
  if (error.status === UNAUTHORIZED_STATUS) {
    dispatch({ type: UNAUTHORIZED });
  }
  dispatch({
    type: FETCH_FAILURE_SIGNUP,
    payload: error,
  });
  return Promise.reject(error);
}

export function signUp(userForm) {
  return (dispatch) => {
    dispatch({ type: FETCH_INIT_SIGNUP });
    return post('api/signup', userForm).then((response) => {
      dispatch({
        type: FETCH_SUCCESS_SIGNUP,
      });
      return response;
    }).catch(error => handleError(dispatch, error));
  };
}

export function clearState() {
  return {
    type: CLEAR_STATE_SIGNUP,
  };
}

export function clearError() {
  return {
    type: CLEAR_ERROR_SIGNUP,
  };
}
