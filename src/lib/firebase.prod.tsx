import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAQvFWNepyRLpkW0uRnljjz6GIzyGJv_rE",
  authDomain: "netflix-clone-a2f00.firebaseapp.com",
  databaseURL: "https://netflix-clone-a2f00.firebaseio.com",
  projectId: "netflix-clone-a2f00",
  storageBucket: "netflix-clone-a2f00.appspot.com",
  messagingSenderId: "46177106703",
  appId: "1:46177106703:web:3ac4d9444989ee7e0bdc7a",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
