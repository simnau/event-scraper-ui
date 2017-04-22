import {
  get,
  post,
} from '../../utilities/fetch';
import {
  UNAUTHORIZED_STATUS,
  NOT_FOUND_STATUS,
  EVENT_URL,
  QUERY_RATING,
  QUERY_MY_RATING,
} from '../../constants/constants';
import {
  SET_EVENT_EVENT,
  SET_MY_RATING_EVENT,
  SET_AVERAGE_RATING_EVENT,
  CLEAR_STATE_EVENT,
  FETCH_INIT_EVENT,
  FETCH_SUCCESS_EVENT,
  FETCH_FAILURE_EVENT,
} from './action_types';
import {
  UNAUTHORIZED,
} from '../shared/action_types';

function handleError(dispatch, error) {
  if (error.status === UNAUTHORIZED_STATUS) {
    dispatch({ type: UNAUTHORIZED });
  }
  dispatch({
    type: FETCH_FAILURE_EVENT,
    payload: error,
  });
  return Promise.reject(error);
}

function setEvent(event) {
  return {
    type: SET_EVENT_EVENT,
    payload: event,
  };
}

export function setMyRating(rating) {
  return {
    type: SET_MY_RATING_EVENT,
    payload: rating,
  };
}

export function setAverageRating(averageRating, voteCount) {
  return {
    type: SET_AVERAGE_RATING_EVENT,
    payload: {
      averageRating,
      voteCount,
    },
  };
}

export function fetchInitialData(eventId) {
  return (dispatch) => {
    dispatch({
      type: FETCH_INIT_EVENT,
    });
    return Promise.all([
      get(`${EVENT_URL}/${eventId}`),
      get(`${EVENT_URL}${QUERY_RATING}/${eventId}`)
    ])
      .then(([event, { averageRating, voteCount }]) => {
        dispatch(setEvent(event));
        dispatch(setAverageRating(averageRating, voteCount));
        dispatch({
          type: FETCH_SUCCESS_EVENT,
        });
      })
      .catch(error => handleError(dispatch, error));
  };
}

export function fetchMyRating(eventId) {
  return (dispatch) => {
    dispatch({
      type: FETCH_INIT_EVENT,
    });
    return get(`${EVENT_URL}${QUERY_MY_RATING}/${eventId}`)
      .then((response) => {
        dispatch(setMyRating(response.rating));
        dispatch({
          type: FETCH_SUCCESS_EVENT,
        });
      })
      .catch((error) => {
        if (error.status === NOT_FOUND_STATUS) {
          dispatch({
            type: FETCH_SUCCESS_EVENT,
          });
          return Promise.resolve();
        }

        return handleError(dispatch, error);
      });
  };
}

export function rateEvent(id, rating) {
  return (dispatch) => {
    dispatch({
      type: FETCH_INIT_EVENT,
    });
    return post(`${EVENT_URL}${QUERY_RATING}/${id}`, { rating })
      .then((response) => {
        dispatch(setMyRating(response.rating));
        dispatch(setAverageRating(response.averageRating, response.voteCount));
        dispatch({
          type: FETCH_SUCCESS_EVENT,
        });
      })
      .catch(error => handleError(dispatch, error));
  };
}

export function clearState() {
  return {
    type: CLEAR_STATE_EVENT,
  };
}
