import firebase from "firebase"; 

const firebaseConfig = {
    apiKey: "AIzaSyCTadhHR01zMJ5CiQ8yv5XbhNdBmx8P0Ik",
    authDomain: "e-clone-b6b75.firebaseapp.com",
    databaseURL: "https://e-clone-b6b75.firebaseio.com",
    projectId: "e-clone-b6b75",
    storageBucket: "e-clone-b6b75.appspot.com",
    messagingSenderId: "768379046838",
    appId: "1:768379046838:web:8b94a0f7532acd585b8f17",
    measurementId: "G-W87C049E7X"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};