import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore } from 'https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js';



const firebaseConfig = {
  apiKey: "AIzaSyCe13QjMv6BUao5Gbi4oMxr0bHkpjIQAFw",
  authDomain: "hackathon-firebase-cd750.firebaseapp.com",
  projectId: "hackathon-firebase-cd750",
  storageBucket: "hackathon-firebase-cd750.firebasestorage.app",
  messagingSenderId: "163187076827",
  appId: "1:163187076827:web:31a9bf7d01f292608426fe"
};




// Get the form elements
const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const consentCheckbox = document.getElementById("consent");

// Form submission handler
document.querySelector(".send-button").addEventListener("click", (e) => {
    e.preventDefault();

    // Validate form fields
    if (nameInput.value === "" || surnameInput.value === "" || emailInput.value === "" || messageInput.value === "" || !consentCheckbox.checked) {
        alert("Please fill all the fields and give consent.");
        return;
    }

    // Create an object to store the form data
    const formData = {
        name: nameInput.value,
        surname: surnameInput.value,
        email: emailInput.value,
        message: messageInput.value,
        consent: consentCheckbox.checked,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    };

    // Save form data to Firestore
    db.collection("messages")
        .add(formData)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert("Your message has been sent successfully!");
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
            alert("There was an error sending your message. Please try again.");
        });
});

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 const 

 // Handle form submission
 document.getElementById('submit-button').addEventListener('click', async (e) => {
     e.preventDefault();

     const name = document.getElementById('name').value;
     const surname = document.getElementById('surname').value;
     const email = document.getElementById('email').value;
     const message = document.getElementById('message').value;
     const consent = document.getElementById('consent').checked;

     if (!consent) {
         alert('You must consent to the Privacy Policy.');
         return;
     }

     try {
         await db.collection('form-submissions').add({
             name,
             surname,
             email,
             message,
             consent,
             timestamp: firebase.firestore.FieldValue.serverTimestamp()
         });
         alert('Message sent successfully!');
     } catch (error) {
         console.error('Error writing document: ', error);
         alert('Error sending message. Please try again later.');
     }
 });

 