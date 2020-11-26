import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TaskWidget } from 'dan-components';

const styles = {
  miniWrap: {
    margin: '0 auto',
    maxWidth: 480
  }
};

class TodoListMini extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.miniWrap}>
        <TaskWidget />
      </div>
    );
  }
}

TodoListMini.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TodoListMini);
