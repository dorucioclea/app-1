import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import 'dan-styles/vendors/react-weather/GenericWeather.css';
import classNames from 'classnames';
import styles from './widget-jss';

function WeatherWidget(props) {
  const {
    status,
    classes,
    temp,
    city
  } = props;
  const cls = classNames('weather-icon', status);
  const bg = classNames(
    classes.weathercard,
    status === 'sun' ? classes.sun : classes.cloud
  );
  return (
    <div className={bg}>
      <div className="wheater-wrap">
        <div className={cls} />
        <h1>
          {temp}
          º
        </h1>
        <p>{city}</p>
      </div>
    </div>
  );
}

WeatherWidget.propTypes = {
  classes: PropTypes.object.isRequired,
  city: PropTypes.string,
  temp: PropTypes.number,
  status: PropTypes.string,
};

WeatherWidget.defaultProps = {
  city: 'Madrid',
  temp: 28,
  status: 'sun', // cloud and sun
};

export default withStyles(styles)(WeatherWidget);
