import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Event from './Event';
import * as actions from './event_actions';

class EventContainer extends Component {
  componentWillMount() {
    const { fetchInitialData, fetchMyRating, isAuthenticated, match: { params: { eventId } } } = this.props;
    fetchInitialData(eventId)
      .then(() => {
        if (isAuthenticated) {
          fetchMyRating(eventId);
        }
      });
  }

  componentWillUnmount() {
    this.props.clearState();
  }

  onRate = (rating) => {
    const { match: { params: { eventId } } } = this.props;
    this.props.rateEvent(eventId, rating);
  };

  render() {
    return (
      <Event
        {...this.props}
        onRate={this.onRate}
      />
    );
  }
}

EventContainer.propTypes = {
  fetchInitialData: PropTypes.func.isRequired,
  fetchMyRating: PropTypes.func.isRequired,
  clearState: PropTypes.func.isRequired,
  rateEvent: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    event: state.event.event,
    averageRating: state.event.averageRating,
    myRating: state.event.myRating,
    voteCount: state.event.voteCount,
    isAuthenticated: state.authentication.isAuthenticated,
  };
}

export default withRouter(connect(
  mapStateToProps,
  actions
)(EventContainer));
