import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import LinearProgress from '@material-ui/core/LinearProgress';
import Chip from '@material-ui/core/Chip';
import Check from '@material-ui/icons/Check';
import Type from 'dan-styles/Typography.scss';
import styles from 'dan-components/Profile/profile-jss';

function PerformanceWidget(props) {
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
          className={classes.chip}
          color="primary"
        />
      </Grid>
      <LinearProgress variant="determinate" className={classes.progress} value={60} />
    </Paper>
  );
}

PerformanceWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PerformanceWidget);
