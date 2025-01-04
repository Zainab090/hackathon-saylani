import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, collection, addDoc} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
   
        apiKey: "AIzaSyCe13QjMv6BUao5Gbi4oMxr0bHkpjIQAFw",
        authDomain: "hackathon-firebase-cd750.firebaseapp.com",
        projectId: "hackathon-firebase-cd750",
        storageBucket: "hackathon-firebase-cd750.firebasestorage.app",
        messagingSenderId: "163187076827",
        appId: "1:163187076827:web:31a9bf7d01f292608426fe"
      
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


async function addData() {
    const name = document.getElementById("name").value;
    const surname = document.getElementById("surname").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const consent = document.getElementById("consent").checked;
    try {
        const DocRef= await addDoc(collection(db,"user"),{
          name:name,
          surname:surname,
          email:email,
          message:message,
          consent:consent

        })
     alert("Your message has been sent successfully!")
    } catch (error) {
        console.log(error);
        
    }
}

const addBtn=document.querySelector('#submitButton');
addBtn.addEventListener('click',addData)