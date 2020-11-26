import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/indigo';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import AddCircle from '@material-ui/icons/AddCircle';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import Remove from '@material-ui/icons/Remove';
import ThumbUp from '@material-ui/icons/ThumbUp';
import { Rating } from 'dan-components';

const styles = theme => ({
  demo: {
    height: 'auto',
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`,
  },
  field: {
    margin: `${theme.spacing(3)}px 0`,
  },
  chip: {
    margin: theme.spacing(1),
    fontWeight: 'bold',
    color: '#FFF',
    background: red[300]
  },
  blue: {
    color: blue[300]
  },
  green: {
    color: green[500]
  },
  red: {
    color: red[300]
  },
  small: {
    '& button': {
      width: 72,
      height: 72,
      padding: 16
    },
    '& svg': {
      width: 36,
      height: 36
    }
  },
  medium: {
    '& button': {
      width: 96,
      height: 96,
      padding: 24
    },
    '& svg': {
      width: 48,
      height: 48
    }
  },
  large: {
    '& button': {
      width: 120,
      height: 120,
      padding: 30
    },
    '& svg': {
      width: 60,
      height: 60
    }
  }
});

class RatingCustom extends PureComponent {
  state = {
    rating: 3
  }

  handleChange = value => {
    this.setState({ rating: value });
  }

  render() {
    const { classes } = this.props;
    const { rating } = this.state;
    return (
      <Fragment>
        <Grid
          container
          alignItems="flex-start"
          justify="space-around"
          direction="row"
          spacing={2}
        >
          <Grid
            item
            md={6}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>Ratting Custom Icon</Typography>
            <FormControl className={classes.formControl}>
              <Rating
                value={rating}
                max={5}
                onChange={(value) => this.handleChange(value)}
                iconFilled={<ThumbUp className={classes.blue} />}
                iconHovered={<ThumbUp className={classes.blue} />}
                iconNormal={<Remove className={classes.red} />}
              />
            </FormControl>
          </Grid>
          <Grid
            item
            md={6}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>Show Counter</Typography>
            <Grid
              container
              alignItems="flex-start"
              justify="flex-start"
              direction="row"
            >
              <FormControl className={classes.formControl}>
                <Rating
                  value={rating}
                  max={5}
                  onChange={(value) => this.handleChange(value)}
                  iconFilled={<AddCircle className={classes.green} />}
                  iconHovered={<AddCircleOutline className={classes.green} />}
                  iconNormal={<AddCircleOutline className={classes.green} />}
                  tooltipRenderer={(index) => <span>{ index }</span>}
                  tooltipPosition="bottom-center"
                />
              </FormControl>
              <Chip label={rating} className={classes.chip} />
            </Grid>
          </Grid>
          <Grid
            item
            md={12}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>Ratting Custom Size</Typography>
            <FormControl className={classes.formControl}>
              <div className={classes.small}>
                <Rating
                  value={rating}
                  max={5}
                  onChange={(value) => this.handleChange(value)}
                />
              </div>
              <div className={classes.medium}>
                <Rating
                  value={rating}
                  max={5}
                  onChange={(value) => this.handleChange(value)}
                />
              </div>
              <div className={classes.large}>
                <Rating
                  value={rating}
                  max={5}
                  onChange={(value) => this.handleChange(value)}
                />
              </div>
            </FormControl>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

RatingCustom.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RatingCustom);
