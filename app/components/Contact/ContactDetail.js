import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowBack from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Edit from '@material-ui/icons/Edit';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LocalPhone from '@material-ui/icons/LocalPhone';
import Email from '@material-ui/icons/Email';
import Smartphone from '@material-ui/icons/Smartphone';
import LocationOn from '@material-ui/icons/LocationOn';
import Work from '@material-ui/icons/Work';
import Language from '@material-ui/icons/Language';
import Divider from '@material-ui/core/Divider';
import styles from './contact-jss';

const optionsOpt = [
  'Block Contact',
  'Delete Contact',
  'Option 1',
  'Option 2',
  'Option 3',
];

const ITEM_HEIGHT = 48;

function ContactDetail(props) {
  const {
    classes,
    dataContact,
    itemSelected,
    edit,
    favorite,
    showMobileDetail,
    hideDetail,
    remove
  } = props;
  const [anchorElOpt, setAnchorElOpt] = useState(null);

  const handleClickOpt = event => {
    setAnchorElOpt(event.currentTarget);
  };

  const handleCloseOpt = () => {
    setAnchorElOpt(null);
  };

  const deleteContact = (item) => {
    remove(item);
    setAnchorElOpt(null);
  };

  return (
    <main className={classNames(classes.content, showMobileDetail ? classes.detailPopup : '')}>
      <section className={classes.cover}>
        <div className={classes.opt}>
          <IconButton className={classes.favorite} aria-label="Favorite" onClick={() => favorite(dataContact.get(itemSelected))}>
            {dataContact.getIn([itemSelected, 'favorited']) ? (<Star />) : <StarBorder />}
          </IconButton>
          <IconButton aria-label="Edit" onClick={() => edit(dataContact.get(itemSelected))}>
            <Edit />
          </IconButton>
          <IconButton
            aria-label="More"
            aria-owns={anchorElOpt ? 'long-menu' : null}
            aria-haspopup="true"
            className={classes.button}
            onClick={handleClickOpt}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorElOpt}
            open={Boolean(anchorElOpt)}
            onClose={handleCloseOpt}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: 200,
              },
            }}
          >
            {optionsOpt.map(option => {
              if (option === 'Delete Contact') {
                return (
                  <MenuItem key={option} selected={option === 'Edit Profile'} onClick={() => deleteContact(dataContact.get(itemSelected))}>
                    {option}
                  </MenuItem>
                );
              }
              return (
                <MenuItem key={option} selected={option === 'Edit Profile'} onClick={handleCloseOpt}>
                  {option}
                </MenuItem>
              );
            })}
          </Menu>
        </div>
        <IconButton
          onClick={hideDetail}
          className={classes.navIconHide}
          aria-label="Back"
        >
          <ArrowBack />
        </IconButton>
        <Hidden xsDown>
          <Avatar alt={dataContact.getIn([itemSelected, 'name'])} src={dataContact.getIn([itemSelected, 'avatar'])} className={classes.avatar} />
          <Typography className={classes.userName} variant="h6">
            {dataContact.getIn([itemSelected, 'name'])}
            <Typography display="block" variant="caption">
              {dataContact.getIn([itemSelected, 'title'])}
            </Typography>
          </Typography>
        </Hidden>
      </section>
      <div>
        <Hidden smUp>
          <div className={classes.avatarTop}>
            <Avatar alt={dataContact.getIn([itemSelected, 'name'])} src={dataContact.getIn([itemSelected, 'avatar'])} className={classes.avatar} />
            <Typography variant="h5">
              {dataContact.getIn([itemSelected, 'name'])}
              <Typography>
                {dataContact.getIn([itemSelected, 'title'])}
              </Typography>
            </Typography>
          </div>
        </Hidden>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.blueIcon}>
                <LocalPhone />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={dataContact.getIn([itemSelected, 'phone'])} secondary="Phone" />
          </ListItem>
          <Divider variant="inset" />
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.amberIcon}>
                <Smartphone />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={dataContact.getIn([itemSelected, 'secondaryPhone'])} secondary="Secondary Phone" />
          </ListItem>
          <Divider variant="inset" />
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.tealIcon}>
                <Email />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={dataContact.getIn([itemSelected, 'personalEmail'])} secondary="Personal Email" />
          </ListItem>
          <Divider variant="inset" />
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.brownIcon}>
                <Work />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={dataContact.getIn([itemSelected, 'companyEmail'])} secondary="Company Email" />
          </ListItem>
          <Divider variant="inset" />
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.redIcon}>
                <LocationOn />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={dataContact.getIn([itemSelected, 'address'])} secondary="Address" />
          </ListItem>
          <Divider variant="inset" />
          <ListItem>
            <ListItemAvatar>
              <Avatar className={classes.purpleIcon}>
                <Language />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={dataContact.getIn([itemSelected, 'website'])} secondary="Website" />
          </ListItem>
        </List>
      </div>
    </main>
  );
}

ContactDetail.propTypes = {
  classes: PropTypes.object.isRequired,
  showMobileDetail: PropTypes.bool.isRequired,
  dataContact: PropTypes.object.isRequired,
  itemSelected: PropTypes.number.isRequired,
  edit: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  favorite: PropTypes.func.isRequired,
  hideDetail: PropTypes.func.isRequired,
};

export default withStyles(styles)(ContactDetail);
