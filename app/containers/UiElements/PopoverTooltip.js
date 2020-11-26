import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import Grid from '@material-ui/core/Grid';
import { SourceReader, PapperBlock } from 'dan-components';
import {
  SimpleTooltips,
  PositionedTooltips,
  SimplePopover,
  PopoverPlayground,
  DelayTooltips,
  TransitionsTooltips,
  TriggersTooltips,
  CustomizedTooltips
} from './demos';

class PopoverTooltip extends React.Component {
  render() {
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const docSrc = 'containers/UiElements/demos/PopoverTooltip/';
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
        <PapperBlock title="Simple Tooltips" icon="ios-text-outline" desc="The tooltips are text labels that appear when the user hovers over, focuses on, or touches an element.">
          <div>
            <SimpleTooltips />
            <SourceReader componentName={docSrc + 'SimpleTooltips.js'} />
          </div>
        </PapperBlock>
        <PapperBlock overflowX icon="ios-text" title="Positioned Tooltips" desc="The Tooltip has 12 placements choice. They don’t have directional arrows; instead, they rely on motion emanating from the source to convey direction.">
          <div>
            <PositionedTooltips />
            <SourceReader componentName={docSrc + 'PositionedTooltips.js'} />
          </div>
        </PapperBlock>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <PapperBlock title="Triggers Tooltips" icon="md-text" desc="You can define the types of events that cause a tooltip to show.">
              <div>
                <TriggersTooltips />
                <SourceReader componentName={docSrc + 'TriggersTooltips.js'} />
              </div>
            </PapperBlock>
          </Grid>
          <Grid item md={6} xs={12}>
            <PapperBlock title="Delay Tooltip" icon="ios-time-outline" desc="A delay in showing or hiding the tooltip can be added also">
              <div>
                <DelayTooltips />
                <SourceReader componentName={docSrc + 'DelayTooltips.js'} />
              </div>
            </PapperBlock>
          </Grid>
          <Grid item md={6} xs={12}>
            <PapperBlock title="Transitions Tooltips" icon="ios-analytics-outline" desc="Tooltips with different transition.">
              <div>
                <TransitionsTooltips />
                <SourceReader componentName={docSrc + 'TransitionsTooltips.js'} />
              </div>
            </PapperBlock>
          </Grid>
          <Grid item md={6} xs={12}>
            <PapperBlock title="Customized Tooltips" icon="ios-chatboxes-outline" desc="The tooltip with customized css style">
              <div>
                <CustomizedTooltips />
                <SourceReader componentName={docSrc + 'CustomizedTooltips.js'} />
              </div>
            </PapperBlock>
          </Grid>
        </Grid>
        <PapperBlock title="Simple Popover" icon="ios-browsers-outline" desc="A Popover can be used to display some content on top of another.">
          <div>
            <SimplePopover />
            <SourceReader componentName={docSrc + 'SimplePopover.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Popover playground" icon="ios-albums-outline" desc="Use the radio buttons to adjust the anchorOrigin and transformOrigin positions. You can also set the anchorReference to anchorPosition or anchorEl.">
          <div>
            <PopoverPlayground />
            <SourceReader componentName={docSrc + 'PopoverPlayground.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default PopoverTooltip;
