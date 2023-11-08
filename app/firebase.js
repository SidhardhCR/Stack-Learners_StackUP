// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5c0uyEBOtVV0CXe8RMNUnDSgRp80YdqQ",
  authDomain: "event-listing-platform.firebaseapp.com",
  projectId: "event-listing-platform",
  storageBucket: "event-listing-platform.appspot.com",
  messagingSenderId: "1034427945191",
  appId: "1:1034427945191:web:cf694ab0eeb9b8ca9b1242",
  measurementId: "G-1G8KT643DY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);
//const analytics = getAnalytics(app);

export {db};