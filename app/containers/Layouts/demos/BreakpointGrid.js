import React from 'react';
import PropTypes from 'prop-types';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import withWidth from '@material-ui/core/withWidth';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: 'flex',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    flex: '1 0 auto',
    margin: theme.spacing(1),
  },
});

function GridIntegration(props) {
  const { classes, width } = props;

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs hidden={{ xsUp: true }}>
            <Paper className={classes.paper}>xsUp</Paper>
          </Grid>
          <Grid item xs hidden={{ smUp: true }}>
            <Paper className={classes.paper}>smUp</Paper>
          </Grid>
          <Grid item xs hidden={{ mdUp: true }}>
            <Paper className={classes.paper}>mdUp</Paper>
          </Grid>
          <Grid item xs hidden={{ lgUp: true }}>
            <Paper className={classes.paper}>lgUp</Paper>
          </Grid>
          <Grid item xs hidden={{ xlUp: true }}>
            <Paper className={classes.paper}>xlUp</Paper>
          </Grid>
        </Grid>
      </div>
      <Typography variant="caption" align="center">
        Current width:&nbsp;
        {width}
      </Typography>
    </div>
  );
}

GridIntegration.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default compose(withStyles(styles), withWidth())(GridIntegration);
