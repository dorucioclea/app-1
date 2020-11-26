import React, {
  useState, useEffect, useCallback, useRef
} from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Calendar from 'react-calendar';
import Clock from 'react-clock';
import 'dan-styles/vendors/react-clock/react-clock.css';
import styles from './widget-jss';

function DateWidget(props) {
  const [date, setDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());
  const timeInterval = useRef();

  const setTime = useCallback(() => {
    const datenow = new Date();
    const timeOptions = { hour: '2-digit', minute: '2-digit', };
    const time = datenow.toLocaleTimeString([], timeOptions);
    setCurrentTime(time);
  }, []);

  useEffect(() => {
    timeInterval.current = setInterval(
      () => {
        setTime();
      },
      1000
    );
  }, [setTime]);

  useEffect(() => () => {
    timeInterval && timeInterval.current && clearInterval(timeInterval.current);
  }, []);

  const onChange = dateParams => setDate(dateParams);

  const { classes } = props;
  return (
    <Paper className={classes.wrapperDate}>
      <section className={classes.calendarWrap}>
        <Calendar
          onChange={onChange}
          value={date}
        />
      </section>
      <section className={classes.clockWrap}>
        <Clock
          value={date}
          renderSecondHand={false}
        />
        <h4 className={classes.today}>{currentTime.toString()}</h4>
      </section>
    </Paper>
  );
}

DateWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateWidget);
