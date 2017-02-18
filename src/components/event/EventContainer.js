import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Event from './Event';
import * as actions from './event_actions';

class EventContainer extends Component {
  onRate(rating) {
    const { params: { eventId } } = this.props;
    this.props.rateEvent(eventId, rating);
  }

  constructor(props) {
    super(props);
    this.handleRate = this.onRate.bind(this);
  }

  componentWillMount() {
    const { params: { eventId } } = this.props;
    this.props.fetchInitialData(eventId);
  }

  componentWillUnmount() {
    this.props.clearState();
  }

  render() {
    return (
      <Event
        {...this.props}
        onRate={this.handleRate}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    event: state.event.event,
    averageRating: state.event.averageRating,
    myRating: state.event.myRating,
    voteCount: state.event.voteCount,
  };
}

export default withRouter(connect(
  mapStateToProps,
  actions
)(EventContainer));
