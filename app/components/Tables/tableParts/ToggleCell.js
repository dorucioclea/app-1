import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import classNames from 'classnames';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import css from 'dan-styles/Table.scss';

class ToggleCell extends React.Component {
  state = {
    isChecked: this.props.cellData.value // eslint-disable-line
  };

  handleChange = event => {
    const { updateRow, branch } = this.props;
    this.setState({ isChecked: event.target.checked });
    updateRow(event, branch);
  };

  render() {
    const {
      cellData,
      edited,
    } = this.props;
    const { isChecked } = this.state;
    return (
      <TableCell className={css.toggleCell} padding="none" textalign="center">
        <div className={classNames(css.coverReadonly, !edited ? css.show : '')} />
        <FormControlLabel
          control={(
            <Switch
              name={cellData.type}
              id={cellData.id.toString()}
              className={css.crudInput}
              checked={isChecked}
              onChange={this.handleChange}
              value={cellData.value.toString()}
            />
          )}
        />
      </TableCell>
    );
  }
}

ToggleCell.propTypes = {
  cellData: PropTypes.object.isRequired,
  updateRow: PropTypes.func.isRequired,
  edited: PropTypes.bool.isRequired,
  branch: PropTypes.string.isRequired,
};

export default ToggleCell;
