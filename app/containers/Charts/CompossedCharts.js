import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { SourceReader, PapperBlock } from 'dan-components';
import {
  CompossedLineBarArea,
  CompossedSameData,
  CompossedVertical,
} from './demos';

class CompossedCharts extends React.Component {
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
        <PapperBlock title="Compossed Line Bar & Area Chart" icon="ios-stats-outline" desc="" overflowX>
          <div>
            <CompossedLineBarArea />
            <SourceReader componentName={docSrc + 'CompossedLineBarArea.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Compossed Same Data Chart" icon="ios-stats-outline" desc="" overflowX>
          <div>
            <CompossedSameData />
            <SourceReader componentName={docSrc + 'CompossedSameData.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Compossed Vertical Chart" icon="ios-stats-outline" desc="" overflowX>
          <div>
            <CompossedVertical />
            <SourceReader componentName={docSrc + 'CompossedVertical.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default CompossedCharts;
