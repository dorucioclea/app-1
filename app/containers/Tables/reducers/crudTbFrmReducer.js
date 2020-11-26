import { fromJS, List, Map } from 'immutable';
import notif from 'dan-api/ui/notifMessage';
import { CLOSE_NOTIF } from 'dan-redux/constants/notifConstants';
import {
  FETCH_DATA_FORM,
  ADD_NEW,
  CLOSE_FORM,
  SUBMIT_DATA,
  REMOVE_ROW_FORM,
  EDIT_ROW_FORM
} from '../constants/crudTbFrmConstants';

const initialState = {
  dataTable: List([]),
  dataInit: List([
    {
      id: '0',
      text: '',
      email: '',
      radio: '',
      selection: '',
      onof: false,
      checkbox: false,
      textarea: '',
      edited: true,
    }
  ]),
  formValues: Map(),
  editingId: '',
  showFrm: false,
  notifMsg: '',
};

const initialItem = (keyTemplate, anchor) => {
  const [...rawKey] = keyTemplate.keys();
  const staticKey = {};
  for (let i = 0; i < rawKey.length; i += 1) {
    if (rawKey[i] !== 'id') {
      const itemIndex = anchor.findIndex(a => a.name === rawKey[i]);
      staticKey[rawKey[i]] = anchor[itemIndex].initialValue;
    }
  }

  return Map(staticKey);
};
let editingIndex = 0;

const initialImmutableState = fromJS(initialState);

export default function reducer(state = initialImmutableState, action = {}) {
  const { branch } = action;
  switch (action.type) {
    case `${branch}/${FETCH_DATA_FORM}`:
      return state.withMutations((mutableState) => {
        const items = fromJS(action.items);
        mutableState.set('dataTable', items);
      });
    case `${branch}/${ADD_NEW}`:
      return state.withMutations((mutableState) => {
        const raw = fromJS(state.get('dataInit').last());
        const initial = initialItem(raw, action.anchor);
        mutableState.set('formValues', initial);
        mutableState.set('showFrm', true);
      });
    case `${branch}/${SUBMIT_DATA}`:
      return state.withMutations((mutableState) => {
        if (state.get('editingId') === action.newData.get('id')) {
          // Update data
          mutableState
            .update('dataTable', dataTable => dataTable.setIn([editingIndex], action.newData))
            .set('notifMsg', notif.updated);
        } else {
          // Insert data
          const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
          const initItem = Map(action.newData);
          const newItem = initItem.update('id', (val = id) => val);
          mutableState
            .update('dataTable', dataTable => dataTable.unshift(newItem))
            .set('notifMsg', notif.saved);
        }
        mutableState.set('showFrm', false);
        mutableState.set('formValues', Map());
      });
    case `${branch}/${CLOSE_FORM}`:
      return state.withMutations((mutableState) => {
        mutableState
          .set('formValues', Map())
          .set('showFrm', false);
      });
    case `${branch}/${REMOVE_ROW_FORM}`:
      return state.withMutations((mutableState) => {
        const index = state.get('dataTable').indexOf(action.item);
        mutableState
          .update('dataTable', dataTable => dataTable.splice(index, 1))
          .set('notifMsg', notif.removed);
      });
    case `${branch}/${EDIT_ROW_FORM}`:
      return state.withMutations((mutableState) => {
        editingIndex = state.get('dataTable').indexOf(action.item);
        mutableState
          .set('formValues', action.item)
          .set('editingId', action.item.get('id'))
          .set('showFrm', true);
      });
    case `${branch}/${CLOSE_NOTIF}`:
      return state.withMutations((mutableState) => {
        mutableState.set('notifMsg', '');
      });
    default:
      return state;
  }
}
