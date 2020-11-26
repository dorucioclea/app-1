import React from 'react';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './thumbPreview-jss';

const TopNavigationThumb = props => {
  const { classes } = props;
  return (
    <Paper className={classes.thumb}>
      <div className={classes.appPreview}>
        <header>
          <ul className={classes.topNav}>
            {[0, 1, 2, 3].map(index => {
              if (index === 0) {
                return (
                  <li key={index.toString()} className={classes.active}>
                    <span />
                    <ul>
                      <li />
                      <li className={classes.active} />
                      <li />
                      <li />
                    </ul>
                  </li>
                );
              }
              return (
                <li key={index.toString()}><span /></li>
              );
            })}
          </ul>
        </header>
        <div className={classes.previewWrap}>
          <Paper className={classNames(classes.content, classes.full)}>
            <div className={classes.title} />
            <div className={classes.ctn2} />
            <div className={classes.ctn2} />
            <div className={classes.ctn2} />
            <div className={classes.ctn2} />
          </Paper>
        </div>
      </div>
    </Paper>
  );
};

TopNavigationThumb.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopNavigationThumb);
