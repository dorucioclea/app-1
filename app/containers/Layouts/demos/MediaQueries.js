import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/indigo';

const styles = theme => ({
  root: {
    padding: theme.spacing(1),
    '& h3': {
      color: theme.palette.common.white,
    },
    [theme.breakpoints.down('sm')]: {
      backgroundColor: red[500],
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: blue[500],
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: green[500],
    },
  },
});

function MediaQuery(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="subtitle1">down(sm): red</Typography>
      <Typography variant="subtitle1">up(md): blue</Typography>
      <Typography variant="subtitle1">up(lg): green</Typography>
    </div>
  );
}

MediaQuery.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaQuery);
