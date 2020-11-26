import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';
import Input from '@material-ui/core/Input';
import ContentCopy from '@material-ui/icons/FileCopy';
import FormHelperText from '@material-ui/core/FormHelperText';
import Avatar from '@material-ui/core/Avatar';
import bitcoinLogo from 'dan-images/crypto/bitcoin.png';
import litecoinLogo from 'dan-images/crypto/litecoin.png';
import cardanoLogo from 'dan-images/crypto/cardano.png';
import styles from './widget-jss';
import PapperBlock from '../PapperBlock/PapperBlock';

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

function CryptoWalletWidget(props) {
  const [bitcoin] = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
  const [litecoin] = 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy';
  const [cardano] = 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz';

  const { classes } = props;
  return (
    <PapperBlock whiteBg noMargin title="My Wallet" icon="ios-archive-outline" desc="">
      <FormHelperText className={classes.walletLabel}>Bitcoin wallet address</FormHelperText>
      <FormControl fullWidth className={classes.formControlTrade}>
        <Input
          id="adornment-amount1"
          value={bitcoin}
          disabled
          startAdornment={(
            <InputAdornment position="start">
              <Avatar alt="bitcoin" src={bitcoinLogo} className={classNames(classes.avatar, classes.mc)} />
            </InputAdornment>
          )}
          endAdornment={(
            <InputAdornment position="end">
              <Tooltip title="copy">
                <IconButton>
                  <ContentCopy />
                </IconButton>
              </Tooltip>
            </InputAdornment>
          )}
        />
      </FormControl>
      <FormHelperText className={classes.walletLabel}>Litecoin wallet address</FormHelperText>
      <FormControl fullWidth className={classes.formControlTrade}>
        <Input
          id="adornment-amount2"
          value={litecoin}
          disabled
          startAdornment={(
            <InputAdornment position="start">
              <Avatar alt="bitcoin" src={litecoinLogo} className={classNames(classes.avatar, classes.mc)} />
            </InputAdornment>
          )}
          endAdornment={(
            <InputAdornment position="end">
              <Tooltip title="copy">
                <IconButton>
                  <ContentCopy />
                </IconButton>
              </Tooltip>
            </InputAdornment>
          )}
        />
      </FormControl>
      <FormHelperText className={classes.walletLabel}>Cardano wallet address</FormHelperText>
      <FormControl fullWidth className={classes.formControlTrade}>
        <Input
          id="adornment-amount3"
          value={cardano}
          disabled
          startAdornment={(
            <InputAdornment position="start">
              <Avatar alt="bitcoin" src={cardanoLogo} className={classNames(classes.avatar, classes.mc)} />
            </InputAdornment>
          )}
          endAdornment={(
            <InputAdornment position="end">
              <Tooltip title="copy">
                <IconButton>
                  <ContentCopy />
                </IconButton>
              </Tooltip>
            </InputAdornment>
          )}
        />
      </FormControl>
      <Divider className={classes.divider} />
      <div className={classes.textRight}>
        <Button color="secondary" variant="outlined" className={classes.button}>
          View All
        </Button>
        <Button color="secondary" variant="contained" className={classes.button}>
          Settings
        </Button>
      </div>
    </PapperBlock>
  );
}

CryptoWalletWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CryptoWalletWidget);
