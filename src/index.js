import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import Login from './components/login/LoginContainer';
import SignUp from './components/signup/SignUpContainer';
import App from './components/AppContainer';

import configureStore from './store/configureStore';
import { checkToken } from './components/login/login_actions';
import en from './localization/messages-en';
import './styles/styles.scss';

require('./favicon.ico');

injectTapEventPlugin();
const store = configureStore();

store.dispatch(checkToken()); // Check if user is already logged in.
store.dispatch(loadTranslations({ ...en }));
store.dispatch(setLocale('en'));

syncTranslationWithStore(store);

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/" component={App} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  </Provider>, document.getElementById('app'),
);
