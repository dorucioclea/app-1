import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Scrollspy from 'react-scrollspy';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import logo from 'dan-images/logo.svg';
import brand from 'dan-api/dummy/brand';
import SideNavMobile from './SideNavMobile';
import styles from './landingStyle-jss';


let counter = 0;
function createData(name, url) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
  };
}

function Header(props) {
  const { classes, turnDarker } = props;
  const [open, setOpen] = useState(false);

  const reducer = 'ui';
  const gradient = useSelector(state => state.getIn([reducer, 'gradient']));

  const menuList = [
    createData('feature', '#feature'),
    createData('showcase', '#showcase'),
    createData('testimonials', '#testimonials'),
    createData('technology', '#tech'),
    createData('pricing', '#pricing'),
    createData('contact', '#contact'),
  ];

  const toggleDrawerOpen = () => {
    setOpen(true);
  };

  const toggleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Hidden lgUp>
        <SwipeableDrawer
          onClose={toggleDrawerClose}
          onOpen={toggleDrawerOpen}
          open={open}
          anchor="left"
        >
          <SideNavMobile menuList={menuList} closeDrawer={toggleDrawerClose} />
        </SwipeableDrawer>
      </Hidden>
      <AppBar
        className={
          classNames(
            classes.header,
            turnDarker && classes.darker,
            gradient ? classes.gradient : classes.solid
          )
        }
      >
        <Hidden lgUp>
          <IconButton
            className={classes.menuButton}
            aria-label="Menu"
            onClick={toggleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <div className={classes.container}>
          <div className={classes.spaceContainer}>
            <NavLink to="/" className={classes.brand}>
              <img src={logo} alt={brand.name} />
              {brand.name}
            </NavLink>
            <Hidden mdDown>
              <nav>
                <Scrollspy items={['feature', 'showcase', 'testimonials', 'tech', 'pricing', 'contact']} currentClassName="active">
                  {menuList.map(item => (
                    <li key={item.id.toString()}>
                      <Button component={AnchorLink} href={item.url}>{item.name}</Button>
                    </li>
                  ))}
                </Scrollspy>
              </nav>
            </Hidden>
          </div>
        </div>
      </AppBar>
    </>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  turnDarker: PropTypes.bool.isRequired,
};

export default withStyles(styles)(Header);
