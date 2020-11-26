import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';
import classNames from 'classnames';
import messageStyles from 'dan-styles/Messages.scss';
import Divider from '@material-ui/core/Divider';
import styles from './widget-jss';
import PapperBlock from '../PapperBlock/PapperBlock';
import { useHistory } from 'react-router-dom';
import Web3 from 'web3';

function createData(saleNo, id, name, website, startDate, endDate, softCap, hardCap, minCont, maxCont, photo, type, currentStock, totalStock, status, statusMessage) {
  return {
    saleNo,
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

const data = [
  createData(0, 'CORE', 'cVault.Finance', 'https://cvault.finance', '13 Sep 2020', '20 Sep 2020', 300, 300, 0.1, 100, 'https://assets.coingecko.com/coins/images/12635/large/cvault.finance_logo.png?1601353499', '', 300, 300, 'Success', 'Completed'),
  createData(1, 'SALE', 'DxSale', 'https://dxsale.network', '19 Aug 2025', '26 Aug 2025', 0, 1000, 0.1, 10, 'https://dxsale.network/assets/media/DxSALE.svg', '', 0, 1000, 'Warning', 'Pending'),
  createData(2, 'PRIA', 'Pria', 'https://pria.eth.link/', '5 Oct 2020', '10 Oct 2020', 579, 1000, 1, 20, 'https://assets.coingecko.com/coins/images/12905/small/pria-200x.png?1603357286', '', 579, 1000, 'Info', 'Governance'),
  createData(3, 'LINK', 'Chainlink', 'https://omg.network/', '18 Oct 2017', '20 Nov 2017', 4783, 5000, 1, 100, 'https://assets.coingecko.com/coins/images/877/small/chainlink-new-logo.png?1547034700', '', 4783, 5000, 'Success', 'Completed'),
  createData(4, 'CDAI', 'Compound Dai', '', '18 Oct 2017', '20 Nov 2017', 2000, 5000, 1, 100, 'https://assets.coingecko.com/coins/images/9281/small/cDAI.png?1576467585', '', 2000, 5000, 'Warning', 'Pending'),
  createData(5, 'OMG', 'OMG Network', 'https://omg.network/', '10 Dec 2020', '22 Dec 2020', 0, 50, 0.5, 1, 'https://omg.network/wp-content/uploads/2020/05/omg-token-1.png', '', 0, 50, 'Default', 'Failed'),
];

function FilesWidget(props) {
  const { classes, web3 } = props;
  const history = useHistory();

  const getStatus = status => {
    switch (status) {
      case 'Error': return messageStyles.bgError;
      case 'Warning': return messageStyles.bgWarning;
      case 'Info': return messageStyles.bgInfo;
      case 'Success': return messageStyles.bgSuccess;
      default: return messageStyles.bgDefault;
    }
  };
  return (
    <div>
      <Grid container spacing={3}>
          {data.map(n => ([
          <Grid item xl={3} lg={3} md={4} sm={12} xs={12} key={n}>
            <PapperBlock whiteBg noMargin title={n.id} imgIcon={true} desc={n.name} imgUrl={n.photo}>
                <div id = {'mainCard' + n.saleNo}
                  onMouseEnter={e => {
                    var myID = 'cardToChange' + n.saleNo;
                    var mainID = 'mainCard' + n.saleNo;
                    document.getElementById(myID).innerHTML = " Click for Details ";
                    document.getElementById(myID).style = 'Width: 100px'
                    document.getElementById(mainID).style = 'opacity: 0.6';
                  }}
                  onMouseLeave={e => {
                    var myID = 'cardToChange' + n.saleNo;
                    var mainID = 'mainCard' + n.saleNo;
                    document.getElementById(myID).innerText = n.statusMessage;
                    document.getElementById(mainID).style = 'background-color: primary';
                  }}
                  onClick={e => {
                    history.push('/app/pages/presale?saleID='+n.saleNo);
                  }}
              >
                <div  className={classes.secondaryWrap}>
                  <div className={classes.centerItem} id={'eachChip' + n.presaleNo}>
                    <Chip id={"cardToChange" + n.saleNo} style={{width:"95px"}} label={n.statusMessage} className={classNames(classes.chip, getStatus(n.status))} > {n.statusMessage} </Chip>
                    <CircularProgress variant="static" className={classes.progressCircle} size={140} thickness={4} value={(n.currentStock/n.totalStock)*100} />
                  </div>
                  <ul className={classes.storageInfo}>
                    <li>
                      <Typography variant="caption" color="primary" gutterBottom>Raised: <span>{n.currentStock}/{n.totalStock}</span></Typography>
                      <br/><Typography variant="caption" gutterBottom>Start: {n.startDate}</Typography>
                      <br/><Typography variant="caption" gutterBottom>End: {n.endDate}</Typography>
                      <br/><Typography variant="caption" gutterBottom>Soft Cap: {n.softCap} ETH</Typography>
                      <br/><Typography variant="caption" gutterBottom>Min: {n.minCont} / Max: {n.maxCont} ETH</Typography>
                    </li>
                  </ul>
                </div>
              </div>
              <Divider className={classes.divider} />
              <Grid container spacing={3} justify="center">
                <Grid item md={2} sm={2} xs={2}>
                  <a href="https://dxsale.network" target="_blank"><i className="ion-android-globe" /></a>
                </Grid>
                <Grid item md={2} sm={2} xs={2}>
                  <a href="https://t.me/dxsale" target="_blank"><i className="ion-social-github" /></a>
                </Grid>
                <Grid item md={2} sm={2} xs={2}>
                  <a href="https://t.me/dxsale" target="_blank"><i className="ion-social-twitter" /></a>
                </Grid>
                <Grid item md={2} sm={2} xs={2}>
                  <a href="https://t.me/dxsale" target="_blank"><i className="ion-social-reddit" /></a>
                </Grid>
                <Grid item md={2} sm={2} xs={2}>
                  <a href="https://t.me/dxsale" target="_blank"><i className="ion-paper-airplane" /></a>
                </Grid>
              </Grid>
            </PapperBlock>
            
          </Grid>
          ]))}
      </Grid>
    </div>
  );

}

FilesWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FilesWidget);
