import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';
import css from 'dan-styles/Table.scss';

const styles = {};

class EditableCell extends React.Component {
  handleUpdate(event) {
    const { updateRow, branch } = this.props;
    event.persist();
    updateRow(event, branch);
  }

  render() {
    const {
      cellData,
      edited,
      inputType,
      theme,
    } = this.props;
    switch (inputType) {
      case 'text':
        return (
          <TableCell padding="default">
            <TextField
              placeholder={cellData.type}
              name={cellData.type}
              className={classNames(css.crudInput, theme.palette.type === 'dark' ? css.lightTxt : css.darkTxt)}
              id={cellData.id.toString()}
              value={cellData.value}
              onChange={(event) => this.handleUpdate(event)}
              disabled={!edited}
              margin="none"
              inputProps={{
                'aria-label': 'Description',
              }}
            />
          </TableCell>
        );
      case 'number':
        return (
          <TableCell padding="none">
            <TextField
              id={cellData.id.toString()}
              name={cellData.type}
              className={classNames(css.crudInput, theme.palette.type === 'dark' ? css.lightTxt : css.darkTxt)}
              value={cellData.value}
              onChange={(event) => this.handleUpdate(event)}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              margin="none"
              disabled={!edited}
            />
          </TableCell>
        );
      default:
        return (
          <TableCell padding="default">
            <TextField
              placeholder={cellData.type}
              name={cellData.type}
              className={classNames(css.crudInput, theme.palette.type === 'dark' ? css.lightTxt : css.darkTxt)}
              id={cellData.id.toString()}
              value={cellData.value}
              onChange={(event) => this.handleUpdate(event)}
              disabled={!edited}
              margin="none"
              inputProps={{
                'aria-label': 'Description',
              }}
            />
          </TableCell>
        );
    }
  }
}

EditableCell.propTypes = {
  inputType: PropTypes.string.isRequired,
  cellData: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  updateRow: PropTypes.func.isRequired,
  edited: PropTypes.bool.isRequired,
  branch: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(EditableCell);
