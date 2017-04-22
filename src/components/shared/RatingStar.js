import React from 'react';
import PropTypes from 'prop-types';
import Star from 'material-ui/svg-icons/toggle/star';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import StarHalf from 'material-ui/svg-icons/toggle/star-half';

function RatingStar({
  onMouseMove,
  onClick,
  color,
  value,
}) {
  if (value <= 0) {
    return (
      <StarBorder
        onMouseMove={onMouseMove}
        onClick={onClick}
        color={color}
      />
    );
  } else if ((value) <= 0.5) {
    return (
      <StarHalf
        onMouseMove={onMouseMove}
        onClick={onClick}
        color={color}
      />
    );
  }

  return (
    <Star
      onMouseMove={onMouseMove}
      onClick={onClick}
      color={color}
    />
  );
}

RatingStar.propTypes = {
  onMouseMove: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  value: PropTypes.number.isRequired,
};

export default RatingStar;
