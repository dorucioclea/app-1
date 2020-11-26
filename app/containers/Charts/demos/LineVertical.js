import React from 'react';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import ThemePallete from 'dan-api/palette/themePalette';
import PropTypes from 'prop-types';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { data1 } from './sampleData';
import styles from './fluidChart-jss';

const theme = createMuiTheme(ThemePallete.cyanTheme);
const color = ({
  primary: theme.palette.primary.main,
  secondary: theme.palette.secondary.main,
});

function LineVertical(props) {
  const { classes } = props;
  return (
    <div className={classes.chartFluid}>
      <ResponsiveContainer>
        <LineChart
          width={800}
          height={450}
          data={data1}
          layout="vertical"
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
          <Line type="monotone" dataKey="pv" strokeWidth={5} stroke={color.primary} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" strokeWidth={5} stroke={color.secondary} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

LineVertical.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LineVertical);
