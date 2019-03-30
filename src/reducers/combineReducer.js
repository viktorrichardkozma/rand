import {combineReducers} from 'redux';
import eventsReducer from './eventsReducer';
import videoReducer from './videoReducer';


export default combineReducers({
    events: eventsReducer,
    videos: videoReducer
});