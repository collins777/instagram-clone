import firebase from "firebase";

const firebaseApp = firebase.iniitializeApp({
  apiKey: "AIzaSyDlwLRrf-zRV3pec4UqsHrSoU5b6PeO17s",
  authDomain: "instagram-clone-d4d04.firebaseapp.com",
  projectId: "instagram-clone-d4d04",
  storageBucket: "instagram-clone-d4d04.appspot.com",
  messagingSenderId: "469028348255",
  appId: "1:469028348255:web:15760e2ba2e63d9f4956ea"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firbase.storage();

export { db, auth, storage };
