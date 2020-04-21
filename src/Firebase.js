import * as firebase from 'firebase'
export const init = () => {
  let config = {
    apiKey: 'AIzaSyCP1u75RYbTC1-AhiEdAf1tVRcLZ2NbL6E',
    authDomain: 'selfie-10b2c.firebaseapp.com',
    projectId: 'selfie-10b2c',
    databaseURL: 'https://selfie-10b2c.firebaseio.com',
    storageBucket: 'gs://selfie-10b2c.appspot.com',
    messagingSenderId: '493343855955'
  }
  firebase.initializeApp(config)
}