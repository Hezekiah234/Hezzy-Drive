if (uploading) {
    show.style.display= "none "
    
} else {
    show.style.display= "block"
    
}


const getOut =()=>{

 window.location.href= "index.html"
 
}
window.getOut = getOut

const upLoad = () =>{
    let uploading = document.getElementById('uploading'); 
    if (uploading) {
        uploading.style.display = 'block';
        show.style.display= "none "
    } else {
    }
}
window.upLoad = upLoad;

const openFile = () =>{
    let uploading = document.getElementById('uploading');
    if (uploading) {
        uploading.style.display = 'none';
        show.style.display= "block "

    } else {
        alert("choose file");
    }
}
window.openFile = openFile;


let fileInput = document.getElementById("file");

fileInput.addEventListener("change", () => {
    let filed = fileInput.files;
    document.getElementById("herenow").innerHTML = `${filed[0].name}`;
});




import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getStorage, ref as stref, uploadBytesResumable , getDownloadURL} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-storage.js"; 

const firebaseConfig = {
 apiKey: "AIzaSyABS4-wBHV7dZchI1gUwC3J2fbZ_VTQ6Xo",
 authDomain: "new-pro-fe4f4.firebaseapp.com",
 projectId: "new-pro-fe4f4",
 storageBucket: "new-pro-fe4f4.appspot.com",
 messagingSenderId: "471075009817",
 appId: "1:471075009817:web:3ab20fe1c66727403e4188"
};



// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage();

// Define submit function

const submit = () => {
  let fileInput = document.getElementById('file');
  let incomingFile = fileInput.files[0];

  onAuthStateChanged(auth, (user) => {
      if (user) {
          let filedUser = user.displayName;
          console.log(filedUser);
          console.log("saved");
          

          let storageRef = stref(storage, `${filedUser}/${incomingFile.name}`);
          let task = uploadBytesResumable(storageRef, incomingFile);

          task.then((snapshot) => {
              console.log('File uploaded successfully.');

              // Get the download URL of the uploaded file
              getDownloadURL(snapshot.ref).then((downloadURL) => {
                  // Display the uploaded file
                  showUploadedFile(downloadURL, incomingFile.name);
              }).catch((error) => {
                  console.error('Error getting download URL:', error);
              });
          }).catch((error) => {
              console.error('Error uploading file:', error);
          });
      } else {
          console.log('User is not authenticated.');
      }
  });
};
window.submit = submit

// Function to display uploaded file
const showUploadedFile = (downloadURL, fileName) => {
  let show = document.getElementById('show');
  if (show) {
      show.innerHTML = `
      <p>${fileName}</p>
      <div style="display: flex; justify-content: center;">
          <img src="${downloadURL}" alt="${fileName}" style="max-width: 100%; max-height: 100%;"/>
      </div>
      `;
  }
};
    


