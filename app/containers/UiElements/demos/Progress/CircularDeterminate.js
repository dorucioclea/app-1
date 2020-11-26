import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  progress: {
    margin: theme.spacing(2),
  },
});

class CircularDeterminate extends React.Component {
  state = {
    completed: 0,
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed === 100 ? 0 : completed + 1 });
  };

  timer;

  render() {
    const { classes } = this.props;
    const { completed } = this.state;
    return (
      <div>
        <CircularProgress
          className={classes.progress}
          variant="determinate"
          value={completed}
        />
        <CircularProgress
          className={classes.progress}
          variant="determinate"
          size={50}
          value={completed}
        />
        <CircularProgress
          className={classes.progress}
          color="secondary"
          variant="determinate"
          value={completed}
        />
        <CircularProgress
          className={classes.progress}
          color="secondary"
          variant="determinate"
          size={50}
          value={completed}
        />
      </div>
    );
  }
}

CircularDeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CircularDeterminate);
