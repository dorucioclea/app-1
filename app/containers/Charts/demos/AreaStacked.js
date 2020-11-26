import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import ThemePallete from 'dan-api/palette/themePalette';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  CartesianAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import green from '@material-ui/core/colors/green';
import { data1 } from './sampleData';
import styles from './fluidChart-jss';

const theme = createMuiTheme(ThemePallete.yellowCyanTheme);
const color = ({
  primary: theme.palette.primary.main,
  primarydark: theme.palette.primary.dark,
  secondary: theme.palette.secondary.main,
  secondarydark: theme.palette.secondary.dark,
  third: green[500],
  thirddark: green[500],
});

function AreaStacked(props) {
  const { classes } = props;
  return (
    <div className={classes.chartFluid}>
      <ResponsiveContainer>
        <AreaChart
          width={800}
          height={450}
          data={data1}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <XAxis dataKey="name" tickLine={false} />
          <YAxis axisLine={false} tickSize={3} tickLine={false} tick={{ stroke: 'none' }} />
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <CartesianAxis vertical={false} />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="none" fillOpacity="0.7" fill={color.primary} />
          <Area type="monotone" dataKey="pv" stackId="2" stroke="none" fillOpacity="0.7" fill={color.secondarydark} />
          <Area type="monotone" dataKey="amt" stackId="3" stroke="none" fillOpacity="0.7" fill={color.thirddark} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

AreaStacked.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AreaStacked);
