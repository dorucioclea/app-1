import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import styles from './taskBoard-jss';

function CustomHeader(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const {
    classes,
    title,
    color,
    label,
    id,
    removeBoard
  } = props;

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRemove = (elmId) => {
    removeBoard(elmId);
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <span className={classes.deco} style={{ background: color }} />
      <Typography variant="h5" className={classes.mainTitle}>{title}</Typography>
      <Typography variant="caption" className={classes.labelCaption}>{label}</Typography>
      <div className={classes.headerOpt}>
        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              width: 200,
            },
          }}
        >
          <MenuItem onClick={() => handleRemove(id)}>Remove</MenuItem>
          <MenuItem onClick={handleClose}>Option 1</MenuItem>
          <MenuItem onClick={handleClose}>Option 2</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

CustomHeader.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  removeBoard: PropTypes.func.isRequired,
  title: PropTypes.string,
  label: PropTypes.string,
  color: PropTypes.string,
};

CustomHeader.defaultProps = {
  title: '',
  label: '',
  color: '#FF5722'
};

export default withStyles(styles)(CustomHeader);
