import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { withStyles } from '@material-ui/core/styles';
import { SourceReader, PapperBlock } from 'dan-components';
import {
  TextFields,
  TextFieldsLayout,
  InputAdornments,
  FormattedInputs,
  TextFieldsOutlined,
  TextFieldsFilled
} from './demos';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class Textbox extends React.Component {
  render() {
    const title = brand.name + ' - Form';
    const description = brand.desc;
    const docSrc = 'containers/Forms/demos/';
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
        <PapperBlock title="Textfield Components" icon="ios-card-outline" desc="Text fields allow users to input text and usually appear in forms. Users may enter text, numbers, or mixed-format types of input.">
          <div>
            <TextFields />
            <SourceReader componentName={docSrc + 'TextFields.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Textfield Outlined Variant" icon="ios-card-outline" desc="TextField supports outlined styling.">
          <div>
            <TextFieldsOutlined />
            <SourceReader componentName={docSrc + 'TextFieldsOutlined.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Textfield Filled Variant" icon="ios-card-outline" desc="TextField supports filled styling.">
          <div>
            <TextFieldsFilled />
            <SourceReader componentName={docSrc + 'TextFieldsFilled.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Textfield Layout and Design" icon="ios-card" desc="">
          <div>
            <TextFieldsLayout />
            <SourceReader componentName={docSrc + 'TextFieldsLayout.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Input with Additonal Icon" icon="ios-flag-outline" desc="Input allows the provision of InputAdornment. These can be used to add a prefix, a suffix or an action to an input.">
          <div>
            <InputAdornments />
            <SourceReader componentName={docSrc + 'InputAdornments.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Formatted inputs" icon="ios-barcode-outline" desc="We demonstrate how you could be using third-party libraries to format your input. In the following demo, we are using react-text-mask and react-number-format libraries. ">
          <div>
            <FormattedInputs />
            <SourceReader componentName={docSrc + 'FormattedInputs.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default withStyles(styles)(Textbox);
