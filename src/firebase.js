// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAw8O0mpTXEiDB_YciMEHSW8w6jQGYaLQ",
  authDomain: "music-app-ded39.firebaseapp.com",
  databaseURL: "https://music-app-ded39-default-rtdb.firebaseio.com",
  projectId: "music-app-ded39",
  storageBucket: "music-app-ded39.appspot.com",
  messagingSenderId: "160880909660",
  appId: "1:160880909660:web:d5c535f56f362488d6b599",
  measurementId: "G-4QVFSMV7Y4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;