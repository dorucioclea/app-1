import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Add from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import FloatingPanel from '../Panel/FloatingPanel';
import AddEventForm from './AddEventForm';
import styles from './calendar-jss.js';

function AddEvent(props) {
  const showResult = (values) => {
    const { submit } = props;
    setTimeout(() => {
      submit(values);
    }, 500); // simulate server latency
  };

  const {
    classes,
    openForm,
    closeForm,
    addEvent
  } = props;
  const branch = '';
  return (
    <div>
      <Tooltip title="Add New Event">
        <Fab color="secondary" onClick={() => addEvent()} className={classes.addBtn}>
          <Add />
        </Fab>
      </Tooltip>
      <FloatingPanel title="Add New Event" openForm={openForm} branch={branch} closeForm={() => closeForm()}>
        <AddEventForm onSubmit={(values) => showResult(values)} />
      </FloatingPanel>
    </div>
  );
}

AddEvent.propTypes = {
  classes: PropTypes.object.isRequired,
  openForm: PropTypes.bool.isRequired,
  addEvent: PropTypes.func.isRequired,
  closeForm: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired,
};

export default withStyles(styles)(AddEvent);
