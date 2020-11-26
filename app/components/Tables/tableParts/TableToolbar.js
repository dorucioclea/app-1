import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import ArchiveIcon from '@material-ui/icons/Archive';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import styles from '../tableStyle-jss';

class TableToolbar extends React.Component {
  state = {
    showSearch: false,
  }

  toggleSearch() {
    const { showSearch } = this.state;
    this.setState({ showSearch: !showSearch });
  }

  handleChange(event) {
    const { onUserInput } = this.props;
    event.persist();
    onUserInput(event.target.value);
  }

  render() {
    const {
      numSelected,
      classes,
      filterText,
      placeholder,
      title,
    } = this.props;
    const { showSearch } = this.state;

    return (
      <Toolbar
        className={classNames(classes.toolbar, {
          [classes.highlight]: numSelected > 0,
        })}
      >
        <div className={classes.title}>
          {numSelected > 0 ? (
            <Typography color="inherit" variant="subtitle1">
              {numSelected}
              &nbsp;selected
            </Typography>
          ) : (
            <Typography variant="h6">{title}</Typography>
          )}
        </div>
        <div className={classes.spacer} />
        <div className={classes.actionsToolbar}>
          {numSelected > 0 ? (
            <div>
              <Tooltip title="Bookmark">
                <IconButton aria-label="Bookmark">
                  <BookmarkIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Archive">
                <IconButton aria-label="Archive">
                  <ArchiveIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton aria-label="Delete">
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </div>
          ) : (
            <div className={classes.actions}>
              {showSearch && (
                <FormControl className={classNames(classes.textField)}>
                  <Input
                    id="search_filter"
                    type="text"
                    placeholder={placeholder}
                    value={filterText}
                    onChange={(event) => this.handleChange(event)}
                    endAdornment={(
                      <InputAdornment position="end">
                        <IconButton aria-label="Search filter">
                          <SearchIcon />
                        </IconButton>
                      </InputAdornment>
                    )}
                  />
                </FormControl>
              )}
              <Tooltip title="Filter list">
                <IconButton
                  aria-label="Filter list"
                  className={classes.filterBtn}
                  onClick={() => this.toggleSearch()}
                >
                  <FilterListIcon />
                </IconButton>
              </Tooltip>
            </div>
          )}
        </div>
      </Toolbar>
    );
  }
}

TableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  filterText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onUserInput: PropTypes.func.isRequired,
  numSelected: PropTypes.number.isRequired,
};

export default withStyles(styles)(TableToolbar);
