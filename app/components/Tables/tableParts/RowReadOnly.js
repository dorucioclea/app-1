import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import classNames from 'classnames';
import css from 'dan-styles/Table.scss';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/BorderColor';

const styles = theme => ({
  button: {
    margin: theme.spacing(1),
  },
  padding: {
    padding: theme.spacing(0, 1)
  }
});

class RowReadOnly extends React.Component {
  render() {
    const {
      anchor,
      classes,
      item,
      removeRow,
      editRow,
      branch
    } = this.props;
    const eventDel = () => {
      removeRow(item, branch);
    };
    const eventEdit = () => {
      editRow(item, branch);
    };
    const renderCell = dataArray => dataArray.map((itemCell, index) => {
      if (itemCell.name !== 'action' && !itemCell.hidden) {
        return (
          <TableCell className={classes.padding} key={index.toString()}>
            {item.get(itemCell.name) !== undefined ? item.get(itemCell.name).toString() : ''}
          </TableCell>
        );
      }
      return false;
    });
    return (
      <tr>
        {renderCell(anchor)}
        <TableCell className={classes.padding}>
          <IconButton
            onClick={() => eventEdit(this)}
            className={classNames((item.get('edited') ? css.hideAction : ''), classes.button)}
            aria-label="Edit"
          >
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={() => eventDel(this)}
            className={classes.button}
            aria-label="Delete"
          >
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </tr>
    );
  }
}

RowReadOnly.propTypes = {
  anchor: PropTypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  item: PropTypes.object.isRequired,
  removeRow: PropTypes.func.isRequired,
  editRow: PropTypes.func.isRequired,
  branch: PropTypes.string.isRequired,
};

export default withStyles(styles)(RowReadOnly);
