import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC-yHQnl8ipMgwnhtSkoF-3_EeBmkesfeA",
    authDomain: "netflix-2b5df.firebaseapp.com",
    projectId: "netflix-2b5df",
    storageBucket: "netflix-2b5df.appspot.com",
    messagingSenderId: "182872115750",
    appId: "1:182872115750:web:d6cd32e8600c23dea834e7",
    measurementId: "G-DQ2R34WHWR"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
