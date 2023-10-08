// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo8hi9hCT9Zapsoio6U3DnRr1xHIlB5NI",
  authDomain: "concert-event-c3ef3.firebaseapp.com",
  projectId: "concert-event-c3ef3",
  storageBucket: "concert-event-c3ef3.appspot.com",
  messagingSenderId: "269384440978",
  appId: "1:269384440978:web:6719fcac4fa910cc385a4b",
  measurementId: "G-3XDNJSHBBL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;