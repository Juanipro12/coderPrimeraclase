// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAYU9-wRVJthJ3mttKw5spvMGXhbJZkOdQ",
  authDomain: "curso-react-ch.firebaseapp.com",
  projectId: "curso-react-ch",
  storageBucket: "curso-react-ch.appspot.com",
  messagingSenderId: "54870392845",
  appId: "1:54870392845:web:7c856ba1539c0019691544"
};


const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () =>{
    return app
}