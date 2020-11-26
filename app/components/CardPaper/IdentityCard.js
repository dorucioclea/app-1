import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import LocalPhone from '@material-ui/icons/LocalPhone';
import LocationOn from '@material-ui/icons/LocationOn';
import styles from './cardStyle-jss';

function IdentityCard(props) {
  const {
    classes,
    title,
    name,
    avatar,
    phone,
    address,
  } = props;
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="subtitle1" className={classes.title}>{title}</Typography>
        <Divider className={classes.divider} />
        <ListItem>
          <ListItemAvatar>
            <Avatar
              alt={name}
              src={avatar}
              className={classes.avatar}
            />
          </ListItemAvatar>
          <ListItemText primary="Name" secondary={name} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <LocalPhone />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Phone" secondary={phone} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar className={classes.avatar}>
              <LocationOn />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Address" secondary={address} />
        </ListItem>
      </CardContent>
    </Card>
  );
}

IdentityCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
};

export default withStyles(styles)(IdentityCard);
