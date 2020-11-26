import React, { Fragment } from 'react';
import { MaterialDropZone } from 'dan-components';

class UploadInputBtn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
    };
  }

  render() {
    const { files } = this.state;
    return (
      <Fragment>
        <div>
          <MaterialDropZone
            files={files}
            showPreviews
            maxSize={5000000}
            filesLimit={5}
            text="Drag and drop file(s) here or click button bellow"
            showButton
          />
        </div>
      </Fragment>
    );
  }
}

export default UploadInputBtn;
