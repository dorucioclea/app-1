import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import brand from 'dan-api/dummy/brand';
import logo from 'dan-images/logo.svg';
import styles from '../Sidebar/sidebar-jss';

function MenuContent(props) {
  const {
    classes,
    menuList,
    gotoSlide,
    active
  } = props;

  const getMenus = menuArray => menuArray.map((item, index) => (
    <ListItem
      key={index.toString()}
      button
      className={classNames(classes.headCapital, active === item.id && classes.active)}
      to={item.url}
      onClick={() => gotoSlide(item.id)}
    >
      <ListItemText classes={{ primary: classes.primary }} variant="inset" primary={item.name} />
    </ListItem>
  ));

  return (
    <div className={classes.drawerInner}>
      <div className={classes.drawerHeader}>
        <div className={classes.brandBig}>
          <img src={logo} alt={brand.name} />
          <h3>{brand.name}</h3>
        </div>
      </div>
      <div className={classNames(classes.menuContainer, classes.landingNav, classes.rounded)}>
        <List className={classes.dense} component="nav">
          {getMenus(menuList)}
        </List>
        <Typography variant="caption" className={classes.copyright}>
          &copy; 2020 Dandelion Designs
          <br />
          All Right Reserved
        </Typography>
      </div>
    </div>
  );
}

MenuContent.propTypes = {
  classes: PropTypes.object.isRequired,
  active: PropTypes.number.isRequired,
  menuList: PropTypes.array.isRequired,
  gotoSlide: PropTypes.func.isRequired
};

MenuContent.defaultProps = {
  toggleDrawerOpen: () => {},
  loadTransition: () => {},
};

const SideNavMenu = withStyles(styles)(MenuContent);

export default SideNavMenu;
