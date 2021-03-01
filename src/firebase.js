import firebase from "firebase/app"
import "firebase/auth" 

const app = firebase.initializeApp ({
    apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID
})


export const auth= app.auth() //veriable for authentication instance
export const google = new firebase.auth.GoogleAuthProvider();
export default app         //app is firebase in general