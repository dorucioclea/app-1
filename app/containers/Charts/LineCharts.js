import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { withStyles } from '@material-ui/core/styles';
import { SourceReader, PapperBlock } from 'dan-components';
import {
  LineSimple,
  LineVertical,
  LineCustomDot,
  LineCustomLabel,
} from './demos';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class DateTime extends React.Component {
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
        <PapperBlock icon="ios-analytics-outline" title="Simple Line Chart" desc="" overflowX>
          <div>
            <LineSimple />
            <SourceReader componentName={docSrc + 'LineSimple.js'} />
          </div>
        </PapperBlock>
        <PapperBlock icon="ios-analytics-outline" title="Vertical Line Chart" desc="" overflowX>
          <div>
            <LineVertical />
            <SourceReader componentName={docSrc + 'LineVertical.js'} />
          </div>
        </PapperBlock>
        <PapperBlock icon="ios-analytics-outline" title="Custom Dot Line Chart" desc="" overflowX>
          <div>
            <LineCustomDot />
            <SourceReader componentName={docSrc + 'LineCustomDot.js'} />
          </div>
        </PapperBlock>
        <PapperBlock icon="ios-analytics-outline" title="Custom Label Line Chart" desc="" overflowX>
          <div>
            <LineCustomLabel />
            <SourceReader componentName={docSrc + 'LineCustomLabel.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default withStyles(styles)(DateTime);
