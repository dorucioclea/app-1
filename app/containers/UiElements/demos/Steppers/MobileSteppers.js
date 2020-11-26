import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

const styles = theme => ({
  root: {
    [theme.breakpoints.up('sm')]: {
      width: 400,
      margin: '0 auto'
    },
    flexGrow: 1,
  },
  title: {
    textAlign: 'center',
    margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,
  },
});

class MobileSteppers extends React.Component {
  state = {
    activeStepDots: 0,
    activeStepLine: 0,
  };

  handleNextDots = () => {
    const { activeStepDots } = this.state;
    this.setState({
      activeStepDots: activeStepDots + 1,
    });
  };

  handleBackDots = () => {
    const { activeStepDots } = this.state;
    this.setState({
      activeStepDots: activeStepDots - 1,
    });
  };

  handleNextLine = () => {
    const { activeStepLine } = this.state;
    this.setState({
      activeStepLine: activeStepLine + 1,
    });
  };

  handleBackLine = () => {
    const { activeStepLine } = this.state;
    this.setState({
      activeStepLine: activeStepLine - 1,
    });
  };

  render() {
    const { classes, theme } = this.props;
    const { activeStepDots, activeStepLine } = this.state;

    return (
      <Grid container spacing={2}>
        <Grid item container justify="center" direction="column" md={6}>
          <Typography variant="button" className={classes.title}>
            Mobile Stepper - Dots
          </Typography>
          <MobileStepper
            variant="dots"
            steps={6}
            position="static"
            activeStep={activeStepDots}
            className={classes.root}
            nextButton={(
              <Button size="small" onClick={this.handleNextDots} disabled={activeStepDots === 5}>
                Next
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            )}
            backButton={(
              <Button size="small" onClick={this.handleBackDots} disabled={activeStepDots === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                Back
              </Button>
            )}
          />
        </Grid>
        <Grid item container justify="center" direction="column" md={6}>
          <Typography variant="button" className={classes.title}>
            Mobile Stepper - Progress
          </Typography>
          <MobileStepper
            variant="progress"
            steps={6}
            position="static"
            activeStep={activeStepLine}
            className={classes.root}
            nextButton={(
              <Button size="small" onClick={this.handleNextLine} disabled={activeStepLine === 5}>
                Next
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            )}
            backButton={(
              <Button size="small" onClick={this.handleBackLine} disabled={activeStepLine === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                Back
              </Button>
            )}
          />
        </Grid>
      </Grid>
    );
  }
}

MobileSteppers.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MobileSteppers);
