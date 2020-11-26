const expand = {
  bottom: 'auto',
  right: 'auto',
  left: '50%',
  top: '50%',
  transform: 'translateX(-50%) translateY(-50%)'
};

const styles = theme => ({
  formTheme: {
    background: theme.palette.background.paper,
    boxShadow: theme.shadows[7]
  },
  hideForm: {
    visibility: 'hidden',
    opacity: 0,
    bottom: -20,
    transform: 'scale(0.9)'
  },
  btnOpt: {},
  expandButton: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  floatingForm: {
    transition: 'all 0.3s cubic-bezier(0.01, 0.65, 0.3, 0.9)',
    position: 'fixed',
    width: 500,
    right: 10,
    zIndex: 0,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: theme.rounded.medium,
    overflow: 'hidden',
    [theme.breakpoints.down('sm')]: {
      width: '95% !important',
      ...expand
    },
    '& header': {
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      fontSize: 22,
      padding: '16px 20px',
      position: 'relative',
      boxShadow: `0 10px 10px 10px ${theme.palette.background.paper}`,
      fontWeight: 600,
      marginBottom: theme.spacing(1),
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
      '& $btnOpt': {
        position: 'absolute',
        right: 0,
        top: 0,
        '& > *': {
          margin: '0 5px'
        },
        '& $expandButton': {
          transform: 'rotate(270deg)'
        },
        '& svg': {
          fill: theme.palette.text.secondary,
        }
      }
    },
    '& [class^="bodyForm"]': {
      backgroundColor: theme.palette.background.paper
    },
    '& [class^="buttonArea"]': {
      backgroundColor: theme.palette.background.default
    }
  },
  showForm: {
    visibility: 'visible',
    opacity: 1,
    bottom: 10,
    zIndex: 1300,
    transform: 'scale(1)'
  },
  buttonArea: {
    background: theme.palette.primary.light,
    position: 'relative',
    bottom: 0,
    left: 0,
    width: '100%',
    textAlign: 'right',
    padding: '10px 30px',
    '& button': {
      marginRight: 5
    }
  },
  expanded: {
    ...expand
  },
  formOverlay: {
    position: 'fixed',
    background: theme.palette.grey[900],
    opacity: 0.7,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 1300,
  },
  large: {
    width: 650
  },
  bodyForm: {
    position: 'relative',
    background: theme.palette.background.paper,
    padding: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      padding: '15px 10px'
    },
    maxHeight: 450,
    overflow: 'auto',
  }
});

export default styles;
