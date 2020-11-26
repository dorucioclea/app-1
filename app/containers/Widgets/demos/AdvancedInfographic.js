import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import withWidth from '@material-ui/core/withWidth';
import {
  LineChart,
  Line,
} from 'recharts';
import { data1 } from 'dan-api/chart/chartMiniData';
import colorfull from 'dan-api/palette/colorfull';
import bitcoinLogo from 'dan-images/crypto/bitcoin.png';
import rippleLogo from 'dan-images/crypto/ripple.png';
import moneroLogo from 'dan-images/crypto/monero.png';
import iotaLogo from 'dan-images/crypto/iota.png';
import { CounterTrading } from 'dan-components';
import styles from 'dan-components/Widget/widget-jss';

class AdvancedInfographic extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.rootCounter}>
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12}>
            <CounterTrading
              color={colorfull[4]}
              unitBefore="$ "
              start={0}
              end={217.89}
              duration={3}
              title="Bitcoin"
              logo={bitcoinLogo}
              position="up"
              value={5.6}
              lowest={207.67}
              highest={290.20}
            >
              <LineChart width={240} height={60} data={data1}>
                <Line type="monotone" dataKey="pv" stroke="#FFFFFF" strokeWidth={2} />
              </LineChart>
            </CounterTrading>
          </Grid>
          <Grid item sm={6} xs={12}>
            <CounterTrading
              color={colorfull[6]}
              unitBefore="$ "
              start={0}
              end={7.45}
              duration={3}
              title="Ripple"
              logo={rippleLogo}
              position="down"
              value={1.60}
              lowest={4.67}
              highest={7.45}
            >
              <LineChart width={240} height={60} data={data1}>
                <Line type="monotone" dataKey="amt" stroke="#FFFFFF" strokeWidth={2} />
              </LineChart>
            </CounterTrading>
          </Grid>
          <Grid item sm={6} xs={12}>
            <CounterTrading
              color={colorfull[0]}
              unitBefore="$ "
              start={0}
              end={21.66}
              duration={3}
              title="Monero"
              logo={moneroLogo}
              position="up"
              value={1.16}
              lowest={10.12}
              highest={25.72}
            >
              <LineChart width={240} height={60} data={data1}>
                <Line type="monotone" dataKey="uv" stroke="#FFFFFF" strokeWidth={2} />
              </LineChart>
            </CounterTrading>
          </Grid>
          <Grid item sm={6} xs={12}>
            <CounterTrading
              color={colorfull[1]}
              unitBefore="$ "
              start={0}
              end={104.78}
              duration={3}
              title="Iota"
              logo={iotaLogo}
              position="down"
              value={2.9}
              lowest={103.01}
              highest={105.20}
            >
              <LineChart width={240} height={60} data={data1}>
                <Line type="monotone" dataKey="pv" stroke="#FFFFFF" strokeWidth={2} />
              </LineChart>
            </CounterTrading>
          </Grid>
        </Grid>
      </div>
    );
  }
}

AdvancedInfographic.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withWidth()(withStyles(styles)(AdvancedInfographic));
