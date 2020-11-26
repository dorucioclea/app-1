import React, { PureComponent } from 'react';
import { WeatherWidget } from 'dan-components';

class WeatherStatus extends PureComponent {
  render() {
    return (
      <div>
        <WeatherWidget status="cloud" city="Bandung" temp={18} />
      </div>
    );
  }
}

export default WeatherStatus;
