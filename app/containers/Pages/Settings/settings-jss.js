import { fade, darken } from '@material-ui/core/styles/colorManipulator';
const gradientBgLight = (theme) => `linear-gradient(-45deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 33%, ${theme.palette.secondary.main} 100%);`;
const gradientBgDark = (theme) => `linear-gradient(-45deg, ${darken(theme.palette.primary.main, 0.4)} 0%, ${darken(theme.palette.primary.main, 0.4)} 33%, ${darken(theme.palette.secondary.main, 0.4)} 100%);`;
const styles = theme => ({
  appBar: {
    position: 'relative',
    backgroundImage: theme.palette.type === 'dark' ? gradientBgDark(theme) : gradientBgLight(theme),
    backgroundAttachment: 'fixed',
    textAlign: 'center'
  },
  paperStyled: {
    background: darken(theme.palette.primary.main, 0.2),
    padding: theme.spacing(3),
    color: theme.palette.common.white
  },
  profile: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    width: 80,
    height: 80,
  },
  profileText: {
    marginLeft: theme.spacing(2),
    fontSize: 12,
    '& h4': {
      marginBottom: theme.spacing(1),
      fontSize: 18,
    },
  },
  quickAccess: {
    display: 'flex',
    justifyContent: 'space-around',
    '& $icon': {
      fontSize: 36,
      display: 'block',
      [theme.breakpoints.down('xs')]: {
        fontSize: 18,
      }
    },
    '& button': {
      [theme.breakpoints.down('xs')]: {
        fontSize: 12,
      },
      color: theme.palette.primary.light,
      '& > span:first-child': {
        flexDirection: 'column'
      }
    }
  },
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing(3),
  }),
  flex: {
    flex: 1,
  },
  searchSettings: {
    marginBottom: theme.spacing(4),
    borderRadius: theme.rounded.medium,
    backgroundColor: theme.palette.type === 'dark' ? fade(theme.palette.grey[200], 0.15) : fade(theme.palette.grey[200], 0.95),
    '& svg': {
      fill: theme.palette.text.secondary
    }
  },
  wrapper: {
    fontFamily: theme.typography.fontFamily,
    position: 'relative',
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(1),
    borderRadius: 2,
    display: 'block',
  },
  search: {
    width: 'auto',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    font: 'inherit',
    padding: `${theme.spacing(1)}px ${theme.spacing(1)}px ${theme.spacing(1)}px ${theme.spacing(4)}px`,
    border: 0,
    display: 'block',
    verticalAlign: 'middle',
    whiteSpace: 'normal',
    background: 'none',
    margin: 0, // Reset for Safari
    color: theme.palette.text.primary,
    width: '100%',
    '&:focus': {
      outline: 0,
    },
  },
  button: {
    display: 'table',
    width: '100%',
    height: '100%',
    background: theme.palette.background.paper,
    borderRadius: theme.spacing(1.5),
    '&:hover': {
      background: theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.secondary.light
    },
    '& > span:first-child': {
      display: 'table-row',
    },
    '& $icon': {
      margin: '0 auto',
      display: 'table-cell',
      fontSize: 64,
    },
    '& $text': {
      width: 210,
      textAlign: 'left',
      paddingLeft: theme.spacing(1),
      verticalAlign: 'middle',
      display: 'table-cell'
    },
    '& $info': {
      display: 'block',
      textTransform: 'none',
      color: theme.palette.grey[500],
      whiteSpace: 'initial'
    }
  },
  text: {},
  info: {},
  icon: {},
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    marginTop: theme.spacing(1) * -1
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  iconSmall: {
    fontSize: 20,
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  detailWrap: {
    paddingTop: theme.spacing(10)
  }
});

export default styles;
