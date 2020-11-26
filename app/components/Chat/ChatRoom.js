import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import Send from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import dummyContents from 'dan-api/dummy/dummyContents';
import Type from 'dan-styles/Typography.scss';
import MessageField from './MessageField';
import ChatHeader from './ChatHeader';
import styles from './chatStyle-jss';

function ChatRoom(props) {
  const field = useRef(null);
  const [message, setMessage] = useState('');

  const handleWrite = (e, value) => {
    setMessage(value);
  };

  const resetInput = () => {
    const ctn = document.getElementById('roomContainer');
    setMessage('');
    field.current.value = '';
    setTimeout(() => {
      ctn.scrollTo(0, ctn.scrollHeight);
    }, 300);
  };

  const sendMessageByEnter = (event, msg) => {
    const { sendMessage } = props;
    if (event.key === 'Enter' && event.target.value !== '') {
      sendMessage(msg.__html);
      resetInput();
    }
  };

  const sendMessage = msg => {
    props.sendMessage(msg.__html);
    resetInput();
  };

  const html = { __html: message };
  const {
    classes,
    dataChat,
    chatSelected,
    dataContact,
    showMobileDetail,
    remove,
    hideDetail
  } = props;
  const getChat = dataArray => dataArray.map(data => {
    const renderHTML = { __html: data.get('message') };
    return (
      <li className={data.get('from') === 'contact' ? classes.from : classes.to} key={data.get('id')}>
        <time dateTime={data.get('date') + ' ' + data.get('time')}>{data.get('date') + ' ' + data.get('time')}</time>
        {data.get('from') === 'contact' ? (
          <Avatar alt="avatar" src={dataContact.getIn([chatSelected, 'avatar'])} className={classes.avatar} />
        ) : (
          <Avatar alt="avatar" src={dummyContents.user.avatar} className={classes.avatar} />
        )}
        <div className={classes.talk}>
          <p><span dangerouslySetInnerHTML={renderHTML} /></p>
        </div>
      </li>
    );
  });
  return (
    <div className={classNames(classes.root, classes.content, showMobileDetail ? classes.detailPopup : '')}>
      <ChatHeader
        dataContact={dataContact}
        chatSelected={chatSelected}
        remove={remove}
        showMobileDetail={showMobileDetail}
        hideDetail={hideDetail}
      />
      <ul className={classes.chatList} id="roomContainer">
        {dataChat.size > 0 ? getChat(dataChat) : (<Typography display="block" variant="caption" className={Type.textCenter}>{'You haven\'t made any conversation yet'}</Typography>)}
      </ul>
      <Paper className={classes.writeMessage}>
        <MessageField
          onChange={handleWrite}
          passedRef={field}
          placeholder="Type a message"
          fieldType="input"
          value={message}
          onKeyPress={(event) => sendMessageByEnter(event, html)}
        />
        <Tooltip id="tooltip-send" title="Send">
          <div>
            <IconButton mini="true" color="secondary" disabled={message === ''} onClick={() => sendMessage(html)} aria-label="send" className={classes.sendBtn}>
              <Send />
            </IconButton>
          </div>
        </Tooltip>
      </Paper>
    </div>
  );
}

ChatRoom.propTypes = {
  classes: PropTypes.object.isRequired,
  dataChat: PropTypes.object.isRequired,
  showMobileDetail: PropTypes.bool.isRequired,
  chatSelected: PropTypes.number.isRequired,
  dataContact: PropTypes.object.isRequired,
  sendMessage: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  hideDetail: PropTypes.func.isRequired,
};

export default withStyles(styles)(ChatRoom);
