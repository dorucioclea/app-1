import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { TreeTable } from 'dan-components';
import styles from 'dan-components/Tables/tableStyle-jss';
import openAction from '../actions/treeTbActions';
import data from './dataTreeTable.js';

const branch = 'treeTableArrow';

class TreeTableDemo extends Component {
  render() {
    const {
      arrowMore,
      treeOpen,
      classes,
      toggleTree
    } = this.props;
    return (
      <div className={classes.rootTable}>
        <TreeTable
          treeOpen={treeOpen}
          toggleTree={toggleTree}
          arrowMore={arrowMore}
          dataTable={data}
          branch={branch}
        />
      </div>
    );
  }
}

TreeTableDemo.propTypes = {
  classes: PropTypes.object.isRequired,
  treeOpen: PropTypes.object.isRequired,
  arrowMore: PropTypes.object.isRequired,
  toggleTree: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  force: state, // force state from reducer
  treeOpen: state.getIn([branch, 'treeOpen']),
  arrowMore: state.getIn([branch, 'arrowMore']),
});

const mapDispatchToProps = dispatch => ({
  toggleTree: bindActionCreators(openAction, dispatch)
});

const TreeTableDemoMapped = connect(
  mapStateToProps,
  mapDispatchToProps
)(TreeTableDemo);

export default withStyles(styles)(TreeTableDemoMapped);
