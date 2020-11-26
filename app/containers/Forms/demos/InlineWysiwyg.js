import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Editor, { createEditorStateWithText } from 'draft-js-plugins-editor';
import { withStyles } from '@material-ui/core/styles';
import createInlineToolbarPlugin, { Separator } from 'draft-js-inline-toolbar-plugin';
import { HeadlinesButton } from 'dan-components';
import {
  ItalicButton,
  BoldButton,
  UnderlineButton,
  CodeButton,
  UnorderedListButton,
  OrderedListButton,
  BlockquoteButton,
  CodeBlockButton,
} from 'draft-js-buttons/lib';
import 'draft-js-inline-toolbar-plugin/lib/plugin.css';
import styles from 'dan-components/TextEditor/editorStyles-jss';

const inlineToolbarPlugin = createInlineToolbarPlugin();
const { InlineToolbar } = inlineToolbarPlugin;
const plugins = [inlineToolbarPlugin];
const text = 'In this editor a toolbar shows up once you select part of the text …';

class InlineWysiwyg extends Component {
  state = {
    editorState: createEditorStateWithText(text),
  };

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  focus = () => {
    this.editor.focus();
  };

  render() {
    const { classes } = this.props;
    const { editorState } = this.state;
    return (
      <Fragment>
        { /* eslint-disable-next-line */ }
        <div className={classes.editor} onClick={this.focus}>
          <Editor
            editorState={editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref={(element) => { this.editor = element; }}
          />
          <InlineToolbar>
            {
              // may be use React.Fragment instead of div to improve perfomance after React 16
              (externalProps) => (
                <div className={classes.toolbar}>
                  <BoldButton {...externalProps} />
                  <ItalicButton {...externalProps} />
                  <UnderlineButton {...externalProps} />
                  <CodeButton {...externalProps} />
                  <Separator {...externalProps} />
                  <HeadlinesButton {...externalProps} />
                  <UnorderedListButton {...externalProps} />
                  <OrderedListButton {...externalProps} />
                  <BlockquoteButton {...externalProps} />
                  <CodeBlockButton {...externalProps} />
                </div>
              )
            }
          </InlineToolbar>
        </div>
      </Fragment>
    );
  }
}

InlineWysiwyg.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InlineWysiwyg);
