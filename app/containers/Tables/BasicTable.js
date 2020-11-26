import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { SourceReader, PapperBlock } from 'dan-components';
import {
  StrippedTable,
  HoverTable,
  BorderedTable,
  TrackingTable,
  StatusLabel,
  StatusColorRow,
  EmptyTable
} from './demos';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class BasicTable extends Component {
  render() {
    const { classes } = this.props;
    const title = brand.name + ' - Table';
    const description = brand.desc;
    const docSrc = 'containers/Tables/demos/';
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
        <PapperBlock title="Stripped Table" whiteBg icon="ios-menu-outline" desc="They (allegedly) aid usability in reading tabular data by offering the user a coloured means of separating and differentiating rows from one another">
          <div>
            <StrippedTable />
            <SourceReader componentName={docSrc + 'StrippedTable.js'} />
          </div>
        </PapperBlock>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <PapperBlock title="Hover Table" noMargin whiteBg icon="md-contrast" desc="Hover tables is addition option that allows you to see what row you selected">
                <div>
                  <HoverTable />
                  <SourceReader componentName={docSrc + 'HoverTable.js'} />
                </div>
              </PapperBlock>
            </Grid>
            <Grid item md={6} xs={12}>
              <PapperBlock title="Bordered Table" whiteBg icon="ios-grid-outline" desc="Old is gold, here is old fashion bordered table, we tweaked it a bit so that the headings looks more prominent.">
                <div>
                  <BorderedTable />
                  <SourceReader componentName={docSrc + 'BorderedTable.js'} />
                </div>
              </PapperBlock>
            </Grid>
          </Grid>
        </div>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <PapperBlock whiteBg icon="ios-list" noMargin title="Status Table with Label" desc="">
                <div>
                  <StatusLabel />
                  <SourceReader componentName={docSrc + 'StatusLabel.js'} />
                </div>
              </PapperBlock>
            </Grid>
            <Grid item md={6} xs={12}>
              <PapperBlock whiteBg icon="ios-color-palette-outline" title="Coloured Row" desc="">
                <div>
                  <StatusColorRow />
                  <SourceReader componentName={docSrc + 'StatusColorRow.js'} />
                </div>
              </PapperBlock>
            </Grid>
          </Grid>
        </div>
        <div className={classes.root}>
          <TrackingTable />
          <SourceReader componentName={docSrc + 'TrackingTable.js'} />
        </div>
        <PapperBlock title="Empty Table" whiteBg icon="ios-square-outline" desc="UI Table when no data to be shown">
          <div>
            <EmptyTable />
            <SourceReader componentName={docSrc + 'EmptyTable.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

BasicTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicTable);
