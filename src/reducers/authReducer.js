import {GET_ME,EVENTS_LOADING} from '../actions/types';
import { bindActionCreators } from 'redux';

const initialState={
    id: null,
    name: null
}

export default function(state=initialState,action){
    switch(action.type){
        case GET_ME:
            return {
                ...state,
                id: action.payload.id,
                name: action.payload.name
            };

        default:
            return state
    }
}