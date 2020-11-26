import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { SourceReader, PapperBlock } from 'dan-components';
import {
  BarSimple,
  BarStacked,
  BarMix,
  BarCustom,
  BarPositiveNegative,
  BarCustomLabel,
} from './demos';

class BarCharts extends React.Component {
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
        <PapperBlock title="Simple Bar Chart" icon="ios-stats-outline" desc="" overflowX>
          <div>
            <BarSimple />
            <SourceReader componentName={docSrc + 'BarSimple.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Stacked Bar Chart" icon="ios-stats-outline" desc="" overflowX>
          <div>
            <BarStacked />
            <SourceReader componentName={docSrc + 'BarStacked.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Simple Mixing Bar" icon="ios-stats-outline" desc="" overflowX>
          <div>
            <BarMix />
            <SourceReader componentName={docSrc + 'BarMix.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Custom Bar Shape" icon="ios-stats-outline" desc="" overflowX>
          <div>
            <BarCustom />
            <SourceReader componentName={docSrc + 'BarCustom.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Custom Label Bar Chart" icon="ios-stats-outline" desc="" overflowX>
          <div>
            <BarCustomLabel />
            <SourceReader componentName={docSrc + 'BarCustomLabel.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Positive Negative Bar Chart" icon="ios-stats-outline" desc="" overflowX>
          <div>
            <BarPositiveNegative />
            <SourceReader componentName={docSrc + 'BarPositiveNegative.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default BarCharts;
