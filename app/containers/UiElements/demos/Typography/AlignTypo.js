import React from 'react';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Type from 'dan-styles/Typography.scss';
import Divider from '@material-ui/core/Divider';

const styles = theme => ({
  divider: {
    margin: `${theme.spacing(3)}px 0`,
  }
});

class AlignTypo extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="subtitle1" className={Type.textCenter} gutterBottom>
          Align center: Nullam in
          <span className={Type.bold}> tortor </span>
          <span className={Type.italic}> ligula </span>
        </Typography>
        <Divider className={classes.divider} />
        <Typography variant="h5" className={Type.textLeft} gutterBottom>
          Align Left
        </Typography>
        <Typography variant="h5" className={Type.textRight} gutterBottom>
          Align Right
        </Typography>
        <Divider className={classes.divider} />
        <Typography variant="h4" className={Type.medium} gutterBottom>Justify Align</Typography>
        <Typography gutterBottom className={Type.textJustify}>
          Vestibulum faucibus eget erat eget pretium. Donec commodo convallis ligula, eget suscipit orci. Suspendisse potenti.
          Nulla eget lobortis lacus. Aliquam venenatis magna et odio lobortis maximus. Nullam in tortor ligula. Proin maximus risus nunc, eu aliquam nibh tempus a. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </Typography>
      </div>
    );
  }
}

AlignTypo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlignTypo);
