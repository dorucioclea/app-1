import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import ThemePallete from 'dan-api/palette/themePalette';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  CartesianAxis,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { data1 } from './sampleData';
import styles from './fluidChart-jss';

const theme = createMuiTheme(ThemePallete.magentaTheme);
const color = ({
  primary: theme.palette.primary.main,
  primaryDark: theme.palette.primary.dark,
  secondary: theme.palette.secondary.main,
  secondaryDark: theme.palette.secondary.dark,
});

function BarSimple(props) {
  const { classes } = props;
  return (
    <div className={classes.chartFluid}>
      <ResponsiveContainer>
        <BarChart
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
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color.primary} stopOpacity={0.8} />
              <stop offset="95%" stopColor={color.primaryDark} stopOpacity={1} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={color.secondary} stopOpacity={0.8} />
              <stop offset="95%" stopColor={color.secondaryDark} stopOpacity={1} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" tickLine={false} />
          <YAxis axisLine={false} tickSize={3} tickLine={false} tick={{ stroke: 'none' }} />
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <CartesianAxis vertical={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fillOpacity="1" fill="url(#colorUv)" />
          <Bar dataKey="uv" fillOpacity="0.8" fill="url(#colorPv)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

BarSimple.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BarSimple);
