import * as types from './chatConstants';

export const fetchChatAction = items => ({
  type: types.FETCH_CHAT_DATA,
  items,
});

export const showChatAction = person => ({
  type: types.SHOW_CHAT,
  person,
});

export const hideDetailAction = {
  type: types.HIDE_CHAT,
};

export const sendAction = message => ({
  type: types.SEND_CHAT,
  message,
});

export const deleteAction = {
  type: types.DELETE_CONVERSATION,
};
