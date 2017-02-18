import React, { cloneElement } from 'react';

import css from './custom-grid-tile-styles.css';

const styles = {
  root: {
    position: 'relative',
    display: 'block',
    height: '100%',
    overflow: 'hidden',
    animation: 'height 5s ease'
  },
  children: {
    height: 'auto',
    transform: 'translateY(-50%)',
    position: 'relative',
    left: '0px',
    width: '100%',
    top: '50%'
  },
  mask: {
    position: 'absolute',
    left: '0px',
    right: '0px',
    bottom: '0px',
    height: '68px',
    background: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    alignItems: 'center',
  },
  titleBar: {
    flexGrow: 1,
    marginLeft: '16px',
    marginRight: '0px',
    color: 'rgb(255, 255, 255)',
    overflow: 'hidden',
  },
  title: {
    fontSize: '16px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
  subtitle: {
    fontSize: '12px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
  actionIcon: {
    order: 1,
  }
};

const CustomGridTile = ({
  title,
  subtitle,
  actionIcon,
  children,
  ...rest,
}) => {
  return (
    <div {...rest} className={css.root}>
      {!!children && cloneElement(children, { className: css.children })}
      <div
        className={css.mask}
      >
        <div
          className={css.titleBar}
        >
          {!!title && (
            <div
              className={css.title}
            >
              {title}
            </div>
          )}
          {!!subtitle && (
            <div
              className={css.subtitle}
            >
              {subtitle}
            </div>
          )}
        </div>
        {!!actionIcon && (
          <div
            className={css.actionIcon}
          >
            {actionIcon}
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomGridTile;
