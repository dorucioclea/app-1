import React from 'react';
import { PropTypes } from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import Toolbar from '@material-ui/core/Toolbar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Checkbox from '@material-ui/core/Checkbox';
import styles from './settings-jss';

const Transition = React.forwardRef(function Transition(props, ref) { // eslint-disable-line
  return <Slide direction="up" ref={ref} {...props} />;
});

// eslint-disable-next-line
class DetailSettings extends React.Component {
  state = {
    checked: ['switch', 'check2'],
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleChangeSelection = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      classes,
      open,
      handleClose,
      title
    } = this.props;
    const { checked } = this.state;
    return (
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.flex}>
              {title}
            </Typography>
            <Button color="inherit" onClick={handleClose}>
              done
            </Button>
          </Toolbar>
        </AppBar>
        <div className={classes.detailWrap}>
          <Grid container justify="center">
            <Grid item md={8} xs={12}>
              <List subheader={<ListSubheader component="div">Nested List Items One</ListSubheader>}>
                <ListItem>
                  <ListItemText primary="Switch input" secondary="Odio ac imperdiet luctus" />
                  <ListItemSecondaryAction>
                    <Switch
                      onChange={this.handleToggle('switch')}
                      checked={checked.indexOf('switch') !== -1}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="Another switch input" secondary="Lorem Ipsum" />
                  <ListItemSecondaryAction>
                    <Switch
                      onChange={this.handleToggle('switch2')}
                      checked={checked.indexOf('switch2') !== -1}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="Checkbox input" secondary="Dolor sit amet" />
                  <ListItemSecondaryAction>
                    <Checkbox
                      onChange={this.handleToggle('check')}
                      checked={checked.indexOf('check') !== -1}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="Another checkbox input" secondary="Donec dignissim" />
                  <ListItemSecondaryAction>
                    <Checkbox
                      onChange={this.handleToggle('check2')}
                      checked={checked.indexOf('check2') !== -1}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
              <br />
              <List subheader={<ListSubheader component="div">Nested List Two</ListSubheader>}>
                <ListItem>
                  <ListItemText primary="Switch input" secondary="Odio ac imperdiet luctus" />
                  <ListItemSecondaryAction>
                    <Switch
                      onChange={this.handleToggle('switch')}
                      checked={checked.indexOf('switch') !== -1}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="Another switch input" secondary="Lorem Ipsum" />
                  <ListItemSecondaryAction>
                    <Switch
                      onChange={this.handleToggle('switch2')}
                      checked={checked.indexOf('switch2') !== -1}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="Checkbox input" secondary="Dolor sit amet" />
                  <ListItemSecondaryAction>
                    <Checkbox
                      onChange={this.handleToggle('check')}
                      checked={checked.indexOf('check') !== -1}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem>
                  <ListItemText primary="Another checkbox input" secondary="Donec dignissim" />
                  <ListItemSecondaryAction>
                    <Checkbox
                      onChange={this.handleToggle('check2')}
                      checked={checked.indexOf('check2') !== -1}
                    />
                  </ListItemSecondaryAction>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </div>
      </Dialog>
    );
  }
}

DetailSettings.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(DetailSettings);
