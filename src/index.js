import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPvvTQACsG8BBZjtQFrz-aMwoNOsJS4Og",
  authDomain: "valhalla-ecommerce.firebaseapp.com",
  projectId: "valhalla-ecommerce",
  storageBucket: "valhalla-ecommerce.appspot.com",
  messagingSenderId: "852586300995",
  appId: "1:852586300995:web:15efedccbd7438cc1936f6",
  measurementId: "G-RYJ9T5MQ39"
};

// Initialize Firebase
 initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
