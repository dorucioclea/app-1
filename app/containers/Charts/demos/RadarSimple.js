import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import ThemePallete from 'dan-api/palette/themePalette';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis
} from 'recharts';
import { data7 } from './sampleData';

const theme = createMuiTheme(ThemePallete.purpleTheme);
const color = ({
  main: theme.palette.primary.main,
  dark: theme.palette.primary.dark,
});

function RadarSimple() {
  return (
    <RadarChart cx={200} cy={250} outerRadius={150} width={600} height={500} data={data7}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar name="Mike" dataKey="A" stroke={color.dark} fill={color.main} fillOpacity={0.8} />
    </RadarChart>
  );
}

export default RadarSimple;
