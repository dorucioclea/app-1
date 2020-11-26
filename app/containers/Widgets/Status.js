import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import brand from 'dan-api/dummy/brand';
import Grid from '@material-ui/core/Grid';
import { SourceReader, PapperBlock } from 'dan-components';
import {
  WeatherStatus,
  DateTimeStatus,
  ActivityStatus,
  PerformanceStatus,
  LocationStatus,
  NameStatus,
  FilesStatus
} from './demos';

const styles = {
  miniWrap: {
    margin: '0 auto',
    maxWidth: 640
  }
};

class Status extends React.Component {
  render() {
    const title = brand.name + ' - Widgets';
    const description = brand.desc;
    const docSrc = 'containers/Widgets/demos/';
    const { classes } = this.props;
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
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <PapperBlock title="Date & Time" icon="ios-clock-outline" desc="Show current time in analog and digital format, and also current date with calendar">
              <div className={classes.miniWrap}>
                <DateTimeStatus />
                <SourceReader componentName={docSrc + 'DateTimeStatus.js'} />
              </div>
            </PapperBlock>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <PapperBlock title="Weather" whiteBg icon="ios-cloud-outline" desc="No need to go outside for check weather condition, just stay in the room then this widget will do that">
              <div>
                <WeatherStatus />
                <SourceReader componentName={docSrc + 'WeatherStatus.js'} />
              </div>
            </PapperBlock>
            <PapperBlock title="Activity" icon="ios-git-merge" desc="This widget will help You to remember and review what you've done every time.">
              <div>
                <ActivityStatus />
                <SourceReader componentName={docSrc + 'ActivityStatus.js'} />
              </div>
            </PapperBlock>
          </Grid>
          <Grid item md={6} xs={12}>
            <PapperBlock title="Progress" whiteBg icon="ios-bicycle" desc="See your profile progress on this widget">
              <div>
                <PerformanceStatus />
                <SourceReader componentName={docSrc + 'PerformanceStatus.js'} />
              </div>
            </PapperBlock>
            <PapperBlock title="Map" whiteBg icon="ios-navigate-outline" desc="This is a sample google map widget. There so many API Google Maps features to implemented with this widget">
              <div>
                <LocationStatus />
                <SourceReader componentName={docSrc + 'LocationStatus.js'} />
              </div>
            </PapperBlock>
            <div>
              <NameStatus />
              <SourceReader componentName={docSrc + 'NameStatus.js'} />
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <PapperBlock title="Files and Storage" icon="ios-folder-open-outline" desc="Show Your storage space and files">
              <div>
                <FilesStatus />
                <SourceReader componentName={docSrc + 'LocationStatus.js'} />
              </div>
            </PapperBlock>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Status.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Status);
