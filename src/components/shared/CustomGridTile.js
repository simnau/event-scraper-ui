import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';

import css from './custom-grid-tile-styles.css';

function CustomGridTile({
  title,
  subtitle,
  actionIcon,
  children,
  ...rest,
}) {
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
}

CustomGridTile.propTypes = {
  title: PropTypes.node,
  subtitle: PropTypes.node,
  actionIcon: PropTypes.node,
  children: PropTypes.node,
};

export default CustomGridTile;
