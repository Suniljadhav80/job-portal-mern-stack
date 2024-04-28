// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB5mW0KeGtk5DkK2KecmXUPDIh-UDzwxXE",
  authDomain: "tinu-job-portal.firebaseapp.com",
  projectId: "tinu-job-portal",
  storageBucket: "tinu-job-portal.appspot.com",
  messagingSenderId: "1048311181958",
  appId: "1:1048311181958:web:68bd1b0c23c1ad05931707"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;