import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { CalculatorWidget } from 'dan-components';

const styles = {
  miniWrap: {
    margin: '0 auto',
    maxWidth: 480
  }
};

class CalculatorMini extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.miniWrap}>
        <CalculatorWidget />
      </div>
    );
  }
}

CalculatorMini.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CalculatorMini);
