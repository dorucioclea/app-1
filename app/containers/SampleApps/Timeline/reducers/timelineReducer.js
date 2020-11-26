import { fromJS, List, Map } from 'immutable';
import notif from 'dan-api/ui/notifMessage';
import dummy from 'dan-api/dummy/dummyContents';
import { CLOSE_NOTIF } from 'dan-redux/constants/notifConstants';
import {
  FETCH_TIMELINE_DATA,
  POST,
  TOGGLE_LIKE,
  FETCH_COMMENT_DATA,
  POST_COMMENT
} from './timelineConstants';
import { getDate, getTime } from '../../../helpers/dateTimeHelper';

const initialState = {
  dataTimeline: List([]),
  commentIndex: 0,
  notifMsg: '',
};

const icon = privacyType => {
  switch (privacyType) {
    case 'public':
      return 'language';
    case 'friends':
      return 'people';
    default:
      return 'lock';
  }
};

const buildTimeline = (text, image, privacy) => {
  const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  const imageSrc = image.length > 0 ? URL.createObjectURL(image[0]) : '';
  return Map({
    id,
    name: 'John Doe',
    date: getDate(),
    time: getTime(),
    icon: icon(privacy),
    avatar: dummy.user.avatar,
    image: imageSrc,
    content: text,
    liked: false,
    comments: List([])
  });
};

const buildComment = (message, curData) => {
  const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
  const newData = Map({
    id,
    from: 'John Doe',
    avatar: dummy.user.avatar,
    date: getDate(),
    message,
  });
  return curData.push(newData);
};

const initialImmutableState = fromJS(initialState);

export default function reducer(state = initialImmutableState, action = {}) {
  switch (action.type) {
    case FETCH_TIMELINE_DATA:
      return state.withMutations((mutableState) => {
        const items = fromJS(action.items);
        mutableState.set('dataTimeline', items);
      });
    case POST:
      return state.withMutations((mutableState) => {
        mutableState
          .update(
            'dataTimeline',
            dataTimeline => dataTimeline.unshift(
              buildTimeline(action.text, action.media, action.privacy)
            )
          )
          .set('notifMsg', notif.posted);
      });
    case TOGGLE_LIKE:
      return state.withMutations((mutableState) => {
        const index = state.get('dataTimeline').indexOf(action.item);
        mutableState.update('dataTimeline', dataTimeline => dataTimeline
          .setIn([index, 'liked'], !state.getIn(['dataTimeline', index, 'liked']))
        );
      });
    case FETCH_COMMENT_DATA:
      return state.withMutations((mutableState) => {
        const index = state.get('dataTimeline').indexOf(action.item);
        mutableState.set('commentIndex', index);
      });
    case POST_COMMENT:
      return state.withMutations((mutableState) => {
        mutableState
          .update('dataTimeline',
            dataTimeline => dataTimeline.setIn(
              [state.get('commentIndex'), 'comments'],
              buildComment(action.comment, state.getIn(['dataTimeline', state.get('commentIndex'), 'comments']))
            )
          )
          .set('notifMsg', notif.commented);
      });
    case CLOSE_NOTIF:
      return state.withMutations((mutableState) => {
        mutableState.set('notifMsg', '');
      });
    default:
      return state;
  }
}
