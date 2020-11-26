import { lighten } from '@material-ui/core/styles/colorManipulator';
const styles = theme => ({
  editor: {
    boxSizing: 'border-box',
    border: `1px solid ${theme.palette.divider}`,
    cursor: 'text',
    padding: theme.spacing(2),
    borderRadius: theme.rounded.medium,
    marginBottom: theme.spacing(2),
    background: theme.palette.background.paper,
    minHeight: 140,
  },
  headlineButtonWrapper: {
    display: 'inline-block',
  },
  headlineButton: {
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
    fontSize: 18,
    border: 0,
    paddingTop: 5,
    verticalAlign: 'bottom',
    height: 34,
    width: 36,
    '&:hover, &:focus': {
      background: '#f3f3f3',
    }
  },
  toolbar: {
    background: theme.palette.background.default,
    border: theme.palette.background.paper,
    padding: 4,
    '& button': {
      padding: 0,
      margin: 1,
      '&:hover': {
        background: lighten(theme.palette.background.paper, 0.2),
      }
    }
  }
});

export default styles;
