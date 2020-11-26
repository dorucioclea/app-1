import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { SourceReader, PapperBlock } from 'dan-components';
import {
  HorizontalLinear,
  HorizontalNonLinear,
  StepperError,
  VerticalStepper,
  MobileSteppers,
  StepperCarousel
} from './demos';

class Steppers extends React.Component {
  render() {
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const docSrc = 'containers/UiElements/demos/Steppers/';
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
        <PapperBlock title="Horizontal Linear" icon="ios-card" desc="The Stepper can be controlled by passing the current step index (zero-based) as the activeStep property.">
          <div>
            <HorizontalLinear />
            <SourceReader componentName={docSrc + 'HorizontalLinear.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Horizontal Non-linear" icon="ios-log-in" desc="Non-linear steppers allow users to enter a multi-step flow at any point.">
          <div>
            <HorizontalNonLinear />
            <SourceReader componentName={docSrc + 'HorizontalNonLinear.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Horizontal Non Linear - Error Step" icon="ios-log-out" desc="">
          <div>
            <StepperError />
            <SourceReader componentName={docSrc + 'StepperError.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Vertical Stepper" icon="ios-download-outline" desc="">
          <div>
            <VerticalStepper />
            <SourceReader componentName={docSrc + 'VerticalStepper.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Mobile Stepper" icon="ios-phone-portrait" desc="Use a progress bar or dots when there are many steps, or if there are steps that need to be inserted during the process (based on responses to earlier steps).">
          <div>
            <MobileSteppers />
            <SourceReader componentName={docSrc + 'MobileSteppers.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Carousel Stepper" icon="ios-code-working" desc="This is essentially a back/next button positioned correctly. You must implement the textual description yourself, however, an example is provided below for reference.">
          <div>
            <StepperCarousel />
            <SourceReader componentName={docSrc + 'StepperCarousel.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default Steppers;
