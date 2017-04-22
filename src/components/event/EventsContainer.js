import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Events from './Events';
import * as actions from './events_actions';

class EventsContainer extends Component {
  componentWillMount() {
    this.props.fetchEvents();
  }

  componentWillUnmount() {
    this.props.clearState();
  }

  handleViewEvent = (eventId) => {
    this.props.history.push(`/event/${eventId}`);
  };

  render() {
    return (
      <Events
        {...this.props}
        onViewEvent={this.handleViewEvent}
      />
    );
  }
}

EventsContainer.propTypes = {
  fetchEvents: PropTypes.func.isRequired,
  clearState: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    events: state.events.events,
  };
}

export default withRouter(connect(
  mapStateToProps,
  actions,
)(EventsContainer));
