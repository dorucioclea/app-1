import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { withStyles } from '@material-ui/core/styles';
import { SourceReader, PapperBlock } from 'dan-components';
import { UploadInputAll, UploadInputImg, UploadInputBtn } from './demos';

const styles = ({
  root: {
    flexGrow: 1,
  }
});

class DateTime extends React.Component {
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
        <PapperBlock title="Upload with Drop Zone" icon="ios-cloud-upload-outline" whiteBg desc="Simple HTML5-compliant drag'n'drop zone for files built with React Drop Zone. The component containing a file upload (dropzone) area, images and files preview and some snazzy File Allowed/Not Allowed effects.">
          <div>
            <UploadInputAll />
            <SourceReader componentName={docSrc + 'UploadInputAll.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Upload only Images" icon="ios-images-outline" whiteBg desc="This example allowing users to upload images only">
          <div>
            <UploadInputImg />
            <SourceReader componentName={docSrc + 'UploadInputImg.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Upload Button" icon="ios-cloud-upload" whiteBg desc="Trigger upload file via button with ref attribute">
          <div>
            <UploadInputBtn />
            <SourceReader componentName={docSrc + 'UploadInputBtn.js'} />
          </div>
        </PapperBlock>
      </div>
    );
  }
}

export default withStyles(styles)(DateTime);
