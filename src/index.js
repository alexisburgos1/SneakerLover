import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'boxicons'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhcBGIYOanux3udfHxHT7xHhhKKUvkmc0",
  authDomain: "sneakers-lovers-3c160.firebaseapp.com",
  projectId: "sneakers-lovers-3c160",
  storageBucket: "sneakers-lovers-3c160.appspot.com",
  messagingSenderId: "478874287030",
  appId: "1:478874287030:web:9aa00b40488df2260ddf17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
