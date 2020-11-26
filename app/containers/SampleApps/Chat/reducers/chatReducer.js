import { fromJS, List, Map } from 'immutable';
import {
  FETCH_CHAT_DATA,
  SHOW_CHAT,
  HIDE_CHAT,
  SEND_CHAT,
  DELETE_CONVERSATION
} from './chatConstants';
import { getDate, getTime } from '../../../helpers/dateTimeHelper';

const initialState = {
  chatList: List([]),
  activeChat: List([]),
  chatSelected: 0,
  showMobileDetail: false
};

const buildMessage = (message, curData) => {
  const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  const newData = Map({
    id,
    from: 'me',
    date: getDate(),
    time: getTime(),
    message,
  });
  return curData.push(newData);
};

const initialImmutableState = fromJS(initialState);
export default function reducer(state = initialImmutableState, action = {}) {
  switch (action.type) {
    case FETCH_CHAT_DATA:
      return state.withMutations((mutableState) => {
        const items = fromJS(action.items);
        mutableState
          .set('chatList', items)
          .set('activeChat', items.getIn([state.get('chatSelected'), 'chat']));
      });
    case SHOW_CHAT:
      return state.withMutations((mutableState) => {
        const chatItem = state.get('chatList')
          .find(obj => (
            obj.get('with') === action.person.get('id')
          ));
        const index = state.get('chatList').indexOf(chatItem);
        const chatValue = chatItem.get('chat') !== [] ? chatItem.get('chat') : List([]);
        mutableState
          .set('chatSelected', index)
          .set('activeChat', chatValue)
          .set('showMobileDetail', true);
      });
    case HIDE_CHAT:
      return state.withMutations((mutableState) => {
        mutableState.set('showMobileDetail', false);
      });
    case SEND_CHAT:
      return state.withMutations((mutableState) => {
        const newMessage = buildMessage(action.message, state.getIn(['chatList', state.get('chatSelected'), 'chat']));
        mutableState
          .update('chatList', chatList => chatList.setIn([state.get('chatSelected'), 'chat'], newMessage))
          .set('activeChat', newMessage);
      });
    case DELETE_CONVERSATION:
      return state.withMutations((mutableState) => {
        mutableState
          .update('chatList', chatList => chatList.setIn([state.get('chatSelected'), 'chat'], List([])))
          .set('activeChat', List([]));
      });
    default:
      return state;
  }
}
