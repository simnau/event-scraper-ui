import {
  get,
} from '../../utilities/fetch';
import {
  SET_EVENTS_EVENTS,
  CLEAR_STATE_EVENTS,
  FETCH_INIT_EVENTS,
  FETCH_SUCCESS_EVENTS,
  FETCH_FAILURE_EVENTS,
} from './action_types';
import {
  UNAUTHORIZED,
} from '../shared/action_types';
import {
  UNAUTHORIZED_STATUS,
} from '../../constants/constants';

function handleError(dispatch, error) {
  if (error.status === UNAUTHORIZED_STATUS) {
    dispatch({ type: UNAUTHORIZED });
  }
  dispatch({
    type: FETCH_FAILURE_EVENTS,
    payload: error,
  });
  return Promise.reject(error);
}

export function setEvents(events) {
  return {
    type: SET_EVENTS_EVENTS,
    payload: events,
  };
}

export function fetchEvents() {
  return (dispatch) => {
    dispatch({
      type: FETCH_INIT_EVENTS,
    });
    return get('api/event')
      .then((response) => {
        dispatch(setEvents(response));
        dispatch({
          type: FETCH_SUCCESS_EVENTS,
        });
      })
      .catch(error => handleError(dispatch, error));
  };
}

export function clearState() {
  return {
    type: CLEAR_STATE_EVENTS,
  };
}
