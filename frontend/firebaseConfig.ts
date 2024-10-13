import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "scoresnag.firebaseapp.com",
  projectId: "scoresnag",
  storageBucket: "scoresnag.appspot.com",
  messagingSenderId: "1008458097391",
  appId: "1:1008458097391:web:4bf91ece67669fa0ceb11a",
  measurementId: "G-MT40BXL8QJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
