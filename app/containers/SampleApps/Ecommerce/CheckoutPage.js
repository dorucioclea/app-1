import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
  AddressForm,
  PaymentForm,
  Review,
  SideReview
} from 'dan-components';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(3),
  },
  stepper: {
    padding: `${theme.spacing(3)}px 0 ${theme.spacing(5)}px`,
  },
  finishMessage: {
    textAlign: 'center',
    maxWidth: 600,
    margin: '0 auto',
    '& h4': {
      color: theme.palette.primary.main,
      '& span': {
        textAlign: 'center',
        display: 'block',
        '& i': {
          fontSize: 120
        }
      }
    }
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
});

const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

function Checkout(props) {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const { classes, width } = props;
  return (
    <Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Fragment>
            {activeStep === steps.length ? (
              <div className={classes.finishMessage}>
                <Typography variant="h4" gutterBottom>
                  <span>
                    <i className="ion-ios-checkmark-outline" />
                  </span>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is&nbsp;
                  <strong>#2001539</strong>
                  .&nbsp;We have emailed your order confirmation, and will
                  send you an update when your order has shipped.
                </Typography>
                <Button variant="contained" color="primary" href="/app/pages/ecommerce" className={classes.button}>
                  Shoping Again
                </Button>
              </div>
            ) : (
              <Fragment>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={7}>
                    <Stepper activeStep={activeStep} className={classes.stepper} alternativeLabel={isWidthDown('sm', width)}>
                      {steps.map(label => (
                        <Step key={label}>
                          <StepLabel>
                            {label}
                          </StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                    {getStepContent(activeStep)}
                  </Grid>
                  <Grid item xs={12} md={5}>
                    <SideReview />
                  </Grid>
                </Grid>
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    size="large"
                  >
                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                  </Button>
                </div>
              </Fragment>
            )}
          </Fragment>
        </Paper>
      </main>
    </Fragment>
  );
}

Checkout.propTypes = {
  classes: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired,
};

export default withWidth()(withStyles(styles)(Checkout));
