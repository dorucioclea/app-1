import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { PapperBlock } from 'dan-components';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import styles from 'dan-components/Tables/tableStyle-jss';
import LinearProgress from '@material-ui/core/LinearProgress';
import progressStyles from 'dan-styles/Progress.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Web3 from 'web3';

let id = 0;
function createData(name, value) {
  id += 1;
  return {
    id,
    name,
    value
  };
}

const data = [
  createData('Total Supply', 10000),
  createData('Soft Cap', 10 + ' ETH'),
  createData('Hard Cap', 100 + ' ETH'),
  createData('Tokens For Presale', 5000),
  createData('Presale Price per Token', 0.1 + ' ETH'),
  createData('Minimum Contribution', 0.1 + ' ETH'),
  createData('Maximum Contribution', 10 + ' ETH'),
  createData('Presale Start Time', 'November 15, 2020'),
  createData('Presale End Time', 'November 16, 2020'),
  createData('Uniswap Listing Price per Token', 0.125 + ' ETH'),
  createData('Uniswap Liquidity %', 50),
  createData('Liquidity Unlock Date', 'December 1, 2021'),
  createData('Funds locked for Governance', 20),
  createData('Governance start date', 'February 10, 2021'),
  createData('Team Fund', 500),
  createData('Team funds release date', 'January 20, 2021'),
  createData('Marketing Fund', 500),
  createData('Marketing funds release date', 'December 25, 2020')
];

class Presale extends React.Component {

  state = {
    activeStep: 0,
    teamCounter: 0,
    currentValue: '',
    tokenName: '',
    tokenSymbol: '',
    reservedAmounts: '',
    reservedAddresses: '',
    presaleRate: '',
    presaleCaps: '',
    presaleMinMax: '',
    uniswapAmount: '',
    uniswapRate: '',
    infoLink: '',
    govRate: '',
    presaleStartTime: new Date(),
    presaleEndTime: new Date(),
    govStartTime: new Date(),
    govEndTime: new Date(),
    liqLockTime: new Date(),
    freezeTimes: [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date()],
    web3connect: null,
    walletConnected: false,
    walletAddress: '',
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
      this.setState({ web3connect: newWeb3 });
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
      this.setState({ web3connect: newWeb3 });
      this.setState({ walletConnected: true });
    }
    else {
      console.log("This is an unsupported browser!");
    }
  }

  render() {
    const { classes } = this.props;
    const title = brand.name + ' - Browse Single Presale';
    const description = brand.desc;
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
        
        <PapperBlock whiteBg noMargin title='CORE' imgIcon={true} desc='cvault.finance' imgUrl='https://assets.coingecko.com/coins/images/12635/large/cvault.finance_logo.png?1601353499'>
        <div>CORE is a non-inflationary cryptocurrency that is designed to execute profit-generating strategies autonomously with a completely decentralized approach. In existing autonomous strategy-executing platforms a team or single developer is solely responsible for determining how locked funds are used to generate ROI. This is hazardous to the health of the fund as it grows, as it creates flawed incentives, and invites mistakes to be made. CORE does away with this dynamic and instead opts for one with decentralized governance.</div>
          <br/><br/>
          <Grid container>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}></Grid>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
              <Typography align="center">50/100 ETH Raised</Typography>
              <LinearProgress variant="determinate" className={progressStyles.bgInfo} value={50} />
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}></Grid>
          </Grid>
          <br/><br/>
          <Grid container>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}></Grid>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
              <Typography align="center">Participate in the presale now!</Typography>
              <br/>
              <Typography align="center">1 ETH = 500 CORE</Typography>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}></Grid>
          </Grid>
          <br/>
          <Grid container>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}></Grid>
            <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
              <TextField
                    placeholder='Amount ETH'
                    id="ethInput"
                    fullWidth
                    color='primary'
                    style={{margin: '2px', marginLeft: '2px', marginRight: '2px'}}
                  />
            </Grid>
            <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
              <TextField
                    placeholder='Amount Token'
                    id="tokenInput"
                    fullWidth
                    color='primary'
                    style={{margin: '2px', marginLeft: '2px', marginRight: '2px'}}
                  />
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}></Grid>
          </Grid>
          <Grid container alignItems='center' justify='center' direction='column'>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}></Grid>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
            <Button
              //onClick={this.handleBack}
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Contribute
            </Button>
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}></Grid>
          </Grid>
          <div>
            <table>
              {data.map(n => ([
                <tr key={n.id}>
                  <td>{n.name}</td>
                  <td align="right">{n.value}</td>
                </tr>
              ]))}
            </table>
          </div>

        </PapperBlock>
      </div>
    );
  }
}

Presale.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Presale);
