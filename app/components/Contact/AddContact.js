import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import Add from '@material-ui/icons/Add';
import AddContactForm from './AddContactForm';
import FloatingPanel from '../Panel/FloatingPanel';
import styles from './contact-jss';

function AddContact(props) {
  const {
    classes,
    openForm,
    closeForm,
    avatarInit,
    addContact,
    submit
  } = props;
  const [img, setImg] = useState(null);
  const [files] = useState([]);

  const onDrop = useCallback((filesVal) => {
    let oldFiles = files;
    const filesLimit = 1;
    oldFiles = oldFiles.concat(filesVal);
    if (oldFiles.length > filesLimit) {
      console.log('Cannot upload more than ' + filesLimit + ' items.');
    } else {
      setImg(filesVal[0]);
    }
  }, [files]);

  const sendValues = useCallback((values) => {
    const avatar = img === null ? avatarInit : img;
    setTimeout(() => {
      submit(values, avatar);
      setImg(null);
    }, 500);
  }, [avatarInit, submit, img]);

  const branch = '';
  return (
    <div>
      <Tooltip title="Add New Contact">
        <Fab color="secondary" onClick={() => addContact()} className={classes.addBtn}>
          <Add />
        </Fab>
      </Tooltip>
      <FloatingPanel openForm={openForm} branch={branch} closeForm={closeForm}>
        <AddContactForm
          onSubmit={(values) => sendValues(values)}
          onDrop={onDrop}
          imgAvatar={img === null ? avatarInit : img}
        />
      </FloatingPanel>
    </div>
  );
}

AddContact.propTypes = {
  classes: PropTypes.object.isRequired,
  submit: PropTypes.func.isRequired,
  addContact: PropTypes.func.isRequired,
  openForm: PropTypes.bool.isRequired,
  avatarInit: PropTypes.string.isRequired,
  closeForm: PropTypes.func.isRequired,
};

export default withStyles(styles)(AddContact);
