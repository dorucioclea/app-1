import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { SourceReader, PapperBlock } from 'dan-components';
import { TbPagination, TbPaginationCustom, GeneralPagination } from './demos';

class Paginations extends React.Component {
  render() {
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const docSrc = 'containers/UiElements/demos/Pagination/';
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
        <PapperBlock title="Table Pagination" icon="ios-arrow-dropright" desc="The Action property of the TablePagination component allows the implementation of custom actions.">
          <div>
            <TbPagination />
            <SourceReader componentName={docSrc + 'TbPagination.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Table Pagination Custom" icon="md-arrow-dropright-circle" desc="The Action property of the TablePagination component allows the implementation of custom actions.">
          <div>
            <TbPaginationCustom />
            <SourceReader componentName={docSrc + 'TbPaginationCustom.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="General Pagination" icon="ios-arrow-round-forward" desc="React.js pagination component based on ultimate-pagination. It's implemented as a higher-order component that allows easy integration of react-ultimate-pagination with different CSS frameworks or approaches.">
          <div>
            <GeneralPagination />
            <SourceReader componentName={docSrc + 'GeneralPagination.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default Paginations;
