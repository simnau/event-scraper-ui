import {
  SET_PROFILE_PROFILE,
  FETCH_INIT_PROFILE,
  FETCH_SUCCESS_PROFILE,
  FETCH_FAILURE_PROFILE,
  CLEAR_STATE_PROFILE,
} from './profile-action-types';

const initialState = {
  profile: null,
  isLoading: false,
  isError: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PROFILE_PROFILE:
      return { ...state, profile: action.payload };
    case FETCH_INIT_PROFILE:
      return { ...state, isLoading: true, isError: false };
    case FETCH_SUCCESS_PROFILE:
      return { ...state, isLoading: false, isError: false };
    case FETCH_FAILURE_PROFILE:
      return { ...state, isLoading: false, isError: true };
    case CLEAR_STATE_PROFILE:
      return initialState;
    default:
      return state;
  }
}
