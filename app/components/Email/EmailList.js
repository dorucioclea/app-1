import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Tooltip from '@material-ui/core/Tooltip';
import Bookmark from '@material-ui/icons/Bookmark';
import Delete from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import ListSubheader from '@material-ui/core/ListSubheader';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Flag from '@material-ui/icons/Flag';
import People from '@material-ui/icons/People';
import QuestionAnswer from '@material-ui/icons/QuestionAnswer';
import ReportIcon from '@material-ui/icons/Report';
import LabelIcon from '@material-ui/icons/Label';
import FileIcon from '@material-ui/icons/Description';
import Download from '@material-ui/icons/CloudDownload';
import Divider from '@material-ui/core/Divider';
import StarBorder from '@material-ui/icons/StarBorder';
import Star from '@material-ui/icons/Star';
import isImage from '../Forms/helpers/helpers.js';
import styles from './email-jss';

const ITEM_HEIGHT = 80;
function EmailList(props) {
  const [anchorElOpt, setAnchorElOpt] = useState(null);
  const [itemToMove, setItemToMove] = useState(null);
  const {
    classes,
    emailData,
    openMail,
    filterPage,
    keyword,
    remove,
    toggleStar,
    reply
  } = props;

  const handleClickOpt = (event, item) => {
    setAnchorElOpt(event.currentTarget);
    setItemToMove(item);
  };

  const handleCloseOpt = () => {
    setAnchorElOpt(null);
  };

  const handleMoveTo = (item, category) => {
    const { moveTo } = props;
    moveTo(item, category);
    setAnchorElOpt(null);
  };

  /* Basic Filter */
  const inbox = emailData.filter(item => item.get('category') !== 'sent' && item.get('category') !== 'spam');
  const stared = emailData.filter(item => item.get('stared'));
  const sent = emailData.filter(item => item.get('category') === 'sent');
  const spam = emailData.filter(item => item.get('category') === 'spam');
  /* Category Filter */
  const updates = emailData.filter(item => item.get('category') === 'updates');
  const social = emailData.filter(item => item.get('category') === 'social');
  const forums = emailData.filter(item => item.get('category') === 'forums');
  const promos = emailData.filter(item => item.get('category') === 'promos');
  const getCategory = cat => {
    switch (cat) {
      case 'updates':
        return (
          <span className={classNames(classes.iconOrange, classes.category)}>
            <Flag />
              &nbsp;Updates
          </span>
        );
      case 'social':
        return (
          <span className={classNames(classes.iconRed, classes.category)}>
            <People />
              &nbsp;Social
          </span>
        );
      case 'promos':
        return (
          <span className={classNames(classes.iconBlue, classes.category)}>
            <LabelIcon />
              &nbsp;Promos
          </span>
        );
      case 'forums':
        return (
          <span className={classNames(classes.iconCyan, classes.category)}>
            <QuestionAnswer />
              &nbsp;Forums
          </span>
        );
      default:
        return false;
    }
  };
  const attachmentPreview = filesArray => filesArray.map((file, index) => {
    const base64File = URL.createObjectURL(file);
    if (isImage(file)) {
      return (
        <div key={index.toString()} className={classes.item}>
          <div className="imageContainer col fileIconImg">
            <div className="downloadBtn">
              <IconButton color="secondary" component="a" href={base64File} target="_blank">
                <Download />
              </IconButton>
            </div>
            <figure className="imgWrap"><img className="smallPreviewImg" src={base64File} alt="preview" /></figure>
          </div>
          <Typography noWrap>{file.name}</Typography>
        </div>
      );
    }
    return (
      <div key={index.toString()} className={classes.item}>
        <div className="imageContainer col fileIconImg">
          <div className="fileWrap">
            <div className="downloadBtn">
              <IconButton color="secondary" href={base64File} target="_blank">
                <Download />
              </IconButton>
            </div>
            <FileIcon className="smallPreviewImg" alt="preview" />
          </div>
        </div>
        <Typography noWrap>{file.name}</Typography>
      </div>
    );
  });
  const getEmail = dataArray => dataArray.map(mail => {
    const renderHTML = { __html: mail.get('content') };
    if (mail.get('subject').toLowerCase().indexOf(keyword) === -1) {
      return false;
    }
    return (
      <ExpansionPanel className={classes.emailList} key={mail.get('id')} onChange={() => openMail(mail)}>
        <ExpansionPanelSummary className={classes.emailSummary} expandIcon={<ExpandMoreIcon />}>
          <div className={classes.fromHeading}>
            <Tooltip id="tooltip-mark" title="Stared">
              <IconButton onClick={() => toggleStar(mail)} className={classes.starBtn}>{mail.get('stared') ? (<Star className={classes.iconOrange} />) : (<StarBorder />)}</IconButton>
            </Tooltip>
            {mail.get('category') !== 'spam'
              ? (<Avatar alt="avatar" src={mail.get('avatar')} className={classes.avatar} />)
              : (<Avatar alt="avatar" className={classes.avatar}><ReportIcon /></Avatar>)
            }
            <Typography className={classes.heading} display="block">
              {mail.get('category') === 'sent' && ('To ')}
              {mail.get('name')}
              <Typography variant="caption" display="block">{mail.get('date')}</Typography>
            </Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading} noWrap>{mail.get('subject')}</Typography>
            {getCategory(mail.get('category'))}
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <section>
            <div className={classes.topAction}>
              <Typography className={classes.headMail}>
                {mail.get('category') !== 'sent' && (
                  <Fragment>
                    From&nbsp;
                    {mail.get('name')}
                      &nbsp;to me
                  </Fragment>
                )}
              </Typography>
              <div className={classes.opt}>
                <Tooltip id="tooltip-mark" title="Stared">
                  <IconButton onClick={() => toggleStar(mail)}>{mail.get('stared') ? (<Star className={classes.iconOrange} />) : (<StarBorder />)}</IconButton>
                </Tooltip>
                <Tooltip id="tooltip-mark" title="Mark message to">
                  <IconButton
                    className={classes.button}
                    aria-label="mark"
                    aria-owns={anchorElOpt ? 'long-menu' : null}
                    aria-haspopup="true"
                    onClick={(event) => handleClickOpt(event, mail)}
                  >
                    <Bookmark />
                  </IconButton>
                </Tooltip>
                <Tooltip id="tooltip-mark" title="Remove mail">
                  <IconButton className={classes.button} aria-label="Delete" onClick={() => remove(mail)}><Delete /></IconButton>
                </Tooltip>
              </div>
            </div>
            <div className={classes.emailContent}>
              <Typography variant="h6" gutterBottom>{mail.get('subject')}</Typography>
              <article dangerouslySetInnerHTML={renderHTML} />
            </div>
            <div className={classes.preview}>
              {attachmentPreview(mail.get('attachment'))}
            </div>
          </section>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <div className={classes.action}>
            <Button size="small">Forwad</Button>
            <Button size="small" color="secondary" onClick={() => reply(mail)}>Reply</Button>
          </div>
        </ExpansionPanelActions>
      </ExpansionPanel>
    );
  });
  const showEmail = category => {
    switch (category) {
      case 'inbox':
        return getEmail(inbox);
      case 'stared':
        return getEmail(stared);
      case 'sent':
        return getEmail(sent);
      case 'spam':
        return getEmail(spam);
      case 'updates':
        return getEmail(updates);
      case 'social':
        return getEmail(social);
      case 'promos':
        return getEmail(promos);
      case 'forums':
        return getEmail(forums);
      default:
        return getEmail(inbox);
    }
  };
  return (
    <main className={classes.content}>
      <Menu
        id="long-menu"
        anchorEl={anchorElOpt}
        open={Boolean(anchorElOpt)}
        onClose={handleCloseOpt}
        className={classes.markMenu}
        PaperProps={{ style: { maxHeight: ITEM_HEIGHT * 4.5, width: 200 } }}
      >
        <List
          component="nav"
          subheader={<ListSubheader component="div">Mark to... </ListSubheader>}
        />
        <MenuItem selected onClick={() => handleMoveTo(itemToMove, 'updates')}>
          <Flag className={classes.iconOrange} />
            &nbsp;Updates
        </MenuItem>
        <MenuItem onClick={() => handleMoveTo(itemToMove, 'social')}>
          <People className={classes.iconRed} />
            &nbsp;Social
        </MenuItem>
        <MenuItem onClick={() => handleMoveTo(itemToMove, 'promos')}>
          <LabelIcon className={classes.iconBlue} />
            &nbsp;Promos
        </MenuItem>
        <MenuItem onClick={() => handleMoveTo(itemToMove, 'forums')}>
          <QuestionAnswer className={classes.iconCyan} />
            &nbsp;Forums
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => handleMoveTo(itemToMove, 'spam')}>
          <ReportIcon />
            &nbsp;Spam
        </MenuItem>
      </Menu>
      {showEmail(filterPage)}
    </main>
  );
}

EmailList.propTypes = {
  classes: PropTypes.object.isRequired,
  emailData: PropTypes.object.isRequired,
  openMail: PropTypes.func.isRequired,
  moveTo: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  toggleStar: PropTypes.func.isRequired,
  reply: PropTypes.func.isRequired,
  filterPage: PropTypes.string.isRequired,
  keyword: PropTypes.string.isRequired,
};

export default withStyles(styles)(EmailList);
