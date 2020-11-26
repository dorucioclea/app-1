import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import Avatar from '@material-ui/core/Avatar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import CommentIcon from '@material-ui/icons/Comment';
import Tooltip from '@material-ui/core/Tooltip';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Comment from './Comment';
import styles from './jss/timeline-jss';

const optionsOpt = [
  'Option 1',
  'Option 2',
  'Option 3',
];

const ITEM_HEIGHT = 48;

function Timeline(props) {
  const [anchorElOpt, setAnchorElOpt] = useState(null);
  const [openComment, setOpenComment] = useState(false);
  const {
    classes,
    dataTimeline,
    onlike,
    commentIndex,
    submitComment,
    fetchComment
  } = props;

  const handleClickOpt = event => {
    setAnchorElOpt(event.currentTarget);
  };

  const handleCloseOpt = () => {
    setAnchorElOpt(null);
  };

  const handleOpenComment = (data) => {
    fetchComment(data);
    setOpenComment(true);
  };

  const handleCloseComment = () => {
    setOpenComment(false);
  };

  const getItem = dataArray => dataArray.map(data => (
    <li key={data.get('id')}>
      <div className={classes.iconBullet}>
        <Tooltip id={'tooltip-icon-' + data.get('id')} title={data.get('time')}>
          <Icon className={classes.icon}>
            {data.get('icon')}
          </Icon>
        </Tooltip>
      </div>
      <Card className={classes.cardSocmed}>
        <CardHeader
          avatar={
            <Avatar alt="avatar" src={data.get('avatar')} className={classes.avatar} />
          }
          action={(
            <IconButton
              aria-label="More"
              aria-owns={anchorElOpt ? 'long-menu' : null}
              aria-haspopup="true"
              className={classes.button}
              onClick={handleClickOpt}
            >
              <MoreVertIcon />
            </IconButton>
          )}
          title={data.get('name')}
          subheader={data.get('date')}
        />
        {data.get('image') !== '' && (
          <CardMedia
            className={classes.media}
            image={data.get('image')}
            title={data.get('name')}
          />
        )}
        <CardContent>
          <Typography component="p">
            {data.get('content')}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions}>
          <IconButton aria-label="Like this" onClick={() => onlike(data)}>
            <FavoriteIcon className={data.get('liked') ? classes.liked : ''} />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <div className={classes.rightIcon}>
            <Typography variant="caption" component="span">
              {data.get('comments') !== undefined ? data.get('comments').size : 0}
            </Typography>
            <IconButton aria-label="Comment" onClick={() => handleOpenComment(data)}>
              <CommentIcon />
            </IconButton>
          </div>
        </CardActions>
      </Card>
    </li>
  ));
  return (
    <Fragment>
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
        {optionsOpt.map(option => (
          <MenuItem key={option} onClick={handleCloseOpt}>
            {option}
          </MenuItem>
        ))}
      </Menu>
      <Comment
        open={openComment}
        handleClose={handleCloseComment}
        submitComment={submitComment}
        dataComment={dataTimeline.getIn([commentIndex, 'comments'])}
      />
      <ul className={classes.timeline}>
        {getItem(dataTimeline)}
      </ul>
    </Fragment>
  );
}

Timeline.propTypes = {
  classes: PropTypes.object.isRequired,
  onlike: PropTypes.func,
  dataTimeline: PropTypes.object.isRequired,
  fetchComment: PropTypes.func,
  submitComment: PropTypes.func,
  commentIndex: PropTypes.number,
};

Timeline.defaultProps = {
  onlike: () => (false),
  fetchComment: () => { },
  submitComment: () => { },
  commentIndex: 0,
};

export default withStyles(styles)(Timeline);
