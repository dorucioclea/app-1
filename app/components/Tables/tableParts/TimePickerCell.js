import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import TableCell from '@material-ui/core/TableCell';
import InputAdornment from '@material-ui/core/InputAdornment';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import css from 'dan-styles/Table.scss';

const styles = {
  datepicker: {
    '& button': {
      top: 2
    }
  }
};

class TimePickerCell extends React.Component {
  state = {
    event: {
      target: {
        name: this.props.cellData.type, // eslint-disable-line
        value: this.props.cellData.value, // eslint-disable-line
      }
    }
  }

  handleTimeChange = date => {
    const { event } = this.state;
    const { updateRow, branch } = this.props;
    event.target.value = date;
    updateRow(event, branch);
  }

  render() {
    const {
      edited,
      cellData,
      theme,
      classes
    } = this.props;
    const { event } = this.state;
    return (
      <TableCell className={classes.datepicker}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <TimePicker
            name={cellData.type}
            className={classNames(css.crudInput, theme.palette.type === 'dark' ? css.lightTxt : css.darkTxt)}
            mask={[/\d/, /\d/, ':', /\d/, /\d/, ' ', /a|p/i, 'M']}
            placeholder="08:00 AM"
            value={event.target.value}
            disabled={!edited}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <Icon>access_time</Icon>
                  </IconButton>
                </InputAdornment>
              ),
            }}
            onChange={this.handleTimeChange}
          />
        </MuiPickersUtilsProvider>
      </TableCell>
    );
  }
}

TimePickerCell.propTypes = {
  cellData: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  updateRow: PropTypes.func.isRequired,
  edited: PropTypes.bool.isRequired,
  branch: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TimePickerCell);
