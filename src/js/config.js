//import { initializeApp } from "firebase/app";
//import {storage} from "./firebase"
//import { getStorage, ref, uploadBytes } from "firebase/storage";
//import { ref, uploadBytes } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyDTtoyiEei2zmT4WFWjAMDTbOAxKL8rtUM",
    authDomain: "ficussystem.firebaseapp.com",
    projectId: "ficussystem",
    storageBucket: "ficussystem.appspot.com",
    messagingSenderId: "149937490585",
    appId: "1:149937490585:web:36d86aef0bdcbc5bbfc608",
    measurementId: "G-X8YFFEE7Z9"
  };
firebase.initializeApp(firebaseConfig);
firebase.analytics();

//const storage = getStorage();
//const storageRef = ref(storage, 'pitally');