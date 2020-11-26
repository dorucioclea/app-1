import red from '@material-ui/core/colors/pink';
import green from '@material-ui/core/colors/lightGreen';
import blue from '@material-ui/core/colors/lightBlue';
import violet from '@material-ui/core/colors/deepPurple';
import orange from '@material-ui/core/colors/orange';
import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
  root: {
    padding: 20,
    boxShadow: theme.shade.light,
    background: fade(theme.palette.background.paper, 0.8),
    backdropFilter: 'saturate(180%) blur(20px)',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      padding: '20px 8px'
    },
  },
  calendarWrap: {
    minHeight: 600,
    color: theme.palette.text.primary,
    '& span[class="rbc-btn-group"]': {
      border: `1px solid ${theme.palette.secondary.main}`,
      borderRadius: theme.rounded.big,
      '& button': {
        backgroundColor: 'transparent',
        color: theme.palette.text.primary,
        padding: theme.spacing(1),
        '&[class="rbc-active"]': {
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.common.white,
        }
      },
    },
    '& div[class="rbc-month-view"]': {
      backgroundColor: theme.palette.background.paper,
    },
    '& div[class="rbc-header"]': {
      backgroundColor: theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200],
      color: theme.palette.text.primary
    },
    '& div[class*="rbc-day-bg"], div[class="rbc-month-row"]': {
      borderColor: theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200]
    },
    '& div[class*="rbc-date-cell"]': {
      '& a': {
        color: theme.palette.text.primary
      }
    },
    '& div[class*="rbc-off-range"]': {
      '& a': {
        opacity: 0.3
      }
    },
    '& div[class*="rbc-off-range-bg"]': {
      backgroundColor: theme.palette.type === 'dark' ? theme.palette.grey[600] : theme.palette.grey[100],
    },
    '& div[class*="rbc-today"]': {
      backgroundColor: theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light
    }
  },
  addBtn: {
    position: 'fixed',
    bottom: 30,
    right: 30,
    zIndex: 100
  },
  typography: {
    margin: theme.spacing(2),
  },
  divider: {
    margin: '5px 0',
    textAlign: 'center'
  },
  button: {
    margin: theme.spacing(1),
  },
  eventName: {
    padding: '50px 10px 10px 20px',
    minWidth: 280,
    boxShadow: 'inset 0 -30px 120px -30px rgba(0, 0, 0, 0.3)',
    color: theme.palette.common.white,
    '& svg': {
      top: -2,
      position: 'relative'
    }
  },
  time: {
    padding: 20
  },
  moreOpt: {
    position: 'absolute',
    top: 10,
    right: 10,
    color: theme.palette.common.white
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
});

export default styles;
