import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA_JU1lok6qYtuuNkaOFVsMsjXtNrOGd08",
  authDomain: "project-8654b.firebaseapp.com",
  projectId: "project-8654b",
  storageBucket: "project-8654b.appspot.com",
  messagingSenderId: "8198479419",
  appId: "1:8198479419:web:ae959b9e2c27ef9055461e",
  measurementId: "G-11NLSCFFGH",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
