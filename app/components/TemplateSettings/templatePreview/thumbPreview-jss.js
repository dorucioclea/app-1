import { gradientBgLight, gradientBgDark } from 'containers/Templates/appStyles-jss';
import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
  thumb: {
    overflow: 'hidden',
    marginBottom: theme.spacing(1)
  },
  active: {
    display: 'block'
  },
  appPreview: {
    width: '100%',
    height: 200,
    position: 'relative',
    display: 'flex',
    background: theme.palette.background.default,
    '& header': {
      width: '100%',
      height: 50,
      background: theme.palette.type === 'dark' ? gradientBgDark(theme) : gradientBgLight(theme),
      position: 'absolute',
      top: 0,
      left: 0
    },
    '& nav': {
      backgroundColor: theme.palette.type === 'dark' ? fade(theme.palette.background.paper, 0.75) : fade(theme.palette.background.paper, 0.95),
      width: '6%',
      marginTop: 0,
      position: 'relative',
      paddingTop: theme.spacing(3),
      paddingLeft: theme.spacing(0.5),
      '& li': {
        marginBottom: theme.spacing(2.5),
        display: 'flex',
        '& i': {
          borderRadius: '50%',
          width: 12,
          height: 12,
          marginTop: -3,
          background: theme.palette.secondary.main,
        },
        '&$active': {
          '& i': {
            background: theme.palette.secondary.main
          },
        },
      }
    },
    '& aside': {
      backgroundColor: theme.palette.type === 'dark' ? fade(theme.palette.background.paper, 0.75) : fade(theme.palette.background.paper, 0.95),
      width: '30%',
      marginTop: 0,
      position: 'relative',
      paddingTop: theme.spacing(3),
      paddingLeft: theme.spacing(0.5),
      '& li': {
        margin: '0 10px 10px 5px',
        display: 'flex',
        '&$active': {
          '& i': {
            background: theme.palette.secondary.main
          },
          '& p': {
            background: theme.palette.secondary.main
          }
        },
        '& i': {
          borderRadius: '50%',
          width: 4,
          height: 4,
          marginRight: 5,
          marginTop: -1,
          background: theme.palette.secondary.main,
        },
        '& p': {
          width: 40,
          height: 2,
          background: theme.palette.grey[400],
        },
      }
    },
  },
  megaMenu: {},
  topNav: {
    background: theme.palette.background.paper,
    lineHeight: '13px',
    boxShadow: theme.shadows[4],
    '& li': {
      display: 'inline-block',
      margin: theme.spacing(1),
      position: 'relative',
      background: theme.palette.grey[500],
      width: 16,
      height: 2,
      '&$active': {
        '& span': {
          background: theme.palette.secondary.main
        }
      },
      '& > ul': {
        boxShadow: theme.shadows[4],
        position: 'absolute',
        background: theme.palette.background.paper,
        top: '100%',
        left: 0,
        padding: theme.spacing(0.25),
        zIndex: 10,
        marginTop: 14,
        borderRadius: 4,
        '& li': {
          display: 'block',
          padding: 2,
          '&$active': {
            background: theme.palette.secondary.main
          }
        }
      },
      '& $megaMenu': {
        boxShadow: theme.shadows[4],
        position: 'absolute',
        background: theme.palette.background.paper,
        top: '100%',
        left: 0,
        zIndex: 10,
        marginTop: 14,
        borderRadius: 4,
        display: 'flex',
        width: 150,
        textAlign: 'left',
        padding: '10px 5px 8px',
        '& aside': {
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: `2px solid ${theme.palette.secondary.main}`
        },
        '& section': {
          '& $title': {
            background: theme.palette.secondary.main,
            width: 20,
            height: 2,
            marginLeft: 8
          },
          '& li': {
            display: 'inline-block'
          }
        }
      }
    }
  },
  title: {},
  ctn1: {},
  ctn2: {},
  previewWrap: {
    flex: 1,
    position: 'relative'
  },
  full: {},
  content: {
    padding: 10,
    marginTop: 20,
    zIndex: 10,
    margin: '20px 8px 10px',
    height: 170,
    borderRadius: theme.spacing(1),
    '& $title': {
      background: theme.palette.primary.main,
      height: 5,
      width: '60%',
      marginBottom: 10,
      borderRadius: theme.spacing(1),
    },
    '& $ctn1': {
      margin: '5px 5px 10px 0',
      width: '100%',
      height: 30,
      background: theme.palette.secondary.main,
      display: 'block',
      borderRadius: theme.spacing(1),
    },
    '& $ctn2': {
      width: '46%',
      height: 40,
      background: theme.palette.secondary.light,
      display: 'inline-block',
      borderRadius: theme.spacing(1),
      margin: '2%'
    },
    '&$full': {
      height: 140,
      marginTop: theme.spacing(5)
    }
  }
});

export default styles;
