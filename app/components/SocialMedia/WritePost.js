import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Dropzone from 'react-dropzone';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Send from '@material-ui/icons/Send';
import Fab from '@material-ui/core/Fab';
import MenuItem from '@material-ui/core/MenuItem';
import ActionDelete from '@material-ui/icons/Delete';
import FormControl from '@material-ui/core/FormControl';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select';
import Tooltip from '@material-ui/core/Tooltip';
import dummy from 'dan-api/dummy/dummyContents';
import styles from './jss/writePost-jss';

function isImage(file) {
  const fileName = file.name || file.path;
  const suffix = fileName.substr(fileName.indexOf('.') + 1).toLowerCase();
  if (suffix === 'jpg' || suffix === 'jpeg' || suffix === 'bmp' || suffix === 'png') {
    return true;
  }
  return false;
}

function WritePost(props) {
  const [privacy, setPrivacy] = useState('public');
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState('');
  const { submitPost, classes } = props;

  const onDrop = (filesVal) => {
    let oldFiles = files;
    const filesLimit = 2;
    oldFiles = oldFiles.concat(filesVal);
    if (oldFiles.length > filesLimit) {
      console.log('Cannot upload more than ' + filesLimit + ' items.');
    } else {
      setFiles(filesVal);
    }
  };

  const handleChange = event => {
    setPrivacy(event.target.value);
  };

  const handleWrite = event => {
    setMessage(event.target.value);
  };

  const handlePost = (messageParam, filesParam, privacyParam) => {
    // Submit Post to reducer
    submitPost(messageParam, filesParam, privacyParam);
    // Reset all fields
    setPrivacy('public');
    setFiles([]);
    setMessage('');
  };

  const handleRemove = (file, fileIndex) => {
    const thisFiles = files;
    // This is to prevent memory leaks.
    window.URL.revokeObjectURL(file.preview);

    thisFiles.splice(fileIndex, 1);
    setFiles(thisFiles);
  };

  let dropzoneRef;
  const acceptedFiles = ['image/jpeg', 'image/png', 'image/bmp'];
  const fileSizeLimit = 3000000;
  const deleteBtn = (file, index) => (
    <div className={classNames(classes.removeBtn, 'middle')}>
      <IconButton onClick={() => handleRemove(file, index)}>
        <ActionDelete className="removeBtn" />
      </IconButton>
    </div>
  );
  const previews = filesArray => filesArray.map((file, index) => {
    const path = URL.createObjectURL(file) || '/pic' + file.path;
    if (isImage(file)) {
      return (
        <div key={index.toString()}>
          <figure><img src={path} alt="preview" /></figure>
          {deleteBtn(file, index)}
        </div>
      );
    }
    return false;
  });
  return (
    <div className={classes.statusWrap}>
      <Paper className={classes.inputMessage}>
        <Avatar alt="avatar" src={dummy.user.avatar} className={classes.avatarMini} />
        <textarea
          row="2"
          placeholder="What's on your mind?"
          value={message}
          onChange={handleWrite}
        />
        <Dropzone
          className={classes.hiddenDropzone}
          accept={acceptedFiles.join(',')}
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
        <div className={classes.preview}>
          {previews(files)}
        </div>
        <div className={classes.control}>
          <Tooltip id="tooltip-upload" title="Upload Photo">
            <IconButton
              className={classes.button}
              component="button"
              onClick={() => {
                dropzoneRef.open();
              }}
            >
              <PhotoCamera />
            </IconButton>
          </Tooltip>
          <div className={classes.privacy}>
            <FormControl className={classes.formControl}>
              <Select
                value={privacy}
                onChange={handleChange}
                name="privacy"
                className={classes.selectEmpty}
              >
                <MenuItem value="public">Public</MenuItem>
                <MenuItem value="friends">Friends</MenuItem>
                <MenuItem value="private">Only Me</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Tooltip id="tooltip-post" title="Post">
            <Fab onClick={() => handlePost(message, files, privacy)} size="small" color="secondary" aria-label="send" className={classes.sendBtn}>
              <Send />
            </Fab>
          </Tooltip>
        </div>
      </Paper>
    </div>
  );
}

WritePost.propTypes = {
  classes: PropTypes.object.isRequired,
  submitPost: PropTypes.func.isRequired
};

export default withStyles(styles)(WritePost);
