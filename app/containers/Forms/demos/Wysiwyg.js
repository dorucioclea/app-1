import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { convertFromRaw, EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import draftToMarkdown from 'draftjs-to-markdown';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import 'dan-styles/vendors/react-draft-wysiwyg/react-draft-wysiwyg.css';
import styles from 'dan-components/Email/email-jss';

const content = {
  blocks: [{
    key: '637gr',
    text: 'Lorem ipsum dolor sit amet 😀',
    type: 'unstyled',
    depth: 0,
    inlineStyleRanges: [],
    entityRanges: [],
    data: {}
  }],
  entityMap: {}
};

class Wysiwyg extends PureComponent {
  constructor(props) {
    super(props);
    const contentBlock = convertFromRaw(content);
    if (contentBlock) {
      const editorState = EditorState.createWithContent(contentBlock);
      this.state = {
        editorState,
      };
    }
  }

  onEditorStateChange = editorState => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    const { classes } = this.props;
    return (
      <Fragment>
        <Grid
          container
          alignItems="flex-start"
          justify="space-around"
          direction="row"
          spacing={3}
        >
          <Grid item xs={12}>
            <Editor
              editorState={editorState}
              editorClassName={classes.textEditor}
              toolbarClassName={classes.toolbarEditor}
              onEditorStateChange={this.onEditorStateChange}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <Typography variant="button">JSON Result :</Typography>
            <textarea
              className={classes.textPreview}
              disabled
              value={JSON.stringify(editorState, null, 4)}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <Typography variant="button">HTML Result :</Typography>
            <textarea
              className={classes.textPreview}
              disabled
              value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
            />
          </Grid>
          <Grid item md={4} xs={12}>
            <Typography variant="button">Markdown Result :</Typography>
            <textarea
              className={classes.textPreview}
              disabled
              value={editorState && draftToMarkdown(convertToRaw(editorState.getCurrentContent()))}
            />
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

Wysiwyg.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Wysiwyg);
