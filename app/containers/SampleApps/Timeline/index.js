import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { useSelector, useDispatch } from 'react-redux';
import {
  Timeline,
  WritePost,
  SideSection,
  Notification
} from 'dan-components';
import data from './api/timelineData';
import {
  fetchAction,
  postAction,
  toggleLikeAction,
  fetchCommentAction,
  postCommentAction,
  closeNotifAction
} from './reducers/timelineActions';

function TimelineSocial() {
  // Redux State
  const reducer = 'socmed';
  const dataProps = useSelector(state => state.getIn([reducer, 'dataTimeline']));
  const commentIndex = useSelector(state => state.getIn([reducer, 'commentIndex']));
  const messageNotif = useSelector(state => state.getIn([reducer, 'notifMsg']));

  // Distpatcher
  const fetchData = useDispatch();
  const submitPost = useDispatch();
  const submitComment = useDispatch();
  const submitLike = useDispatch();
  const fetchComment = useDispatch();
  const closeNotif = useDispatch();

  useEffect(() => {
    fetchData(fetchAction(data));
  }, []);

  const title = brand.name + ' - Social Media';
  const description = brand.desc;

  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <Notification close={() => closeNotif(closeNotifAction)} message={messageNotif} />
      <Grid
        container
        alignItems="flex-start"
        justify="flex-start"
        direction="row"
        spacing={3}
      >
        <Grid item md={8} xs={12}>
          <div>
            <WritePost submitPost={(text, media, privacy) => submitPost(postAction(text, media, privacy))} />
            <Timeline
              dataTimeline={dataProps}
              onlike={(payload) => submitLike(toggleLikeAction(payload))}
              submitComment={(payload) => submitComment(postCommentAction(payload))}
              fetchComment={(payload) => fetchComment(fetchCommentAction(payload))}
              commentIndex={commentIndex}
            />
          </div>
        </Grid>
        <Grid item md={4} xs={12}>
          <SideSection />
        </Grid>
      </Grid>
    </div>
  );
}

export default TimelineSocial;
