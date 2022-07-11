import * as Firebase from 'Firebase'
  {/* // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration */}
  const Config = {
    apiKey: "AIzaSyADBRVaHtcUpvy3m2D56eJT4pCiOIdr5IE",
    authDomain: "sigin-62d24.firebaseapp.com",
    databaseURL: "https://sigin-62d24-default-rtdb.firebaseio.com",
    projectId: "sigin-62d24",
    storageBucket: "sigin-62d24.appspot.com",
    messagingSenderId: "1046586700160",
    appId: "1:1046586700160:web:9f14d01ae3dbc8d3ff9165"
  };

  // Initialize Firebase
   Firebase.initializeApp(Config);
   export default Firebase;