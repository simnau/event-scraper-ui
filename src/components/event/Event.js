import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import { Row, Col } from 'react-flexbox-grid';

import Rating from '../shared/Rating';

const styles = {
  root: {

  },
  row: {
    fontFamily: 'Roboto, sans-serif',
  },
  label: {
    textAlign: 'right',
    fontWeight: 'bold',
  },
  titleContainer: {
    fontFamily: 'Roboto, sans-serif',
    textAlign: 'left',
  },
  title: {
    marginTop: 0,
  },
  eventContainer: {
    paddingTop: '0.67em',
    paddingLeft: 40,
  }
};

function Event({
  event,
  averageRating,
  voteCount,
  myRating,
  onRate,
}) {
  return (
    <Paper
      style={styles.root}
      zDepth={1}
    >
      {!event && (
        <div>
          Loading...
        </div>
      )}
      {!!event && (
        <div style={styles.eventContainer}>
          <div style={styles.titleContainer}>
            <Row>
              <Col sm>
                <h3 style={styles.title}>{event.title}</h3>
              </Col>
              <Col sm>
                <Rating
                  rating={myRating}
                  averageRating={averageRating}
                  voteCount={voteCount}
                  onRate={onRate}
                />
              </Col>
            </Row>
          </div>
          <Row style={styles.row}>
            <Col sm={1} style={styles.label}>
              Title
            </Col>
            <Col sm={9}>
              {event.title}
            </Col>
          </Row>
        </div>
      )}
    </Paper>
  );
}

Event.propTypes = {
  event: PropTypes.object,
  averageRating: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  voteCount: PropTypes.number,
  myRating: PropTypes.number,
  onRate: PropTypes.func,
};

export default Event;
