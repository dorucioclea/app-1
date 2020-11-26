import React from 'react';
import Radio from '@material-ui/core/Radio';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import themePalette from 'dan-api/palette/themePalette';
import styles from './settings-jss';

const ThemeThumb = props => {
  const {
    classes,
    theme,
    value,
    selectedValue,
    handleChange,
    name
  } = props;
  return (
    <div className={classNames(classes.thumb, theme === value ? classes.selectedTheme : '')}>
      <Radio
        checked={selectedValue === value}
        value={value}
        onChange={handleChange}
      />
      <Tooltip title={name} placement="top">
        <div className={classes.appPreview}>
          <div className={classes.decoration} style={{ backgroundImage: `linear-gradient(-45deg, ${themePalette[value].palette.primary.main} 0%, ${themePalette[value].palette.primary.main} 33%, ${themePalette[value].palette.secondary.main} 100%)` }} />
          <ul>
            <li style={{ backgroundColor: themePalette[value].palette.primary.main }} />
            <li style={{ backgroundColor: themePalette[value].palette.secondary.main }} />
          </ul>
        </div>
      </Tooltip>
    </div>
  );
};

ThemeThumb.propTypes = {
  theme: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  selectedValue: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

// Redux
const reducer = 'ui';
const mapStateToProps = state => ({
  theme: state.getIn([reducer, 'theme']),
});

const ThumbsMapped = connect(
  mapStateToProps,
)(ThemeThumb);

export default withStyles(styles)(ThumbsMapped);
