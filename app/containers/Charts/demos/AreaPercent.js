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
import amber from '@material-ui/core/colors/amber';
import { data1 } from './sampleData';
import styles from './fluidChart-jss';

const theme = createMuiTheme(ThemePallete.purpleTheme);
const color = ({
  primary: theme.palette.primary.main,
  primarydark: theme.palette.primary.dark,
  secondary: theme.palette.secondary.main,
  secondarydark: theme.palette.secondary.dark,
  third: amber[500],
  thirddark: amber[800],
});

const toPercent = (decimal, fixed = 0) => (
  `${(decimal * 100).toFixed(fixed)}%`
);

const getPercent = (value, total) => {
  const ratio = total > 0 ? value / total : 0;
  return toPercent(ratio, 2);
};

const renderTooltipContent = (o) => {
  const { payload, label } = o;
  const total = payload.reduce((result, entry) => (result + entry.value), 0);

  return (
    <div className="customized-tooltip-content">
      <p className="total">{`${label} (Total: ${total})`}</p>
      <ul className="list">
        {
          payload.map((entry, index) => (
            <li key={`item-${index.toString()}`} style={{ color: entry.color }}>
              {`${entry.name}: ${entry.value}(${getPercent(entry.value, total)})`}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

function AreaPercent(props) {
  const { classes } = props;
  return (
    <div className={classes.chartFluid}>
      <ResponsiveContainer>
        <AreaChart
          width={800}
          height={450}
          data={data1}
          stackOffset="expand"
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <defs>
            <linearGradient id="colorUx" x1="1" y1="0" x2="0" y2="1">
              <stop offset="20%" stopColor={color.primary} stopOpacity={0.9} />
              <stop offset="80%" stopColor={color.primarydark} stopOpacity={0.9} />
            </linearGradient>
            <linearGradient id="colorUy" x1="1" y1="0" x2="0" y2="1">
              <stop offset="20%" stopColor={color.secondary} stopOpacity={0.9} />
              <stop offset="80%" stopColor={color.secondarydark} stopOpacity={0.9} />
            </linearGradient>
            <linearGradient id="colorUz" x1="1" y1="0" x2="0" y2="1">
              <stop offset="20%" stopColor={color.third} stopOpacity={0.9} />
              <stop offset="80%" stopColor={color.thirddark} stopOpacity={0.9} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" tickLine={false} />
          <YAxis axisLine={false} tickSize={3} tickLine={false} tick={{ stroke: 'none' }} />
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <CartesianAxis vertical={false} />
          <Tooltip content={renderTooltipContent} />
          <Area type="monotone" dataKey="uv" stackId="1" stroke="none" fillOpacity={0.8} fill="url(#colorUx)" />
          <Area type="monotone" dataKey="amt" stackId="1" stroke="none" fillOpacity={0.8} fill="url(#colorUz)" />
          <Area type="monotone" dataKey="pv" stackId="1" stroke="none" fillOpacity={0.8} fill="url(#colorUy)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

AreaPercent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AreaPercent);
