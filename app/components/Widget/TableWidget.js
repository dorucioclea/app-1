import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Chip from '@material-ui/core/Chip';
import LinearProgress from '@material-ui/core/LinearProgress';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import messageStyles from 'dan-styles/Messages.scss';
import progressStyles from 'dan-styles/Progress.scss';
import imgApi from 'dan-api/images/photos';
import avatarApi from 'dan-api/images/avatars';
import PapperBlock from '../PapperBlock/PapperBlock';
import styles from './widget-jss';

function createData(id, name, website, startDate, endDate, softCap, hardCap, photo, type, currentStock, totalStock, status, statusMessage) {
  return {
    id,
    name,
    website,
    startDate,
    endDate,
    softCap,
    hardCap,
    photo,
    type,
    currentStock,
    totalStock,
    status,
    statusMessage,
  };
}

const data = [
  createData('CORE', 'cVault.Finance', 'https://cvault.finance', '13 Sep 2020', '20 Sep 2020', 300, 300, 'https://assets.coingecko.com/coins/images/12635/large/cvault.finance_logo.png?1601353499', '', 300, 300, 'Success', 'Completed'),
  createData('SALE', 'DxSale', 'https://dxsale.network', '19 Aug 2020', '26 Aug 2020', 100, 1000, 'https://dxsale.network/assets/media/DxSALE.svg', '', 484, 1000, 'Success', 'Completed'),
  createData('BAT', 'Basic Attention Token', 'https://basicattentiontoken.org/', '5 Oct 2020', '10 Oct 2020', 500, 1000, 'https://media.cointral.com/wp-content/uploads/2019/11/08013926/buy-basic-attention-token.png', '', 579, 1000, 'Info', 'In Governance'),
  createData('OMG', 'OMG Network', 'https://omg.network/', '10 Dec 2020', '22 Dec 2020', 50, 50, 'https://omg.network/wp-content/uploads/2020/05/omg-token-1.png', '', 0, 50, 'Warning', 'Pending'),
  createData('JKL345', 'Man Shoes', 'https://cvault.finance', '12 Dec 2020', '25 Dec 2020', 200, 500, imgApi[22], '', 0, 500, 'Default', 'Failed'),
  
];

function TableWidget(props) {
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
    <PapperBlock noTop={true} noMargin whiteBg title=''  desc=''>
      <div className={classes.root}>
        <Table className={classNames(classes.tableLong, classes.stripped)} padding="default">
          <TableHead>
            <TableRow>
              <TableCell padding="default">Presale</TableCell>
              <TableCell>Start Date / End Date</TableCell>
              <TableCell>Hard Cap / Soft Cap</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Progress</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => ([
              <TableRow key={n.id}>
                <TableCell padding="default">
                  <div className={classes.flex}>
                    <Avatar alt={n.name} src={n.photo} className={classes.productPhoto} />
                    <div>
                      <Typography variant="caption">{n.id}</Typography>
                      <Typography variant="subtitle1">{n.name}</Typography>
                      <a href={n.website} target='_blank' className={classes.downloadInvoice}>
                        Website
                      </a>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className={classes.flex}>
                    <div>
                      <Typography>
                      Start Date:&nbsp;
                      {n.startDate}
                      </Typography>
                      <Typography variant="caption">
                        End Date:&nbsp;
                        {n.endDate}
                      </Typography>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <Typography>
                      Soft Cap:&nbsp;
                      {n.softCap}
                    </Typography>
                    <Typography variant="caption">
                      Hard Cap:&nbsp;
                      {n.hardCap}
                    </Typography>
                  </div>
                </TableCell>
                <TableCell>
                  <Chip label={n.statusMessage} className={classNames(classes.chip, getStatus(n.status))} />
                </TableCell>
                <TableCell>
                  <div className={classes.taskStatus}>
                    <Icon className={classes.taskIcon}>{n.type}</Icon>
                    <Typography variant="caption">
                      {n.currentStock}
                      &nbsp;/&nbsp;
                      {n.totalStock}
                    </Typography>
                  </div>
                  <LinearProgress variant="determinate" className={getProgress(n.status)} value={(n.currentStock / n.totalStock) * 100} />
                </TableCell>
                <TableCell>
                  <div>
                    <Typography variant="caption">
                      More Info
                    </Typography><br/>
                    <Typography variant="caption">
                      Participate
                    </Typography><br/>
                    <Typography variant="caption">
                      Govern
                    </Typography>
                  </div>
                </TableCell>
              </TableRow>
            ]))}
          </TableBody>
        </Table>
      </div>
    </PapperBlock>
  );
}

TableWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableWidget);
