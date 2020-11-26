import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { SourceReader, PapperBlock } from 'dan-components';
import {
  AreaSimple,
  AreaStacked,
  AreaPercent,
  AreaNegativePositive,
} from './demos';

class AreaCharts extends React.Component {
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
        <PapperBlock title="Simple Area Chart" icon="ios-analytics-outline" overflowX desc="">
          <div>
            <AreaSimple />
            <SourceReader componentName={docSrc + 'AreaSimple.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Stacked Area Chart" icon="ios-analytics-outline" overflowX desc="">
          <div>
            <AreaStacked />
            <SourceReader componentName={docSrc + 'AreaStacked.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Percent Area Chart" icon="ios-analytics-outline" overflowX desc="">
          <div>
            <AreaPercent />
            <SourceReader componentName={docSrc + 'AreaPercent.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Positive Negative Area Chart" icon="ios-analytics-outline" overflowX desc="">
          <div>
            <AreaNegativePositive />
            <SourceReader componentName={docSrc + 'AreaNegativePositive.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default AreaCharts;
