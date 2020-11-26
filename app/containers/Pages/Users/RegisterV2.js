import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import { withStyles } from '@material-ui/core/styles';
import brand from 'dan-api/dummy/brand';
import { RegisterFormV2 } from 'dan-components';
import styles from 'dan-components/Forms/user-jss';

class RegisterV2 extends React.Component {
  state = {
    valueForm: []
  }

  submitForm(values) {
    setTimeout(() => {
      this.setState({ valueForm: values });
      console.log(`You submitted:\n\n${this.state.valueForm}`); // eslint-disable-line
      window.location.href = '/app';
    }, 500); // simulate server latency
  }

  render() {
    const title = brand.name + ' - Register Version 2';
    const description = brand.desc;
    const { classes } = this.props;
    return (
      <div className={classes.rootFull}>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <div className={classes.containerSide}>
          <Hidden smDown>
            <div className={classes.opening}>
              <Typography variant="h3" component="h1" className={classes.opening} gutterBottom>Hi...nice to meet you</Typography>
              <Typography variant="h6" component="p" className={classes.subpening}>Just register to join with us</Typography>
            </div>
          </Hidden>
          <div className={classes.sideFormWrap}>
            <RegisterFormV2 onSubmit={(values) => this.submitForm(values)} />
          </div>
        </div>
      </div>
    );
  }
}

RegisterV2.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegisterV2);
