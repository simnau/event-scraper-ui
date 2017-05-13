import {
  get,
} from '../../utilities/fetch';
import {
  UNAUTHORIZED_STATUS,
  USER_URL,
} from '../../constants/constants';
import {
  UNAUTHORIZED,
} from '../shared/action-types';
import {
  SET_PROFILE_PROFILE,
  CLEAR_STATE_PROFILE,
  FETCH_INIT_PROFILE,
  FETCH_SUCCESS_PROFILE,
  FETCH_FAILURE_PROFILE,
} from './profile-action-types';

function handleError(dispatch, error) {
  if (error.status === UNAUTHORIZED_STATUS) {
    dispatch({ type: UNAUTHORIZED });
  }
  dispatch({
    type: FETCH_FAILURE_PROFILE,
    payload: error,
  });
  return Promise.reject(error);
}

export function setUserProfile(profile) {
  return {
    type: SET_PROFILE_PROFILE,
    payload: profile,
  };
}

export function fetchUserProfile(userId) {
  const url = userId ? `${USER_URL}/${userId}` : USER_URL;

  return (dispatch) => {
    dispatch({
      type: FETCH_INIT_PROFILE,
    });
    return get(url)
      .then((profile) => {
        dispatch(setUserProfile(profile));
        dispatch({
          type: FETCH_SUCCESS_PROFILE,
        });
        return profile;
      })
      .catch(error => handleError(dispatch, error));
  };
}

export function clearState() {
  return {
    type: CLEAR_STATE_PROFILE,
  };
}
