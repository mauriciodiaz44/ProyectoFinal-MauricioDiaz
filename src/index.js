import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./style.css";

const firebaseConfig = {
  apiKey: "AIzaSyDFFrMTIyo1DmdCkffnLPE_9LlXdwWSieI",
  authDomain: "mauriciodiaz-43190.firebaseapp.com",
  projectId: "mauriciodiaz-43190",
  storageBucket: "mauriciodiaz-43190.appspot.com",
  messagingSenderId: "731153267144",
  appId: "1:731153267144:web:997a712fb8dd6ff47ca8fd",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
