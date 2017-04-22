/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { yellow800 } from 'material-ui/styles/colors';

import RatingStar from './RatingStar';

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
    };
  }

  handleRate = () => {
    if (this.props.onRate && !this.props.rating) {
      this.props.onRate(this.state.rating);
    }
  };

  handleMouseLeave = () => {
    this.setState({
      rating: 0,
    });
  };

  handleMouseMove = (event, index) => {
    if (event.target.offsetX < 0) {
      return;
    }

    const ratio = event.nativeEvent.offsetX / event.target.getBBox().width;

    const rating = ratio <= 0.5 ? index + 0.5 : index + 1;
    this.setState({
      rating,
    });
  };

  render() {
    const { starCount, averageRating, voteCount, rating } = this.props;
    const { rating: stateRating } = this.state;

    return (
      <div>
        <div
          onMouseLeave={this.handleMouseLeave}
        >
          {new Array(starCount).fill().map((_, index) => {
            let value;

            if (rating) {
              value = rating - index;
            } else if (!stateRating) {
              value = averageRating - index;
            } else {
              value = stateRating - index;
            }

            const color = value <= 0 ? null : yellow800;

            return (
              <RatingStar
                key={`${index}-${stateRating}`}
                onMouseMove={event => this.handleMouseMove(event, index)}
                onClick={this.handleRate}
                value={value}
                color={color}
              />
            );
          })}
        </div>
        <div>
          {averageRating} ({voteCount} votes)
        </div>
      </div>
    );
  }
}

Rating.propTypes = {
  onRate: PropTypes.func,
  rating: PropTypes.number,
  starCount: PropTypes.number.isRequired,
  averageRating: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  voteCount: PropTypes.number,
};

Rating.defaultProps = {
  starCount: 5,
};

export default Rating;
