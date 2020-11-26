import cyan from '@material-ui/core/colors/cyan';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';

const styles = theme => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('lg')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
      width: 1140,
    },
  },
  divider: {
    margin: `${theme.spacing(2)}px 0`,
    [theme.breakpoints.up('sm')]: {
      margin: `${theme.spacing(1.5)}px 0`,
    },
    background: 'none'
  },
  dividerBordered: {
    margin: `${theme.spacing(3)}px 0`
  },
  title: {
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    fontSize: 22,
    padding: '16px 20px',
    position: 'relative',
    fontWeight: 600,
    marginBottom: theme.spacing(3),
    zIndex: 1,
    '&:after': {
      content: '""',
      position: 'absolute',
      width: 60,
      height: 4,
      background: theme.palette.primary.main,
      bottom: 0,
      left: 20
    },
  },
  title2: {
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    fontSize: 22,
    padding: '16px 20px',
    position: 'relative',
    fontWeight: 600,
    marginTop: theme.spacing(3)
  },
  content: {
    padding: `0 ${theme.spacing(4)}`
  },
  postList: {
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(3)
    }
  },
  article: {
    color: theme.palette.text.primary,
    '& ul, ol': {
      marginLeft: theme.spacing(5),
      paddingBottom: theme.spacing(2),
    },
    '& ul': {
      listStyleType: 'disc'
    },
    '& ol': {
      listStyleType: 'decimal'
    },
    '& code': {
      whiteSpace: 'normal',
    }
  },
  redBtn: {
    color: red[500],
    borderColor: red[500],
    '&:hover': {
      borderColor: red[700],
    },
  },
  blueBtn: {
    color: indigo[300],
    borderColor: indigo[300],
    '&:hover': {
      borderColor: indigo[500],
    },
  },
  cyanBtn: {
    color: cyan[500],
    borderColor: cyan[500],
    '&:hover': {
      borderColor: cyan[700],
    },
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  iconSmall: {
    fontSize: 20,
  },
  btnArea: {
    '& button': {
      margin: theme.spacing(1)
    }
  },
  pagination: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(3)
  }
});

export default styles;
