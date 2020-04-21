import {GET_EVENTS,EVENTS_LOADING} from '../actions/types';

const initialState={
    events:null,
    auth: '',
    loading: false
}

export default function(state=initialState,action){
    switch(action.type){
        case EVENTS_LOADING:
            return {
                ...state,
                loading:true
            };
        case GET_EVENTS:
            return {
                ...state,
                loading:false,
                events: action.payload
        };
        default:
            return state
    }
}