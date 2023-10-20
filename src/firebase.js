// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl0OFJkVUG67asXIenKo9YOjQ_ZJLvJ9c",
  authDomain: "bg4103-trial.firebaseapp.com",
  projectId: "bg4103-trial",
  storageBucket: "bg4103-trial.appspot.com",
  messagingSenderId: "909208369703",
  appId: "1:909208369703:web:db7ec33ac8d2d25e386c02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default app
