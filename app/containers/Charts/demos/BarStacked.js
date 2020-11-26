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

const theme = createMuiTheme(ThemePallete.orangeTheme);
const color = ({
  primary: theme.palette.primary.main,
  secondary: theme.palette.secondary.main,
});

function BarStacked(props) {
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
          <XAxis dataKey="name" tickLine={false} />
          <YAxis axisLine={false} tickSize={3} tickLine={false} tick={{ stroke: 'none' }} />
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <CartesianAxis vertical={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" stackId="a" fillOpacity="0.8" fill={color.secondary} />
          <Bar dataKey="uv" stackId="a" fillOpacity="0.8" fill={color.primary} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

BarStacked.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BarStacked);
