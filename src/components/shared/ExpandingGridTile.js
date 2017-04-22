import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomGridTile from './CustomGridTile';

class ExpandingGridTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false,
    };
  }

  handleMouseEnter() {
    this.setState({ hovered: true });
  }

  handleMouseLeave() {
    this.setState({ hovered: false });
  }

  render() {
    const { tileOptions, children } = this.props;

    return (
      <CustomGridTile
        {...tileOptions}
        onMouseEnter={this.handleMouseEnter.bind(this)}
        onMouseLeave={this.handleMouseLeave.bind(this)}
      >
        {children}
      </CustomGridTile>
    );
  }
}

ExpandingGridTile.propTypes = {
  tileOptions: PropTypes.object,
  children: PropTypes.node,
};

export default ExpandingGridTile;
