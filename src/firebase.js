// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAU9LKNdmXhxMOgLN7kDkykZfgB0ZDrpPc",
    authDomain: "eshop-c2df1.firebaseapp.com",
    projectId: "eshop-c2df1",
    storageBucket: "eshop-c2df1.appspot.com",
    messagingSenderId: "34490220559",
    appId: "1:34490220559:web:5384ff779750fcc08e237a",
    measurementId: "G-D7XTMXNJB3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
