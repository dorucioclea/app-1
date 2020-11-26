const styles = theme => ({
  totalPrice: {
    background: theme.palette.background.default,
    textAlign: 'right',
    display: 'block'
  },
  cartWrap: {
    [theme.breakpoints.up('sm')]: {
      width: 400,
    },
    '&:focus': {
      outline: 'none'
    }
  },
  itemText: {
    marginRight: 30,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    width: 220
  },
  cartPanel: {
    '& figure': {
      width: 120,
      height: 70,
      overflow: 'hidden',
      marginRight: theme.spacing(2),
      borderRadius: theme.rounded.small,
      '& img': {
        maxWidth: '100%'
      }
    }
  },
  empty: {
    textAlign: 'center',
    padding: 20
  }
});

export default styles;
