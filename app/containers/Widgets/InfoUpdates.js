import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import Grid from '@material-ui/core/Grid';
import { SourceReader, PapperBlock } from 'dan-components';
import {
  NewsList,
  SliderNews,
  SliderQuotes,
  SliderAnimatiomWidget
} from './demos';

class InfoUpdates extends React.Component {
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
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <PapperBlock title="Animate Slider" whiteBg icon="ios-images-outline" desc="This one use animate slider components. Please check app/ui/slider-carousel fot more configuration detail">
              <div>
                <SliderAnimatiomWidget />
                <SourceReader componentName={docSrc + 'SliderAnimatiomWidget.js'} />
              </div>
            </PapperBlock>
            <PapperBlock title="News List" icon="ios-list" desc="An ordinary list with thumbnail, title and short description">
              <div>
                <NewsList />
                <SourceReader componentName={docSrc + 'NewsList.js'} />
              </div>
            </PapperBlock>
          </Grid>
          <Grid item md={6} xs={12}>
            <PapperBlock title="Slider News" icon="ios-globe-outline" desc="News list content that wrapped inside slider carousel.">
              <div>
                <SliderNews />
                <SourceReader componentName={docSrc + 'SliderNews.js'} />
              </div>
            </PapperBlock>
            <PapperBlock title="Slider Quotes" whiteBg icon="ios-quote-outline" desc="It's only word and word are all I have to take you heart away. Remember that lyrics? Just put some quotes here to keep memorable word in Your mind">
              <div>
                <SliderQuotes />
                <SourceReader componentName={docSrc + 'SliderQuotes.js'} />
              </div>
            </PapperBlock>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default InfoUpdates;
