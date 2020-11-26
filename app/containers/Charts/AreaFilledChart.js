import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { PapperBlock, SourceReader } from 'dan-components';
import { AreaBasic, AreaDynamic } from './demos';

class AreaFilledChart extends React.Component {
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
        <PapperBlock title="Basic Area Example" icon="ios-analytics-outline" desc="">
          <AreaBasic />
          <SourceReader componentName={docSrc + 'AreaBasic.js'} />
        </PapperBlock>
        <PapperBlock title="Dynamic Area Example" icon="ios-analytics-outline" desc="">
          <AreaDynamic />
          <SourceReader componentName={docSrc + 'AreaDynamic.js'} />
        </PapperBlock>
      </div>
    );
  }
}

export default AreaFilledChart;
