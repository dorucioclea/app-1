import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, withStyles } from '@material-ui/core/styles';
import ThemePallete from 'dan-api/palette/themePalette';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  CartesianAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { data1 } from './sampleData';
import styles from './fluidChart-jss';

const theme = createMuiTheme(ThemePallete.magentaTheme);
const color = ({
  primary: theme.palette.primary.main,
  secondary: theme.palette.secondary.main,
});

const CustomizedLabel = props => {
  const {
    x,
    y,
    stroke,
    value
  } = props;
  return (
    <text x={x} y={y} dy={-4} fill={stroke} fillOpacity="0.8" fontSize={10} textAnchor="middle">
      { value }
    </text>
  );
};

CustomizedLabel.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  value: PropTypes.number,
  stroke: PropTypes.string,
};

CustomizedLabel.defaultProps = {
  x: 0,
  y: 0,
  value: 0,
  stroke: '#000'
};

function LineCustomLabel(props) {
  const { classes } = props;
  return (
    <div className={classes.chartFluid}>
      <ResponsiveContainer>
        <LineChart
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
          <Line type="monotone" dataKey="pv" strokeWidth={3} stroke={color.primary} label={<CustomizedLabel stroke={color.primary} />} />
          <Line type="monotone" dataKey="uv" strokeWidth={3} stroke={color.secondary} label={<CustomizedLabel stroke={color.secondary} />} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

LineCustomLabel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LineCustomLabel);
