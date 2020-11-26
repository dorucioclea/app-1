import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Hidden from '@material-ui/core/Hidden';
import Badge from '@material-ui/core/Badge';
import Paper from '@material-ui/core/Paper';
import PhoneIcon from '@material-ui/icons/Phone';
import Chat from '@material-ui/icons/Chat';
import Mail from '@material-ui/icons/Mail';
import NotificationsActive from '@material-ui/icons/NotificationsActive';
import Info from '@material-ui/icons/Info';
import Warning from '@material-ui/icons/Warning';
import Check from '@material-ui/icons/CheckCircle';
import Error from '@material-ui/icons/RemoveCircle';
import AccountBox from '@material-ui/icons/AccountBox';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PlaylistAddCheck from '@material-ui/icons/PlaylistAddCheck';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import messageStyles from 'dan-styles/Messages.scss';
import dataContact from '../../containers/SampleApps/Contact/api/contactData';
import styles from './widget-jss';

/* Tab Container */
function TabContainer(props) {
  const { children } = props;
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
/* END Tab Container */

/* Contact List */
function ContactList(props) {
  const getItem = dataArray => dataArray.map(data => (
    <ListItem
      button
      key={data.id}
    >
      <Avatar alt={data.name} src={data.avatar} className={props.classes.avatar} />
      <ListItemText primary={data.name} secondary={data.title} />
      <Hidden xsDown>
        <ListItemSecondaryAction>
          <Tooltip title="Chat">
            <IconButton className={props.classes.blueText} aria-label="Chat">
              <Chat />
            </IconButton>
          </Tooltip>
          <Tooltip title="Email">
            <IconButton className={props.classes.pinkText} aria-label="Email">
              <Mail />
            </IconButton>
          </Tooltip>
          <Tooltip title="Call">
            <IconButton className={props.classes.tealText} aria-label="Telp">
              <PhoneIcon />
            </IconButton>
          </Tooltip>
        </ListItemSecondaryAction>
      </Hidden>
      <Hidden smUp>
        <ListItemSecondaryAction>
          <IconButton
            aria-label="More"
            aria-haspopup="true"
            onClick={props.openMenu}
          >
            <MoreVertIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </Hidden>
    </ListItem>
  ));
  return (
    <List>
      {getItem(dataContact)}
    </List>
  );
}

ContactList.propTypes = {
  classes: PropTypes.object.isRequired,
  openMenu: PropTypes.func.isRequired,
};

const ContactListStyled = withStyles(styles)(ContactList);
/* END Contact List */

/* Conversation List */
function MessagesList(props) {
  const { classes } = props;
  return (
    <List>
      <ListItem button component={NavLink} to="/app/pages/chat">
        <Avatar alt={dataContact[2].name} src={dataContact[2].avatar} className={classes.avatar} />
        <ListItemText primary={dataContact[2].name} className={classes.messages} secondary="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <ListItemSecondaryAction>
          <Typography variant="caption">10:42 PM</Typography>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem button component={NavLink} to="/app/pages/chat">
        <Avatar alt={dataContact[5].name} src={dataContact[5].avatar} className={classes.avatar} />
        <ListItemText primary={dataContact[5].name} className={classes.messages} secondary="Sed a ipsum euismod, eleifend turpis sed." />
        <ListItemSecondaryAction>
          <Typography variant="caption">11:17 AM</Typography>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem button component={NavLink} to="/app/pages/chat">
        <Avatar alt={dataContact[1].name} src={dataContact[1].avatar} className={classes.avatar} />
        <ListItemText primary={dataContact[1].name} className={classes.messages} secondary="Praesent viverra est et risus fringilla bibendum." />
        <ListItemSecondaryAction>
          <Typography variant="caption">11 Oct</Typography>
        </ListItemSecondaryAction>
      </ListItem>
      <ListItem button component={NavLink} to="/app/pages/chat">
        <Avatar alt={dataContact[0].name} src={dataContact[0].avatar} className={classes.avatar} />
        <ListItemText primary={dataContact[0].name} className={classes.messages} secondary="Praesent at ex non leo iaculis dignissim. Proin nec venenatis nulla, nec vulputate ipsum. Curabitur eu dignissim nibh, eget condimentum massa." />
        <ListItemSecondaryAction>
          <Typography variant="caption">12 Oct</Typography>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}

MessagesList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const MessagesListStyled = withStyles(styles)(MessagesList);
/* END Conversation List */

/* Email List */
function NotifList(props) {
  const { classes, openMenu } = props;
  return (
    <List>
      <ListItem button className={messageStyles.messageInfo}>
        <Avatar className={messageStyles.icon}>
          <Info />
        </Avatar>
        <ListItemText primary="Lorem ipsum dolor" secondary="12 Oct 2018" />
        <Hidden xsDown>
          <ListItemSecondaryAction>
            <Button variant="outlined" size="small" color="primary" className={classes.button}>
              Fix it
            </Button>
            <Button variant="outlined" size="small" className={classes.button}>
              Skip
            </Button>
          </ListItemSecondaryAction>
        </Hidden>
        <Hidden smUp>
          <ListItemSecondaryAction>
            <IconButton
              aria-label="More"
              aria-haspopup="true"
              onClick={openMenu}
            >
              <MoreVertIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </Hidden>
      </ListItem>
      <ListItem button className={messageStyles.messageSuccess}>
        <Avatar className={messageStyles.icon}>
          <Check />
        </Avatar>
        <ListItemText primary="Lorem ipsum dolor" secondary="12 Oct 2018" />
        <Hidden xsDown>
          <ListItemSecondaryAction>
            <Button variant="outlined" size="small" color="primary" className={classes.button}>
              Fix it
            </Button>
            <Button variant="outlined" size="small" className={classes.button}>
              Skip
            </Button>
          </ListItemSecondaryAction>
        </Hidden>
        <Hidden smUp>
          <ListItemSecondaryAction>
            <IconButton
              aria-label="More"
              aria-haspopup="true"
              onClick={openMenu}
            >
              <MoreVertIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </Hidden>
      </ListItem>
      <ListItem button className={messageStyles.messageWarning}>
        <Avatar className={messageStyles.icon}>
          <Warning />
        </Avatar>
        <ListItemText primary="Lorem ipsum dolor" secondary="12 Oct 2018" />
        <Hidden xsDown>
          <ListItemSecondaryAction>
            <Button variant="outlined" size="small" color="primary" className={classes.button}>
              Fix it
            </Button>
            <Button variant="outlined" size="small" className={classes.button}>
              Skip
            </Button>
          </ListItemSecondaryAction>
        </Hidden>
        <Hidden smUp>
          <ListItemSecondaryAction>
            <IconButton
              aria-label="More"
              aria-haspopup="true"
              onClick={openMenu}
            >
              <MoreVertIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </Hidden>
      </ListItem>
      <ListItem button className={messageStyles.messageError}>
        <Avatar className={messageStyles.icon}>
          <Error />
        </Avatar>
        <ListItemText primary="Lorem ipsum dolor" secondary="12 Oct 2018" />
        <Hidden xsDown>
          <ListItemSecondaryAction>
            <Button variant="outlined" size="small" color="primary" className={classes.button}>
              Fix it
            </Button>
            <Button variant="outlined" size="small" className={classes.button}>
              Skip
            </Button>
          </ListItemSecondaryAction>
        </Hidden>
        <Hidden smUp>
          <ListItemSecondaryAction>
            <IconButton
              aria-label="More"
              aria-haspopup="true"
              onClick={openMenu}
            >
              <MoreVertIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </Hidden>
      </ListItem>
    </List>
  );
}

NotifList.propTypes = {
  classes: PropTypes.object.isRequired,
  openMenu: PropTypes.func.isRequired,
};

const NotifListStyled = withStyles(styles)(NotifList);
/* END Email List */

function ContactWidget(props) {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElAction, setAnchorElAction] = useState(null);

  const handleChange = (event, val) => {
    setValue(val);
  };

  const handleOpen = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleOpenAction = event => {
    setAnchorElAction(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setAnchorElAction(null);
  };

  const { classes } = props;
  const open = Boolean(anchorEl);
  const openAct = Boolean(anchorElAction);
  return (
    <Fragment>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Chat className={classes.blueText} />
          </ListItemIcon>
          <ListItemText variant="inset" primary="Chat" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Mail className={classes.pinkText} />
          </ListItemIcon>
          <ListItemText variant="inset" primary="Email" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PhoneIcon className={classes.tealText} />
          </ListItemIcon>
          <ListItemText variant="inset" primary="Call" />
        </MenuItem>
      </Menu>
      <Menu
        id="long-menu-act"
        anchorEl={anchorElAction}
        open={openAct}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Check className={classes.tealText} />
          </ListItemIcon>
          <ListItemText variant="inset" primary="Fix it" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PlaylistAddCheck />
          </ListItemIcon>
          <ListItemText variant="inset" primary="Skip" />
        </MenuItem>
      </Menu>
      <Paper className={classes.rootContact}>
        <AppBar position="static" color="default">
          <Hidden mdUp>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab icon={<AccountBox />} />
              <Tab icon={<Chat />} />
              <Tab icon={<NotificationsActive />} />
            </Tabs>
          </Hidden>
          <Hidden smDown>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="Contacts" icon={<AccountBox />} />
              <Tab
                label={(
                  <Badge className={classes.tabNotif} color="secondary" badgeContent={4}>
                    Messages
                  </Badge>
                )}
                icon={<Chat />}
              />
              <Tab
                label={(
                  <Badge className={classes.tabNotif} color="secondary" badgeContent={4}>
                    Notifications
                  </Badge>
                )}
                icon={<NotificationsActive />}
              />
            </Tabs>
          </Hidden>
        </AppBar>
        {value === 0 && <TabContainer><ContactListStyled openMenu={handleOpen} /></TabContainer>}
        {value === 1 && <TabContainer><MessagesListStyled /></TabContainer>}
        {value === 2 && <TabContainer><NotifListStyled openMenu={handleOpenAction} /></TabContainer>}
      </Paper>
    </Fragment>
  );
}

ContactWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactWidget);
