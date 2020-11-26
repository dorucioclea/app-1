import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import Grid from '@material-ui/core/Grid';
import { SourceReader, PapperBlock } from 'dan-components';
import {
  RadarSimple,
  DoubleRadar
} from './demos';

class RadarCharts extends React.Component {
  render() {
    const title = brand.name + ' - Chart';
    const description = brand.desc;
    const docSrc = 'containers/Charts/demos/';
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
          <Grid item md={6} xs={12}>
            <PapperBlock title="Simple Radar Chart" icon="ios-analytics-outline" desc="" overflowX>
              <div>
                <RadarSimple />
                <SourceReader componentName={docSrc + 'RadarSimple.js'} />
              </div>
            </PapperBlock>
          </Grid>
          <Grid item md={6} xs={12}>
            <PapperBlock title="Double Radar Chart" icon="ios-analytics-outline" desc="" overflowX>
              <div>
                <DoubleRadar />
                <SourceReader componentName={docSrc + 'DoubleRadar.js'} />
              </div>
            </PapperBlock>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default RadarCharts;
