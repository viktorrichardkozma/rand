import {GET_EVENTS,EVENTS_LOADING,VALIDATION_ERROR, VALIDATED_TOKEN} from '../actions/types';

const initialState={
    events:null,
    valid:false,
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
        case VALIDATION_ERROR:
            return {
                ...state,
                valid:false
            };
        case VALIDATED_TOKEN:
        return {
            ...state,
            valid:false
        };
        default:
            return state
    }
}