import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import styles from './cardStyle-jss';

function HorizontalNewsCard(props) {
  const {
    classes,
    thumbnail,
    title,
    desc,
  } = props;
  return (
    <Card className={classes.newsList}>
      <CardContent className={classes.newsListContent}>
        <Typography noWrap gutterBottom variant="h5" className={classes.title} component="h2">
          {title}
        </Typography>
        <Typography component="p" className={classes.desc}>
          {desc}
        </Typography>
        <div className={classes.actionArea}>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Read More
          </Button>
        </div>
      </CardContent>
      <CardMedia
        className={classes.mediaNews}
        image={thumbnail}
        title={title}
      />
    </Card>
  );
}

HorizontalNewsCard.propTypes = {
  classes: PropTypes.object.isRequired,
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default withStyles(styles)(HorizontalNewsCard);
