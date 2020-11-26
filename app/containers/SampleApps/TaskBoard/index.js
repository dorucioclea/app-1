import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { useSelector, useDispatch } from 'react-redux';
import { TaskBoard, AddBoard, Notification } from 'dan-components';
import {
  fetchAction,
  addAction,
  discardAction,
  submitAction,
  deleteAction,
  closeNotifAction,
} from './reducers/taskboardActions';
import data from './api/taskBoardData';

const styles = theme => ({
  root: {
    display: 'block',
    width: `calc(100% + ${theme.spacing(2)}px)`,
    marginLeft: theme.spacing(1) * -1
  }
});

function TaskBoardContainer(props) {
  // Redux State
  const reducer = 'taskboard';
  const boardData = useSelector(state => state.getIn([reducer, 'boardData']));
  const openFrm = useSelector(state => state.getIn([reducer, 'openFrm']));
  const messageNotif = useSelector(state => state.getIn([reducer, 'notifMsg']));

  // Dispatcher
  const fetchBoardData = useDispatch();
  const submit = useDispatch();
  const deleteBoard = useDispatch();
  const addBoard = useDispatch();
  const discardBoard = useDispatch();
  const closeNotif = useDispatch();

  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    fetchBoardData(fetchAction(data));
    setDataLoaded(true);
  }, []);

  const handleSubmit = value => {
    submit(submitAction(value));

    // Scroll to right-end
    const taskWrap = document.getElementById('task_wrap').firstElementChild.firstElementChild;
    taskWrap.scrollLeft = taskWrap.firstElementChild.offsetWidth - taskWrap.offsetWidth;
  };

  const handleDelete = async (id) => {
    await deleteBoard(deleteAction(id));
  };

  const title = brand.name + ' - Task Board';
  const description = brand.desc;
  const { classes } = props;
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
      <Notification close={() => closeNotif(closeNotifAction)} message={messageNotif} />
      <div className={classes.root} id="task_wrap">
        <TaskBoard dataLoaded={dataLoaded} data={boardData.toJS()} removeBoard={(id) => handleDelete(id)} />
        <AddBoard
          openForm={openFrm}
          addEvent={() => addBoard(addAction)}
          closeForm={() => discardBoard(discardAction)}
          submit={(value) => handleSubmit(value)}
        />
      </div>
    </div>
  );
}

TaskBoardContainer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TaskBoardContainer);
