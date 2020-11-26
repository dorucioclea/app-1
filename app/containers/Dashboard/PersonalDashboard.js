import React from 'react';
import PropTypes from 'prop-types';
import brand from 'dan-api/dummy/brand';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import {
  SliderWidget,
  CounterIconsWidget,
  PerformanceChartWidget,
  DateWidget,
  TaskWidget,
  WeatherWidget,
  ContactWidget,
  TimelineWidget,
  FilesWidget,
} from 'dan-components';
import styles from './dashboard-jss';


function PersonalDashboard(props) {
  const title = brand.name + ' - Personal Dashboard';
  const description = brand.desc;
  const { classes } = props;
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      {/* 1st Section */}
      <Grid container spacing={3} className={classes.root}>
        <Grid item md={6} xs={12}>
          <CounterIconsWidget />
        </Grid>
        <Grid item md={6} sm={12} xs={12}>
          <div className={classes.sliderWrap}>
            <SliderWidget />
          </div>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      {/* 2nd Section */}
      <Grid container spacing={2} className={classes.root}>
        <Grid item xs={12}>
          <PerformanceChartWidget />
        </Grid>
      </Grid>
      {/* 3rd Section */}
      <Grid container spacing={3} className={classes.root}>
        <Grid item md={6} xs={12}>
          <Divider className={classes.divider} />
          <ContactWidget />
          <Divider className={classes.divider} />
          <TaskWidget />
        </Grid>
        <Grid item md={6} xs={12}>
          <Hidden mdDown>
            <Divider className={classes.divider} />
          </Hidden>
          <WeatherWidget />
          <Divider className={classes.divider} />
          <DateWidget />
          <Divider className={classes.divider} />
          <TimelineWidget />
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <FilesWidget />
    </div>
  );
}

PersonalDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PersonalDashboard);
