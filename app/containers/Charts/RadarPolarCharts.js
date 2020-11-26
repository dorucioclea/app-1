import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { PapperBlock, SourceReader } from 'dan-components';
import { RadarBasic, PolarBasic } from './demos';

class RadarPolarCharts extends React.Component {
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
        <PapperBlock title="Line Basic Example" icon="ios-pie-outline" desc="">
          <RadarBasic />
          <SourceReader componentName={docSrc + 'RadarBasic.js'} />
        </PapperBlock>
        <PapperBlock title="Polar Example" icon="ios-pie-outline" desc="">
          <PolarBasic />
          <SourceReader componentName={docSrc + 'PolarBasic.js'} />
        </PapperBlock>
      </div>
    );
  }
}

export default RadarPolarCharts;
