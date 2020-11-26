import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Grow from '@material-ui/core/Grow';
import Fade from '@material-ui/core/Fade';
import Zoom from '@material-ui/core/Zoom';
import Grid from '@material-ui/core/Grid';


class MenuTransition extends React.Component {
  state = {
    anchorFade: null,
    anchorGrow: null,
    anchorCollapse: null,
    anchorZoom: null,
  };

  handleClick = (event, type) => {
    this.setState({ [type]: event.currentTarget });
  };

  handleClose = type => {
    this.setState({ [type]: null });
  };

  handleToggle = type => {
    // eslint-disable-next-line
    this.setState({ [type]: !this.state[type] });
  };

  render() {
    const {
      anchorFade,
      anchorGrow,
      anchorZoom
    } = this.state;

    return (
      <Grid container spacing={2}>
        <Grid item md={4}>
          <Button
            aria-owns={anchorFade ? 'fade-menu' : null}
            aria-haspopup="true"
            onClick={(e) => this.handleClick(e, 'anchorFade')}
          >
            Open with fade transition
          </Button>
          <Menu
            id="fade-menu"
            anchorEl={anchorFade}
            open={Boolean(anchorFade)}
            onClose={() => this.handleClose('anchorFade')}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={() => this.handleClose('anchorFade')}>Profile</MenuItem>
            <MenuItem onClick={() => this.handleClose('anchorFade')}>My account</MenuItem>
            <MenuItem onClick={() => this.handleClose('anchorFade')}>Logout</MenuItem>
          </Menu>
        </Grid>
        <Grid item md={4}>
          <Button
            aria-owns={anchorGrow ? 'grow-menu' : null}
            aria-haspopup="true"
            onClick={(e) => this.handleClick(e, 'anchorGrow')}
          >
            Open with grow transition
          </Button>
          <Menu
            id="grow-menu"
            anchorEl={anchorGrow}
            open={Boolean(anchorGrow)}
            onClose={() => this.handleClose('anchorGrow')}
            TransitionComponent={Grow}
          >
            <MenuItem onClick={() => this.handleClose('anchorGrow')}>Profile</MenuItem>
            <MenuItem onClick={() => this.handleClose('anchorGrow')}>My account</MenuItem>
            <MenuItem onClick={() => this.handleClose('anchorGrow')}>Logout</MenuItem>
          </Menu>
        </Grid>
        <Grid item md={4}>
          <div style={{ position: 'relative' }}>
            <Button
              aria-owns={anchorZoom ? 'zoom-menu' : null}
              aria-haspopup="true"
              onClick={(e) => this.handleClick(e, 'anchorZoom')}
            >
              Open with zoom transition
            </Button>
            <Menu
              id="zoom-menu"
              anchorEl={anchorZoom}
              open={Boolean(anchorZoom)}
              onClose={() => this.handleClose('anchorZoom')}
              TransitionComponent={Zoom}
            >
              <MenuItem onClick={() => this.handleClose('anchorZoom')}>Profile</MenuItem>
              <MenuItem onClick={() => this.handleClose('anchorZoom')}>My account</MenuItem>
              <MenuItem onClick={() => this.handleClose('anchorZoom')}>Logout</MenuItem>
            </Menu>
          </div>
        </Grid>
      </Grid>
    );
  }
}

export default MenuTransition;
