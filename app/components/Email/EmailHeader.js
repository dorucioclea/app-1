import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styles from './email-jss';

function EmailHeader(props) {
  const { classes, search, handleDrawerToggle } = props;
  return (
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => handleDrawerToggle()}
          className={classes.navIconHide}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.flex}>
          <div className={classes.wrapper}>
            <div className={classes.search}>
              <SearchIcon />
            </div>
            <input className={classes.input} onChange={(event) => search(event)} placeholder="Search Email" />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

EmailHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  search: PropTypes.func.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(EmailHeader);
