import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import routes from './routes';
import configureStore from './store/configureStore';
import { checkToken } from './components/login/login_actions';
import en from './localization/messages-en';
import './styles/styles.scss';

require('./favicon.ico');

injectTapEventPlugin();
const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(hashHistory, store);

store.dispatch(checkToken()); // Check if user is already logged in.
store.dispatch(loadTranslations({ ...en }));
store.dispatch(setLocale('en'));

syncTranslationWithStore(store);

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={history} routes={routes} />
    </MuiThemeProvider>
  </Provider>, document.getElementById('app'),
);
