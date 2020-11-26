import React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';
import Type from 'dan-styles/Typography.scss';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Check from '@material-ui/icons/Check';
import { withStyles } from '@material-ui/core/styles';
import styles from './widget-jss';

function ProgressWidget(props) {
  const { classes } = props;
  return (
    <Paper className={classes.styledPaper} elevation={4}>
      <Typography className={classes.title} variant="h5" component="h3">
        <span className={Type.light}>Profile Strength: </span>
        <span className={Type.bold}>Intermediate</span>
      </Typography>
      <Grid container justify="center">
        <Chip
          avatar={(
            <Avatar>
              <Check />
            </Avatar>
          )}
          label="60% Progress"
          className={classes.chipProgress}
          color="primary"
        />
      </Grid>
      <LinearProgress variant="determinate" className={classes.progressWidget} value={60} />
    </Paper>
  );
}

ProgressWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProgressWidget);
