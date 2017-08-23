import {combineReducers} from 'redux';
import AlertReducer from './reducer-alerts';
import ActiveAlertReducer from './reducer-active-alert';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */

const allReducers = combineReducers({
    alerts: AlertReducer,
    activeAlert: ActiveAlertReducer
});

export default allReducers
