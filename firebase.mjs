import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCftRMGFwDzVL2U4AKE1Zqplt0mXCHwdjI",
  authDomain: "facebook-88900.firebaseapp.com",
  databaseURL: "https://facebook-88900-default-rtdb.firebaseio.com",
  projectId: "facebook-88900",
  storageBucket: "facebook-88900.appspot.com",
  messagingSenderId: "673825336394",
  appId: "1:673825336394:web:409bbace093c4b9edbcab3",
  measurementId: "G-7VVKFZTJ0L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);