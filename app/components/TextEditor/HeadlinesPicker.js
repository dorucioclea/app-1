import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  HeadlineOneButton,
  HeadlineTwoButton,
  HeadlineThreeButton,
} from 'draft-js-buttons';

class HeadlinesPicker extends Component {
  componentDidMount() {
    setTimeout(() => { window.addEventListener('click', this.onWindowClick); });
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.onWindowClick);
  }

  onWindowClick = () => {
    // Call `onOverrideContent` again with `undefined`
    // so the toolbar can show its regular content again.
    const { onOverrideContent } = this.props;
    onOverrideContent(undefined);
  }

  render() {
    const buttons = [HeadlineOneButton, HeadlineTwoButton, HeadlineThreeButton];
    return (
      <div>
        {buttons.map((Button, i) => // eslint-disable-next-line
          <Button key={i} {...this.props} />
        )}
      </div>
    );
  }
}

HeadlinesPicker.propTypes = {
  onOverrideContent: PropTypes.func.isRequired,
};

export default HeadlinesPicker;
