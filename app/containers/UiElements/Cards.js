import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { SourceReader, PapperBlock } from 'dan-components';
import {
  StandardCards,
  ControlCards,
  PaperSheet,
  SocialCards,
  EcommerceCards
} from './demos';

class Cards extends React.Component {
  render() {
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const docSrc = 'containers/UiElements/demos/Cards/';
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
        <PapperBlock title="Paper" icon="ios-document-outline" desc="In material design, the physical properties of paper are translated to the screen.">
          <div>
            <PaperSheet />
            <SourceReader componentName={docSrc + 'PaperSheet.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Standard Cards" icon="ios-card-outline" desc="A card is a sheet of material that serves as an entry point to more detailed information.">
          <div>
            <StandardCards />
            <SourceReader componentName={docSrc + 'StandardCards.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Control Cards" icon="ios-play-outline" desc="Supplemental actions within the card are explicitly called out using icons, text, and UI controls.">
          <div>
            <ControlCards />
            <SourceReader componentName={docSrc + 'ControlCards.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Social Cards" icon="ios-photos-outline" desc="A Customized material-ui card that contain profile elements">
          <div>
            <SocialCards />
            <SourceReader componentName={docSrc + 'SocialCards.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Ecommerce Cards" icon="ios-cart-outline" desc="A Customized material-ui card that contain product information">
          <div>
            <EcommerceCards />
            <SourceReader componentName={docSrc + 'EcommerceCards.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default Cards;
