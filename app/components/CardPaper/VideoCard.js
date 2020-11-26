import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import styles from './cardStyle-jss';

function VideoCard(props) {
  const {
    classes,
    title,
    cover,
    date
  } = props;

  return (
    <Card className={classes.cardSocmed}>
      <CardMedia
        className={classes.media}
        image={cover}
        title={title}
      >
        <IconButton className={classes.playBtn}><PlayArrowIcon /></IconButton>
      </CardMedia>
      <CardHeader
        avatar={(
          <Avatar aria-label="Recipe" className={classes.avatar}>
            R
          </Avatar>
        )}
        action={(
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        )}
        title={title}
        subheader={date}
      />
    </Card>
  );
}

VideoCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default withStyles(styles)(VideoCard);
