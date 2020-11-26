import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import styles from './cardStyle-jss';

function ShowcaseCard(props) {
  const {
    classes,
    title,
    desc,
    action,
    image,
    landscape,
    date,
    noMargin,
    extraSize,
    href
  } = props;
  return (
    <Card className={classNames(noMargin ? classes.gutterBottom : classes.cardMedia, landscape && classes.landscapeCard)}>
      <CardMedia
        className={
          classNames(
            landscape ? classes.roundedThumb : classes.roundedMedia,
            extraSize ? classes.extraRounded : ''
          )
        }
        image={image}
        title={title}
      />
      <CardContent>
        <Typography noWrap variant="h5">{title}</Typography>
        {date && (<Typography variant="caption" gutterBottom>{date}</Typography>)}
        <Typography variant="subtitle1">{desc}</Typography>
        {landscape && (
          <div className={classes.btnArea}>
            <Button size="large" component={Link} to={href} variant="outlined" color="primary">{action}</Button>
          </div>
        )}
      </CardContent>
      {!landscape && (
        <CardActions className={classes.btnArea}>
          <Button size="large" component={Link} to={href} variant="outlined" color="primary">{action}</Button>
        </CardActions>
      )}
    </Card>
  );
}

ShowcaseCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.node.isRequired,
  action: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  landscape: PropTypes.bool,
  noMargin: PropTypes.bool,
  extraSize: PropTypes.bool,
  date: PropTypes.string,
  href: PropTypes.string,
};

ShowcaseCard.defaultProps = {
  landscape: false,
  date: undefined,
  noMargin: false,
  extraSize: false,
  href: '#'
};

export default withStyles(styles)(ShowcaseCard);
