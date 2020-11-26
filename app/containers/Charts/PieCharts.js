import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import Grid from '@material-ui/core/Grid';
import { SourceReader, PapperBlock } from 'dan-components';
import {
  PieSimple,
  PieCustomShape,
  PieCustomLabel,
  RadialSimple
} from './demos';

class PieCharts extends React.Component {
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
            <PapperBlock title="Custom Shape Pie Chart" icon="ios-pie-outline" desc="" overflowX>
              <div>
                <PieCustomShape />
                <SourceReader componentName={docSrc + 'PieCustomShape.js'} />
              </div>
            </PapperBlock>
          </Grid>
          <Grid item md={6} xs={12}>
            <PapperBlock title="Custom Shape Pie Chart" icon="ios-pie-outline" desc="" overflowX>
              <div>
                <PieCustomLabel />
                <SourceReader componentName={docSrc + 'PieCustomLabel.js'} />
              </div>
            </PapperBlock>
          </Grid>
        </Grid>
        <PapperBlock title="Simple Pie Chart" icon="ios-pie-outline" desc="" overflowX>
          <div>
            <PieSimple />
            <SourceReader componentName={docSrc + 'PieSimple.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Radial Bar Chart" icon="ios-pie-outline" desc="" overflowX>
          <div>
            <RadialSimple />
            <SourceReader componentName={docSrc + 'PieSimple.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default PieCharts;
