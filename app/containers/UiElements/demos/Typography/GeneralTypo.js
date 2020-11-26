import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Type from 'dan-styles/Typography.scss';

const styles = theme => ({
  divider: {
    margin: `${theme.spacing(3)}px 0`,
  },
  bg: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(4),
    backgroundImage: `linear-gradient(-45deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 33%, ${theme.palette.secondary.dark} 100%);`,
    textAlign: 'center',
    borderRadius: theme.rounded.small,
    '& h3': {
      color: theme.palette.secondary.light
    }
  },
  lineBackground: {
    width: '100%',
    maxWidth: 500,
  }
});

class GeneralTypo extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.bg}>
          <Typography variant="h3" component="h3">
            Open Sans
          </Typography>
        </div>
        <div className={classes.lineBackground}>
          <Typography variant="h4" gutterBottom>
            Lorem ipsum dolor
            <span className={Type.bold}>
              &nbsp;sit amet
            </span>
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Duis tristique metus magna, lobortis aliquam risus euismod sit amet.
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Nullam in
            <span className={Type.bold}> tortor </span>
            <span className={Type.italic}> ligula </span>
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant="h5" gutterBottom>
            <span className={Type.bolder}>
              Bolder
            </span>
            &nbsp;
            <span className={Type.bold}>
              Bold
            </span>
            &nbsp;
            <span className={Type.medium}>
              Semi Bold
            </span>
            &nbsp;
            <br />
            <span className={Type.regular}>
              Regular
            </span>
            &nbsp;
            <span className={Type.light}>
              Light
            </span>
            &nbsp;
          </Typography>
          <Typography gutterBottom>
            Duis tristique metus magna, lobortis aliquam risus euismod sit amet. Suspendisse porttitor velit nisl, feugiat tincidunt nisl mattis ut. Nulla lobortis nunc vitae nisi semper semper.
            <br />
            Nulla eget lobortis lacus. Aliquam venenatis magna et odio lobortis maximus. Nullam in tortor ligula. Proin maximus risus nunc, eu aliquam nibh tempus a. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant="h4" className={classNames(Type.light, Type.uppercase)} gutterBottom>
            Vestibulum nec mi
            <span className={Type.bolder}>
               suscipit
            </span>
          </Typography>
          <Typography variant="body2" className={Type.lowercase} gutterBottom>
            <span className={Type.bolder}>
              Bolder
            </span>
            &nbsp;
            <span className={Type.bold}>
              Bold
            </span>
            &nbsp;
            <span className={Type.medium}>
              Semi Bold
            </span>
            &nbsp;
            <span className={Type.regular}>
              Regular
            </span>
            &nbsp;
            <span className={Type.light}>
              Light
            </span>
            &nbsp;
          </Typography>
          <Typography gutterBottom className={Type.uppercase}>
            Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula, eget suscipit orci. Suspendisse potenti.
            <br />
            Curabitur egestas consequat lorem, vel fermentum augue porta id. Aliquam lobortis magna neque, gravida consequat velit venenatis at. Duis sed augue leo. Phasellus ante massa, aliquam non ante at, suscipit ornare ipsum. Quisque a consequat ante, at volutpat enim.
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant="h6" className={Type.light} gutterBottom>
            <span className={Type.bold}>
              Numbers
            </span>
             looks great! 1234
            <span className={classNames(Type.bold, Type.italic, Type.underline)}>
              56
            </span>
            7890
          </Typography>
          <Typography variant="h6" className={Type.regular} gutterBottom>
            Let your Creativity Flow&nbsp;
            <span className={Type.bold}>
              123
              <sup>
                $
              </sup>
            </span>
          </Typography>
          <Typography variant="h6" className={Type.Bold} gutterBottom>
            Numerics&nbsp;
            <span className={Type.light}>
              123
              <sup className={Type.italic}>
                00
              </sup>
            </span>
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant="body2" gutterBottom>
            Body 2
          </Typography>
          <Typography variant="body2" gutterBottom align="right">
            Body 1
          </Typography>
          <Typography variant="caption" gutterBottom align="center">
            Caption
          </Typography>
          <Typography gutterBottom noWrap>
            {`
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            `}
          </Typography>
          <Typography variant="button" gutterBottom>
            Button
          </Typography>
        </div>
      </div>
    );
  }
}

GeneralTypo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GeneralTypo);
