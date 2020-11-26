import colorfull from 'dan-api/palette/colorfull';
import { darken, fade, lighten } from '@material-ui/core/styles/colorManipulator';
import { gradientBgLight, gradientBgDark } from 'containers/Templates/appStyles-jss';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import images from 'dan-api/images/photos';

const styles = theme => ({
  rootCounter: {
    flexGrow: 1,
  },
  rootCounterFull: {
    flexGrow: 1,
  },
  rootContact: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    overflow: 'hidden',
    '& header + div': {
      padding: '8px !important'
    }
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`
  },
  dividerBig: {
    margin: `${theme.spacing(2)}px 0`
  },
  centerItem: {},
  smallTitle: {
    padding: `0 ${theme.spacing(2)}px`,
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  secondaryWrap: {
    padding: `1px ${theme.spacing(2)}px`,
    borderRadius: 4,
    justifyContent: 'space-around',
    '& > $centerItem': {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    '& li': {
      marginBottom: 30
    },
    '& $chip': {
      top: 50,
      position: 'absolute',
      fontSize: 11,
      fontWeight: 400,
    }
  },
  bigResume: {
    marginBottom: theme.spacing(5),
    justifyContent: 'space-between',
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      height: 160,
      display: 'block',
    },
    '& li': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      [theme.breakpoints.down('xs')]: {
        paddingRight: 0,
        paddingBottom: theme.spacing(2),
        width: '50%',
        float: 'left',
      },
    },
    '& $avatar': {
      [theme.breakpoints.up('sm')]: {
        width: 50,
        height: 50,
        '& svg': {
          fontSize: 32
        }
      }
    }
  },
  sm: {},
  mc: {},
  avatar: {
    marginRight: theme.spacing(1),
    boxShadow: theme.glow.light,
    '& svg': {
      fontSize: 24
    },
    '&$sm': {
      width: 30,
      height: 30
    },
    '&$mc': {
      width: 24,
      height: 24,
      top: 0,
      left: 8,
      marginRight: 0
    },
  },
  pinkAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: colorfull[0],
  },
  pinkText: {
    color: colorfull[0],
    '& svg': {
      fill: colorfull[0],
    }
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: colorfull[1],
  },
  purpleText: {
    color: colorfull[1],
    '& svg': {
      fill: colorfull[1],
    }
  },
  blueAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: colorfull[2],
  },
  blueText: {
    color: colorfull[2],
    '& svg': {
      fill: colorfull[2],
    }
  },
  tealAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: colorfull[3],
  },
  tealText: {
    color: colorfull[3],
    '& svg': {
      fill: colorfull[3],
    }
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: colorfull[4],
  },
  orangeText: {
    color: colorfull[4],
    '& svg': {
      fill: colorfull[4],
    }
  },
  indigoAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: colorfull[6],
  },
  indigoText: {
    color: colorfull[6],
    '& svg': {
      fill: colorfull[6],
    }
  },
  pinkProgress: {
    color: colorfull[0],
    '& div': {
      backgroundColor: colorfull[0],
    }
  },
  greenProgress: {
    color: colorfull[5],
    '& div': {
      backgroundColor: colorfull[5],
    }
  },
  orangeProgress: {
    color: colorfull[4],
    '& div': {
      backgroundColor: colorfull[4],
    }
  },
  purpleProgress: {
    color: colorfull[1],
    '& div': {
      backgroundColor: colorfull[1],
    }
  },
  blueProgress: {
    color: colorfull[2],
    '& div': {
      backgroundColor: colorfull[2],
    }
  },
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  chip: {
    margin: '8px 0 8px auto',
    color: '#000'
  },
  flex: {
    display: 'flex',
    alignItems: 'center'
  },
  textCenter: {
    textAlign: 'center'
  },
  textRight: {
    textAlign: 'right'
  },
  red: {},
  orange: {},
  indigo: {},
  purple: {},
  lime: {},
  taskIcon: {
    display: 'block',
    textAlign: 'center',
    margin: '0 10px',
    color: theme.palette.primary.main
  },
  productPhoto: {
    borderRadius: theme.spacing(0.5),
    marginRight: theme.spacing(1),
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  done: {},
  listItem: {
    padding: 5,
    background: theme.palette.background.paper,
    '&:hover': {
      backgroundColor: theme.palette.type === 'dark' ? darken(theme.palette.background.paper, 0.3) : theme.palette.secondary.light
    },
    '&$done': {
      textDecoration: 'line-through'
    }
  },
  title: {},
  subtitle: {},
  styledPaper: {
    backgroundColor: theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main,
    padding: 20,
    '& $title, & $subtitle': {
      color: theme.palette.common.white
    }
  },
  progressWidget: {
    marginTop: 20,
    background: theme.palette.secondary.dark,
    '& div': {
      background: theme.palette.primary.light,
    }
  },
  chipProgress: {
    marginTop: 20,
    background: theme.palette.primary.light,
    color: theme.palette.secondary.main,
    '& div': {
      background: colorfull[4],
      color: theme.palette.common.white
    }
  },
  taskStatus: {
    display: 'flex',
    alignItems: 'center',
    '& a': {
      textDecoration: 'none',
      color: theme.palette.primary.main
    }
  },
  counterIcon: {
    color: theme.palette.common.white,
    opacity: 0.7,
    fontSize: 84
  },
  progressCircle: {
    borderRadius: '50%',
    background: lighten(theme.palette.divider, 0.7)
  },
  itemCarousel: {
    textAlign: 'center',
    '& img': {
      margin: '10px auto'
    }
  },
  albumRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    height: 'auto',
    [theme.breakpoints.up('sm')]: {
      width: 500,
    },
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  img: {
    maxWidth: 'none'
  },
  mapWrap: {
    position: 'relative',
    overflow: 'hidden'
  },
  address: {
    display: 'block'
  },
  carouselItem: {
    margin: '0 5px',
    boxShadow: theme.shadows[3],
    borderRadius: theme.rounded.medium,
    overflow: 'hidden',
    height: 380,
    padding: '60px 20px',
    position: 'relative'
  },
  iconBg: {
    color: theme.palette.common.white,
    opacity: 0.25,
    position: 'absolute',
    bottom: 10,
    right: 10,
    fontSize: 96
  },
  carouselTitle: {
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    fontWeight: 500,
    fontSize: 20,
    marginBottom: theme.spacing(10)
  },
  carouselDesc: {
    color: theme.palette.common.white
  },
  chartWrap: {
    overflow: 'auto',
    marginTop: theme.spacing(2)
  },
  chartFluid: {
    width: '100%',
    minWidth: 400,
    height: 300,
    marginLeft: theme.spacing(1) * -3
  },
  tabNotif: {
    '& > span': {
      top: -20,
      right: 0
    }
  },
  button: {
    marginRight: theme.spacing(1)
  },
  wrapperDate: {
    overflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    }
  },
  calendarWrap: {
    [theme.breakpoints.up('sm')]: {
      maxWidth: 300,
    },
    zIndex: 1,
    background: theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main,
    '& > div': {
      border: 'none',
      background: 'none',
      width: 'auto',
      color: '#FFF',
      padding: theme.spacing(1),
      '& button': {
        color: '#FFF',
        fontSize: 12,
        borderRadius: theme.rounded.big,
        padding: theme.spacing(1),
        '&[class*="navigation__label"]': {
          fontSize: 18
        },
        '&[class*="tile--active"]': {
          background: theme.palette.primary.main,
          boxShadow: theme.glow.light
        },
        '&[class*="tile--now"]': {
          background: theme.palette.primary.main,
          boxShadow: theme.glow.light
        },
        '&[class*="__year-view"]': {
          padding: '1em 0.5em',
          margin: '2px 0'
        },
        '&[class*="__day--weekend"]': {
          color: '#FFF'
        },
        '&[class*="__day--neighboringMonth"]': {
          color: 'rgba(255,255,255,0.5)'
        },
        '&:hover': {
          background: `${theme.palette.secondary.light} !important`,
          color: theme.palette.secondary.main
        },
        '&:focus': {
          background: 'none !important',
          boxShadow: `0 0 0 1px ${theme.palette.secondary.light}`,
          color: theme.palette.secondary.light
        }
      },
      '& div[class*="__navigation"] button': {
        minWidth: 0,
        padding: theme.spacing(1),
        height: 'auto'
      }
    }
  },
  clockWrap: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    flexDirection: 'column',
    alignItems: 'center',
    background: theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main,
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(3)
    },
    '& > time': {
      border: `10px solid ${theme.palette.secondary.main}`,
      boxShadow: theme.palette.type === 'dark' ? `0 0 0 10px ${fade(theme.palette.secondary.main, 0.6)}` : `0 0 0 10px ${fade(theme.palette.secondary.light, 0.6)}`,
      borderRadius: '50%',
      '& > div': {
        background: theme.palette.secondary.main,
        border: 'none',
      }
    },
    '& [class*="__mark__body"], [class*="__hand__body"]': {
      background: theme.palette.secondary.light
    }
  },
  today: {
    fontSize: 18,
    margin: theme.spacing(3),
    fontWeight: theme.typography.fontWeightRegular,
    color: theme.palette.primary.light
  },
  storageInfo: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    '& li': {
      margin: `${theme.spacing(3)}px ${theme.spacing(1)}px ${theme.spacing(2)}px`
    }
  },
  buttonReadMore: {
    borderColor: '#FFF',
    color: '#FFF',
    marginTop: theme.spacing(1),
  },
  sliderWrap: {
    height: 360,
    overflow: 'hidden',
    '& $title': {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap'
    }
  },
  sliderContent: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    boxShadow: 'none'
  },
  mobileStepper: {
    margin: `0 auto ${theme.spacing(4)}px`,
    textAlign: 'center',
    borderRadius: '0 0 12px 12px',
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0
    }
  },
  downloadInvoice: {
    fontSize: 11,
    color: theme.palette.type === 'dark' ? theme.palette.primary.main : theme.palette.primary.dark,
    textDecoration: 'none',
    '& svg': {
      width: '0.5em'
    }
  },
  messages: {
    '& p': {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    }
  },
  rootCalculator: {
    width: '100%',
    height: 420,
    padding: theme.spacing(2),
    backgroundImage: theme.palette.type === 'dark' ? gradientBgDark(theme) : gradientBgLight(theme),
    '& button': {
      background: fade(theme.palette.background.paper, 0.3),
      color: theme.palette.common.white,
      borderRadius: theme.rounded.medium
    }
  },
  stripped: {
    '& tbody tr:nth-child(even)': {
      background: theme.palette.type === 'dark' ? fade(theme.palette.grey[900], 0.5) : theme.palette.grey[50]
    }
  },
  activityWrap: {
    '& ul:before': {
      content: '""',
      position: 'absolute',
      height: '100%',
      left: -2,
      borderLeft: `2px solid ${theme.palette.primary.main}`,
      [theme.breakpoints.up('sm')]: {
        left: 104,
      }
    }
  },
  activityList: {
    paddingLeft: theme.spacing(4),
    paddingRight: 0,
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    }
  },
  activityText: {
    paddingLeft: theme.spacing(4),
    '& span': {
      fontSize: 12,
      fontWeight: theme.typography.fontWeightMedium
    },
    '& p': {
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  },
  timeDot: {
    position: 'relative',
    '& span': {
      border: `3px solid ${theme.palette.primary.main}`,
      width: 15,
      height: 15,
      borderRadius: '50%',
      position: 'absolute',
      background: theme.palette.background.paper,
      top: 0,
      left: -8,
      [theme.breakpoints.up('sm')]: {
        left: 66
      }
    },
    '& time': {
      fontSize: 12,
      textAlign: 'left',
      whiteSpace: 'pre-wrap',
      wordBreak: 'break-word',
      display: 'block',
      paddingLeft: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        textAlign: 'right',
        width: 60,
        paddingLeft: 0,
      }
    }
  },
  formControl: {
    width: '100%',
    marginBottom: theme.spacing(3),
    marginTop: theme.spacing(1) * -2,
  },
  formControlTrade: {
    width: '100%',
    marginTop: theme.spacing(1) * -2,
    marginBottom: theme.spacing(2),
  },
  tradeUp: {
    color: green[500],
    '& svg': {
      fill: green[500],
    }
  },
  tradeDown: {
    color: red[500],
    '& svg': {
      fill: red[500],
    }
  },
  tradeFlat: {
    color: theme.palette.divider,
    '& svg': {
      fill: theme.palette.divider,
    }
  },
  btnArea: {
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'space-between',
      display: 'flex',
      alignItems: 'center',
    },
    '& button': {
      [theme.breakpoints.down('xs')]: {
        marginTop: theme.spacing(2)
      }
    }
  },
  walletLabel: {
    marginBottom: theme.spacing(3)
  },
  tabContainer: {
    margin: `0 ${theme.spacing(1) * -3}px`,
    overflow: 'hidden'
  },
  rootTable: {
    width: '100%',
    marginTop: '24',
    overflowX: 'auto',
  },
  table: {
    minWidth: 400
  },
  tableLong: {
    minWidth: 900
  },
  sun: {},
  cloud: {},
  weathercard: {
    borderRadius: theme.rounded.medium,
    position: 'relative',
    overflow: 'hidden',
    height: 270,
    [theme.breakpoints.down('xs')]: {
      height: 260
    },
    backgroundColor: theme.palette.common.white,
    backgroundSize: 'cover',
    boxShadow: '0px 0px 25px 1px rgba(50, 50, 50, 0.1)',
    animation: 'appear 500ms ease-out forwards',
    '& h1': {
      position: 'absolute',
      fontWeight: '300',
      fontSize: 80,
      color: theme.palette.common.white,
      bottom: 0,
      left: 35,
      opacity: 0,
      transform: 'translateX(150px)',
      animation: 'title-appear 500ms ease-out 500ms forwards',
    },
    '& p': {
      position: 'absolute',
      fontWeight: 300,
      fontSize: 28,
      color: theme.palette.common.white,
      bottom: 0,
      left: 35,
      animation: 'title-appear 1s ease-out 500ms forwards',
    },
    '&$sun': {
      backgroundImage: `url(${images[9]})`,
      backgroundPosition: '0 -120px'
    },
    '&$cloud': {
      backgroundImage: `url(${images[18]})`,
      backgroundPosition: '0 -120px'
    }
  }
});

export default styles;
