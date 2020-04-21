import axios from 'axios';
import {GET_EVENTS, GET_ME, OPEN_ALERT,CLOSE_ALERT,ERROR_SEND,SEND_MAIL,GET_MY_EVENTS} from './types';

import * as Firebase from 'firebase'

export const LOCALE_SET = 'LOCALE_SET';

/* let baseURL = "https://360-selfie-backend-service.kozmaviktorrichard.now.sh"
 */
let baseURL = "http://localhost:5000"


const bucketName = 'selfie-10b2c.appspot.com';

const createPublicFileURL = (storageName) => {
  return `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${encodeURIComponent(storageName)}?alt=media`;
}




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
                type: ERROR_SEND,
                payload: err.data
            })
    );
}

//GET EVENTS
export const getMyEvents = () => dispatch => {
    axios.get(baseURL+'/events/me',{withCredentials:true})
        .then(res =>
            dispatch({
                type: GET_MY_EVENTS,
                payload:res.data
            }))
        .catch(err=>
            dispatch({
                type: ERROR_SEND,
                payload: err.data
        })
    );
}

//GET EVENTS
export const getMe = () => dispatch => {
    axios.get(baseURL+'/auth/me',{withCredentials:true})
        .then(res =>
            dispatch({
                type: GET_ME,
                payload:res.data
            }))
        .catch(err=>
            dispatch({
                type: ERROR_SEND,
                payload: err.data
            })
    );
}

//GET EVENTS
export const deleteEvent = (id) => dispatch => {
    axios.delete('https://360-selfie.now.sh/events/'+id)
        .then(res => {

        axios.get(baseURL+'/events/me',{withCredentials:true})
            .then(res =>
                dispatch({
                    type: GET_MY_EVENTS,
                    payload:res.data
                }))
            .catch(err=>
                dispatch({
                    type: ERROR_SEND,
                    payload: err.data
                })
            )
        })
        .catch(err=>
            dispatch({
                type: ERROR_SEND,
                payload: err.data
        })
    );
}

//GET EVENTS
export const submitEvent = (data) => async (dispatch) => {

    const storageRef = Firebase.storage().ref();
    const frame = `frame-${Date.now()}.png`;
    await storageRef.child(`frames/${frame}`).put(data.file); 


    const body = {
        eventData: {
          name:data.eventName,
          frame,
          frameURL: createPublicFileURL(`frames/${frame}`),
        },
    };

    axios.post(baseURL+'/events',JSON.stringify(body),
                {
                    headers: {
                        'content-type': 'application/json',
                    },
                    withCredentials:true
                }
            )
            .then(res => { 
                axios.get(baseURL+'/events/me',{withCredentials:true})
                .then(res =>
                    dispatch({
                        type: GET_MY_EVENTS,
                        payload:res.data
                    }))
                .catch(err=>
                    dispatch({
                        type: ERROR_SEND,
                        payload: err.data
                    })
            )})
        
        .catch(err=>
            dispatch({
                type: ERROR_SEND,
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
                type: ERROR_SEND,
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
