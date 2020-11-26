import { fromJS, List, Map } from 'immutable';
import notif from 'dan-api/ui/notifMessage';
import { CLOSE_NOTIF } from 'dan-redux/constants/notifConstants';
import {
  FETCH_CALENDAR_DATA,
  ADD_EVENT,
  DISCARD_EVENT,
  SUBMIT_EVENT,
  DELETE_EVENT
} from './calendarConstants';

const initialState = {
  events: List([]),
  openFrm: false,
  formValues: Map(),
  notifMsg: '',
};

const initForm = Map({
  title: '',
  start: new Date(),
  end: new Date(),
  hexColor: 'EC407A',
});

const initialImmutableState = fromJS(initialState);
export default function reducer(state = initialImmutableState, action = {}) {
  switch (action.type) {
    case FETCH_CALENDAR_DATA:
      return state.withMutations((mutableState) => {
        const items = fromJS(action.items);
        mutableState.set('events', items);
      });
    case ADD_EVENT:
      return state.withMutations((mutableState) => {
        mutableState
          .set('openFrm', true)
          .set('formValues', initForm);
      });
    case DISCARD_EVENT:
      return state.withMutations((mutableState) => {
        mutableState
          .set('openFrm', false)
          .set('formValues', Map())
          .set('notifMsg', notif.discard);
      });
    case SUBMIT_EVENT:
      return state.withMutations((mutableState) => {
        const initItem = Map(action.newEvent);
        const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
        const newItem = initItem
          .update('id', (val = id) => val)
          .set('start', action.newEvent.get('start')._d || action.newEvent.get('start'))
          .set('end', action.newEvent.get('end')._d || action.newEvent.get('end'));
        mutableState.update('events', events => events.push(newItem));
        mutableState
          .set('formValues', Map())
          .set('openFrm', false)
          .set('notifMsg', notif.saved);
      });
    case DELETE_EVENT:
      return state.withMutations((mutableState) => {
        const eventItem = state.get('events')
          .find(obj => (
            obj.get('id') === action.event.id
          ));
        const index = state.get('events').indexOf(eventItem);
        mutableState
          .update('events', events => events.splice(index, 1))
          .set('notifMsg', notif.removed);
      });
    case CLOSE_NOTIF:
      return state.withMutations((mutableState) => {
        mutableState.set('notifMsg', '');
      });
    default:
      return state;
  }
}
