/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { reducer as form } from 'redux-form/immutable';
import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';
import history from 'utils/history';

import languageProviderReducer from 'containers/LanguageProvider/reducer';
import uiReducer from './modules/ui';
import initval from './modules/initForm';
import login from './modules/login';
import treeTable from '../containers/Tables/reducers/treeTbReducer';
import crudTable from '../containers/Tables/reducers/crudTbReducer';
import crudTableForm from '../containers/Tables/reducers/crudTbFrmReducer';
import ecommerce from '../containers/SampleApps/Ecommerce/reducers/ecommerceReducer';
import contact from '../containers/SampleApps/Contact/reducers/contactReducer';
import chat from '../containers/SampleApps/Chat/reducers/chatReducer';
import email from '../containers/SampleApps/Email/reducers/emailReducer';
import calendar from '../containers/SampleApps/Calendar/reducers/calendarReducer';
import socmed from '../containers/SampleApps/Timeline/reducers/timelineReducer';
import taskboard from '../containers/SampleApps/TaskBoard/reducers/taskboardReducer';

/**
 * Branching reducers to use one reducer for many components
 */

function branchReducer(reducerFunction, reducerName) {
  return (state, action) => {
    const { branch } = action;
    const isInitializationCall = state === undefined;
    if (branch !== reducerName && !isInitializationCall) {
      return state;
    }
    return reducerFunction(state, action);
  };
}

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    form,
    ui: uiReducer,
    initval,
    login,
    socmed,
    calendar,
    ecommerce,
    contact,
    chat,
    email,
    taskboard,
    treeTableArrow: branchReducer(treeTable, 'treeTableArrow'),
    treeTablePM: branchReducer(treeTable, 'treeTablePM'),
    crudTableDemo: branchReducer(crudTable, 'crudTableDemo'),
    crudTableForm,
    crudTbFrmDemo: branchReducer(crudTableForm, 'crudTbFrmDemo'),
    language: languageProviderReducer,
    router: connectRouter(history),
    ...injectedReducers,
  });

  // Wrap the root reducer and return a new root reducer with router state
  const mergeWithRouterState = connectRouter(history);
  return mergeWithRouterState(rootReducer);
}
