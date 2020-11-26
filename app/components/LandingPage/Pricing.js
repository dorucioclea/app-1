import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PricingCard from '../CardPaper/PricingCard';
import Title from './Title';
import styles from './landingStyle-jss';

function Pricing(props) {
  const { classes, slideMode } = props;
  return (
    <div className={classes.pricing}>
      <div className={slideMode ? classes.fullWidth : classes.container}>
        <Title title="Pricing" desc="Cras convallis lacus orci, tristique tincidunt magna consequat in." align="center" monocolor={slideMode && true} />
        <Grid container className={classes.root} spacing={5}>
          <Grid item md={4} xs={12}>
            <PricingCard
              title="For Learn"
              price="FREE"
              tier="free"
              feature={['Vel fermentum', 'Aenean facilisis vitae', 'Vestibulum nec']}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <PricingCard
              title="Recomended"
              price="$24"
              tier="cheap"
              feature={['Vel fermentum', 'Aenean facilisis vitae', 'Vestibulum nec', 'Pellentesque ac bibendum', 'Vivamus sit amet']}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <PricingCard
              title="Extended"
              price="$200"
              tier="expensive"
              feature={['Vel fermentum', 'Aenean facilisis vitae', 'Vestibulum nec', 'Pellentesque ac bibendum', 'Vivamus sit amet']}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

Pricing.propTypes = {
  classes: PropTypes.object.isRequired,
  slideMode: PropTypes.bool,
};

Pricing.defaultProps = {
  slideMode: false
};

export default withStyles(styles)(Pricing);
