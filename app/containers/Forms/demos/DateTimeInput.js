import React, { Fragment, PureComponent } from 'react';
import { DateTimePicker, KeyboardDateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import { IconButton, Icon, InputAdornment } from '@material-ui/core';

const styles = theme => ({
  demo: {
    height: 'auto',
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`,
  },
  picker: {
    margin: `${theme.spacing(3)}px 5px`,
  },
  iconBtn: {
    top: theme.spacing(2)
  }
});

class DateTimeInput extends PureComponent {
  state = {
    selectedDate: new Date(),
  }

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  }

  render() {
    const { selectedDate } = this.state;
    const { classes } = this.props;
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
            md={6}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>Basic usage</Typography>
            <div className={classes.picker}>
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <DateTimePicker
                  value={selectedDate}
                  disablePast
                  onChange={this.handleDateChange}
                  label="DateTimePicker"
                />
              </MuiPickersUtilsProvider>
            </div>

            <div className={classes.picker}>
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <DateTimePicker
                  autoOk
                  ampm={false}
                  disableFuture
                  value={selectedDate}
                  onChange={this.handleDateChange}
                  label="24h clock"
                />
              </MuiPickersUtilsProvider>
            </div>
          </Grid>
          <Grid
            item
            md={6}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>Customization</Typography>
            <div className={classes.picker}>
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <DateTimePicker
                  autoOk
                  ampm={false}
                  showTabs={false}
                  disableFuture
                  value={selectedDate}
                  onChange={this.handleDateChange}
                  helperText="Hardcoded helper text"
                  leftArrowIcon={<Icon> add_alarm </Icon>}
                  rightArrowIcon={<Icon> snooze </Icon>}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton className={classes.iconBtn}>
                          <Icon>add_alarm</Icon>
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </MuiPickersUtilsProvider>
            </div>
            <div className={classes.picker}>
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <KeyboardDateTimePicker
                  label="Keyboard input"
                  value={selectedDate}
                  onChange={this.handleDateChange}
                  format="YYYY/MM/DD hh:mm A"
                  mask={[/\d/, /\d/, /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, ' ', /\d/, /\d/, ':', /\d/, /\d/, ' ', /a|p/i, 'M']}
                />
              </MuiPickersUtilsProvider>
            </div>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

DateTimeInput.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateTimeInput);
