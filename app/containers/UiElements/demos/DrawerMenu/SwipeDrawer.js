import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { mailFolderListItems, otherMailFolderListItems } from './menuData';

const styles = theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  button: {
    margin: theme.spacing(1)
  }
});

class SwipeDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;
    const {
      left,
      top,
      bottom,
      right
    } = this.state;

    const sideList = (
      <div className={classes.list}>
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </div>
    );

    const fullList = (
      <div className={classes.fullList}>
        <List>{mailFolderListItems}</List>
        <Divider />
        <List>{otherMailFolderListItems}</List>
      </div>
    );

    return (
      <Grid container justify="center" direction="row">
        <Button variant="outlined" color="primary" className={classes.button} onClick={this.toggleDrawer('left', true)}>Open Left</Button>
        <Button variant="outlined" color="primary" className={classes.button} onClick={this.toggleDrawer('right', true)}>Open Right</Button>
        <Button variant="outlined" color="primary" className={classes.button} onClick={this.toggleDrawer('top', true)}>Open Top</Button>
        <Button variant="outlined" color="primary" className={classes.button} onClick={this.toggleDrawer('bottom', true)}>Open Bottom</Button>
        <SwipeableDrawer
          open={left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
        <SwipeableDrawer
          anchor="top"
          open={top}
          onClose={this.toggleDrawer('top', false)}
          onOpen={this.toggleDrawer('top', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('top', false)}
            onKeyDown={this.toggleDrawer('top', false)}
          >
            {fullList}
          </div>
        </SwipeableDrawer>
        <SwipeableDrawer
          anchor="bottom"
          open={bottom}
          onClose={this.toggleDrawer('bottom', false)}
          onOpen={this.toggleDrawer('bottom', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('bottom', false)}
            onKeyDown={this.toggleDrawer('bottom', false)}
          >
            {fullList}
          </div>
        </SwipeableDrawer>
        <SwipeableDrawer
          anchor="right"
          open={right}
          onClose={this.toggleDrawer('right', false)}
          onOpen={this.toggleDrawer('right', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </Grid>
    );
  }
}

SwipeDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SwipeDrawer);
