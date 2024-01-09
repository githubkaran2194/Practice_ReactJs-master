import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDxhDhyNbvepE41xPAAgxRlZGyeTbaP23E",
    authDomain: "fir-auth-2194.firebaseapp.com",
    databaseURL: "https://fir-auth-2194-default-rtdb.firebaseio.com",
    projectId: "fir-auth-2194",
    storageBucket: "fir-auth-2194.appspot.com",
    messagingSenderId: "65770351402",
    appId: "1:65770351402:web:e5454a67dcba09d5098c53",
    measurementId: "G-WFWDR3FK2F"
  };

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;