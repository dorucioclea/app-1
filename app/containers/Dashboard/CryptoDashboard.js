import React from 'react';
import PropTypes from 'prop-types';
import brand from 'dan-api/dummy/brand';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import {
  CounterCryptoWidget,
  CryptoChartWidget,
  MarketPlaceWIdget,
  TradingFormWidget,
  LatestTransactionWidget,
  CryptoWalletWidget,
  TransferCryptoWidget,
  HistoryWidget,
  NewsListWidget,
} from 'dan-components';
import styles from './dashboard-jss';

function CryptoDahboard(props) {
  const title = brand.name + ' - Cryptocurrency Dashboard';
  const description = brand.desc;
  const { classes } = props;
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <CounterCryptoWidget />
      <Divider className={classes.divider} />
      <MarketPlaceWIdget />
      <Divider className={classes.divider} />
      <Grid container spacing={3} className={classes.root}>
        <Grid item md={6} xs={12}>
          <TradingFormWidget />
        </Grid>
        <Grid item md={6} xs={12}>
          <TransferCryptoWidget />
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <CryptoChartWidget />
      <Divider className={classes.divider} />
      <Grid container spacing={3} className={classes.root}>
        <Grid item md={6} xs={12}>
          <CryptoWalletWidget />
          <Divider className={classes.divider} />
          <HistoryWidget />
        </Grid>
        <Grid item md={6} xs={12}>
          <LatestTransactionWidget />
          <Divider className={classes.divider} />
          <NewsListWidget />
        </Grid>
      </Grid>
    </div>
  );
}

CryptoDahboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CryptoDahboard);
