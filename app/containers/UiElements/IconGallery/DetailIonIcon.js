import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light';
import jsx from 'react-syntax-highlighter/languages/prism/jsx';
import themeSource from 'react-syntax-highlighter/styles/prism/prism';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) { // eslint-disable-line
  return <Slide direction="up" ref={ref} {...props} />;
});

const humanize = (str, space) => {
  let string = str;
  if (str === '3d_rotation') {
    string = 'three_d_rotation';
  }
  const frags = string.split('_');
  for (let i = 0; i < frags.length; i += 1) {
    frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
  }

  if (space) {
    return frags.join(' ');
  }
  return frags.join('');
};

const styles = theme => ({
  code: {
    fontSize: 12,
    padding: '5px !important'
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`,
  },
  bigIcon: {
    textAlign: 'center',
    marginBottom: 30,
    color: theme.palette.text.primary,
    '& > i': {
      fontSize: 120
    }
  },
  title: {
    marginBottom: 40,
    fontSize: 22,
    paddingBottom: 20,
    position: 'relative',
    fontWeight: 500,
    color: theme.palette.grey[700],
    textTransform: 'uppercase',
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      bottom: 0,
      left: 24,
      width: 40,
      borderBottom: `5px solid ${theme.palette.primary.main}`
    }
  },
  content: {
    width: 600,
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  }
});

class DetailIonIcon extends React.Component { // eslint-disable-line
  render() {
    registerLanguage('jsx', jsx);
    const {
      isOpenDetail,
      iconName,
      closeDetail
    } = this.props;
    const { classes } = this.props;
    const fontCode = `<i className="${iconName}" />`;
    return (
      <Dialog
        open={isOpenDetail}
        TransitionComponent={Transition}
        keepMounted
        maxWidth="md"
        onClose={closeDetail}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title" className={classes.title}>
          {humanize(iconName, true)}
        </DialogTitle>
        <DialogContent className={classes.content}>
          <div className={classes.bigIcon}>
            <i className={iconName} />
          </div>
          <Typography variant="subtitle1" gutterBottom>Use with Font Icons</Typography>
          <SyntaxHighlighter className={classes.code} language="jsx" style={themeSource}>
            {fontCode}
          </SyntaxHighlighter>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDetail} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

DetailIonIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  isOpenDetail: PropTypes.bool.isRequired,
  closeDetail: PropTypes.func.isRequired,
  iconName: PropTypes.string,
};

DetailIonIcon.defaultProps = {
  iconName: '',
};

export default withStyles(styles)(DetailIonIcon);
