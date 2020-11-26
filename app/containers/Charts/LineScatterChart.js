import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { PapperBlock, SourceReader } from 'dan-components';
import {
  LineBasic,
  LineDynamic,
  BubleBasic,
  ScatterBasic,
} from './demos';

class LineScatterChart extends React.Component {
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
        <PapperBlock title="Line Basic Example" icon="ios-analytics-outline" desc="">
          <LineBasic />
          <SourceReader componentName={docSrc + 'LineBasic.js'} />
        </PapperBlock>
        <PapperBlock title="Line Dynamic" icon="ios-analytics-outline" desc="Random Animated Line Example">
          <LineDynamic />
          <SourceReader componentName={docSrc + 'LineDynamic.js'} />
        </PapperBlock>
        <PapperBlock title="Buble Chart Basic" icon="ios-analytics-outline" desc="">
          <BubleBasic />
          <SourceReader componentName={docSrc + 'BubleBasic.js'} />
        </PapperBlock>
        <PapperBlock title="Scatter Example" icon="ios-analytics-outline" desc="">
          <ScatterBasic />
          <SourceReader componentName={docSrc + 'ScatterBasic.js'} />
        </PapperBlock>
      </div>
    );
  }
}

export default LineScatterChart;
