import * as firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const config = {
  apiKey: "AIzaSyAaMdAVbC2krvnr0c0MIJRX0Vo6RwbsyM0",
  authDomain: "pose-d200e.firebaseapp.com",
  databaseURL: "https://pose-d200e.firebaseio.com",
  projectId: "pose-d200e",
  storageBucket: "pose-d200e.appspot.com",
  messagingSenderId: "899905132468",
  appId: "1:899905132468:web:2c2265e03e4ba396fbc4e1",
  measurementId: "G-G6PYJC46YF",
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const fireDB = firebase.firestore()
export { fireDB }
