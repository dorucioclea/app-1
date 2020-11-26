import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { withStyles } from '@material-ui/core/styles';
import { SourceReader, PapperBlock } from 'dan-components';
import { AdvTableDemo, AdvFilter } from './demos';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class AdvancedTable extends Component {
  render() {
    const title = brand.name + ' - Table';
    const description = brand.desc;
    const docSrc = 'containers/Tables/demos/';
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
        <PapperBlock whiteBg icon="ios-clipboard-outline" title="Basic Data Table" desc="This is default example from Material UI. It Demonstrates the use of Checkbox and clickable rows for selection, with a custom Toolbar. It uses the TableSortLabel component to help style column headings.">
          <div>
            <AdvTableDemo />
            <SourceReader componentName={docSrc + 'AdvTableDemo.js'} />
          </div>
        </PapperBlock>
        <PapperBlock whiteBg icon="ios-clipboard-outline" title="Advanced Data Table" desc="It uses npm mui-datatables. It's easy to use, you just describe columns and data collection. After that it will magically build features such as filtering, viewing / hiding columns, exporting to CSV downloads, printing, and more.">
          <div>
            <AdvFilter />
            <SourceReader componentName={docSrc + 'AdvFilter.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default withStyles(styles)(AdvancedTable);
