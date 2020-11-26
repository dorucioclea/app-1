import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    overflow: 'hidden',
    padding: `0 ${theme.spacing(3)}px`,
  },
  wrapper: {
    maxWidth: 400,
  },
  paper: {
    margin: theme.spacing(1),
    padding: theme.spacing(2),
    backgroundColor: theme.palette.secondary.light,
  },
  typography: {
    color: theme.palette.secondary.dark,
  }
});

function AutoGridNoWrap(props) {
  const { classes } = props;
  const message = `Truncation should be conditionally applicable on this long line of text
                    as this is a much longer line than what the container can support. `;

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap">
            <Grid item>
              <Avatar>W</Avatar>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography className={classes.typography} noWrap>{message}</Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap">
            <Grid item>
              <Avatar>W</Avatar>
            </Grid>
            <Grid item xs>
              <Typography className={classes.typography} noWrap>{message}</Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.paper}>
          <Grid container wrap="nowrap">
            <Grid item>
              <Avatar>W</Avatar>
            </Grid>
            <Grid item xs>
              <Typography className={classes.typography}>{message}</Typography>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}

AutoGridNoWrap.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AutoGridNoWrap);
