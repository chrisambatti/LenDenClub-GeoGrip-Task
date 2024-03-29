// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-88KSopr-QmgHEtFfdDsjax0Al8CS4XE",
  authDomain: "addressupdater-5e68d.firebaseapp.com",
  projectId: "addressupdater-5e68d",
  storageBucket: "addressupdater-5e68d.appspot.com",
  messagingSenderId: "691546574941",
  appId: "1:691546574941:web:68e70059ff5006bbf57db4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,db};