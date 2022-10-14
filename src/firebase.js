import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCJplCwIxCUV7KQ1QIPvAFQRMgX7rOildI",
  authDomain: "discord-clone-baa20.firebaseapp.com",
  projectId: "discord-clone-baa20",
  storageBucket: "discord-clone-baa20.appspot.com",
  messagingSenderId: "214521746727",
  appId: "1:214521746727:web:93317012697d49dbc00502",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
