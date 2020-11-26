import React from 'react';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FileIcon from '@material-ui/icons/Description';
import ActionDelete from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import CloudUpload from '@material-ui/icons/CloudUpload';
import 'dan-styles/vendors/react-dropzone/react-dropzone.css';
import isImage from './helpers/helpers.js';

const styles = theme => ({
  dropItem: {
    borderColor: theme.palette.divider,
    background: theme.palette.background.default,
    borderRadius: theme.rounded.medium,
    color: theme.palette.text.disabled,
    textAlign: 'center'
  },
  uploadIconSize: {
    display: 'inline-block',
    '& svg': {
      width: 72,
      height: 72,
      fill: theme.palette.secondary.main,
    }
  },
  rightIcon: {
    marginLeft: theme.spacing(1),
    '& svg': {
      fill: theme.palette.common.white
    }
  },
  button: {
    marginTop: 20
  }
});

class MaterialDropZone extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openSnackBar: false,
      errorMessage: '',
      files: this.props.files, // eslint-disable-line
      acceptedFiles: this.props.acceptedFiles // eslint-disable-line
    };
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(filesVal) {
    const { files } = this.state;
    const { filesLimit } = this.props;
    let oldFiles = files;
    const filesLimitVal = filesLimit || '3';
    oldFiles = oldFiles.concat(filesVal);
    if (oldFiles.length > filesLimit) {
      this.setState({
        openSnackBar: true,
        errorMessage: 'Cannot upload more than ' + filesLimitVal + ' items.',
      });
    } else {
      this.setState({ files: oldFiles });
    }
  }

  onDropRejected() {
    this.setState({
      openSnackBar: true,
      errorMessage: 'File too big, max size is 3MB',
    });
  }

  handleRequestCloseSnackBar = () => {
    this.setState({
      openSnackBar: false,
    });
  };

  handleRemove(file, fileIndex) {
    const thisFiles = this.state.files; // eslint-disable-line
    // This is to prevent memory leaks.
    window.URL.revokeObjectURL(file.preview);

    thisFiles.splice(fileIndex, 1);
    this.setState({ files: thisFiles });
  }

  render() {
    const {
      classes,
      showPreviews,
      maxSize,
      text,
      showButton,
      filesLimit,
      ...rest
    } = this.props;

    const {
      acceptedFiles,
      files,
      openSnackBar,
      errorMessage
    } = this.state;
    const fileSizeLimit = maxSize || 3000000;
    const deleteBtn = (file, index) => (
      <div className="middle">
        <IconButton onClick={() => this.handleRemove(file, index)}>
          <ActionDelete className="removeBtn" />
        </IconButton>
      </div>
    );
    const previews = filesArray => filesArray.map((file, index) => {
      const base64Img = URL.createObjectURL(file);
      if (isImage(file)) {
        return (
          <div key={index.toString()}>
            <div className="imageContainer col fileIconImg">
              <figure className="imgWrap"><img className="smallPreviewImg" src={base64Img} alt="preview" /></figure>
              {deleteBtn(file, index)}
            </div>
          </div>
        );
      }
      return (
        <div key={index.toString()}>
          <div className="imageContainer col fileIconImg">
            <FileIcon className="smallPreviewImg" alt="preview" />
            {deleteBtn(file, index)}
          </div>
        </div>
      );
    });
    let dropzoneRef;
    return (
      <div>
        <Dropzone
          accept={acceptedFiles.join(',')}
          onDrop={this.onDrop}
          onDropRejected={this.onDropRejected}
          acceptClassName="stripes"
          rejectClassName="rejectStripes"
          maxSize={fileSizeLimit}
          ref={(node) => { dropzoneRef = node; }}
          {...rest}
        >
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className={classNames(classes.dropItem, 'dropZone')}>
              <div className="dropzoneTextStyle">
                <input {...getInputProps()} />
                <p className="dropzoneParagraph">{text}</p>
                <div className={classes.uploadIconSize}>
                  <CloudUpload />
                </div>
              </div>
            </div>
          )}
          {/* end */}
        </Dropzone>
        {showButton && (
          <Button
            className={classes.button}
            fullWidth
            variant="contained"
            onClick={() => {
              dropzoneRef.open();
            }}
            color="secondary"
          >
            Click to upload file(s)
            <span className={classes.rightIcon}>
              <CloudUpload />
            </span>
          </Button>
        )}
        <div className="row preview">
          {showPreviews && previews(files)}
        </div>
        <Snackbar
          open={openSnackBar}
          message={errorMessage}
          autoHideDuration={4000}
          onClose={this.handleRequestCloseSnackBar}
        />
      </div>
    );
  }
}

MaterialDropZone.propTypes = {
  files: PropTypes.array.isRequired,
  text: PropTypes.string.isRequired,
  acceptedFiles: PropTypes.array,
  showPreviews: PropTypes.bool.isRequired,
  showButton: PropTypes.bool,
  maxSize: PropTypes.number.isRequired,
  filesLimit: PropTypes.number.isRequired,
  classes: PropTypes.object.isRequired,
};

MaterialDropZone.defaultProps = {
  acceptedFiles: [],
  showButton: false,
};

export default withStyles(styles)(MaterialDropZone);
