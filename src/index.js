import "firebase/auth"
import "firebase/database"
import "firebase/compat/auth"
import "firebase/compat/database"
import "./index.css"

import App from "./App"
import React from "react"
import ReactDOM from "react-dom/client"
import firebase from "firebase/compat/app"
import firebaseConfigs from "./config/firebase"
import reportWebVitals from "./reportWebVitals"

const root = ReactDOM.createRoot(document.getElementById("root"))

firebase.initializeApp(firebaseConfigs)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
