import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TablePagination from '@material-ui/core/TablePagination';
import Checkbox from '@material-ui/core/Checkbox';
import EnhancedTableHead from './tableParts/TableHeader';
import EnhancedTableToolbar from './tableParts/TableToolbar';
import styles from './tableStyle-jss';

class AdvTable extends React.Component {
  constructor(props, context) {
    super(props, context);
    const {
      order,
      orderBy,
      selected,
      data,
      page,
      rowsPerPage,
      defaultPerPage,
      filterText
    } = this.props;

    this.state = {
      order,
      orderBy,
      selected,
      data: data.sort((a, b) => (a.calories < b.calories ? -1 : 1)),
      page,
      rowsPerPage,
      defaultPerPage,
      filterText,
    };
  }

  handleRequestSort = (event, property) => {
    const orderByAlias = property;
    let orderLet = 'desc';
    const { orderBy, order, data } = this.state;
    if (orderBy === property && order === 'desc') {
      orderLet = 'asc';
    }

    const dataAlias = orderLet === 'desc'
      ? data.sort((a, b) => (b[orderByAlias] < a[orderByAlias] ? -1 : 1))
      : data.sort((a, b) => (a[orderByAlias] < b[orderByAlias] ? -1 : 1));

    this.setState({ data: dataAlias, order: orderLet, orderBy: orderByAlias });
  };

  handleSelectAllClick = (event, checked) => {
    const { data } = this.state;
    if (checked) {
      this.setState({ selected: data.map(n => n.id) });
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  // eslint-disable-next-line
  isSelected = id => this.state.selected.indexOf(id) !== -1;

  handleUserInput(value) {
    const { data, defaultPerPage } = this.state;
    // Show all item first
    if (value !== '') {
      this.setState({ rowsPerPage: data.length });
    } else {
      this.setState({ rowsPerPage: defaultPerPage });
    }

    // Show result base on keyword
    this.setState({ filterText: value.toLowerCase() });
  }

  render() {
    const { classes } = this.props;
    const {
      data,
      order,
      orderBy,
      selected,
      rowsPerPage,
      page,
      filterText
    } = this.state;
    const { columnData } = this.props;
    const checkcell = true;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - (page * rowsPerPage));
    const renderCell = (dataArray, keyArray) => keyArray.map((itemCell, index) => (
      <TableCell align={itemCell.numeric ? 'right' : 'left'} key={index.toString()}>{dataArray[itemCell.id]}</TableCell>
    ));
    return (
      <div className={classes.rootTable}>
        <EnhancedTableToolbar
          numSelected={selected.length}
          filterText={filterText}
          onUserInput={(event) => this.handleUserInput(event)}
          title="Nutrition"
          placeholder="Search Nutrition"
        />
        <div className={classes.tableWrapper}>
          <Table className={classNames(classes.table, classes.stripped, classes.hover)}>
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={this.handleSelectAllClick}
              onRequestSort={this.handleRequestSort}
              rowCount={data.length}
              columnData={columnData}
              checkcell={checkcell}
            />
            <TableBody>
              {data.slice(page * rowsPerPage, (page * rowsPerPage) + rowsPerPage).map(n => {
                const isSelected = this.isSelected(n.id);
                if (n.name.toLowerCase().indexOf(filterText) === -1) {
                  return false;
                }
                return (
                  <TableRow
                    onClick={event => this.handleClick(event, n.id)}
                    role="checkbox"
                    aria-checked={isSelected}
                    tabIndex={-1}
                    key={n.id}
                    selected={isSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox checked={isSelected} />
                    </TableCell>
                    {renderCell(n, columnData)}
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </div>
    );
  }
}

AdvTable.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  selected: PropTypes.array.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  defaultPerPage: PropTypes.number.isRequired,
  filterText: PropTypes.string.isRequired,
  columnData: PropTypes.array.isRequired,
};

export default withStyles(styles)(AdvTable);
