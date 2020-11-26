import React from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import Grid from '@material-ui/core/Grid';
import { SourceReader, PapperBlock } from 'dan-components';
import {
  ModalDemo,
  AlertDialog,
  SelectDialog,
  SelectRadioDialog,
  FormDialog,
  FullScreenDialog,
  ImagePopup,
  ScrollDialog
} from './demos';

class DialogModal extends React.Component {
  render() {
    const title = brand.name + ' - UI Elements';
    const description = brand.desc;
    const docSrc = 'containers/UiElements/demos/DialogModal/';
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
        <PapperBlock title="Modals" icon="ios-browsers-outline" desc="The modal component provides a solid foundation for creating dialogs, popovers, lightboxes, or whatever else.">
          <div>
            <ModalDemo />
            <SourceReader componentName={docSrc + 'ModalDemo.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Image Popup" icon="ios-images-outline" desc="A flexible lightbox component for displaying images. It's also can handle zoom and panning of images. Mobile friendly, with pinch to zoom and swipe">
          <div>
            <ImagePopup />
            <SourceReader componentName={docSrc + 'ImagePopup.js'} />
          </div>
        </PapperBlock>
        <PapperBlock title="Alerts" icon="ios-warning-outline" desc="Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.">
          <div>
            <AlertDialog />
            <SourceReader componentName={docSrc + 'AlertDialog.js'} />
          </div>
        </PapperBlock>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <PapperBlock title="Selection Dialog" icon="ios-list-box-outline" desc="Choosing an option immediately commits the option and closes the menu">
              <div>
                <SelectDialog />
                <SourceReader componentName={docSrc + 'SelectDialog.js'} />
              </div>
            </PapperBlock>
          </Grid>
          <Grid item md={6}>
            <PapperBlock title="Selection Radio Dialog" icon="ios-list-box-outline" desc="In this example, users can listen to multiple ringtones but only make a final selection upon touching “OK.”">
              <div>
                <SelectRadioDialog />
                <SourceReader componentName={docSrc + 'SelectRadioDialog.js'} />
              </div>
            </PapperBlock>
          </Grid>
        </Grid>
        <PapperBlock title="Form dialogs" icon="ios-create-outline" desc="Form dialogs allow users to fill out form fields within a dialog.">
          <div>
            <FormDialog />
            <SourceReader componentName={docSrc + 'FormDialog.js'} />
          </div>
        </PapperBlock>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <PapperBlock title="Full Screen (Responsive)" icon="ios-easel-outline" desc="You may make a Dialog responsively full screen the dialog using withMobileDialog. By default, withMobileDialog()(Dialog) responsively full screens at or below the sm screen size.">
              <div>
                <FullScreenDialog />
                <SourceReader componentName={docSrc + 'FullScreenDialog.js'} />
              </div>
            </PapperBlock>
          </Grid>
          <Grid item md={6} xs={12}>
            <PapperBlock title="Scrolling dialog" icon="ios-download-outline" desc="When dialogs become too long for the user’s viewport or device, they scroll.">
              <div>
                <ScrollDialog />
                <SourceReader componentName={docSrc + 'ScrollDialog.js'} />
              </div>
            </PapperBlock>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default DialogModal;
