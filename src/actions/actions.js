import axios from 'axios';
import {GET_EVENTS, VALIDATED_TOKEN,VALIDATION_ERROR,GET_ERRORS} from './types';


//GET EVENTS
export const getEvents = () => dispatch => {
    axios.get('https://360-selfie.now.sh/events')
        .then(res =>
            dispatch({
                type: GET_EVENTS,
                payload:res.data
            }))
        .catch(err=>
            dispatch({
                type: GET_ERRORS,
                payload: err.data
            })
    );
}

//VALIDATION
export const validateToken = (token,history) => dispatch => {
    if(token) {
     history.push('/events/videos')
     dispatch({
        type: VALIDATED_TOKEN,
        payload: 'valid'
    })
    } else {
    dispatch({
        type: VALIDATION_ERROR,
        payload: 'notValid'
    })
    }
}
