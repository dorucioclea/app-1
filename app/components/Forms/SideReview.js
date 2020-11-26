import React, { Fragment } from 'react';
import { lighten, darken } from '@material-ui/core/styles/colorManipulator';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Type from 'dan-styles/Typography.scss';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import imgApi from 'dan-api/images/photos';

const dataCart = [
  {
    name: 'Product 1',
    thumb: imgApi[21],
    price: 9.99,
    quantity: 1
  },
  {
    name: 'Product 1',
    thumb: imgApi[22],
    price: 2.34,
    quantity: 1
  },
  {
    name: 'Product 1',
    thumb: imgApi[23],
    price: 10.00,
    quantity: 2
  },
  {
    name: 'Product 1',
    thumb: imgApi[24],
    price: 7.99,
    quantity: 3
  },
];

const styles = theme => ({
  listItem: {
    padding: `${theme.spacing(1)}px 0`,
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing(2),
  },
  orderSummary: {
    [theme.breakpoints.up('md')]: {
      width: 600,
      margin: '0 auto'
    },
  },
  paper: {
    background: theme.palette.type === 'dark' ? darken(theme.palette.secondary.main, 0.5) : lighten(theme.palette.secondary.light, 0.5),
    padding: theme.spacing(2),
    height: 550,
    overflow: 'auto',
    '& h6': {
      textAlign: 'center',
    }
  },
  thumb: {
    width: 120,
    height: 70,
    marginRight: theme.spacing(2),
    overflow: 'hidden',
    borderRadius: theme.rounded.small,
    '& img': {
      maxWidth: '100%'
    }
  },
  totalPrice: {
    '& h6': {
      textAlign: 'right',
      width: '100%',
      '& span': {
        color: theme.palette.primary.main,
        fontSize: 28
      }
    },
  }
});

function SideReview(props) {
  const { classes } = props;
  const getCartItem = dataArray => dataArray.map((item, index) => (
    <Fragment key={index.toString()}>
      <ListItem>
        <figure className={classes.thumb}>
          <img src={item.thumb} alt="thumb" />
        </figure>
        <ListItemText
          primary={item.name}
          secondary={`Quantity: ${item.quantity} Item - USD ${item.price * item.quantity}`}
          className={classes.itemText}
        />
      </ListItem>
      <li>
        <Divider />
      </li>
    </Fragment>
  ));
  return (
    <Paper className={classes.paper} elevation={0}>
      <Typography variant="h6" gutterBottom>
        <ShoppingCart />
        &nbsp; Order Summary
      </Typography>
      <List component="ul">
        {getCartItem(dataCart)}
        <ListItem className={classes.totalPrice}>
          <Typography variant="h6">
            Total :&nbsp;
            <span>
              <small>$</small>
              <strong className={Type.bold}>34.06</strong>
            </span>
          </Typography>
        </ListItem>
      </List>
    </Paper>
  );
}

SideReview.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideReview);
