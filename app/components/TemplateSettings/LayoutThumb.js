import React from 'react';
import Radio from '@material-ui/core/Radio';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './settings-jss';

const LayoutThumbs = props => {
  const {
    classes,
    handleChange,
    selectedLayout,
    value,
    name,
    preview
  } = props;
  return (
    <div className={classNames(classes.thumb, selectedLayout === value ? classes.selectedTheme : '')}>
      <Radio
        checked={selectedLayout === value}
        value={value}
        onChange={handleChange}
      />
      <div className={classes.appPreview}>
        {preview}
        {name}
      </div>
    </div>
  );
};

LayoutThumbs.propTypes = {
  value: PropTypes.string.isRequired,
  selectedLayout: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  preview: PropTypes.node.isRequired,
};

export default withStyles(styles)(LayoutThumbs);
