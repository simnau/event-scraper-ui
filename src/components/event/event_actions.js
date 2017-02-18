import {
  get,
  post,
} from '../../utilities/fetch';
import {
  SET_EVENT_EVENT,
  SET_MY_RATING_EVENT,
  SET_AVERAGE_RATING_EVENT,
  CLEAR_STATE_EVENT,
  FETCH_INIT_EVENT,
  FETCH_SUCCESS_EVENT,
  FETCH_FAILURE_EVENT,
} from './action_types';

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
    Promise.all([
      get(`api/event/${eventId}`),
      get(`api/event/rating/${eventId}`)
    ])
      .then(([event, { averageRating, voteCount }]) => {
        dispatch(setEvent(event));
        dispatch(setAverageRating(averageRating, voteCount));
      })
      .catch(() => ({ type: FETCH_FAILURE_EVENT }));
  };
}

export function rateEvent(id, rating) {
  return (dispatch) => {
    dispatch({
      type: FETCH_INIT_EVENT,
    });
    return post(`api/event/rating/${id}`, { rating })
      .then((response) => {
        dispatch(setMyRating(response.rating));
        dispatch(setAverageRating(response.averageRating, response.voteCount));
        dispatch({
          type: FETCH_SUCCESS_EVENT,
        });
      })
      .catch(() => ({ type: FETCH_FAILURE_EVENT }));
  };
}

export function clearState() {
  return {
    type: CLEAR_STATE_EVENT,
  };
}
