const styles = theme => ({
  title: {
    display: 'block',
    margin: `${theme.spacing(3)}px 0`,
    color: theme.palette.common.white,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  heading: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  root: {
    width: '100%',
    flexGrow: 1,
    padding: 30
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
  buttonInit: {
    margin: theme.spacing(4),
    textAlign: 'center'
  },
  divider: {
    margin: theme.spacing(3, 0)
  }
});

export default styles;
