import { fade } from '@material-ui/core/styles/colorManipulator';
const styles = theme => ({
  statusWrap: {
    position: 'relative',
    marginBottom: theme.spacing(3),
    '& > div': {
      overflow: 'hidden'
    },
    '& textarea': {
      fontFamily: theme.typography.fontFamily,
      border: 'none',
      padding: '20px 20px 20px 50px',
      outline: 'none',
      width: '100%',
      resize: 'none',
      overflow: 'hidden',
      background: 'none',
      color: theme.palette.text.primary,
      height: 50,
      transition: theme.transitions.create(['height'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      '&:focus': {
        height: 100,
        overflow: 'auto',
      }
    }
  },
  inputMessage: {
    backgroundColor: theme.palette.type === 'dark' ? fade(theme.palette.background.paper, 0.85) : fade(theme.palette.background.paper, 0.95)
  },
  avatarMini: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 10,
    left: 10
  },
  control: {
    padding: '10px 20px 0',
    display: 'flex'
  },
  privacy: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    textAlign: 'right',
  },
  button: {
    margin: theme.spacing(0.5)
  },
  sendBtn: {
    position: 'relative',
    top: 5
  },
  formControl: {
    width: 150,
    margin: `0 ${theme.spacing(1)}px`,
    [theme.breakpoints.up('sm')]: {
      margin: '0 20px',
      paddingLeft: 10,
    },
    textAlign: 'left',
    '&:before, &:after': {
      borderBottom: 'none'
    }
  },
  selectEmpty: {
    border: 'none',
    background: theme.palette.action.hover
  },
  hiddenDropzone: {
    display: 'none'
  },
  preview: {
    position: 'relative',
    '& figure': {
      textAlign: 'center'
    }
  },
  removeBtn: {
    opacity: 1
  }
});

export default styles;
