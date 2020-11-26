import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { SourceReader, PapperBlock } from 'dan-components';
import { SidebarLayout, SidebarLayoutRight, FullHeader } from './demos';

class AppLayout extends Component {
  render() {
    const title = brand.name + ' - Layout';
    const description = brand.desc;
    const docSrc = 'containers/Layouts/demos/';
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
        <PapperBlock title="App Layout with Sidebar" icon="ios-desktop-outline" desc="The Drawer slides in from the side. It is a common pattern found in Google apps and follows the keylines and metrics for lists.">
          <div>
            <SidebarLayout />
            <SourceReader componentName={docSrc + 'SidebarLayout.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Right Sidebar Mode" icon="ios-desktop-outline" desc="The Drawer slides in from the side. It is a common pattern found in Google apps and follows the keylines and metrics for lists.">
          <div>
            <SidebarLayoutRight />
            <SourceReader componentName={docSrc + 'SidebarLayoutRight.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Full Header Mode" icon="ios-desktop-outline" desc="Apps focused on productivity that require balance across the screen.">
          <div>
            <FullHeader />
            <SourceReader componentName={docSrc + 'FullHeader.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default AppLayout;
