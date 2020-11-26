import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { SourceReader, PapperBlock } from 'dan-components';
import { IconInfographic, ChartInfographic, AdvancedInfographic } from './demos';

class Infographics extends React.Component {
  render() {
    const title = brand.name + ' - Widgets';
    const description = brand.desc;
    const docSrc = 'containers/Widgets/demos/';
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
        <PapperBlock title="Icon" whiteBg icon="ios-information-circle-outline" desc="Infographic with icon illustration to represent summary of the calculation">
          <div>
            <IconInfographic />
            <SourceReader componentName={docSrc + 'IconInfographic.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Chart" whiteBg icon="ios-analytics-outline" desc="It's give you an important resume by visualizing in chart. You can analyze what's upcoming updates easier">
          <div>
            <ChartInfographic />
            <SourceReader componentName={docSrc + 'ChartInfographic.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Advanced" whiteBg icon="ios-stats-outline" desc="It's another design of this widget. Put any resume data, updates, or statistic information here as well">
          <div>
            <AdvancedInfographic />
            <SourceReader componentName={docSrc + 'AdvancedInfographic.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default Infographics;
