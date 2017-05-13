import {
  SET_EVENTS_EVENTS,
  CLEAR_STATE_EVENTS,
  FETCH_INIT_EVENTS,
  FETCH_SUCCESS_EVENTS,
  FETCH_FAILURE_EVENTS,
} from './event-action-types';

const INITIAL_STATE = {
  events: [],
  isError: false,
  isLoading: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_EVENTS_EVENTS:
      return { ...state, events: action.payload };
    case CLEAR_STATE_EVENTS:
      return INITIAL_STATE;
    case FETCH_INIT_EVENTS:
      return { ...state, isLoading: true, isError: false };
    case FETCH_SUCCESS_EVENTS:
      return { ...state, isLoading: false, isError: false };
    case FETCH_FAILURE_EVENTS:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
}
