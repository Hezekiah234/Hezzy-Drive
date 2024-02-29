

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";


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
const provider = new GoogleAuthProvider();



 const signG = () =>{
   
   signInWithPopup(auth, provider)
     .then((result) => {
       const user = result.user;
    console.log(user);
    if (user) {
      window.location.href = "dashboard.html"
    }
     }).catch((error) => {
   
       const errorCode = error.code;
       const errorMessage = error.message;
   console.log(errorCode);
   console.log(errorMessage);
     });
 } 

window.signG = signG