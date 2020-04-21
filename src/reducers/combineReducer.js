import {combineReducers} from 'redux';
import eventsReducer from './eventsReducer';
import videoReducer from './videoReducer';
import langReducer from './langReducer';
import authReducer from './authReducer';

export default combineReducers({
    events: eventsReducer,
    videos: videoReducer,
    locale: langReducer,
    auth: authReducer
});