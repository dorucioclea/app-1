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
import Fab from '@material-ui/core/Fab';
import Divider from '@material-ui/core/Divider';
import withMobileDialog from '@material-ui/core/withMobileDialog';
import dummy from 'dan-api/dummy/dummyContents';
import styles from '../SocialMedia/jss/socialMedia-jss';

function Comment(props) {
  const [comment, setComment] = useState('');

  const handleChange = event => {
    setComment(event.target.value);
  };

  const {
    classes,
    dataList,
  } = props;
  const getItem = dataArray => dataArray.map(data => (
    <Fragment key={data.id}>
      <ListItem>
        <div className={classes.commentContent}>
          <div className={classes.commentHead}>
            <Avatar alt="avatar" src={data.avatar} className={classes.avatarComment} />
            <section>
              <Typography variant="subtitle1">{data.from}</Typography>
              <Typography variant="caption"><span className={classNames(Type.light, Type.textGrey)}>{data.date}</span></Typography>
            </section>
          </div>
          <Typography className={classes.commentText}>{data.message}</Typography>
        </div>
      </ListItem>
      <Divider />
    </Fragment>
  ));

  return (
    <div>
      <section className={classes.commentAction}>
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
          <Fab size="small" color="secondary" aria-label="send" className={classes.button}>
            <Send />
          </Fab>
        </div>
      </section>
      <List>
        {getItem(dataList)}
      </List>
    </div>
  );
}

Comment.propTypes = {
  classes: PropTypes.object.isRequired,
  dataList: PropTypes.array.isRequired,
};

const CommentResponsive = withMobileDialog()(Comment);
export default withStyles(styles)(CommentResponsive);
