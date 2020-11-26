import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import blue from '@material-ui/core/colors/blue';

const emails = ['username@mail.com', 'user02@mail.com'];
const styles = ({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

const SimpleDialog = props => {
  const {
    classes,
    onClose,
    selectedValue,
    ...other
  } = props;

  function handleClose() {
    onClose(selectedValue);
  }

  function handleListItemClick(value) {
    onClose(value);
  }

  return (
    <Dialog onClose={() => handleClose()} aria-labelledby="simple-dialog-title" {...other}>
      <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
      <div>
        <List>
          {emails.map(email => (
            <ListItem button onClick={() => handleListItemClick(email)} key={email}>
              <ListItemAvatar>
                <Avatar className={classes.avatar}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={email} />
            </ListItem>
          ))}
          <ListItem button onClick={() => handleListItemClick('addAccount')}>
            <ListItemAvatar>
              <Avatar>
                <AddIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="add account" />
          </ListItem>
        </List>
      </div>
    </Dialog>
  );
};

SimpleDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

const SimpleDialogWrapped = withStyles(styles)(SimpleDialog);

class SelectDialog extends React.Component {
  state = {
    open: false,
    selectedValue: emails[1],
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = value => {
    this.setState({ selectedValue: value, open: false });
  };

  render() {
    const { selectedValue, open } = this.state;
    return (
      <div>
        <Grid container justify="center" direction="column">
          <Typography variant="subtitle1">
            Selected:&nbsp;
            <strong>
              {selectedValue}
            </strong>
          </Typography>
          <br />
          <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>Open simple dialog</Button>
          <SimpleDialogWrapped
            selectedValue={selectedValue}
            open={open}
            onClose={this.handleClose}
          />
        </Grid>
      </div>
    );
  }
}


export default SelectDialog;
