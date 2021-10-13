import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBwm3dEj3g2r1zCg1cMAi9FS8BeibVAzpM",
    authDomain: "peeyush-project.firebaseapp.com",
    projectId: "peeyush-project",
    storageBucket: "peeyush-project.appspot.com",
    messagingSenderId: "15254799484",
    appId: "1:15254799484:web:22744b8ebd0e9df24ff5f9"
  };


initializeApp(firebaseConfig);

export default getFirestore();