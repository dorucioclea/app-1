import dark from '@material-ui/core/colors/blueGrey';
import { darken } from '@material-ui/core/styles/colorManipulator';
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';
import pink from '@material-ui/core/colors/pink';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import cyan from '@material-ui/core/colors/cyan';
import teal from '@material-ui/core/colors/teal';
import lime from '@material-ui/core/colors/lime';
import amber from '@material-ui/core/colors/amber';
import brown from '@material-ui/core/colors/brown';
import purple from '@material-ui/core/colors/purple';

const gradientBgLight = (theme) => `linear-gradient(-45deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 33%, ${theme.palette.secondary.main} 100%);`;
const gradientBgDark = (theme) => `linear-gradient(-45deg, ${darken(theme.palette.primary.main, 0.4)} 0%, ${darken(theme.palette.primary.main, 0.4)} 33%, ${darken(theme.palette.secondary.main, 0.4)} 100%);`;
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  rootDetail: {
    marginTop: theme.spacing(1),
    paddingBottom: theme.spacing(6),
  },
  rootSlider: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  rootDesc: {
    overflow: 'hidden',
    marginTop: theme.spacing(6),
  },
  item: {
    textAlign: 'center',
    '& img': {
      margin: '10px auto'
    }
  },
  appBar: {
    position: 'relative',
    backgroundImage: theme.palette.type === 'dark' ? gradientBgDark(theme) : gradientBgLight(theme),
    backgroundAttachment: 'fixed',
    textAlign: 'center'
  },
  flex: {
    flex: 1,
  },
  detailContainer: {
    margin: '-16px auto 0',
    maxWidth: '100%',
    [theme.breakpoints.up('lg')]: {
      maxWidth: 1080,
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: 960,
      paddingTop: 40,
      marginTop: 0
    },
    [theme.breakpoints.down('sm')]: {
      overflowX: 'hidden',
    }
  },
  chipDiscount: {
    background: theme.palette.primary.light,
    color: theme.palette.primary.dark,
    marginBottom: 10,
  },
  chipSold: {
    background: dark[500],
    color: theme.palette.getContrastText(dark[500]),
    marginBottom: 10,
  },
  detailWrap: {
    position: 'relative',
    padding: theme.spacing(2)
  },
  title: {
    marginBottom: 30
  },
  subtitle: {
    margin: `${theme.spacing(6)}px ${theme.spacing(2)}px ${theme.spacing(2)}px`
  },
  price: {
    display: 'flex',
    padding: `${theme.spacing(3)}px ${theme.spacing(1.5)}px`,
    '& > *': {
      marginRight: 10
    }
  },
  ratting: {
    borderBottom: `1px solid ${theme.palette.grey[400]}`,
    marginBottom: 20,
  },
  btnArea: {
    alignItems: 'center',
    marginTop: 20,
    background: theme.palette.background.default,
    padding: '10px 8px',
    [theme.breakpoints.up('sm')]: {
      padding: '10px 20px',
      display: 'flex',
      marginRight: theme.spacing(2)
    },
  },
  quantity: {
    width: 60,
    marginRight: 30,
    marginLeft: 10,
    '& input': {
      textAlign: 'right'
    }
  },
  desc: {
    padding: theme.spacing(2)
  },
  imgGallery: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      marginRight: theme.spacing(8),
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
    }
  },
  divider: {
    background: 'none',
    margin: `${theme.spacing(1)}px 0`
  },
  avatar: {
    margin: 10,
  },
  orangeAvatar: {
    backgroundColor: deepOrange[500],
  },
  purpleDeepAvatar: {
    backgroundColor: deepPurple[500],
  },
  pinkAvatar: {
    backgroundColor: pink[500],
  },
  greenAvatar: {
    backgroundColor: green[500],
  },
  redAvatar: {
    backgroundColor: red[500],
  },
  blueAvatar: {
    backgroundColor: blue[500],
  },
  cyanAvatar: {
    backgroundColor: cyan[500],
  },
  tealAvatar: {
    backgroundColor: teal[500],
  },
  limeAvatar: {
    backgroundColor: lime[500],
  },
  amberAvatar: {
    backgroundColor: amber[500],
  },
  brownAvatar: {
    backgroundColor: brown[500],
  },
  purpleAvatar: {
    backgroundColor: purple[500],
  },
});

export default styles;
