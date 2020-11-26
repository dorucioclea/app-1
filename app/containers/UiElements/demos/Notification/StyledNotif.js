import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import CloseIcon from '@material-ui/icons/Close';
import WarningIcon from '@material-ui/icons/Warning';
import Grid from '@material-ui/core/Grid';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import messageStyles from 'dan-styles/Messages.scss';

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
};

const styles1 = theme => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.dark,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
});

function MySnackbarContent(props) {
  const {
    classes,
    className,
    message,
    onClose,
    variant,
    ...other
  } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={classNames(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={(
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      )}
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

MySnackbarContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string.isRequired,
  message: PropTypes.node.isRequired,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};

MySnackbarContent.defaultProps = {
  onClose: () => {}
};

const MySnackbarContentWrapper = withStyles(styles1)(MySnackbarContent);

const styles = theme => ({
  snackbar: {
    margin: theme.spacing(1),
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`,
  },
  margin: {
    margin: theme.spacing(1)
  }
});

const action = (
  <Button color="secondary" size="small">
    Action
  </Button>
);

class StyledNotif extends React.Component {
  state = {
    openStyle: false,
  };

  handleClickStyle = () => {
    this.setState({ openStyle: true });
  };

  handleCloseStyle = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ openStyle: false });
  };

  render() {
    const { classes } = this.props;
    const { openStyle } = this.state;
    return (
      <Grid container alignItems="flex-start" justify="center" direction="row" spacing={2}>
        <Grid item md={6} xs={12}>
          <Typography variant="button" className={classes.divider}>Default Styled Notification</Typography>
          <Button className={classes.margin} variant="outlined" color="primary" onClick={this.handleClickStyle}>
            Open success snackbar
          </Button>
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={openStyle}
            autoHideDuration={6000}
            onClose={this.handleCloseStyle}
          >
            <MySnackbarContentWrapper
              onClose={this.handleCloseStyle}
              variant="success"
              message="This is a success message!"
            />
          </Snackbar>
          <MySnackbarContentWrapper
            variant="error"
            className={classes.margin}
            message="This is an error message!"
          />
          <MySnackbarContentWrapper
            variant="warning"
            className={classes.margin}
            message="This is a warning message!"
          />
          <MySnackbarContentWrapper
            variant="info"
            className={classes.margin}
            message="This is an information message!"
          />
          <MySnackbarContentWrapper
            variant="success"
            className={classes.margin}
            message="This is a success message!"
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography variant="button" className={classes.divider}>Custom Styled Notification with CSS</Typography>
          <div>
            <SnackbarContent className={classes.snackbar} message="Notification default" action={action} />
            <SnackbarContent className={classNames(classes.snackbar, messageStyles.bgInfo)} message="Notification Info" action={action} />
            <SnackbarContent className={classNames(classes.snackbar, messageStyles.bgSuccess)} message="Success Notification Message" />
            <SnackbarContent className={classNames(classes.snackbar, messageStyles.bgWarning)} message="I love candy. I love cookies. I love cupcakes." action={action} />
            <SnackbarContent className={classNames(classes.snackbar, messageStyles.bgError)} message="I love cheesecake. I love chocolate." action={action} />
          </div>
        </Grid>
      </Grid>
    );
  }
}

StyledNotif.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StyledNotif);
