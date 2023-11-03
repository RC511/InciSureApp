// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  initializeFirestore, getFirestore , collection, getDocs
} from 'firebase/firestore'
import { getDatabase } from "firebase/database";

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

// init services
//const db = getFirestore();



//const db = initializeFirestore(app, {useFetchStreams: false})

// collection ref
//const colRef  = collection(db,"dummy_data")

// get collection data
// getDocs(colRef)
//   .then((snapshot) => {
//     console.log(snapshot.docs)
//   })

export default app;
export const db = getDatabase(app);
