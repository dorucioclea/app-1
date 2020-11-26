import * as notification from 'dan-redux/constants/notifConstants';
import * as types from '../constants/crudTbFrmConstants';

export const fetchAction = (items, branch) => ({
  branch,
  type: `${branch}/${types.FETCH_DATA_FORM}`,
  items
});
export const addAction = (anchor, branch) => ({
  branch,
  type: `${branch}/${types.ADD_NEW}`,
  anchor
});
export const closeAction = branch => ({
  branch,
  type: `${branch}/${types.CLOSE_FORM}`
});
export const submitAction = (newData, branch) => ({
  branch,
  type: `${branch}/${types.SUBMIT_DATA}`,
  newData
});
export const removeAction = (item, branch) => ({
  branch,
  type: `${branch}/${types.REMOVE_ROW_FORM}`,
  item
});
export const editAction = (item, branch) => ({
  branch,
  type: `${branch}/${types.EDIT_ROW_FORM}`,
  item
});
export const closeNotifAction = branch => ({
  branch,
  type: `${branch}/${notification.CLOSE_NOTIF}`,
});
