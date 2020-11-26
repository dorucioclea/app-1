import { fromJS, List, Map } from 'immutable';
import notif from 'dan-api/ui/notifMessage';
import { CLOSE_NOTIF } from 'dan-redux/constants/notifConstants';
import {
  FETCH_BOARD_DATA,
  ADD_BOARD,
  DISCARD_BOARD,
  DELETE_BOARD,
  SUBMIT_BOARD
} from './taskboardConstants';

const initialState = {
  boardData: Map({ lanes: [] }),
  openFrm: false,
  formValues: Map(),
  notifMsg: '',
};

const initForm = Map({
  title: '',
  label: '',
  color: '#EC407A',
  cards: []
});

const buildLanes = (board, curLane) => {
  const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  const newData = Map({
    id,
    title: board.get('title'),
    label: board.get('label'),
    color: board.get('color'),
    cards: List([]),
  });
  return curLane.push(newData);
};

const initialImmutableState = fromJS(initialState);
export default function reducer(state = initialImmutableState, action = {}) {
  switch (action.type) {
    case FETCH_BOARD_DATA:
      return state.withMutations((mutableState) => {
        console.log(action.items);
        const items = fromJS(action.items);
        mutableState.set('boardData', items);
      });
    case ADD_BOARD:
      return state.withMutations((mutableState) => {
        mutableState
          .set('openFrm', true)
          .set('formValues', initForm);
      });
    case DISCARD_BOARD:
      return state.withMutations((mutableState) => {
        mutableState
          .set('openFrm', false)
          .set('formValues', Map())
          .set('notifMsg', notif.discard);
      });
    case SUBMIT_BOARD:
      return state.withMutations((mutableState) => {
        const newLanes = buildLanes(action.newBoard, state.getIn(['boardData', 'lanes']));
        mutableState
          .update('boardData', boardData => boardData.set('lanes', newLanes))
          .set('formValues', Map())
          .set('openFrm', false)
          .set('notifMsg', notif.saved);
      });
    case DELETE_BOARD:
      return state.withMutations((mutableState) => {
        const boardItem = state.getIn(['boardData', 'lanes'])
          .find(obj => (
            obj.get('id') === action.boardId
          ));
        const index = state.getIn(['boardData', 'lanes']).indexOf(boardItem);
        mutableState
          .removeIn(['boardData', 'lanes', index])
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
