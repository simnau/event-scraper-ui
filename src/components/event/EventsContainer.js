import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Events from './Events';
import * as actions from './events_actions';

class EventsContainer extends Component {
  viewEvent(eventId) {
    this.props.router.push(`/event/${eventId}`);
  }

  constructor(props) {
    super(props);
    this.handleViewEvent = this.viewEvent.bind(this);
  }

  componentWillMount() {
    this.props.fetchEvents();
  }

  componentWillUnmount() {
    this.props.clearState();
  }

  render() {
    return (
      <Events
        {...this.props}
        onViewEvent={this.handleViewEvent}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    events: state.events.events,
  };
}

export default withRouter(connect(
  mapStateToProps,
  actions,
)(EventsContainer));
