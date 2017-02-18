import React, { Component } from 'react';
import { GridTile } from 'material-ui/GridList';
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
    const { tileOptions, children, hoveredStyle, hoveredTitleStyle } = this.props;

    const style = this.state.hovered
      ? { ...tileOptions.style, ...hoveredStyle, animation: 'max-height 5s ease' }
      : { ...tileOptions.style, animation: 'max-height 5s ease' };
    const titleStyle = this.state.hovered
      ? { ...tileOptions.titleStyle, ...hoveredTitleStyle } : tileOptions.titleStyle;

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

export default ExpandingGridTile;
