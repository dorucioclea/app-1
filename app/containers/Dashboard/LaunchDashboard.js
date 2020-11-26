import React, { useState } from 'react';
import PropTypes from 'prop-types';
import brand from 'dan-api/dummy/brand';
import { Helmet } from 'react-helmet';
import { withStyles } from '@material-ui/core/styles';
import { PapperBlock } from 'dan-components';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { useHistory } from 'react-router-dom';
import {InsetDivider} from '../../components/Divider';
import {
  TableWidget,
  FilesWidget,
} from 'dan-components';
import styles from './dashboard-jss';

import Web3 from 'web3';

//Connect to web3



// Temporarily hardcode the data
const data = [
  createData('CORE', 'cVault.Finance', 'https://cvault.finance', '13 Sep 2020', '20 Sep 2020', 300, 300, 0.1, 100, 'https://assets.coingecko.com/coins/images/12635/large/cvault.finance_logo.png?1601353499', '', 300, 300, 'Success', 'Completed'),
  createData('SALE', 'DxSale', 'https://dxsale.network', '19 Aug 2025', '26 Aug 2025', 0, 1000, 0.1, 10, 'https://dxsale.network/assets/media/DxSALE.svg', '', 0, 1000, 'Warning', 'Pending'),
  createData('PRIA', 'Pria', 'https://pria.eth.link/', '5 Oct 2020', '10 Oct 2020', 579, 1000, 1, 20, 'https://assets.coingecko.com/coins/images/12905/small/pria-200x.png?1603357286', '', 579, 1000, 'Info', 'In Governance'),
  createData('LINK', 'Chainlink', 'https://omg.network/', '18 Oct 2017', '20 Nov 2017', 4783, 5000, 1, 100, 'https://assets.coingecko.com/coins/images/877/small/chainlink-new-logo.png?1547034700', '', 4783, 5000, 'Success', 'Completed'),
  createData('CDAI', 'Compound Dai', '', '18 Oct 2017', '20 Nov 2017', 2000, 5000, 1, 100, 'https://assets.coingecko.com/coins/images/9281/small/cDAI.png?1576467585', '', 2000, 5000, 'Warning', 'Pending'),
  createData('OMG', 'OMG Network', 'https://omg.network/', '10 Dec 2020', '22 Dec 2020', 0, 50, 0.5, 1, 'https://omg.network/wp-content/uploads/2020/05/omg-token-1.png', '', 0, 50, 'Default', 'Failed'),
];

// Acquire data from blockchain and populate into cards
function createData(id, name, website, startDate, endDate, softCap, hardCap, minCont, maxCont, photo, type, currentStock, totalStock, status, statusMessage) {
  return {
    id,
    name,
    website,
    startDate,
    endDate,
    softCap,
    hardCap,
    minCont,
    maxCont,
    photo,
    type,
    currentStock,
    totalStock,
    status,
    statusMessage,
  };
}


class LaunchDahboard extends React.Component {
  state =
  {
    switchCardstoList: false,
    walletConnected: false,
    web3: null,
    walletAddress: null,
  };

  componentDidMount(){
    this.connectWeb3();
  }

  async connectWeb3(){
    var newWeb3 = null;
    var linkedAccount = null;
    if (window.ethereum){
      newWeb3 = new Web3(window.ethereum);
      window.ethereum.enable();
      this.setState({ web3: newWeb3 });
      linkedAccount = await newWeb3.eth.getAccounts();
      console.log("Linked account is " + linkedAccount);
      if (linkedAccount == null || linkedAccount == ''){
        console.log("Not connected properly: ", linkedAccount);
        return 0;
      }
      if (linkedAccount[0].substr(0,2) == '0x'){
        this.setState({ walletAddress: linkedAccount });
        this.setState({ walletConnected: true });
      }
    }
    else if (window.web3) {
      newWeb3 = new Web3(window.web3.currentProvider);
      window.ethereum.enable();
      newWeb3.eth.getAccounts(console.log);
      this.setState({ web3: newWeb3 });
      this.setState({ walletConnected: true });
    }
    else {
      console.log("This is an unsupported browser!");
    }
  }

  flipCardsToList() {
    const { switchCardstoList } = this.state;
    var myBool = switchCardstoList;
    if (myBool)
      this.setState({ switchCardstoList: false });
    else
      this.setState({ switchCardstoList: true });
  }
  

  render() {
    const title = brand.name + ' - LaunchPad';
    const description = brand.desc;

    const { switchCardstoList } = this.state;
    const { walletConnected } = this.state;
    const { classes, history } = this.props;
    const { walletAddress } = this.state;

    //Attempt web3 connection by default

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
        <PapperBlock whiteBg title="The first decentralized launchpad with governance" desc="" imgIcon={true} imgUrl={'https://dxsale.network/assets/media/dxLaunch.svg'}>
          <InsetDivider />
          <Grid container>
            
            <Grid item md={2} container direction="column" alignItems="center" justify="center">
              <Button size="small" color="primary" onClick={e => {
                      history.push('/app/pages/createsale');
                    }}>
                Start or Manage Sale
              </Button>
            </Grid>
            <Grid item md={8} container alignItems="center" justify="center">
                      
              {!walletConnected 
              ?
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => this.connectWeb3()}
                >
                  Connect Wallet to Start
                </Button>
              : 
                <Input
                  placeholder="Search coming soon!"
                  className={classes.input}
                  inputProps={{
                    'aria-label': 'Description',
                  }}
                  fullWidth
                  color='primary'
                  disabled={true}
                >
                </Input>
              }
            </Grid>
            <Grid item md={2} container direction="row" alignItems="center" justify="center">
              <IconButton className={classes.button} color='primary'>
                <i className="ion-ios-information-outline" />
              </IconButton>
              <IconButton disabled={true} className={classes.button} color='primary'>
                <i className="ion-levels" />
              </IconButton>
              <IconButton disabled={true} className={classes.button} onClick={() => this.flipCardsToList()} color='primary'>
                { !switchCardstoList ? <i className="ion-navicon" /> : <i className="ion-grid" />}
              </IconButton>
            </Grid>
          </Grid>
        </PapperBlock>
        { !switchCardstoList
        ?
        <div> 
          {walletConnected 
          ? 
            <div>
              <Divider className={classes.divider} />
              <FilesWidget web3 = {web3}/>
            </div>

          : null
          }

        </div>
        :
        <div>
          <Divider className={classes.divider} />
          <TableWidget />
        </div>
        }

      </div>
    );
  }
}

LaunchDahboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LaunchDahboard);
