import {
  USER_LOGIN,
  USER_LOGOUT,
  FETCH_INIT_AUTHENTICATION,
  FETCH_SUCCESS_AUTHENTICATION,
  FETCH_FAILURE_AUTHENTICATION,
  CLEAR_ERROR_AUTHENTICATION,
  CHECK_TOKEN,
} from './action_types';
import {
  UNAUTHORIZED,
} from '../shared/action_types';
import {
  TOKEN,
} from '../../constants/constants';

const initialState = {
  isAuthenticated: false,
  isError: false,
  isLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state,
        isAuthenticated: true,
      };
    case USER_LOGOUT:
      return initialState;
    case CHECK_TOKEN: {
      let user = {
        username: '',
        roles: [],
        isAuthenticated: false
      };
      if (action.payload) {
        user = {
          username: action.payload.username,
          roles: action.payload.roles,
          isAuthenticated: true
        };
      }
      return { ...state, ...user };
    }
    case FETCH_INIT_AUTHENTICATION:
      return { ...state, isError: false, isLoading: true, };
    case FETCH_FAILURE_AUTHENTICATION:
      return { ...state, isError: true, isLoading: false, };
    case FETCH_SUCCESS_AUTHENTICATION:
      return { ...state, isError: false, isLoading: false, };
    case CLEAR_ERROR_AUTHENTICATION:
      return { ...state, isError: false, };
    case UNAUTHORIZED: {
      localStorage.removeItem(TOKEN);
      return initialState;
    }
    default:
      return state;
  }
}
