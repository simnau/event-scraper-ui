import React from 'react';
import { GridList } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import EventImage from '../../images/curtain-s.png';
import ExpandingGridTile from '../shared/ExpandingGridTile';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 800,
    overflowY: 'auto',
  },
};

const Events = ({
  events,
  onViewEvent,
}) => {
  const tilesData = events.map((event) => {
    return {
      id: event._id,
      img: EventImage,
      title: event.title,
      location: `${event.city}, ${event.location}`
    };
  });

  return (
    <div style={styles.root}>
      <GridList
        cols={1}
        cellHeight={200}
        style={styles.gridList}
      >
        <Subheader>Events</Subheader>
        {tilesData.map((tile) => {
          const tileOptions = {
            title: <b>{tile.title}</b>,
            subtitle: <b>{tile.location}</b>,
            actionIcon: <IconButton><StarBorder color="white" /></IconButton>
          };

          return (
            <ExpandingGridTile
              key={tile.id}
              tileOptions={tileOptions}
              hoveredStyle={{ maxHeight: '180px' }}
              hoveredTitleStyle={{ whiteSpace: 'normal' }}
            >
              <img
                src={tile.img}
                alt={tile.title}
                onClick={() => onViewEvent(tile.id)}
                style={{ cursor: 'pointer', }}
              />
            </ExpandingGridTile>
          );
        })}
      </GridList>
    </div>
  );
};

export default Events;
