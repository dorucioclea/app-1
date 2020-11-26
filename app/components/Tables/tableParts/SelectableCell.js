import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import TableCell from '@material-ui/core/TableCell';
import css from 'dan-styles/Table.scss';

const styles = {};

class SelectableCell extends React.Component {
  handleChange = event => {
    const { updateRow, branch } = this.props;
    updateRow(event, branch);
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      cellData,
      edited,
      options,
      theme,
    } = this.props;
    return (
      <TableCell padding="none">
        <Select
          name={cellData.type}
          id={cellData.id.toString()}
          className={classNames(css.crudInput, theme.palette.type === 'dark' ? css.lightTxt : css.darkTxt)}
          value={cellData.value}
          onChange={this.handleChange}
          displayEmpty
          disabled={!edited}
          margin="none"
        >
          {options.map((option, index) => <MenuItem value={option} key={index.toString()}>{option}</MenuItem>)}
        </Select>
      </TableCell>
    );
  }
}

SelectableCell.propTypes = {
  options: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired,
  cellData: PropTypes.object.isRequired,
  updateRow: PropTypes.func.isRequired,
  edited: PropTypes.bool.isRequired,
  branch: PropTypes.string.isRequired,
};

export default withStyles(styles, { withTheme: true })(SelectableCell);
