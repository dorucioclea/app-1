import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';

const useStyles = makeStyles(theme => ({
  root: {
    width: 200,
  },
  margin: {
    height: theme.spacing(3),
  },
  demo: {
    height: 'auto',
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`,
  },
}));

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

function valueLabelFormat(value) {
  return marks.findIndex(mark => mark.value === value) + 1;
}

export default function ContinuousSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);
  const [valueRange, setValueRange] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeRange = (event, newValue) => {
    setValueRange(newValue);
  };

  return (
    <Fragment>
      <Grid
        container
        alignItems="flex-start"
        justify="space-around"
        direction="row"
        spacing={3}
      >
        <Grid
          item
          md={5}
          className={classes.demo}
        >
          <Typography variant="button" className={classes.divider}>Slider Input Basic</Typography>
          <Typography id="continuous-slider" gutterBottom>
            Volume
          </Typography>
          <Grid container spacing={2}>
            <Grid item>
              <VolumeDown />
            </Grid>
            <Grid item xs>
              <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
            </Grid>
            <Grid item>
              <VolumeUp />
            </Grid>
          </Grid>
          <br />
          <Typography variant="button" className={classes.divider}>Range sliders</Typography>
          <Slider
            value={valueRange}
            onChange={handleChangeRange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
          />
          <Typography variant="button" className={classes.divider}>Slider Input Disabled</Typography>
          <div className={classes.inputRange}>
            <Slider disabled defaultValue={0} aria-labelledby="continuous-slider" />
            <Slider disabled defaultValue={50} aria-labelledby="continuous-slider" />
            <Slider disabled defaultValue={100} aria-labelledby="continuous-slider" />
          </div>
        </Grid>
        <Grid
          item
          md={5}
          className={classes.demo}
        >
          <Typography variant="button" className={classes.divider}>Slider with steps</Typography>
          <Typography id="discrete-slider" gutterBottom>
            Temperature
          </Typography>
          <Slider
            defaultValue={30}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={10}
            marks
            min={10}
            max={110}
          />
          <div className={classes.margin} />
          <Typography id="discrete-slider-small-steps" gutterBottom>
            Small Steps
          </Typography>
          <Slider
            defaultValue={0.00000005}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-small-steps"
            step={0.00000001}
            marks
            min={-0.00000005}
            max={0.0000001}
            valueLabelDisplay="auto"
          />
          <div className={classes.margin} />
          <Typography id="discrete-slider-custom" gutterBottom>
            Custom marks
          </Typography>
          <Slider
            defaultValue={20}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-custom"
            step={10}
            valueLabelDisplay="auto"
            marks={marks}
          />
          <div className={classes.margin} />
          <Typography id="discrete-slider-restrict" gutterBottom>
            Restricted values
          </Typography>
          <Slider
            defaultValue={20}
            valueLabelFormat={valueLabelFormat}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-restrict"
            step={null}
            valueLabelDisplay="auto"
            marks={marks}
          />
          <div className={classes.margin} />
          <Typography id="discrete-slider-always" gutterBottom>
            Always visible
          </Typography>
          <Slider
            defaultValue={80}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-always"
            step={10}
            marks={marks}
            valueLabelDisplay="on"
          />
        </Grid>
      </Grid>
    </Fragment>
  );
}
