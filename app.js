import { auth, db } from "./firebase.mjs";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { collection, addDoc, doc, setDoc, getDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";


const signButton = document.getElementById('create');
const loginButton = document.getElementById('login');
const email = document.getElementById('email');
const password = document.getElementById('password');

signButton.addEventListener('click', () => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then(async (userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log('user=>', user);
            await setDoc(doc(db, "users", user.uid), {
                email: email.value,
                password: password.value,
            });
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
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
            } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
            }
            // location.replace('main.html')
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log('erorr==>', errorMessage);
        });

})