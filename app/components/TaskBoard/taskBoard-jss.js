import red from '@material-ui/core/colors/pink';
import green from '@material-ui/core/colors/lightGreen';
import blue from '@material-ui/core/colors/lightBlue';
import violet from '@material-ui/core/colors/deepPurple';
import orange from '@material-ui/core/colors/orange';
import { lighten, darken, fade } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
  boardWrap: {
    '& > div': {
      color: theme.palette.text.primary,
      background: 'none'
    },
    '& section': {
      overflow: 'hidden',
      boxShadow: theme.shade.light,
      borderRadius: theme.rounded.medium,
      backgroundColor: 'transparent',
      '&:before': {
        content: '""',
        background: fade(theme.palette.background.paper, 0.8),
        backdropFilter: 'saturate(180%) blur(20px)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      },
      '& > span': {
        zIndex: 1
      },
      '& article': {
        boxShadow: theme.shadows[1],
        borderBottom: 'none',
        borderRadius: theme.rounded.medium,
        background: theme.palette.background.default,
        transition: 'background 0.3s ease',
        marginLeft: '2px !important',
        marginRight: '2px !important',
        marginBottom: `${theme.spacing(1)}px !important`,
        '&:hover': {
          background: theme.palette.type === 'dark' ? darken(theme.palette.primary.dark, 0.7) : lighten(theme.palette.primary.light, 0.1),
        },
        '& > div > span': {
          color: '#B71C1C',
          background: 'none',
          border: 'none',
          position: 'relative',
          width: 13,
          height: 13,
          top: 6,
          right: 4,
          '&:after, &:before': {
            background: theme.palette.text.secondary
          }
        },
        '& [contenteditable]': {
          padding: `${theme.spacing(1)}px ${theme.spacing(0.5)}px`,
          color: theme.palette.text.primary,
          '&:focus': {
            boxShadow: `0 0 2px 1px ${theme.palette.secondary.main}`,
            outline: 'none'
          }
        },
        '& + button, + button + button': {
          borderRadius: theme.rounded.big,
          marginLeft: theme.spacing(1),
          marginRight: 0,
          zIndex: 1,
          position: 'relative'
        },
        '& + button': {
          background: theme.palette.secondary.main
        }
      },
      '& > div > div[class] + div': {
        background: 'none !important'
      }
    }
  },
  deco: {
    position: 'absolute',
    width: '100%',
    height: 8,
    top: 0,
    left: 0,
  },
  header: {
    padding: theme.spacing(1),
    marginBottom: 10,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: theme.palette.text.primary,
    ontSize: 14,
    fontWeight: theme.typography.fontWeightMedium
  },
  label: {
    fontSize: 11,
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1)
  },
  content: {
    padding: theme.spacing(1),
    fontSize: 12
  },
  mainTitle: {
    color: theme.palette.text.secondary,
    fontSize: 16,
    textTransform: 'uppercase',
    padding: theme.spacing(1),
    paddingTop: theme.spacing(1.5),
    fontWeight: theme.typography.fontWeightMedium
  },
  labelCaption: {
    paddingLeft: theme.spacing(1),
    display: 'block'
  },
  tags: {
    '& > span': {
      display: 'inline-block',
      margin: `${theme.spacing(0.5)}px 0 ${theme.spacing(1)}px ${theme.spacing(1)}px`,
      borderRadius: theme.rounded.medium,
      padding: '2px 6px'
    }
  },
  leftIcon: {
    marginRight: theme.spacing(1),
  },
  addBtn: {
    position: 'fixed',
    bottom: 30,
    right: 30,
    zIndex: 100
  },
  field: {
    width: '100%',
    marginBottom: 20
  },
  fieldBasic: {
    width: '100%',
    marginBottom: 20,
    marginTop: 10
  },
  inlineWrap: {
    display: 'flex',
    flexDirection: 'row'
  },
  redRadio: {
    color: red[600],
    '& svg': {
      borderRadius: '50%',
      background: red[100],
    },
    '&$checked': {
      color: red[500],
    },
  },
  greenRadio: {
    color: green[600],
    '& svg': {
      borderRadius: '50%',
      background: green[100],
    },
    '&$checked': {
      color: green[500],
    },
  },
  blueRadio: {
    color: blue[600],
    '& svg': {
      borderRadius: '50%',
      background: blue[100],
    },
    '&$checked': {
      color: blue[500],
    },
  },
  violetRadio: {
    color: violet[600],
    '& svg': {
      borderRadius: '50%',
      background: violet[100],
    },
    '&$checked': {
      color: violet[500],
    },
  },
  orangeRadio: {
    color: orange[600],
    '& svg': {
      borderRadius: '50%',
      background: orange[100],
    },
    '&$checked': {
      color: orange[500],
    },
  },
  checked: {},
  headerOpt: {
    position: 'absolute',
    right: 0,
    top: theme.spacing(3)
  }
});

export default styles;
