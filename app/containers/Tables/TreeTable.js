import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { SourceReader, PapperBlock } from 'dan-components';
import { TreeTableDemo, TreeTableDemoIcon } from './demos';

class TreeTablePage extends Component {
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
        <PapperBlock title="Tree Table Arrow Icon" whiteBg icon="ios-git-merge" desc="A simple Tree Collapsed/Expanded Table">
          <TreeTableDemo />
          <SourceReader componentName={docSrc + 'TreeTableDemo.js'} />
        </PapperBlock>
        <PapperBlock title="Custom Icon with ionicon" whiteBg icon="ios-git-merge" desc="A Tree Table custom Icon with ionicon component">
          <TreeTableDemoIcon />
          <SourceReader componentName={docSrc + 'TreeTableDemoIcon.js'} />
        </PapperBlock>
      </div>
    );
  }
}

export default TreeTablePage;
