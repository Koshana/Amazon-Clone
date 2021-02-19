import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyB0cRQ4IoWTmVW7Vd7w--GYtIp_antKPWQ",
  authDomain: "fir-4a6a2.firebaseapp.com",
  projectId: "fir-4a6a2",
  storageBucket: "fir-4a6a2.appspot.com",
  messagingSenderId: "501927335566",
  appId: "1:501927335566:web:0d895c1f0c6eefa98c1bdf",
  measurementId: "G-GDVENZ72S4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const DB = firebaseApp.firestore();
const AUTH = firebaseApp.auth();

export { DB, AUTH };