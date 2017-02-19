import {
  FETCH_INIT_SIGNUP,
  FETCH_SUCCESS_SIGNUP,
  FETCH_FAILURE_SIGNUP,
  CLEAR_STATE_SIGNUP,
} from './action_types';

const INITIAL_STATE = {
  isError: false,
  isLoading: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_INIT_SIGNUP:
      return { ...state, isError: false, isLoading: true, };
    case FETCH_FAILURE_SIGNUP:
      return { ...state, isError: true, isLoading: false, };
    case FETCH_SUCCESS_SIGNUP:
      return { ...state, isError: false, isLoading: false, };
    case CLEAR_STATE_SIGNUP:
      return INITIAL_STATE;
    default:
      return state;
  }
}
