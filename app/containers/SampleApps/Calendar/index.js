import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import 'dan-styles/vendors/react-big-calendar/react-big-calendar.css';
import {
  EventCalendar,
  DetailEvent,
  AddEvent,
  Notification
} from 'dan-components';
import {
  fetchAction,
  addAction,
  discardAction,
  submitAction,
  deleteAction,
  closeNotifAction
} from './reducers/calendarActions';
import events from './api/eventData';

const styles = {
  root: {
    display: 'block'
  }
};

function Calendar(props) {
  // Redux State
  const reducer = 'calendar';
  const eventData = useSelector(state => state.getIn([reducer, 'events']));
  const openFrm = useSelector(state => state.getIn([reducer, 'openFrm']));
  const messageNotif = useSelector(state => state.getIn([reducer, 'notifMsg']));

  // Dispatcher
  const fetchEventsData = useDispatch();
  const submit = useDispatch();
  const remove = useDispatch();
  const addEvent = useDispatch();
  const discardEvent = useDispatch();
  const closeNotif = useDispatch();

  const [anchorEl, setAnchorEl] = useState(false);
  const [event, setEvent] = useState(null);
  const [anchorPos, setAnchorPos] = useState({ top: 0, left: 0 });

  useEffect(() => {
    fetchEventsData(fetchAction(events));
  }, []);

  const handleClick = e => {
    setTimeout(() => {
      const target = document.getElementsByClassName('rbc-selected')[0];
      const targetBounding = target.getBoundingClientRect();
      setEvent(e);
      setAnchorEl(true);
      setAnchorPos({ top: targetBounding.top, left: targetBounding.left });
    }, 200);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };

  const title = brand.name + ' - Calendar';
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
      <div className={classes.root}>
        <EventCalendar events={eventData.toJS()} handleEventClick={(e) => handleClick(e)} />
        <DetailEvent
          event={event}
          anchorEl={anchorEl}
          anchorPos={anchorPos}
          close={handleClose}
          remove={(payload) => remove(deleteAction(payload))}
        />
        <AddEvent
          openForm={openFrm}
          addEvent={() => addEvent(addAction)}
          closeForm={() => discardEvent(discardAction)}
          submit={(payload) => submit(submitAction(payload))}
        />
      </div>
    </div>
  );
}

Calendar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Calendar);
