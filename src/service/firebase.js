import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
import 'firebase/compat/storage'

export const app = firebase.initializeApp({
    apiKey: "AIzaSyCRmHfuCk-jxER0fW-0o_n05xlyUohYKcs",
    authDomain: "prueba-registro-b7ee0.firebaseapp.com",
    projectId: "prueba-registro-b7ee0",
    storageBucket: "prueba-registro-b7ee0.appspot.com",
    messagingSenderId: "642465950993",
    appId: "1:642465950993:web:68dec0926441a3532cf0b0",
    measurementId: "${config.measurementId}"
})

export const auth = firebase.auth();

// export const getFirestore = firebase.firestore();
export function getFirestore() {

    return firebase.firestore(app)
    // return firebase.auth.GoogleAuthProvider(googleProvider)
}
export function getStorage() {

    return firebase.storage(app)
    // return firebase.auth.GoogleAuthProvider(googleProvider)
}


export default app;