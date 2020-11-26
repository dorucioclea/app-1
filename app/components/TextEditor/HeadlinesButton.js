import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import HeadlinesPicker from './HeadlinesPicker';
import styles from './editorStyles-jss';

class HeadlinesButton extends Component {
  // When using a click event inside overridden content, mouse down
  // events needs to be prevented so the focus stays in the editor
  // and the toolbar remains visible  onMouseDown = (event) => event.preventDefault()
  onMouseDown = (event) => event.preventDefault()

  onClick = () => {
    // A button can call `onOverrideContent` to replace the content
    // of the toolbar. This can be useful for displaying sub
    // menus or requesting additional information from the user.
    const { onOverrideContent } = this.props;
    onOverrideContent(HeadlinesPicker);
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        { /* eslint-disable-next-line */ }
        <div onMouseDown={this.onMouseDown} className={classes.headlineButtonWrapper}>
          <button type="button" onClick={this.onClick} className={classes.headlineButton}>
            H
          </button>
        </div>
      </Fragment>
    );
  }
}

HeadlinesButton.propTypes = {
  classes: PropTypes.object.isRequired,
  onOverrideContent: PropTypes.func.isRequired,
};

export default withStyles(styles)(HeadlinesButton);
