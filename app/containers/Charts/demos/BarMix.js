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
  ResponsiveContainer,
  Legend
} from 'recharts';
import green from '@material-ui/core/colors/green';
import { data2 } from './sampleData';
import styles from './fluidChart-jss';

const theme = createMuiTheme(ThemePallete.blueTheme);
const color = ({
  primary: theme.palette.primary.main,
  secondary: theme.palette.secondary.main,
  third: green[500]
});

function BarMix(props) {
  const { classes } = props;
  return (
    <div className={classes.chartFluid}>
      <ResponsiveContainer>
        <BarChart
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
          <XAxis dataKey="name" tickLine={false} />
          <YAxis axisLine={false} tickSize={3} tickLine={false} tick={{ stroke: 'none' }} />
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <CartesianAxis vertical={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="female" stackId="a" fillOpacity="0.8" fill={color.primary} />
          <Bar dataKey="male" stackId="a" fillOpacity="0.8" fill={color.secondary} />
          <Bar dataKey="uv" fill={color.third} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

BarMix.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BarMix);
