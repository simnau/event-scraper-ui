import React, { Component } from 'react';
import { yellow800 } from 'material-ui/styles/colors';

import RatingStar from './RatingStar';

class Rating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
    };

    this.handleMouseLeave = this.onMouseLeave.bind(this);
    this.handleMouseMove = this.onMouseMove.bind(this);
    this.handleRate = this.onRate.bind(this);
  }

  onRate() {
    if (this.props.onRate && !this.props.rating) {
      this.props.onRate(this.state.rating);
    }
  }

  onMouseLeave() {
    this.setState({
      rating: 0,
    });
  }

  onMouseMove(event, index) {
    if (event.target.offsetX < 0) {
      return;
    }

    const ratio = event.nativeEvent.offsetX / event.target.getBBox().width;

    const rating = ratio <= 0.5 ? index + 0.5 : index + 1;
    this.setState({
      rating,
    });
  }

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

Rating.defaultProps = {
  starCount: 5,
};

export default Rating;
