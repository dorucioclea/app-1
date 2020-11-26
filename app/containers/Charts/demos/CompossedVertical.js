import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import ThemePallete from 'dan-api/palette/themePalette';
import green from '@material-ui/core/colors/green';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { data1 } from './sampleData';
import styles from './fluidChart-jss';

const theme = createMuiTheme(ThemePallete.blueTheme);
const color = ({
  main: theme.palette.primary.main,
  maindark: theme.palette.primary.dark,
  secondary: theme.palette.secondary.main,
  third: green[500],
});

function CompossedVertical(props) {
  const { classes } = props;
  return (
    <div className={classes.chartFluid}>
      <ResponsiveContainer>
        <ComposedChart
          width={800}
          height={450}
          layout="vertical"
          data={data1}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" tickLine={false} tick={{ stroke: 'none' }} />
          <YAxis axisLine={false} tickLine={false} tick={{ stroke: 'none' }} dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Area dataKey="amt" fillOpacity="0.8" fill={color.main} stroke={color.maindark} />
          <Bar dataKey="pv" barSize={20} fillOpacity="0.8" fill={color.secondary} />
          <Line dataKey="uv" strokeWidth={4} stroke={color.third} />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

CompossedVertical.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CompossedVertical);
