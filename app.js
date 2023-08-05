import { auth, db } from "./firebase.mjs";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";


const signButton = document.getElementById('create');
const loginButton = document.getElementById('login');
const email = document.getElementById('email');
const password = document.getElementById('password');

signButton.addEventListener('click', () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('user=>', user);
            alert('Account Created')
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('erorr==>', errorMessage);
            // ..
        });
})
loginButton.addEventListener('click', () => {
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then(async (userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('user=>', user);
            try {
                const docRef = await addDoc(collection(db, "usama"), {
                    email: email.value,
                    password: password.value,
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }
            location.replace('main.html')
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('erorr==>', errorMessage);
        });

})