import React, { PureComponent } from 'react';
import { PerformanceWidget } from 'dan-components';

class PerformanceStatus extends PureComponent {
  render() {
    return (
      <div>
        <PerformanceWidget />
      </div>
    );
  }
}

export default PerformanceStatus;
