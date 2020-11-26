import * as notification from 'dan-redux/constants/notifConstants';
import * as types from './emailConstants';

export const fetchMailAction = items => ({
  type: types.FETCH_EMAIL_DATA,
  items,
});

export const openMailAction = mail => ({
  type: types.OPEN_MAIL,
  mail,
});

export const filterAction = filter => ({
  type: types.FILTER_MAIL,
  filter,
});

export const composeAction = {
  type: types.COMPOSE_MAIL,
};

export const sendAction = (to, subject, content, attachment) => ({
  type: types.SEND_MAIL,
  to,
  subject,
  content,
  attachment,
});

export const discardAction = {
  type: types.DISCARD_MESSAGE,
};

export const searchAction = keyword => ({
  type: types.SEARCH_MAIL,
  keyword,
});

export const deleteAction = mail => ({
  type: types.DELETE_MAIL,
  mail,
});

export const toggleStaredAction = mail => ({
  type: types.TOGGLE_STARED,
  mail,
});

export const moveAction = (mail, category) => ({
  type: types.MOVE_TO,
  mail,
  category
});

export const closeNotifAction = {
  type: notification.CLOSE_NOTIF
};
