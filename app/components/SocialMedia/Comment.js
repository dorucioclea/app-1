import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Type from 'dan-styles/Typography.scss';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import Send from '@material-ui/icons/Send';
import Input from '@material-ui/core/Input';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import Slide from '@material-ui/core/Slide';
import Divider from '@material-ui/core/Divider';
import CommentIcon from '@material-ui/icons/Comment';
import CloseIcon from '@material-ui/icons/Close';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import dummy from 'dan-api/dummy/dummyContents';
import styles from './jss/socialMedia-jss';

const Transition = React.forwardRef(function Transition(props, ref) { // eslint-disable-line
  return <Slide direction="up" ref={ref} {...props} />;
});

// eslint-disable-next-line
function Comment(props) {
  const [comment, setComment] = useState('');
  const {
    open,
    handleClose,
    classes,
    dataComment,
    fullScreen,
    submitComment
  } = props;

  const handleChange = event => {
    setComment(event.target.value);
  };

  const handleSubmit = commentParam => {
    submitComment(commentParam);
    setComment('');
  };

  const getItem = dataArray => dataArray.map(data => (
    <Fragment key={data.get('id')}>
      <ListItem>
        <div className={classes.commentContent}>
          <div className={classes.commentHead}>
            <Avatar alt="avatar" src={data.get('avatar')} className={classes.avatarComment} />
            <section>
              <Typography variant="subtitle1">{data.get('from')}</Typography>
              <Typography variant="caption"><span className={classNames(Type.light, Type.textGrey)}>{data.get('date')}</span></Typography>
            </section>
          </div>
          <Typography className={classes.commentText}>{data.get('message')}</Typography>
        </div>
      </ListItem>
      <Divider />
    </Fragment>
  ));

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        TransitionComponent={Transition}
        maxWidth="md"
      >
        <DialogTitle id="form-dialog-title">
          <CommentIcon />
            &nbsp;
          {dataComment !== undefined && dataComment.size}
            &nbsp;
            Comment
          {dataComment !== undefined && dataComment.size > 1 ? 's' : ''}
          <IconButton onClick={handleClose} className={classes.buttonClose} aria-label="Close">
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <List>
            {dataComment !== undefined && getItem(dataComment)}
          </List>
        </DialogContent>
        <DialogActions className={classes.commentAction}>
          <div className={classes.commentForm}>
            <Avatar alt="avatar" src={dummy.user.avatar} className={classes.avatarMini} />
            <Input
              placeholder="Write Comment"
              onChange={handleChange}
              value={comment}
              className={classes.input}
              inputProps={{
                'aria-label': 'Comment',
              }}
            />
            <Fab size="small" onClick={() => handleSubmit(comment)} color="secondary" aria-label="send" className={classes.button}>
              <Send />
            </Fab>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}

Comment.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  submitComment: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  dataComment: PropTypes.object,
  fullScreen: PropTypes.bool.isRequired,
};

Comment.defaultProps = {
  dataComment: undefined
};

const CommentResponsive = withMobileDialog()(Comment);
export default withStyles(styles)(CommentResponsive);
