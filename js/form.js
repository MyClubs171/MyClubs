
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAEBAT2ZZXPXFxNtggCYBiOMpuJvj-jpsw",
  authDomain: "myclubs-ba7ab.firebaseapp.com",
  projectId: "myclubs-ba7ab",
  storageBucket: "myclubs-ba7ab.appspot.com",
  messagingSenderId: "987570133368",
  appId: "1:987570133368:web:53bc6293a1c707d956108d",
  measurementId: "G-98TK0JZGTS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signUp(){

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed Up");

    window.location='home.html';
  }

  function signIn() {
    
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed In");

    window.location='home.html';

    // Take user to a different or home page

  }

  function signOut() {

    auth.signOut();
    alert("Signed Out");
  }

  auth.onAuthStateChanged(function(user) {

    if(user){

      var email = user.email;

      // is signed in
    }
    else{

      // no user is signed
    }

  });
  