import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { SourceReader, PapperBlock } from 'dan-components';
import { Traffic } from './demos';
import Info from './Info';

class TrafficIndicator extends React.Component {
  render() {
    const title = brand.name + ' - Map';
    const description = brand.desc;
    const docSrc = 'containers/Maps/demos/';
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
        <PapperBlock overflowX icon="ios-car-outline" title="Traffic Indicator" desc="Get information of transportation traffic arround the world">
          <Info />
          <Traffic />
          <SourceReader componentName={docSrc + 'Traffic.js'} />
        </PapperBlock>
      </div>
    );
  }
}

export default TrafficIndicator;
