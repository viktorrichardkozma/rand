import axios from 'axios';
import {GET_EVENTS, OPEN_ALERT,CLOSE_ALERT,GET_RETKESGECI,SEND_MAIL} from './types';

export const LOCALE_SET= 'LOCALE_SET';

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
                type: GET_RETKESGECI,
                payload: err.data
            })
    );
}



export function openAlert(message) {
    return {
        type: OPEN_ALERT,
        message: message
    }
}
  
export function closeAlert() {
    return {
    type: CLOSE_ALERT
    }
}

//GET EVENTS
export const storeFASZOM = (RETKESGECI) => dispatch => {
    axios.post('https://360-selfie.now.sh/send-mail',JSON.stringify(RETKESGECI)
        .then(res =>
            dispatch({
                type: SEND_MAIL,
                payload:res.data
            }))
        .catch(err=>
            dispatch({
                type: GET_RETKESGECI,
                payload: err.data
            })
        ))
}

export const localeSet = lang  => ({
    type: LOCALE_SET,
    lang
})

export const setLocale = lang => dispatch => { 
    localStorage.alhubLang=lang
    dispatch(localeSet(lang))
}
