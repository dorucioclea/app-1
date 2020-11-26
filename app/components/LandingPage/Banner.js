import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import link from 'dan-api/ui/link';
import styles from './landingStyle-jss';
import BannerParallax from './BannerParallax';

function Banner(props) {
  const { classes, slideMode } = props;

  const reducer = 'ui';
  const gradient = useSelector(state => state.getIn([reducer, 'gradient']));
  return (
    <div
      className={
        classNames(
          classes.banner,
          gradient ? classes.gradient : classes.solid,
          slideMode ? classes.out : classes.fit
        )
      }
    >
      {!slideMode && <BannerParallax />}
      <div className={!slideMode ? classes.container : ''}>
        <Typography component="h2" variant="h2" gutterBottom>Dandelion Pro</Typography>
        <Typography component="p" variant="h5" gutterBottom>A React.js Website Template </Typography>
        <div className={classes.btnArea}>
          <Button
            size="large"
            variant="outlined"
            className={classNames(classes.button, classes.btnLight)}
            href={link.buy}
            target="_blank"
          >
            Buy Now
          </Button>
          <Button
            size="large"
            variant="contained"
            color="secondary"
            className={classes.button}
            component={Link}
            to={link.dashboard}
          >
            See Demo
          </Button>
        </div>
        <div className={classes.previewApp}>
          <Hidden smDown>
            <div className={classNames(classes.m2, classes.screen, slideMode ? classes.bottom : '')}>
              <img src="/images/screen/crypto.jpg" alt="" />
            </div>
          </Hidden>
          <div className={classNames(classes.m1, classes.screen)}>
            <img src="/images/screen/personal.jpg" alt="personal dashboard" />
          </div>
          <Hidden smDown>
            <div className={classNames(classes.m3, classes.screen, slideMode ? classes.bottom : '')}>
              <img src="/images/screen/crm.jpg" alt="crypto dashboard" />
            </div>
          </Hidden>
        </div>
      </div>
    </div>
  );
}

Banner.propTypes = {
  classes: PropTypes.object.isRequired,
  slideMode: PropTypes.bool
};

Banner.defaultProps = {
  slideMode: false
};

const MemoedBanner = memo(Banner);
export default (withStyles(styles)(MemoedBanner));
