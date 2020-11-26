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
import { data2 } from './sampleData';
import styles from './fluidChart-jss';

const theme = createMuiTheme(ThemePallete.magentaTheme);
const color = ({
  main: theme.palette.primary.main,
  mainDark: theme.palette.primary.dark,
  secondary: theme.palette.secondary.main,
});

function AreaSimple(props) {
  const { classes } = props;
  return (
    <div className={classes.chartFluid}>
      <ResponsiveContainer>
        <AreaChart
          width={800}
          height={450}
          data={data2}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <defs>
            <linearGradient id="colorUv" x1="1" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color.secondary} stopOpacity={0.9} />
              <stop offset="95%" stopColor={color.main} stopOpacity={0.9} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" tickLine={false} />
          <YAxis axisLine={false} tickSize={3} tickLine={false} tick={{ stroke: 'none' }} />
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <CartesianAxis vertical={false} />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke={color.mainDark} strokeWidth={1} fillOpacity={1} fill="url(#colorUv)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

AreaSimple.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AreaSimple);
