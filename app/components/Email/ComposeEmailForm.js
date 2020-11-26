import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Editor } from 'react-draft-wysiwyg';
import { convertFromRaw, EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import Dropzone from 'react-dropzone';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import Attachment from '@material-ui/icons/Attachment';
import FileIcon from '@material-ui/icons/Description';
import ActionDelete from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Send from '@material-ui/icons/Send';
import css from 'dan-styles/Form.scss';
import 'dan-styles/vendors/react-draft-wysiwyg/react-draft-wysiwyg.css';
import isImage from '../Forms/helpers/helpers.js';
import styles from './email-jss';

const content = {
  blocks: [{
    key: '637gr',
    text: 'Lorem ipsum dolor sit amet 😀',
    type: 'unstyled',
    depth: 0,
    inlineStyleRanges: [],
    entityRanges: [],
    data: {}
  }],
  entityMap: {}
};

function ComposeEmailForm(props) {
  const contentBlock = convertFromRaw(content);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [files, setFiles] = useState([]);
  const [editorState, setEditorState] = useState(EditorState.createWithContent(contentBlock));
  const [emailContent, setEmailContent] = useState(draftToHtml(convertToRaw(editorState.getCurrentContent())));

  const {
    classes,
    closeForm,
    to,
    subject,
    validMail,
    inputChange
  } = props;

  const onDrop = (filesVal) => {
    let oldFiles = files;
    const filesLimit = 3;
    oldFiles = oldFiles.concat(filesVal);
    if (oldFiles.length > filesLimit) {
      setErrorMessage('Cannot upload more than ' + filesLimit + ' items.');
    } else {
      setFiles(oldFiles);
    }
  };

  const onEditorStateChange = editorStateParams => {
    setEditorState(editorStateParams);
    setEmailContent(draftToHtml(convertToRaw(editorStateParams.getCurrentContent())));
  };

  const handleRequestCloseSnackBar = () => {
    setOpenSnackBar(false);
  };

  const handleSend = (
    paramsTo,
    paramsSubject,
    paramsEmailContent,
    paramFiles
  ) => {
    props.sendEmail(paramsTo, paramsSubject, paramsEmailContent, paramFiles);
    setEmailContent('');
    setFiles([]);
  };

  const handleRemove = (file, fileIndex) => {
    const thisFiles = files;
    // This is to prevent memory leaks.
    window.URL.revokeObjectURL(file.preview);

    thisFiles.splice(fileIndex, 1);
    setFiles(thisFiles);
  };

  let dropzoneRef;
  const deleteBtn = (file, index) => (
    <div className="middle">
      <IconButton onClick={() => handleRemove(file, index)}>
        <ActionDelete className="removeBtn" />
      </IconButton>
    </div>
  );
  const previews = filesArray => filesArray.map((file, index) => {
    if (isImage(file)) {
      const base64Img = URL.createObjectURL(file);
      return (
        <div key={index.toString()} className={classes.item}>
          <div className="imageContainer col fileIconImg">
            <figure className="imgWrap"><img className="smallPreviewImg" src={base64Img} alt="preview" /></figure>
            {deleteBtn(file, index)}
          </div>
          <Typography noWrap variant="caption">{file.name}</Typography>
        </div>
      );
    }
    return (
      <div key={index.toString()} className={classes.item}>
        <div className="imageContainer col fileIconImg">
          <div className="fileWrap">
            <FileIcon className="smallPreviewImg" alt="preview" />
            {deleteBtn(file, index)}
          </div>
        </div>
        <Typography noWrap variant="caption">{file.name}</Typography>
      </div>
    );
  });
  const fileSizeLimit = 3000000;
  return (
    <div>
      <form>
        <section className={css.bodyForm}>
          <div>
            <TextField
              error={validMail === 'Invalid email'}
              id="to"
              label="To"
              helperText={validMail}
              className={classes.field}
              type="email"
              placeholder="To"
              value={to}
              onChange={(event) => inputChange(event, 'to')}
              margin="normal"
            />
          </div>
          <div>
            <TextField
              id="subject"
              label="Subject"
              className={classes.field}
              placeholder="Subject"
              value={subject}
              onChange={(event) => inputChange(event, 'subject')}
              margin="normal"
            />
          </div>
          <Grid container alignItems="center">
            <Dropzone
              className={classes.hiddenDropzone}
              acceptClassName="stripes"
              onDrop={onDrop}
              maxSize={fileSizeLimit}
              ref={(node) => { dropzoneRef = node; }}
            >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                </div>
              )}
            </Dropzone>
            <Button
              className={classes.buttonUpload}
              color="secondary"
              component="button"
              onClick={() => {
                dropzoneRef.open();
              }}
            >
              <Attachment />
                Attach Files
            </Button>
            <Typography variant="caption">(Max 3MB)</Typography>
          </Grid>
          <div className={classes.preview}>
            {previews(files)}
          </div>
          <div>
            <Editor
              editorState={editorState}
              editorClassName={classes.textEditor}
              toolbarClassName={classes.toolbarEditor}
              onEditorStateChange={onEditorStateChange}
              toolbar={{
                options: ['inline', 'fontSize', 'fontFamily', 'colorPicker', 'image', 'emoji', 'list', 'textAlign', 'link'],
                inline: { inDropdown: true },
                color: true,
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
              }}
            />
          </div>
        </section>
        <div className={css.buttonArea}>
          <Button type="button" onClick={() => closeForm()}>
            Discard
          </Button>
          <Button
            variant="contained"
            color="secondary"
            type="button"
            disabled={!to || !subject}
            onClick={() => handleSend(to, subject, emailContent, files)}
          >
            Send&nbsp;
            <Send className={classes.sendIcon} />
          </Button>
        </div>
      </form>
      <Snackbar
        open={openSnackBar}
        message={errorMessage}
        autoHideDuration={4000}
        onClose={handleRequestCloseSnackBar}
      />
    </div>
  );
}

ComposeEmailForm.propTypes = {
  classes: PropTypes.object.isRequired,
  to: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
  validMail: PropTypes.string.isRequired,
  sendEmail: PropTypes.func.isRequired,
  closeForm: PropTypes.func.isRequired,
  inputChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(ComposeEmailForm);
