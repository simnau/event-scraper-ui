import {
  get,
} from '../../utilities/fetch';
import {
  SET_EVENTS_EVENTS,
  CLEAR_STATE_EVENTS,
  FETCH_INIT_EVENTS,
  FETCH_SUCCESS_EVENTS,
  FETCH_FAILURE_EVENTS,
} from './event-action-types';
import {
  UNAUTHORIZED,
} from '../shared/action-types';
import {
  UNAUTHORIZED_STATUS,
  EVENT_URL,
  QUERY_BY_CATEGORY,
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

export function fetchEvents(categoryId) {
  const requestUrl = categoryId ? `${EVENT_URL}${QUERY_BY_CATEGORY}/${categoryId}` : EVENT_URL;

  return (dispatch) => {
    dispatch({
      type: FETCH_INIT_EVENTS,
    });
    return get(requestUrl)
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
