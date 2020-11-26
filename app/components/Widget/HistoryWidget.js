import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styles from './widget-jss';
import PapperBlock from '../PapperBlock/PapperBlock';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

let id = 0;
function createData(time, market, price, total, get, status) {
  id += 1;
  return {
    id,
    time,
    market,
    price,
    total,
    get,
    status,
  };
}

const data = [
  createData('12 Sep 2018', 'BTC', 7324, 300, 0.053, 'Pending'),
  createData('1 Sep 2018', 'LTC', 1.2, 10, 12, 'Cancelled'),
  createData('27 Aug 2018', 'XLM', 0.78, 15, 14.3, 'Complete'),
  createData('11 Aug 201', 'ADA', 29.5, 12, 1.56, 'Pending'),
  createData('11 Aug 2018', 'BTC', 7124, 12, 1.77, 'Complete'),
];

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

function HistoryWidget(props) {
  const [value, setValue] = useState(0);

  const handleChangeTab = (event, val) => {
    setValue(val);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  const { classes } = props;
  return (
    <PapperBlock whiteBg noMargin title="Trade History" icon="ios-swap" desc="">
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChangeTab}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Buy" />
          <Tab label="Sell" />
        </Tabs>
      </AppBar>
      <SwipeableViews
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabContainer dir="ltr">
          <div className={classes.tabContainer}>
            <div className={classes.rootTable}>
              <Table padding="none" className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell padding="default">Date</TableCell>
                    <TableCell padding="default">Coin</TableCell>
                    <TableCell align="right" padding="default">Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map(n => ([
                    <TableRow key={n.id}>
                      <TableCell padding="default">
                        {n.time}
                      </TableCell>
                      <TableCell padding="default">
                        <Typography variant="subtitle1">
                          {n.market}
                        </Typography>
                        <Typography variant="caption">
                          $&nbsp;
                          {n.price}
                        </Typography>
                      </TableCell>
                      <TableCell align="right" padding="default">
                        <Typography variant="subtitle1">
                          $&nbsp;
                          {n.total}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ]))}
                </TableBody>
              </Table>
            </div>
          </div>
        </TabContainer>
        <TabContainer dir="ltr">
          <div className={classes.tabContainer}>
            <div className={classes.rootTable}>
              <Table padding="none" className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell padding="default">Date</TableCell>
                    <TableCell padding="default">Coin</TableCell>
                    <TableCell align="right" padding="default">Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map(n => ([
                    <TableRow key={n.id}>
                      <TableCell padding="default">
                        {n.time}
                      </TableCell>
                      <TableCell padding="default">
                        <Typography variant="subtitle1">
                          {n.market}
                        </Typography>
                        <Typography variant="caption">
                          $&nbsp;
                          {n.price}
                        </Typography>
                      </TableCell>
                      <TableCell align="right" padding="default">
                        <Typography variant="subtitle1">
                          $&nbsp;
                          {n.total}
                        </Typography>
                      </TableCell>
                    </TableRow>
                  ]))}
                </TableBody>
              </Table>
            </div>
          </div>
        </TabContainer>
      </SwipeableViews>
    </PapperBlock>
  );
}

HistoryWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HistoryWidget);
