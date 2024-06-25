import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyBTLm_SkIEmeAVBixSWdwfLh5YZeMAmD00",
  authDomain: "proyecto-final-reactjs-2c439.firebaseapp.com",
  projectId: "proyecto-final-reactjs-2c439",
  storageBucket: "proyecto-final-reactjs-2c439.appspot.com",
  messagingSenderId: "542685293825",
  appId: "1:542685293825:web:df645814d622b23ad67f00"
}

initializeApp(firebaseConfig)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
