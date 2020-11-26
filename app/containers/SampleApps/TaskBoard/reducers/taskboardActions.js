import * as notification from 'dan-redux/constants/notifConstants';
import * as types from './taskboardConstants';

export const fetchAction = items => ({
  type: types.FETCH_BOARD_DATA,
  items,
});

export const addAction = {
  type: types.ADD_BOARD
};

export const discardAction = {
  type: types.DISCARD_BOARD
};

export const submitAction = newBoard => ({
  type: types.SUBMIT_BOARD,
  newBoard,
});

export const deleteAction = boardId => ({
  type: types.DELETE_BOARD,
  boardId,
});

export const closeNotifAction = {
  type: notification.CLOSE_NOTIF
};
