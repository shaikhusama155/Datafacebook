// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
import { getDatabase, ref, set, onValue,starCountRef } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyCMTPAhUuVd66aqZyqHLAXpeZu2-RoF3y0",
  authDomain: "first-project-2233.firebaseapp.com",
  projectId: "first-project-2233",
  storageBucket: "first-project-2233.appspot.com",
  messagingSenderId: "835896955200",
  appId: "1:835896955200:web:03f9377b73f0edd6d9aaa5",
  measurementId: "G-198NB1HHQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getDatabase();


let createbutton = document.getElementById("create");
let signbutton = document.getElementById("signup");
createbutton.addEventListener("click", function () {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      set(ref(db, `users/${user.uid}`), {
        email: email.value,
        password: password.value,

      });
    })
    // ...
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("erorr=>", errorMessage);
      // ..
    });
})

signbutton.addEventListener("click", function () {
  let email = document.getElementById("email");
  let password = document.getElementById("password");
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        updateStarCount(postElement, data);
        console.log("data==>",data.val());
      });
      location.replace("main.html")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("erorr=>", errorMessage);
    });
})
// const loginbutton = document.getElementById("login")
// const signupbutton = document.getElementById("signup")
// const mainE= document.getElementById("email")
// const mainP= document.getElementById("password")

// signupbutton.addEventListener("click", ()=>{
// var email = mainE.value
// var password = mainP.value
//     createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
// console.log(user);
// alert("account create now you can login in this account")})
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
// })
// loginbutton.addEventListener("click", ()=>{
// var email = mainE.value
// var password = mainP.value
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//  location.replace("main.html")
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
// })

// forgetpass.addEventListener(("click", () => {
//   firebase.auth().sendPasswordResetEmail(email)
//       .then(() => {
//           alert("Reset link sent to your email id")
//       })
//       .catch((error) => {
//           document.getElementById("error").innerHTML = error.message
//       });
// }))
