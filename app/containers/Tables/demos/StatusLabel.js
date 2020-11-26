import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Chip from '@material-ui/core/Chip';
import LinearProgress from '@material-ui/core/LinearProgress';
import tableStyles from 'dan-styles/Table.scss';
import styles from 'dan-components/Tables/tableStyle-jss';
import messageStyles from 'dan-styles/Messages.scss';
import progressStyles from 'dan-styles/Progress.scss';

let id = 0;
function createData(name, progress, status) {
  id += 1;
  return {
    id,
    name,
    progress,
    status,
  };
}

const data = [
  createData('Frozen yoghurt', 24, 'Error'),
  createData('Ice cream sandwich', 37, 'Warning'),
  createData('Eclair', 24, 'Info'),
  createData('Cupcake', 67, 'Default'),
  createData('Gingerbread', 89, 'Success'),
];

function StatusLabel(props) {
  const { classes } = props;
  const getStatus = status => {
    switch (status) {
      case 'Error': return messageStyles.bgError;
      case 'Warning': return messageStyles.bgWarning;
      case 'Info': return messageStyles.bgInfo;
      case 'Success': return messageStyles.bgSuccess;
      default: return messageStyles.bgDefault;
    }
  };
  const getProgress = status => {
    switch (status) {
      case 'Error': return progressStyles.bgError;
      case 'Warning': return progressStyles.bgWarning;
      case 'Info': return progressStyles.bgInfo;
      case 'Success': return progressStyles.bgSuccess;
      default: return progressStyles.bgDefault;
    }
  };
  return (
    <div className={classes.rootTable}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.title}>
          <Typography variant="h6">Nutrition</Typography>
        </div>
      </Toolbar>
      <Table className={classNames(classes.table, tableStyles.stripped)}>
        <TableHead>
          <TableRow>
            <TableCell padding="default">Dessert (100g serving)</TableCell>
            <TableCell>Progress</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => ([
            <TableRow key={n.id}>
              <TableCell padding="default">{n.name}</TableCell>
              <TableCell align="right">
                <LinearProgress variant="determinate" className={getProgress(n.status)} value={n.progress} />
              </TableCell>
              <TableCell>
                <Chip label={n.status} className={classNames(classes.tableChip, getStatus(n.status))} />
              </TableCell>
            </TableRow>
          ]))}
        </TableBody>
      </Table>
    </div>
  );
}

StatusLabel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StatusLabel);
