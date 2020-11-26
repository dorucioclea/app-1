import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowBack from '@material-ui/icons/ArrowBack';
import styles from '../Contact/contact-jss';

const optionsOpt = [
  'Delete Conversation',
  'Option 1',
  'Option 2',
  'Option 3',
];

const ITEM_HEIGHT = 48;

function ChatHeader(props) {
  const [anchorElOpt, setAnchorElOpt] = useState(null);

  const handleClickOpt = event => {
    setAnchorElOpt(event.currentTarget);
  };

  const handleCloseOpt = () => {
    setAnchorElOpt(null);
  };

  const handleRemove = (person) => {
    const { remove } = props;
    remove(person);
  };

  const {
    classes,
    chatSelected,
    dataContact,
    showMobileDetail,
    hideDetail,
  } = props;
  return (
    <AppBar
      position="absolute"
      className={classNames(classes.appBar, classes.fixHeight, classes.appBarShift)}
    >
      <div className={classes.cover}>
        {showMobileDetail && (
          <IconButton
            aria-label="open drawer"
            onClick={() => hideDetail()}
            className={classes.navIconHide}
          >
            <ArrowBack />
          </IconButton>
        )}
        <Avatar alt="avatar" src={dataContact.getIn([chatSelected, 'avatar'])} className={classes.avatar} />
        <Typography variant="h6" component="h2" color="inherit" noWrap>
          {dataContact.getIn([chatSelected, 'name'])}
          <Typography variant="caption" display="block" className={classes.status} color="inherit" noWrap>
            <span className={classes.online} />
              &nbsp;Online
          </Typography>
        </Typography>
        <IconButton
          aria-label="More"
          aria-owns={anchorElOpt ? 'long-menu' : null}
          aria-haspopup="true"
          className={classes.button}
          onClick={handleClickOpt}
        >
          <MoreVertIcon color="inherit" />
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
            if (option === 'Delete Conversation') {
              return (
                <MenuItem key={option} onClick={handleRemove}>
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
    </AppBar>
  );
}

ChatHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  dataContact: PropTypes.object.isRequired,
  showMobileDetail: PropTypes.bool.isRequired,
  hideDetail: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  chatSelected: PropTypes.number.isRequired,
};

export default withStyles(styles)(ChatHeader);
