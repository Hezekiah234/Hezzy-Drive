
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyABS4-wBHV7dZchI1gUwC3J2fbZ_VTQ6Xo",
    authDomain: "new-pro-fe4f4.firebaseapp.com",
    projectId: "new-pro-fe4f4",
    storageBucket: "new-pro-fe4f4.appspot.com",
    messagingSenderId: "471075009817",
    appId: "1:471075009817:web:3ab20fe1c66727403e4188"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

function submitForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        console.error("Passwords do not match.");
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            if (user) {
                console.log("Successfully registered.");
                window.location.href = "log_in.html"; // Redirect to login page
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error("Registration error:", errorCode, errorMessage);
        });
}