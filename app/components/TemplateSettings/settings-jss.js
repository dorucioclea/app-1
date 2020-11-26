import { fade } from '@material-ui/core/styles/colorManipulator';

const panelWidth = 320;
const styles = theme => ({
  expanded: {},
  settingSidebar: {
    height: '100%',
    position: 'fixed',
    top: 0,
    right: 0,
    zIndex: 10000,
    width: 0,
    transition: 'width ease 0.2s',
    '&$expanded': {
      width: 320,
      [theme.breakpoints.down('xs')]: {
        width: '100%'
      }
    }
  },
  rightSidebar: {
    right: 0,
    '& $toggleButton': {
      left: -56,
      borderRadius: '50% 0 0 50%',
      boxShadow: '-3px 0px 4px 0px rgba(80,80,80, 0.2)',
    }
  },
  leftSidebar: {
    left: 0,
    '& $toggleButton': {
      right: -56,
      borderRadius: '0 50% 50% 0',
      boxShadow: '3px 0px 4px 0px rgba(80,80,80, 0.2)',
    }
  },
  root: {
    height: '100%',
    backgroundColor: theme.palette.type === 'dark' ? fade(theme.palette.grey.A700, 0.95) : fade(theme.palette.background.default, 0.95),
    boxShadow: '0px 5px 10px 1px rgba(80,80,80, 0.2)',
    paddingTop: theme.spacing(13),
    [theme.breakpoints.up('sm')]: {
      width: panelWidth,
      paddingTop: theme.spacing(6),
    },
    '& > div': {
      height: '100%',
      '& > div': {
        height: '100%'
      }
    }
  },
  settingWraper: {
    overflow: 'auto',
    height: 'calc(100% - 40px)',
    position: 'relative',
    width: '100%'
  },
  toggleButton: {
    position: 'absolute',
    top: 300,
    backgroundColor: theme.palette.type === 'dark' ? fade(theme.palette.grey.A700, 0.75) : fade(theme.palette.background.default, 0.95),
    padding: theme.spacing(1),
    zIndex: 1
  },
  buttonDrawer: {
    boxShadow: 'none',
    backgroundImage: `linear-gradient(-45deg, ${theme.palette.primary.main} -30%, ${theme.palette.primary.main} 15%, ${theme.palette.secondary.main} 100%);`
  },
  tab: {
    [theme.breakpoints.up('md')]: {
      width: panelWidth,
    },
    right: 0,
    top: 0,
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.background.paper : theme.palette.background.default
  },
  themeMode: {
    width: '100%',
    flexDirection: 'row',
    '& > span': {
      lineHeight: '50px',
    }
  },
  switch: {
    margin: 0
  },
  optBlock: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(1.5),
  },
  title: {
    color: `${theme.palette.text.secondary} !important`,
    textTransform: 'uppercase',
  },
  icon: {
    position: 'relative',
    top: 4,
    marginRight: theme.spacing(0.5),
    fontSize: 18
  },
  themeCheck: {
    backgroundColor: theme.palette.secondary.main
  },
  themeCheckBar: {
    backgroundColor: theme.palette.secondary.main
  },
  group: {
    margin: `${theme.spacing(1)}px 0`,
    width: '100%',
    display: 'block',
    '& label': {
      display: 'inline-block',
      margin: 0,
      width: '99%',
      [theme.breakpoints.up('sm')]: {
        width: '45%'
      },
      [theme.breakpoints.up('md')]: {
        width: '33.33%'
      },
    },
    '& > label': {
      position: 'relative',
      '& > span': {
        marginTop: 10,
        display: 'block',
        textAlign: 'center',
        position: 'absolute',
        top: 12,
        left: 48,
      }
    }
  },
  thumb: {
    margin: `${theme.spacing(1)}px ${theme.spacing(0.5)}px`,
    width: '100%',
    position: 'relative',
    borderRadius: theme.rounded.medium,
    '& > span': {
      visibility: 'hidden',
      position: 'absolute'
    }
  },
  selectedTheme: {
    boxShadow: `0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12), 0 0 0px 2px ${theme.palette.primary.main}`,
  },
  appPreview: {
    width: '100%',
    padding: 5,
    position: 'relative',
    display: 'block',
    textAlign: 'center',
    '&:hover': {
      opacity: 0.8
    },
    '& img': {
      filter: theme.palette.type === 'dark' && 'invert(1)'
    }
  },
  decoration: {
    width: '100%',
    borderRadius: theme.rounded.medium,
    height: 80
  },
  themeGroup: {
    display: 'block'
  },
  randomThemeField: {
    width: '33%',
    margin: 0,
    display: 'inline-block',
    padding: '0 8px',
    '& img': {
      borderRadius: 12,
      width: '100%',
      height: 78
    }
  },
  themeField: {
    width: '33%',
    margin: 0
  },
  layoutField: {
    width: '100%',
    margin: '8px 0'
  },
  header: {
    padding: theme.spacing(2),
    textAlign: 'center',
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  backButton: {
    position: 'absolute',
    left: theme.spacing(1),
    top: 4,
  },
  hide: {
    display: 'none'
  },
  center: {
    textAlign: 'center'
  }
});

export default styles;
