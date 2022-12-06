import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyAayois3czbzD0wAsN4wjdScPheYXbnd28",
    authDomain: "pwdjcwd2302.firebaseapp.com",
    projectId: "pwdjcwd2302",
    storageBucket: "pwdjcwd2302.appspot.com",
    messagingSenderId: "607405790820",
    appId: "1:607405790820:web:15f21696feae39d7013171"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
