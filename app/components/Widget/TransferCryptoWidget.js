import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import cardanoLogo from 'dan-images/crypto/cardano.png';
import styles from './widget-jss';
import PapperBlock from '../PapperBlock/PapperBlock';

function TransferCryptoWidget(props) {
  const [address, setAddress] = useState('fcno485oreifj90dfsfk3012ikreopjdfs9fj');
  const [amount, setAmount] = useState(1);
  const [coin, setCoin] = useState('ADA');

  const handleChangeAmount = event => {
    setAmount(event.target.value);
  };

  const handleChangeCoin = event => {
    setCoin(event.target.value);
  };

  const handleChangeAddress = event => {
    setAddress(event.target.value);
  };

  const { classes } = props;
  return (
    <PapperBlock whiteBg noMargin title="Transfer Coin" icon="ios-arrow-dropright" desc="">
      <Grid container spacing={2}>
        <Grid item sm={6} xs={6}>
          <FormControl className={classes.formControlTrade}>
            <InputLabel htmlFor="coin-simple">Coin</InputLabel>
            <Select
              value={coin}
              onChange={handleChangeCoin}
              inputProps={{
                name: 'coin',
                id: 'coin-simple',
              }}
            >
              <MenuItem value="BNB">BNB (Binance)</MenuItem>
              <MenuItem value="BTC">BTC (Bitcoin)</MenuItem>
              <MenuItem value="BCN">BCN (Bytecoin)</MenuItem>
              <MenuItem value="ADA">ADA (Cardano)</MenuItem>
              <MenuItem value="DCR">DCR (Decred)</MenuItem>
              <MenuItem value="ICX">ICX (Iconic)</MenuItem>
              <MenuItem value="IOTA">IOTA (Iota)</MenuItem>
              <MenuItem value="LTC">LTC (Litecoin)</MenuItem>
              <MenuItem value="XMR">XMR (Monero)</MenuItem>
              <MenuItem value="NANO">NANO (Nano Coin)</MenuItem>
              <MenuItem value="NEM">NEM (Nem)</MenuItem>
              <MenuItem value="PPT">PPT (Papulous)</MenuItem>
              <MenuItem value="XRP">XRP (Ripple)</MenuItem>
              <MenuItem value="XLM">XLM (Stellar Lumens)</MenuItem>
              <MenuItem value="STRAT">STRAT (Stratis)</MenuItem>
              <MenuItem value="TRX">TRX (Tron)</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item sm={6} xs={6}>
          <FormControl fullWidth className={classes.formControlTrade}>
            <InputLabel htmlFor="adornment-amount6">Amount</InputLabel>
            <Input
              id="adornment-amount6"
              value={amount}
              onChange={handleChangeAmount}
              endAdornment={<InputAdornment position="end">{coin}</InputAdornment>}
            />
          </FormControl>
        </Grid>
      </Grid>
      <FormHelperText className={classes.walletLabel}>Cardano wallet address</FormHelperText>
      <FormControl fullWidth className={classes.formControlTrade}>
        <Input
          id="adornment-address"
          onChange={handleChangeAddress}
          value={address}
          startAdornment={(
            <InputAdornment position="start">
              <Avatar alt="bitcoin" src={cardanoLogo} className={classNames(classes.avatar, classes.mc)} />
            </InputAdornment>
          )}
        />
      </FormControl>
      <Divider className={classes.divider} />
      <div className={classes.textRight}>
        <Button color="secondary" variant="contained" className={classes.button}>
          Transfer Now
        </Button>
      </div>
    </PapperBlock>
  );
}

TransferCryptoWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TransferCryptoWidget);
