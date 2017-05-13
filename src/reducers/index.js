import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { i18nReducer } from 'react-redux-i18n';
import { reducer as formReducer } from 'redux-form';

import authentication from '../components/login/login-reducer';
import signup from '../components/signup/signup-reducer';
import event from '../components/event/event-reducer';
import events from '../components/event/events-reducer';
import profile from '../components/profile/profile-reducer';

export default combineReducers({
  routing: routerReducer,
  i18n: i18nReducer,
  form: formReducer,
  authentication,
  signup,
  event,
  events,
  profile,
});
