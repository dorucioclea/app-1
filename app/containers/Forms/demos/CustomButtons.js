import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import FileUpload from '@material-ui/icons/CloudUpload';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import { Link } from 'react-router-dom';

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <Link to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

const styles = theme => ({
  demo: {
    height: 'auto',
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`,
  },
  field: {
    margin: `${theme.spacing(3)}px 0`,
  },
  button: {
    margin: theme.spacing(1),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  cssRoot: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
  bootstrapRoot: {
    boxShadow: 'none',
    textTransform: 'none',
    borderRadius: 4,
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    '&:hover': {
      backgroundColor: '#0069d9',
      borderColor: '#0062cc',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#0062cc',
      borderColor: '#005cbf',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
  gradientBtn: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
  },
  label: {
    textTransform: 'capitalize',
  },
  inputUpload: {
    display: 'none',
  },
});

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

class CustomButtons extends PureComponent { // eslint-disable-line
  render() {
    const { classes } = this.props;
    const MyLink = React.forwardRef((props, ref) => <Link innerRef={ref} to="/app/forms/reduxform" {...props} />); // eslint-disable-line
    return (
      <Fragment>
        <Grid
          container
          alignItems="center"
          justify="flex-start"
          direction="row"
          spacing={2}
        >
          <Grid
            item
            md={6}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>Sizes</Typography>
            <Typography className={classes.divider}>
              Fancy larger or smaller buttons? Use the size or the mini property.
            </Typography>
            <div>
              <div>
                <Button size="small" className={classes.button}>
                  Small
                </Button>
                <Button size="medium" className={classes.button}>
                  Medium
                </Button>
                <Button size="large" className={classes.button}>
                  Large
                </Button>
              </div>
              <div>
                <Button variant="contained" size="small" color="primary" className={classes.button}>
                  Small
                </Button>
                <Button variant="contained" size="medium" color="primary" className={classes.button}>
                  Medium
                </Button>
                <Button variant="contained" size="large" color="primary" className={classes.button}>
                  Large
                </Button>
              </div>
              <div>
                <Button variant="outlined" size="small" color="primary" className={classes.button}>
                  Small
                </Button>
                <Button variant="outlined" size="medium" color="primary" className={classes.button}>
                  Medium
                </Button>
                <Button variant="outlined" size="large" color="primary" className={classes.button}>
                  Large
                </Button>
              </div>
              <div>
                <Fab size="small" color="secondary" aria-label="add" className={classes.button}>
                  <AddIcon />
                </Fab>
                <Fab color="secondary" aria-label="add" className={classes.button}>
                  <AddIcon />
                </Fab>
              </div>
            </div>
          </Grid>
          <Grid
            item
            md={6}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>Style</Typography>
            <Typography className={classes.divider}>
              Here is an example of how you can change the main color of a Button.
            </Typography>
            <div>
              <Button
                variant="contained"
                color="primary"
                className={classNames(classes.margin, classes.cssRoot)}
              >
                Custom CSS
              </Button>
              <MuiThemeProvider theme={theme}>
                <Button variant="contained" color="primary" className={classes.margin}>
                  MuiThemeProvider
                </Button>
              </MuiThemeProvider>
              <Button
                variant="contained"
                color="primary"
                disableRipple
                className={classNames(classes.margin, classes.bootstrapRoot)}
              >
                Bootstrap
              </Button>
              <Button
                classes={{
                  root: classNames(classes.gradientBtn, classes.margin), // class name, e.g. `classes-root-x`
                  label: classes.label, // class name, e.g. `classes-label-x`
                }}
              >
                Gradient Style
              </Button>
            </div>
          </Grid>
          <Grid
            item
            md={6}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>Linked Button</Typography>
            <Typography className={classes.divider}>
              One common use case is to use the button to trigger a navigation to a new page.
            </Typography>
            <div>
              <Button
                variant="contained"
                color="primary"
                className={classNames(classes.margin, classes.cssRoot)}
                component={LinkBtn}
                to="/app/forms/date-time-picker"
              >
                Go To Date Time Picker
              </Button>
              <Button color="secondary" variant="contained" component={MyLink}> Go To Redux Form </Button>
            </div>
          </Grid>
          <Grid
            item
            md={6}
            className={classes.demo}
          >
            <Typography variant="button" className={classes.divider}>Upload Button</Typography>
            <Typography className={classes.divider}>
              This a sample to trigger input files from button
            </Typography>
            <div>
              <input
                accept="image/*"
                className={classes.inputUpload}
                id="raised-button-file"
                multiple
                type="file"
              />
              { /* eslint-disable-next-line */ }
              <label htmlFor="raised-button-file">
                <Button variant="contained" component="span" id="raised-button-file" className={classes.button}>
                  Upload
                </Button>
              </label>
              <input accept="image/*" className={classes.inputUpload} id="icon-button-file" type="file" />
              { /* eslint-disable-next-line */ }
              <label htmlFor="icon-button-file">
                <IconButton color="primary" id="uploadBtnIcon" className={classes.button} component="span">
                  <FileUpload />
                </IconButton>
              </label>
            </div>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

CustomButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomButtons);
