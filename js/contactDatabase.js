// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
    apiKey: "AIzaSyBOp_xPnif4M3VJ6I_lLm_72ir1dyqqEP0",
    authDomain: "contact-index.firebaseapp.com",
    databaseURL: "https://contact-index-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "contact-index",
    storageBucket: "contact-index.appspot.com",
    messagingSenderId: "55828378771",
    appId: "1:55828378771:web:1a7875c40ee46acb0a8966",
    measurementId: "G-HS0NPPQM70"
  };
  
  // Initializeing Fire base 
  firebase.initializeApp(firebaseConfig);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('PortFolio Contact-List');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var lastName = getInputVal('lastName');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
    
    // Generate custom key using timestamp
    var customKey = name;
  
    // Save message with custom key
    saveMessage(name, lastName, email, phone, message, customKey);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  } 
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  // Save message with custom key
  function saveMessage(name, lastName, email, phone, message, customKey){
    var newMessageRef = messagesRef.child(customKey);
    newMessageRef.set({
      name: name,
      lastName: lastName,
      email: email,
      phone: phone,
      message: message
    });
  } 
  