import {
  SET_EVENT_EVENT,
  SET_MY_RATING_EVENT,
  SET_AVERAGE_RATING_EVENT,
  CLEAR_STATE_EVENT,
  FETCH_INIT_EVENT,
  FETCH_SUCCESS_EVENT,
  FETCH_FAILURE_EVENT,
} from './event-action-types';

const INITIAL_STATE = {
  event: null,
  isLoading: false,
  isError: false,
  averageRating: 0,
  voteCount: 0,
  myRating: null,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_EVENT_EVENT:
      return { ...state, event: action.payload };
    case SET_MY_RATING_EVENT:
      return { ...state, myRating: action.payload };
    case SET_AVERAGE_RATING_EVENT:
      return { ...state, averageRating: action.payload.averageRating, voteCount: action.payload.voteCount };
    case CLEAR_STATE_EVENT:
      return INITIAL_STATE;
    case FETCH_INIT_EVENT:
      return { ...state, isLoading: true, isError: false };
    case FETCH_SUCCESS_EVENT:
      return { ...state, isLoading: false, isError: false };
    case FETCH_FAILURE_EVENT:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
}
