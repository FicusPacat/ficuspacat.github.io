//import { initializeApp } from "firebase/app";
//import {storage} from "./firebase"
//import { getFirestore } from "firebase/firestore";
//import { ref, uploadBytes } from "firebase/storage";
//import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'   
//import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js'

const firebaseConfig = {
    apiKey: "AIzaSyDTtoyiEei2zmT4WFWjAMDTbOAxKL8rtUM",
    authDomain: "ficussystem.firebaseapp.com",
    projectId: "ficussystem",
    storageBucket: "ficussystem.appspot.com",
    messagingSenderId: "149937490585",
    appId: "1:149937490585:web:36d86aef0bdcbc5bbfc608",
    measurementId: "G-X8YFFEE7Z9"
  };
//initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
firebase.analytics();

