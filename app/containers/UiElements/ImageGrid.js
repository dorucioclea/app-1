import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { SourceReader, PapperBlock } from 'dan-components';
import {
  ImageGridList,
  TitlebarGridList,
  AdvancedGridList,
  SingleLineGridList
} from './demos';

class ImageGrid extends React.Component {
  render() {
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const docSrc = 'containers/UiElements/demos/ImageGrid/';
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
        <PapperBlock title="Image-only Grid list" icon="ios-grid" desc="A simple example of a scrollable image GridList">
          <div>
            <ImageGridList />
            <SourceReader componentName={docSrc + 'ImageGridList.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Grid list with titlebars" icon="ios-keypad-outline" desc="This example demonstrates the use of the GridListTileBar to add an overlay to each GridListTile.">
          <div>
            <TitlebarGridList />
            <SourceReader componentName={docSrc + 'TitlebarGridList.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Advanced Grid list" icon="ios-apps-outline" desc="This example demonstrates featured tiles, using the rows and cols props to adjust the size of the tile, and the padding prop to adjust the spacing.">
          <div>
            <AdvancedGridList />
            <SourceReader componentName={docSrc + 'AdvancedGridList.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Single line Grid list" icon="ios-barcode" desc="This example demonstrates a horizontal scrollable single-line grid list of images.">
          <div>
            <SingleLineGridList />
            <SourceReader componentName={docSrc + 'SingleLineGridList.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default ImageGrid;
