import { auth, db } from "./firebase.mjs";
import { getAuth,onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

const logOut = document.getElementById('logout');

onAuthStateChanged(auth, (user) => {
    if (user) {
        if (!user.emailVerified) {
            sendEmailVerification(auth.currentUser)
                .then(() => {
                    // Email verification sent!
                    console.log("Email Sent");
                    // ...
                });
        }
        else {
            
        }
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
    } else {
        // User is signed out
        // ...
    }
});
const btn = document.getElementById('logout')
btn.addEventListener('click', () => {

    const auth = getAuth();
    signOut(auth).then(() => {
        window.location.href = './index.html';
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
})