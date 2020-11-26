import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import dummy from 'dan-api/dummy/dummyContents';
import {
  ContactList,
  ContactDetail,
  AddContact,
  Notification
} from 'dan-components';
import styles from 'dan-components/Contact/contact-jss';
import {
  fetchAction,
  showDetailAction,
  hideDetailAction,
  submitAction,
  editAction,
  addAction,
  closeAction,
  removeAction,
  addToFavoriteAction,
  searchAction,
  closeNotifAction
} from './reducers/contactActions';
import data from './api/contactData';

function Contact(props) {
  // Redux State
  const reducer = 'contact';
  const avatarInit = useSelector(state => state.getIn([reducer, 'avatarInit']));
  const dataContact = useSelector(state => state.getIn([reducer, 'contactList']));
  const itemSelected = useSelector(state => state.getIn([reducer, 'selectedIndex']));
  const keyword = useSelector(state => state.getIn([reducer, 'keywordValue']));
  const open = useSelector(state => state.getIn([reducer, 'openFrm']));
  const showMobileDetail = useSelector(state => state.getIn([reducer, 'showMobileDetail']));
  const messageNotif = useSelector(state => state.getIn([reducer, 'notifMsg']));

  // Dispatcher
  const fetchData = useDispatch();
  const submit = useDispatch();
  const showDetail = useDispatch();
  const hideDetail = useDispatch();
  const edit = useDispatch();
  const add = useDispatch();
  const close = useDispatch();
  const remove = useDispatch();
  const favorite = useDispatch();
  const search = useDispatch();
  const closeNotif = useDispatch();

  useEffect(() => {
    fetchData(fetchAction(data));
  }, []);

  const submitContact = (item, avatar) => {
    const avatarBase64 = typeof avatar === 'object' ? URL.createObjectURL(avatar) : avatar;
    const avatarPreview = avatar !== null ? avatarBase64 : dummy.user.avatar;
    submit(submitAction(item, avatarPreview));
  };

  const title = brand.name + ' - Contact';
  const description = brand.desc;
  const { classes } = props;

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
      <div className={classes.root}>
        <ContactList
          addFn
          total={dataContact.size}
          addContact={() => add(addAction)}
          clippedRight
          itemSelected={itemSelected}
          dataContact={dataContact}
          showDetail={(payload) => showDetail(showDetailAction(payload))}
          search={(payload) => search(searchAction(payload))}
          keyword={keyword}
        />
        <ContactDetail
          showMobileDetail={showMobileDetail}
          hideDetail={() => hideDetail(hideDetailAction)}
          dataContact={dataContact}
          itemSelected={itemSelected}
          edit={(payload) => edit(editAction(payload))}
          remove={(payload) => remove(removeAction(payload))}
          favorite={(payload) => favorite(addToFavoriteAction(payload))}
        />
      </div>
      <AddContact
        addContact={() => add(addAction)}
        openForm={open}
        closeForm={() => close(closeAction)}
        submit={submitContact}
        avatarInit={avatarInit}
      />
    </div>
  );
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired
};

const MemoedContact = memo(Contact);
export default withStyles(styles)(MemoedContact);
