import React from 'react';
import { Helmet } from 'react-helmet';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import brand from 'dan-api/dummy/brand';
import logo from 'dan-images/logo.svg';
import styles from 'dan-components/Forms/user-jss';

class ComingSoon extends React.Component {

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const title = brand.name + ' - Coming Soon';
    const description = brand.desc;
    const { classes, deco } = this.props;
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
        <div className={classes.container}>
          <div className={classes.fullFormWrap}>
            <Paper
              className={
                classNames(
                  classes.fullWrap,
                  deco && classes.petal,
                  classes.centerV
                )
              }
            >
              <Typography variant="h2" className={classes.titleGradient} gutterBottom>
                Coming Soon
              </Typography>
              <Typography variant="h5" gutterBottom align="center">
                Use the existing app if it exists. All the apps will be ported here soon.
              </Typography>
              <section className={classes.pageFormWrap}>
                <div className={classNames(classes.lockForm, classes.centerAdornment)}>
                  <IconButton color="primary" className={classes.button} href="#"><a href="https://dxsale.network" target="_blank"><i className="ion-android-globe" /></a></IconButton>
                  <IconButton color="primary" className={classes.button} href="#"><a href="https://twitter.com/dxsale" target="_blank"><i className="ion-social-twitter" /></a></IconButton>
                  <IconButton color="primary" className={classes.button} href="#"><a href="https://t.me/dxsale" target="_blank"><i className="ion-paper-airplane" /></a></IconButton>
                </div>
              </section>
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}

ComingSoon.propTypes = {
  classes: PropTypes.object.isRequired,
  deco: PropTypes.bool.isRequired,
};

const reducerUi = 'ui';
const FormInit = connect(
  state => ({
    force: state,
    deco: state.getIn([reducerUi, 'decoration'])
  }),
)(ComingSoon);

export default withStyles(styles)(FormInit);
