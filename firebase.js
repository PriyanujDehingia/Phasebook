import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "facebookclone-fc9e4.firebaseapp.com",
  projectId: "facebookclone-fc9e4",
  storageBucket: "facebookclone-fc9e4.appspot.com",
  messagingSenderId: process.env.MSG_SNDR_ID,
  appId: process.env.APP_ID
};
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }else {
//   firebase.app(); // if already initialized, use that one
// }
// if(app===null){
//   app = firebase.initializeApp(firebaseConfig);
// } else{
//   const app = firebase.app()
// }
const db = app.firestore();
const storage = firebase.storage();

export {db , storage};