import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { PapperBlock, SourceReader } from 'dan-components';
import { BarBasic, BarHorizontal, BarDynamic } from './demos';

class BarDirection extends React.Component {
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
        <PapperBlock title="Basic Bar Example" icon="ios-stats-outline" desc="">
          <BarBasic />
          <SourceReader componentName={docSrc + 'BarBasic.js'} />
        </PapperBlock>
        <PapperBlock title="Horizontal Bar Example" icon="ios-stats-outline" desc="">
          <BarHorizontal />
          <SourceReader componentName={docSrc + 'BarHorizontal.js'} />
        </PapperBlock>
        <PapperBlock title="Crazy Random Graph" icon="ios-stats-outline" desc="">
          <BarDynamic />
          <SourceReader componentName={docSrc + 'BarDynamic.js'} />
        </PapperBlock>
      </div>
    );
  }
}

export default BarDirection;
