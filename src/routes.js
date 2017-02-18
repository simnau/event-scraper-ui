import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Event from './components/event/EventContainer';
import Events from './components/event/EventsContainer';
import Test from './components/test/TestContainer';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="event" component={Events} />
      <Route path="event/:eventId" component={Event} />
      <Route path="test" component={Test} />
      <Route path="*" component={NotFoundPage} />
    </Route>
  </Route>
);
