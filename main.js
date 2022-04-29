// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
apiKey: "AIzaSyBacMasX_V93X_FpuQvgg802boIbptBFSU",
authDomain: "test-contact-8cf37.firebaseapp.com",
projectId: "test-contact-8cf37",
  databaseURL: "https://test-contact-8cf37-default-rtdb.firebaseio.com",
storageBucket: "test-contact-8cf37.appspot.com",
messagingSenderId: "201124316512",
appId: "1:201124316512:web:7541c0b3d38fb8a41e0a05",
measurementId: "G-LVKDHFP3NW"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');

  var email = getInputVal('email');


  var message = getInputVal('message');

  // Save message
  saveMessage(name, email,  message);

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
function saveMessage(name, email,  message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,

    email:email,

    message:message
  });
}
