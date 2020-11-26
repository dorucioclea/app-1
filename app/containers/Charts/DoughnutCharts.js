import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { PapperBlock, SourceReader } from 'dan-components';
import { DoughnutBasic, DoughnutDynamic, PieSimple2 } from './demos';

class DoughnutCharts extends React.Component {
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
        <PapperBlock title="Doughnut Example" icon="ios-pie-outline" desc="">
          <DoughnutBasic />
          <SourceReader componentName={docSrc + 'DoughnutBasic.js'} />
        </PapperBlock>
        <PapperBlock title="Dynamicly Doughnut" icon="ios-pie-outline" desc="Dynamicly refreshed Doughnut Example">
          <DoughnutDynamic />
          <SourceReader componentName={docSrc + 'DoughnutDynamic.js'} />
        </PapperBlock>
        <PapperBlock title="Simple Pie Example" icon="ios-pie-outline" desc="">
          <PieSimple2 />
          <SourceReader componentName={docSrc + 'PieSimple2.js'} />
        </PapperBlock>
      </div>
    );
  }
}

export default DoughnutCharts;
